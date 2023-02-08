import Tag from '../Tag';
import * as S from './styled';

type Props = {
  title: string;
  content: string;
  tagList: string[];
  writer: string;
  company?: string;
  commentNum: number;
  heartNum: number;
};

export default function WritingList({
  title,
  content,
  tagList,
  writer,
  company,
  commentNum,
  heartNum,
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
          댓글 {commentNum} · 좋아요 {heartNum}
        </S.SubInfo>
      </S.SubInfoContainer>
    </S.Layout>
  );
}
