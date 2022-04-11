import { useTranslation } from 'react-i18next';
import ContactForm from '../ContactForm';
import ContainerDesktop from '../ContainerDesktop';
import * as S from './styles';

export default function ContactGrid() {
  const { t } = useTranslation();
  return (
    <ContainerDesktop>
      <S.Grid>
        <S.Section>
          <S.ContactData>
            <S.Title>{t(`contactForm.generalInquiries`)}</S.Title>
            <S.Description>technicalintelligencemusic@gmail.com</S.Description>
            <S.Description>+55 (41) 98461-6181</S.Description>
          </S.ContactData>
        </S.Section>
        <S.Section>
          <ContactForm />
        </S.Section>
      </S.Grid>
      <S.GridMobile>
        <S.ContactData>
          <S.Title>{t(`contactForm.generalInquiries`)}</S.Title>
          <S.Description>technicalintelligencemusic@gmail.com</S.Description>
          <S.Description>+55 (41) 98461-6181</S.Description>
        </S.ContactData>
        <ContactForm />
      </S.GridMobile>
    </ContainerDesktop>
  );
}
