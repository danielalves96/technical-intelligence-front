import { useTracksHomeQuery } from '@/generated/graphql';
import { mapTrackstoHome } from '@/mappers';
import Carousel, { arrowsPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg';
import ContainerDesktop from '../ContainerDesktop';
import * as S from './styles';

type Music = {
  id: number;
  cover_art: string;
  is_available: boolean;
  slug: string;
};

export default function MusicsGrid() {
  const [{ data }] = useTracksHomeQuery();
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const tracks = mapTrackstoHome(data);
    setTracks(tracks);
  }, [data]);

  return (
    <ContainerDesktop>
      <S.Grid>
        {tracks?.map((music: Music) => (
          <>
            {music.is_available && (
              <S.TrackedGrid key={music.id}>
                <Link href={`/music/${music.slug}`} passHref>
                  <Image
                    src={music.cover_art}
                    alt="cover"
                    width="1000"
                    height="1000"
                  />
                </Link>
              </S.TrackedGrid>
            )}
          </>
        ))}
      </S.Grid>
      <S.Carousel>
        {typeof window !== `undefined` && (
          <Carousel
            plugins={[
              `infinite`,
              {
                resolve: arrowsPlugin,
                options: {
                  arrowLeft: <CgChevronLeft size={32} color="#0acea2" />,
                  arrowRight: <CgChevronRight size={32} color="#0acea2" />,
                  addArrowClickHandler: true,
                },
              },
            ]}
          >
            {tracks?.map((music: Music) => (
              <>
                {music.is_available && (
                  <Link key={music.id} href={`/music/${music.slug}`} passHref>
                    <Image
                      src={music.cover_art}
                      alt="cover"
                      width="1000"
                      height="1000"
                    />
                  </Link>
                )}
              </>
            ))}
          </Carousel>
        )}
      </S.Carousel>
    </ContainerDesktop>
  );
}
