import { useState } from 'react';

import LoadMoreButton from './LoadMoreButton';
import * as S from './styled';
import SubTopNavigation from './SubTopNavigation';

export default function PostListPage() {
  const [selectedNavigation, setSelectedNavigation] = useState('최신순');
  const [selectedSearchCondition, setSelectedSearchCondition] = useState('키워드');

  const onChangeSearchSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSearchCondition(e.target.value);
  };

  const onClickLoadMoreButton = () => {
    //
  };

  return (
    <S.Layout>
      <S.WriteButton color="normal">글 작성하기</S.WriteButton>

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

      <S.EmptyContainer />
    </S.Layout>
  );
}
