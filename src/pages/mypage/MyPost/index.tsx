import WritingList from '../../../components/WritingList';
import * as S from './styled';

export default function MyPost() {
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
    {
      title: '제목',
      content: '콘텐츠',
      tagList: ['개발자', '프론트엔드'],
      writer: '김가은',
      commentNum: 55,
      likeNum: 107,
      company: '회사',
      id: 5,
    },
    {
      title: '제목',
      content: '콘텐츠',
      tagList: ['개발자', '프론트엔드'],
      writer: '김가은',
      commentNum: 55,
      likeNum: 107,
      company: '회사',
      id: 6,
    },
    {
      title: '제목',
      content: '콘텐츠',
      tagList: ['개발자', '프론트엔드'],
      writer: '김가은',
      commentNum: 55,
      likeNum: 107,
      company: '회사',
      id: 7,
    },
  ];

  return (
    <>
      {tempArr.map((item) => {
        return (
          <WritingList
            title={item.title}
            content={item.content}
            tagList={item.tagList}
            writer={item.writer}
            commentNum={item.commentNum}
            likeNum={item.likeNum}
            company={item.company}
            key={item.id}
          />
        );
      })}
    </>
  );
}
