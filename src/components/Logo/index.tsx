import Container from '@/components/Container';
import Image from 'next/image';
import * as S from './styles';

export default function Logo() {
  return (
    <Container>
      <S.Logo>
        <Image src="/images/logo.png" alt="logo" width="724" height="120" />
      </S.Logo>
    </Container>
  );
}
