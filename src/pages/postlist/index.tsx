import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import WritingList from '../../components/WritingList';
import { useAuthStore } from '../../store/AuthStore';
import { useLogin, useTopNavigation } from '../../store/store';
import LoadMoreButton from './LoadMoreButton';
import * as S from './styled';
import SubTopNavigation from './SubTopNavigation';

export default function PostListPage() {
  const { isSignedIn: isLogin } = useAuthStore.getState();
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

  const tempArr = [
    {
      title: '제목',
      content: '콘텐츠',
      tagList: ['개발자', '프론트엔드'],
      writer: '김가은',
      commentNum: 55,
      likeNum: 107,
      company: '회사',
      id: 1,
    },
    {
      title: '제목',
      content: '콘텐츠',
      tagList: ['개발자', '프론트엔드'],
      writer: '김가은',
      commentNum: 55,
      likeNum: 107,
      company: '회사',
      id: 2,
    },
    {
      title: '제목',
      content: '콘텐츠',
      tagList: ['개발자', '프론트엔드'],
      writer: '김가은',
      commentNum: 55,
      likeNum: 107,
      company: '회사',
      id: 3,
    },
    {
      title: '제목',
      content: '콘텐츠',
      tagList: ['개발자', '프론트엔드'],
      writer: '김가은',
      commentNum: 55,
      likeNum: 107,
      company: '회사',
      id: 4,
    },
  ];

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

          {tempArr.map((item) => {
            return (
              <S.PostWrapper key={item.id} onClick={onClickPost}>
                <WritingList
                  title={item.title}
                  content={item.content}
                  tagList={item.tagList}
                  writer={item.writer}
                  commentNum={item.commentNum}
                  likeNum={item.likeNum}
                  company={item.company}
                />
              </S.PostWrapper>
            );
          })}
        </S.PostListsContainer>

        <S.LoadMoreButtonWrapper>
          <LoadMoreButton onClick={onClickLoadMoreButton} />
        </S.LoadMoreButtonWrapper>
      </S.MainLayout>

      {isLogin && <S.EmptyContainer />}
    </S.Layout>
  );
}
