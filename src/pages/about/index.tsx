import AboutDescription from '@/components/AboutDescription';
import AboutImage from '@/components/AboutImage';
import ContainerDesktop from '@/components/ContainerDesktop';
import SectionTitle from '@/components/SectionTitle';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  return (
    <ContainerDesktop>
      <SectionTitle title={t(`pagesList.about`)} />
      <AboutImage />
      <AboutDescription />
    </ContainerDesktop>
  );
}
