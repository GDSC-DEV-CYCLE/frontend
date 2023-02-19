import { ButtonHTMLAttributes } from 'react';

import arrowDownIcon from '../../../assets/icons/arrow-down.svg';
import * as S from './styled';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export default function LoadMoreButton({ ...args }: Props) {
  return (
    <S.Button {...args}>
      <img src={arrowDownIcon} alt="arrow-down-icon" />
      더보기
    </S.Button>
  );
}
