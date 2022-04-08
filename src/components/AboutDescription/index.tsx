import { useTranslation } from 'react-i18next';
import ContainerDesktop from '../ContainerDesktop';
import * as S from './styles';

export default function AboutDescription() {
  const { t } = useTranslation();
  return (
    <ContainerDesktop>
      <S.Paragraph>{t(`about.description`)}</S.Paragraph>
    </ContainerDesktop>
  );
}
