import MusicsGridDetailed from '@/components/MusicsGridDetailed';
import SectionTitle from '@/components/SectionTitle';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <SectionTitle title={t(`pagesList.musics`)} />
      <MusicsGridDetailed />
    </>
  );
}
