import '@brainhubeu/react-carousel/lib/style.css';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import ContainerDesktop from '../ContainerDesktop';
import * as S from './styles';

type Download = {
  image: string;
  subtitle: string;
  description: string;
  download_link: string;
  title: string;
};

type Downloads = {
  download: Download;
};

export default function DownloadDetails({ download }: Downloads) {
  const { t } = useTranslation();
  return (
    <ContainerDesktop>
      <S.Grid>
        <S.GridImage>
          <Image src={download.image} alt="cover" width="700" height="420" />
          <S.Subtitle>{download.subtitle}</S.Subtitle>
        </S.GridImage>
        <S.Description
          dangerouslySetInnerHTML={{ __html: download.description }}
        />

        <a
          href={download.download_link}
          className="button "
          target="_blank"
          title="Download"
          rel="noreferrer"
        >
          {t(`downloads.download`)} - {download.title}
        </a>
      </S.Grid>
    </ContainerDesktop>
  );
}
