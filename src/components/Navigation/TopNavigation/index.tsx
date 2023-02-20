import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import userIcon from '../../../assets/icons/user.svg';
import DevCycleLogo from '../../../assets/images/dev-cycle-logo.svg';
import { useAuthStore } from '../../../store/AuthStore';
import { useTopNavigation } from '../../../store/store';
import { PostKindTypes } from '../../../types/navigation';
import * as S from './styled';

export default function TopNavigation() {
  const { postKind, changePostKind } = useTopNavigation();
  const { isSignedIn: isLogin } = useAuthStore.getState();

  const navigate = useNavigate();

  const logoName = '{DEV.CYCLE}';

  const onClickLogoButton = () => {
    changePostKind('칼럼');
    navigate('/postlist');

    localStorage.setItem('topNavigation', '칼럼');
  };

  const onClickNavigationButton = (navigation: PostKindTypes) => {
    navigate('/postlist');
    changePostKind(navigation);

    localStorage.setItem('topNavigation', navigation);
  };

  const onClickLoginButton = () => {
    navigate('/');
    changePostKind('');

    localStorage.setItem('topNavigation', '');
  };

  const onClickMyPageButton = () => {
    navigate('/mypage');
    changePostKind('');

    localStorage.setItem('topNavigation', '');
  };

  useEffect(() => {
    const previousNavigation = localStorage.getItem('topNavigation');

    if (
      previousNavigation !== '칼럼' &&
      previousNavigation !== '후기' &&
      previousNavigation !== 'Q&A' &&
      previousNavigation !== ''
    )
      return;

    changePostKind(previousNavigation);
  }, []);

  return (
    <S.Layout>
      <S.NavigationButtonWrapper>
        <S.LogoButton onClick={onClickLogoButton}>
          <S.DevCycleLogoImage src={DevCycleLogo} alt="dev-cycle-logo" />
        </S.LogoButton>
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
      </S.NavigationButtonWrapper>

      {isLogin ? (
        <S.UserButtonWrapper
          onClick={() => {
            navigate('/mypage');
          }}
        >
          <img src={userIcon} alt="user-icon" />
        </S.UserButtonWrapper>
      ) : (
        <S.LoginButton
          color="normal"
          onClick={() => {
            navigate('/');
          }}
        >
          로그인
        </S.LoginButton>
      )}
    </S.Layout>
  );
}
