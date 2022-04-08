import Image from 'next/image';
import Link from 'next/link';
import * as S from './styles';

import '@brainhubeu/react-carousel/lib/style.css';

import ContainerDesktop from '../ContainerDesktop';

export default function MusicsGridDetailed() {
  const musics = [
    {
      id: 1,
      image: `/images/cover.jpg`,
      title: `inside this`,
      label: `Rudá Records`,
    },
  ];
  return (
    <ContainerDesktop>
      <S.Grid>
        {musics.map((music) => (
          <S.TrackedGrid key={music.id}>
            <Link href={`/music/${music.id}`} passHref>
              <Image src={music.image} alt="cover" width="1000" height="1000" />
            </Link>
            <S.Details>
              <S.Title>{music.title}</S.Title>
              <S.Subtitle>{music.label}</S.Subtitle>
            </S.Details>
          </S.TrackedGrid>
        ))}
      </S.Grid>
    </ContainerDesktop>
  );
}
