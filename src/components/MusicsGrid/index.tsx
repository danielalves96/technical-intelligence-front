import Image from 'next/image';
import Link from 'next/link';
import * as S from './styles';
import Carousel, { arrowsPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg';
import ContainerDesktop from '../ContainerDesktop';

export default function MusicsGrid() {
  const musics = [
    {
      id: 1,
      image: `/images/cover.jpg`,
    },
    {
      id: 2,
      image: `/images/cover.jpg`,
    },
    {
      id: 3,
      image: `/images/cover.jpg`,
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
          </S.TrackedGrid>
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
            {musics.map((music) => (
              <Link key={music.id} href={`/music/${music.id}`} passHref>
                <Image
                  src={music.image}
                  alt="cover"
                  width="1000"
                  height="1000"
                />
              </Link>
            ))}
          </Carousel>
        )}
      </S.Carousel>
    </ContainerDesktop>
  );
}
