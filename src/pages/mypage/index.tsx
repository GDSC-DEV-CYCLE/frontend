import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthStore } from '../../store/AuthStore';
import MyInformation from './MyInformation';
import MyPost from './MyPost';
import * as S from './styled';

export default function MyPage() {
  const [selectedNavigation, setSelectedNavigation] = useState('내가 작성한 글');

  const { user } = useAuthStore();

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  });

  return (
    <S.Layout>
      <S.MyPageSideNavigation
        title="메뉴"
        navigationList={['내가 작성한 글', '회원정보 수정']}
        selected={selectedNavigation}
        setSelected={setSelectedNavigation}
      />

      <S.MainLayout>
        <S.Title>{selectedNavigation}</S.Title>
        {selectedNavigation === '내가 작성한 글' ? <MyPost /> : <MyInformation />}
      </S.MainLayout>
    </S.Layout>
  );
}
