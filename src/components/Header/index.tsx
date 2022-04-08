import Image from 'next/image';
import Link from 'next/link';
import Container from '../Container';
import DropdownMenu from '../DropdownMenu';
import { I18n } from '../i18n';
import { PagesList } from '../PagesList';
import * as S from './styles';

export default function Header() {
  return (
    <S.Header>
      <Container>
        <S.HeaderContent>
          <Link href="/" passHref>
            <Image src="/images/brain.png" alt="logo" width="50" height="50" />
          </Link>
          <S.HeaderGrid>
            <S.LanguageDetector>
              <PagesList />
              <I18n />
            </S.LanguageDetector>
            <S.HamburgerMenu>
              <DropdownMenu />
            </S.HamburgerMenu>
          </S.HeaderGrid>
        </S.HeaderContent>
      </Container>
    </S.Header>
  );
}
