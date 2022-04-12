import Logo from '@/components/Logo';
import MusicsGrid from '@/components/MusicsGrid';
import SectionTitle from '@/components/SectionTitle';
import Gallery from '@/components/Gallery';
import { useTranslation } from 'react-i18next';
import ContactGrid from '@/components/ContactGrid';
import API from '@/services/api';
import { mapImages, mapTrackstoHome } from '@/mappers';

export default function Home({ tracks, images }: any) {
  const { t } = useTranslation();

  return (
    <>
      <Logo />
      <SectionTitle title={t(`section.lastReleases`)} />
      <MusicsGrid tracks={tracks} />
      <SectionTitle title={t(`section.photoGallery`)} />
      <Gallery images={images} />
      <SectionTitle title={t(`section.contact`)} />
      <ContactGrid />
    </>
  );
}

export async function getStaticProps() {
  const tracks = await API.get(`tracks?populate=*`).then((response) => {
    const { data } = response.data;

    const filteredMusics = data.filter(
      (track: any) => track.attributes.is_available_to_listners === true,
    );

    const tracks = mapTrackstoHome(filteredMusics.slice(0, 3));
    return tracks;
  });

  const images = await API.get(`images?populate=*`).then((response) => {
    const { data } = response.data;
    return mapImages(data);
  });

  return {
    props: { tracks, images },
  };
}
