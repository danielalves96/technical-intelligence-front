import { mapTracks } from '@/mappers';
import API from '@/services/api';
import '@brainhubeu/react-carousel/lib/style.css';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ContainerDesktop from '../ContainerDesktop';
import * as S from './styles';

type Music = {
  id: number;
  cover_art: string;
  is_available: boolean;
  title: string;
  label: string;
};

export default function MusicsGridDetailed() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    API.get(`tracks?populate=*`).then((response) => {
      const { data } = response.data;
      const tracks = mapTracks(data);
      setTracks(tracks);
    });
  }, []);

  return (
    <ContainerDesktop>
      <S.Grid>
        {tracks.map((music: Music) => (
          <>
            {music.is_available && (
              <S.TrackedGrid key={music.id}>
                <Link href={`/music/${music.id}`} passHref>
                  <Image
                    src={music.cover_art}
                    alt="cover"
                    width="1000"
                    height="1000"
                  />
                </Link>
                <S.Details>
                  <S.Title>{music.title}</S.Title>
                  <S.Subtitle>{music.label}</S.Subtitle>
                </S.Details>
              </S.TrackedGrid>
            )}
          </>
        ))}
      </S.Grid>
    </ContainerDesktop>
  );
}
