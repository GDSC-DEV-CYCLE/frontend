import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useLogin, useTopNavigation } from '../../store/store';
import LoadMoreButton from './LoadMoreButton';
import * as S from './styled';
import SubTopNavigation from './SubTopNavigation';

export default function PostListPage() {
  const { isLogin } = useLogin();
  const { postKind } = useTopNavigation();

  const [selectedNavigation, setSelectedNavigation] = useState('최신순');
  const [selectedSearchCondition, setSelectedSearchCondition] = useState('키워드');
  const [loadMoreTimes, setLoadMoreTimes] = useState(0);

  // switch (postKind) {
  //   case '칼럼':
  //     break;
  //   case '후기':
  //     break;
  //   default:
  // }

  const navigate = useNavigate();

  const onChangeSearchSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSearchCondition(e.target.value);
  };

  const onClickPost = () => {
    navigate('/postdetail', { state: { id: '' } }); // id 임시
  };

  const onClickLoadMoreButton = () => {
    setLoadMoreTimes((prev) => prev + 1);
  };

  return (
    <S.Layout>
      {isLogin && <S.WriteButton color="normal">글 작성하기</S.WriteButton>}

      <S.MainLayout>
        <S.SearchContainer>
          <S.SeachInputContainer>
            <S.SearchSelect
              onChange={onChangeSearchSelect}
              value={selectedSearchCondition}
            >
              <option value="키워드">키워드</option>
              <option value="태그">태그</option>
            </S.SearchSelect>
            <S.SearchInput placeholder={`${selectedSearchCondition}로 검색하세요`} />
          </S.SeachInputContainer>

          <S.SearchButton>검색</S.SearchButton>
        </S.SearchContainer>

        <S.PostListsContainer>
          <SubTopNavigation
            navigationList={['최신순', '좋아요순', '댓글많은순']}
            selected={selectedNavigation}
            setSelected={setSelectedNavigation}
          />
        </S.PostListsContainer>

        <LoadMoreButton onClick={onClickLoadMoreButton} />
      </S.MainLayout>

      {isLogin && <S.EmptyContainer />}
    </S.Layout>
  );
}
