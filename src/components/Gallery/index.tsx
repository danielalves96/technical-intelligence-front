import ImageGallery from 'react-image-gallery';
import * as S from './styles';
import ContainerDesktop from '../ContainerDesktop';
import { useTranslation } from 'react-i18next';

export default function Gallery() {
  const { t } = useTranslation();
  const images = [
    {
      original: `https://picsum.photos/id/1018/1000/600/`,
      thumbnail: `https://picsum.photos/id/1018/250/150/`,
    },
    {
      original: `https://picsum.photos/id/1015/1000/600/`,
      thumbnail: `https://picsum.photos/id/1015/250/150/`,
    },
    {
      original: `https://picsum.photos/id/1019/1000/600/`,
      thumbnail: `https://picsum.photos/id/1019/250/150/`,
    },
  ];
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
            <button type="button" className="button">
              {t(`gallery.downloadPressKit`)}
            </button>
          </S.GalleryButton>
        </div>
      </S.GalleryGrid>
    </ContainerDesktop>
  );
}
