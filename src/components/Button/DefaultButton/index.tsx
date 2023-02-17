import { ButtonHTMLAttributes } from 'react';

import * as S from './styled';

type Props = {
  children: string | React.ReactNode;
  color?: 'primary' | 'normal';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function DefaultButton({ color = 'primary', children, ...args }: Props) {
  return (
    <S.Button color={color} {...args}>
      {children}
    </S.Button>
  );
}
