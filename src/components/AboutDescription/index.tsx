import { useTranslation } from 'react-i18next';
import * as S from './styles';

export default function AboutDescription() {
  const { t } = useTranslation();
  return <S.Paragraph>{t(`about.description`)}</S.Paragraph>;
}
