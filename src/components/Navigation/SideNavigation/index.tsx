import { Dispatch, SetStateAction } from 'react';

import * as S from './styled';

type Props = {
  title: string;
  navigationList: string[];
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
};

export default function SideNavigation({
  title,
  navigationList,
  selected,
  setSelected,
  ...args
}: Props) {
  const onClickNavigation = (item: string) => setSelected(item);

  return (
    <S.Layout {...args}>
      <S.Title>{title}</S.Title>
      <div>
        {navigationList.map((item, index) => {
          return (
            <S.NavigationButton
              key={index}
              isSelected={item === selected}
              onClick={() => onClickNavigation(item)}
            >
              {item}
            </S.NavigationButton>
          );
        })}
      </div>
    </S.Layout>
  );
}
