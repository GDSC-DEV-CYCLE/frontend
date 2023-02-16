import { useState } from 'react';

import LikeButton from '../../../components/Button/LikeButton';
import * as S from './styled';

type Props = {
  children: string;
  writer: string;
  time: string;
  isMyComment: boolean;
  likeNum: number;

  company?: string;
};

export default function Comment({
  children,
  writer,
  time,
  isMyComment,
  likeNum,
  company,
}: Props) {
  const [isLikeClicked, setIsLikeClicked] = useState(false);

  const onClickLikeButton = () => setIsLikeClicked((prev) => !prev);

  return (
    <S.Layout>
      <S.CommentInfoContainer>
        <S.WriterAndTimeContainer>
          <S.Writer>
            {writer} {company ? ` · ${company}` : ''}
          </S.Writer>
          <S.Time>{time}</S.Time>
        </S.WriterAndTimeContainer>

        {isMyComment && <S.DeleteButton>삭제</S.DeleteButton>}
      </S.CommentInfoContainer>

      <S.Comment>{children}</S.Comment>

      <S.LikeButtonWrapper>
        <LikeButton isClicked={isLikeClicked} onClick={onClickLikeButton}>
          {likeNum + ''}
        </LikeButton>
      </S.LikeButtonWrapper>
    </S.Layout>
  );
}
