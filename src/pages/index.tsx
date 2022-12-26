import ContactGrid from '@/components/ContactGrid';
import Container from '@/components/Container';
import Gallery from '@/components/Gallery';
import Logo from '@/components/Logo';
import MusicsGrid from '@/components/MusicsGrid';
import SectionTitle from '@/components/SectionTitle';
import { mapImages } from '@/mappers';

import { useTranslation } from 'react-i18next';

export default function Home({ images }: any) {
  const { t } = useTranslation();

  return (
    <>
      <Container>
        <Logo />
      </Container>
      <SectionTitle title={t(`section.lastReleases`)} />
      <MusicsGrid />
      <SectionTitle title={t(`section.photoGallery`)} />
      {/* <Gallery images={images} /> */}
      <SectionTitle title={t(`section.contact`)} />
      <ContactGrid />
    </>
  );
}

// export async function getStaticProps() {
//   const tracks = await API.get(`tracks?populate=*&sort[0]=id%3Adesc`).then(
//     (response) => {
//       const { data } = response.data;

//       const filteredMusics = data.filter(
//         (track: any) => track.attributes.is_available_to_listners === true,
//       );

//       const tracks = mapTrackstoHome(filteredMusics.slice(0, 3));
//       return tracks;
//     },
//   );

//   const images = await API.get(`images?populate=*`).then((response) => {
//     const { data } = response.data;
//     return mapImages(data);
//   });

//   return {
//     props: { tracks, images },
//   };
// }
