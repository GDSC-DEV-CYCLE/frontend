import * as S from './styled';

interface Props {
  size: number;
}

export default function VSpace({ size }: Props) {
  return <S.VSpace size={size} />;
}
