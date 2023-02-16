import * as S from './styled';

export default function TopNavigation() {
  const logoName = '{DEV.CYCLE}';

  return (
    <S.Layout>
      <S.LogoButton>{logoName}</S.LogoButton>
      <S.NavigationButton>후기</S.NavigationButton>
      <S.NavigationButton>칼럼</S.NavigationButton>
      <S.NavigationButton>Q&A</S.NavigationButton>
    </S.Layout>
  );
}
