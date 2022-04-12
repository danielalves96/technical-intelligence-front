import { useTranslation } from 'react-i18next';
import ImageGallery from 'react-image-gallery';
import ContainerDesktop from '../ContainerDesktop';
import * as S from './styles';

export default function Gallery({ images }: any) {
  const { t } = useTranslation();

  return (
    <ContainerDesktop>
      <S.GalleryGrid>
        <div>
          <ImageGallery
            items={images}
            showPlayButton={false}
            showFullscreenButton={false}
            showNav={false}
          />
          <S.GalleryButton>
            <a
              href="https://drive.google.com/drive/folders/1wBOXKZE9p-MoB-hIcu6ckWGZAc_cDlWA?usp=sharing"
              target="_blank"
              className="button"
              rel="noreferrer"
            >
              {t(`gallery.downloadPressKit`)}
            </a>
          </S.GalleryButton>
        </div>
      </S.GalleryGrid>
    </ContainerDesktop>
  );
}
