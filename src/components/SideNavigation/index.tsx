import { Dispatch, SetStateAction } from 'react';

import * as S from './styled';

type Props = {
  title: string;
  navigations: string[];
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
};

export default function SideNavigation({
  title,
  navigations,
  selected,
  setSelected,
}: Props) {
  const onClickNavigation = (item: string) => setSelected(item);

  return (
    <S.Layout>
      <S.Title>{title}</S.Title>
      <div>
        {navigations.map((item, index) => {
          return (
            <S.NavigationWrapper
              key={index}
              isSelected={item === selected}
              onClick={() => onClickNavigation(item)}
            >
              {item}
            </S.NavigationWrapper>
          );
        })}
      </div>
    </S.Layout>
  );
}
