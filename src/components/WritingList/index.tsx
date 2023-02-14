import Tag from '../Tag';
import * as S from './styled';

type Props = {
  title: string;
  content: string;
  tagList: string[];
  writer: string;
  commentNum: number;
  likeNum: number;

  company?: string;
};

export default function WritingList({
  title,
  content,
  tagList,
  writer,
  commentNum,
  likeNum,
  company,
}: Props) {
  return (
    <S.Layout>
      <S.Title>{title}</S.Title>
      <S.Content>{content}</S.Content>

      <S.TagsContainer>
        {tagList.slice(0, 5).map((item, index) => {
          return (
            <S.TagWrapper key={index}>
              <Tag>{item}</Tag>
            </S.TagWrapper>
          );
        })}
      </S.TagsContainer>

      <S.SubInfoContainer>
        <S.SubInfo>
          {writer} {company ? ` · ${company}` : ''}
        </S.SubInfo>
        <S.SubInfo>
          댓글 {commentNum} · 좋아요 {likeNum}
        </S.SubInfo>
      </S.SubInfoContainer>
    </S.Layout>
  );
}
