import { ButtonHTMLAttributes } from 'react';

import * as S from './styled';

type Props = {
  children: string;
  isSelected: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function LikeButton({ children, isSelected, ...args }: Props) {
  return (
    <S.Button {...args} isSelected={isSelected}>
      <img src={`icons/${isSelected ? 'white' : 'gray'}-heart.svg`} alt="heart icon" />
      <S.NumberWrapper> {children}</S.NumberWrapper>
    </S.Button>
  );
}
