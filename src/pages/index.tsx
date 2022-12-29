import ContactGrid from '@/components/ContactGrid';
import Container from '@/components/Container';
import Gallery from '@/components/Gallery';
import Logo from '@/components/Logo';
import MusicsGrid from '@/components/MusicsGrid';
import SectionTitle from '@/components/SectionTitle';
// import { useImagesQuery } from '@/generated/graphql';
// import { mapImages } from '@/mappers';

import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Container>
        <Logo />
      </Container>
      <SectionTitle title={t(`section.lastReleases`)} />
      <MusicsGrid />
      <SectionTitle title={t(`section.photoGallery`)} />
      <Gallery />
      <SectionTitle title={t(`section.contact`)} />
      <ContactGrid />
    </>
  );
}
