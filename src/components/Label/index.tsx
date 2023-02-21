import * as S from './styled';

const Label = ({ children, ...props }: { children: React.ReactNode }) => {
  return <S.Label {...props}>{children}</S.Label>;
};
