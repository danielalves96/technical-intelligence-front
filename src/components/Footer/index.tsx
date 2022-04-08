import { useTranslation } from 'react-i18next';
import { GiTechnoHeart } from 'react-icons/gi';
import Container from '../Container';
import * as S from './styles';
export default function Footer() {
  const { t } = useTranslation();

  const Link = () => (
    <a
      href="https://daniel-luiz-alves.vercel.app/"
      target="_blank"
      rel="noreferrer"
    >
      Daniel Alves
    </a>
  );

  return (
    <footer>
      <S.Footer>
        <Container>
          <S.AlignItens>
            <GiTechnoHeart color="#0acea2" />
            <span>
              {t(`footer.createdBy`)} <Link />
            </span>
          </S.AlignItens>
        </Container>
      </S.Footer>
    </footer>
  );
}
