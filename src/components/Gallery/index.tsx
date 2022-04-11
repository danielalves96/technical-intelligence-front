import { mapImages } from '@/mappers';
import API from '@/services/api';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ImageGallery from 'react-image-gallery';
import ContainerDesktop from '../ContainerDesktop';
import * as S from './styles';

export default function Gallery() {
  const { t } = useTranslation();
  const [images, setImages] = useState<any>([]);

  useEffect(() => {
    API.get(`images?populate=*`).then((response) => {
      const { data } = response.data;
      setImages(mapImages(data));
    });
  }, []);

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
