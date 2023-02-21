import { useState } from 'react';

import LikeButton from '../../components/Button/LikeButton';
import TextArea from '../../components/TextArea';
import postWithCredentials from '../../utils/postWithCredentials';
import Comment from './Comment';
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
    if (isPostLiked) {
      setIsPostLiked(false);
      postWithCredentials('/unlike/post/1', {});
    } else {
      setIsPostLiked(true);
      postWithCredentials('/like/post/1', {});
    }
  };

  const tempArr = [
    {
      content:
        'ectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo.',
      writer: '김가은',
      time: '2022-04-02 08:09',
      isMyComment: false,
      likeNum: 80,
      company: '회사',
      id: 1,
    },
    {
      content:
        'ectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum',
      writer: '김가은',
      time: '2022-04-02 08:09',
      isMyComment: false,
      likeNum: 80,
      company: '회사',
      id: 2,
    },
  ];

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
        {tempArr.map((item) => {
          return (
            <Comment
              writer={item.writer}
              time={item.time}
              isMyComment={item.isMyComment}
              likeNum={item.likeNum}
              key={item.id}
            >
              {item.content}
            </Comment>
          );
        })}
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
