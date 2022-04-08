import Container from '@/components/Container';

import * as S from './styles';

export default function AboutImage() {
  return (
    <Container>
      <S.Logo>
        <S.Image src="/images/about.png" alt="logo" />
      </S.Logo>
    </Container>
  );
}
