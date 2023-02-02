import { InputHTMLAttributes } from 'react';

import * as S from './styled';

type Props = InputHTMLAttributes<HTMLInputElement>;

export default function Input({ ...args }: Props) {
  return <S.Input {...args} />;
}
