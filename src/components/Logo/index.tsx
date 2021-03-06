import Image from 'next/image';
import * as S from './styles';

export default function Logo() {
  return (
    <S.Logo>
      <Image src="/images/logo.png" alt="logo" width="724" height="120" />
    </S.Logo>
  );
}
