import { useState } from 'react';

import LikeButton from '../../components/Button/LikeButton';
import TextArea from '../../components/TextArea';
import Profile from './Profile';
import * as S from './styled';

export default function PostDetailPage() {
  const [comment, setComment] = useState('');
  const [isPostLiked, setIsPostLiked] = useState(false);

  const onChangeCommentTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const onClickCommentSubmitButton = () => {
    setComment('');
  };

  const onClickLikeButton = () => {
    setIsPostLiked((prev) => !prev);
  };

  return (
    <S.Layout>
      <S.PostLayout>
        <S.PostInfoContainer>
          <div>
            <S.Title>타이틀</S.Title>
            <S.Writer>김가은</S.Writer>
          </div>

          <LikeButton isClicked={isPostLiked} onClick={onClickLikeButton}>
            1.5k
          </LikeButton>
        </S.PostInfoContainer>

        <S.Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam
          in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula
          consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis
          imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.
          Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet.
          Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam
          condimentum, vel euismod erat placerat.
        </S.Content>

        <S.TagsContainer></S.TagsContainer>

        <Profile writer="김가은" introduction="개발자입니다" isFollowed={false} />
      </S.PostLayout>

      <S.CommentsLayout>
        <S.WritingCommentContainer>
          <TextArea onChange={onChangeCommentTextArea} value={comment} />
          <S.WritingCommentButton color="normal" onClick={onClickCommentSubmitButton}>
            작성
          </S.WritingCommentButton>
        </S.WritingCommentContainer>
      </S.CommentsLayout>
    </S.Layout>
  );
}
