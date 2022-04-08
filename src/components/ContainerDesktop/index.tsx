import * as S from './styles';

export default function ContainerDesktop({ children }: any) {
  return (
    <div className="container is-max-desktop">
      <S.Padding>
        <main>{children}</main>
      </S.Padding>
    </div>
  );
}
