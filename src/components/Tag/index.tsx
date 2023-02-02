import * as S from './styled';

type Props = {
  children: string;
};

export default function Tag({ children, ...args }: Props) {
  return <S.Tag {...args}># {children}</S.Tag>;
}
