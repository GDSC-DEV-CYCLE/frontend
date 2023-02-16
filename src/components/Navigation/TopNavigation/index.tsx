import { useNavigate } from 'react-router-dom';

import userIcon from '../../../assets/icons/user.svg';
import { useLogin, useTopNavigation } from '../../../store/store';
import * as S from './styled';

export default function TopNavigation() {
  const { postKind, changePostKind } = useTopNavigation();
  const { isLogin } = useLogin();

  const navigate = useNavigate();

  const logoName = '{DEV.CYCLE}';

  const onClickLogoButton = () => {
    changePostKind('칼럼');
    navigate('/postlist');
  };

  const onClickNavigationButton = (navigation: string) => {
    changePostKind(navigation);
    navigate('/postlist');
  };

  return (
    <S.Layout>
      <div>
        <S.LogoButton onClick={onClickLogoButton}>{logoName}</S.LogoButton>

        <S.NavigationButton
          onClick={() => onClickNavigationButton('칼럼')}
          isSelected={postKind === '칼럼'}
        >
          칼럼
        </S.NavigationButton>
        <S.NavigationButton
          onClick={() => onClickNavigationButton('후기')}
          isSelected={postKind === '후기'}
        >
          후기
        </S.NavigationButton>

        <S.NavigationButton
          onClick={() => onClickNavigationButton('Q&A')}
          isSelected={postKind === 'Q&A'}
        >
          Q&A
        </S.NavigationButton>
      </div>

      {isLogin ? (
        <S.ButtonWrapper>
          <img src={userIcon} alt="user-icon" />
        </S.ButtonWrapper>
      ) : (
        <S.LoginButton color="normal">로그인</S.LoginButton>
      )}
    </S.Layout>
  );
}
