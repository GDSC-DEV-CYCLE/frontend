import { ButtonHTMLAttributes } from 'react';

import * as S from './styled';

type Props = {
  children: string;
  isClicked: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function LikeButton({ children, isClicked, ...args }: Props) {
  return (
    <S.Button {...args} isSelected={isClicked}>
      <img src={`icons/${isClicked ? 'white' : 'gray'}-heart.svg`} alt="heart icon" />
      <S.NumberWrapper> {children}</S.NumberWrapper>
    </S.Button>
  );
}
