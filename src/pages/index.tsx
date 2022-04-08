import Logo from '@/components/Logo';
import MusicsGrid from '@/components/MusicsGrid';
import SectionTitle from '@/components/SectionTitle';
import Gallery from '@/components/Gallery';
import { useTranslation } from 'react-i18next';
import ContactGrid from '@/components/ContactGrid';

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Logo />
      <SectionTitle title={t(`section.lastReleases`)} />
      <MusicsGrid />
      <SectionTitle title={t(`section.photoGallery`)} />
      <Gallery />
      <SectionTitle title={t(`section.contact`)} />
      <ContactGrid />
    </>
  );
}
