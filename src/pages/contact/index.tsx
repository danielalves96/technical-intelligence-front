import ContactGrid from '@/components/ContactGrid';
import SectionTitle from '@/components/SectionTitle';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <SectionTitle title={t(`section.contact`)} />
      <ContactGrid />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
