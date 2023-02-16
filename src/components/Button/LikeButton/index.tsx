import { ButtonHTMLAttributes } from 'react';

import grayHeartIcon from '../../../assets/icons/gray-heart.svg';
import whiteHeartIcon from '../../../assets/icons/white-heart.svg';
import * as S from './styled';

type Props = {
  children: string;
  isClicked: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function LikeButton({ children, isClicked, ...args }: Props) {
  return (
    <S.Button {...args} isSelected={isClicked}>
      <img src={isClicked ? whiteHeartIcon : grayHeartIcon} alt="heart-icon" />
      <S.NumberWrapper> {children}</S.NumberWrapper>
    </S.Button>
  );
}
