import AboutDescription from '@/components/AboutDescription';
import AboutImage from '@/components/AboutImage';
import Container from '@/components/Container';
import ContainerDesktop from '@/components/ContainerDesktop';
import SectionTitle from '@/components/SectionTitle';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  return (
    <ContainerDesktop>
      <SectionTitle title={t(`pagesList.about`)} />
      <Container>
        <AboutImage />
      </Container>
      <AboutDescription />
    </ContainerDesktop>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
