import DefaultButton from '../../../components/Button/DefaultButton';
import * as S from './styled';

type Props = {
  writer: string;
  introduction: string;
  isFollowed: boolean;

  company?: string;
};

export default function Profile({ writer, introduction, isFollowed, company }: Props) {
  return (
    <S.Layout>
      <div>
        <S.Name>
          {writer} {company ? ` · ${company}` : ''}
        </S.Name>
        <S.Introduction>{introduction}</S.Introduction>
      </div>

      <div>
        {isFollowed ? (
          <DefaultButton color="normal">팔로잉</DefaultButton>
        ) : (
          <DefaultButton>팔로우</DefaultButton>
        )}
      </div>
    </S.Layout>
  );
}
