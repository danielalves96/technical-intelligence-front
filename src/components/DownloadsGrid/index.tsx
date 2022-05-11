import '@brainhubeu/react-carousel/lib/style.css';
import Image from 'next/image';
import Link from 'next/link';
import ContainerDesktop from '../ContainerDesktop';
import * as S from './styles';

type Download = {
  id: number;
  cover: string;
  title: string;
  subtitle: string;
  slug: string;
};

export default function DownloadsGrid({ downloads }: any) {
  return (
    <ContainerDesktop>
      <S.Grid>
        {downloads.map((download: Download) => (
          <>
            <S.TrackedGrid key={download.id}>
              <Link href={`/download/${download.slug}`} passHref>
                <Image
                  src={download.cover}
                  alt="cover"
                  width="1000"
                  height="1000"
                />
              </Link>
              <S.Details>
                <S.Title>{download.title}</S.Title>
                <S.Subtitle>{download.subtitle}</S.Subtitle>
              </S.Details>
            </S.TrackedGrid>
          </>
        ))}
      </S.Grid>
    </ContainerDesktop>
  );
}
