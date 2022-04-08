import * as S from './styles';

export default function Container({ children }: any) {
  return (
    <div className="container">
      <S.Padding>
        <main>{children}</main>
      </S.Padding>
    </div>
  );
}
