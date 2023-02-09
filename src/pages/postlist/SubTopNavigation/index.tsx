import { Dispatch, SetStateAction } from 'react';

import * as S from './styled';

type Props = {
  navigationList: string[];
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
};

export default function SubTopNavigation({
  navigationList,
  selected,
  setSelected,
}: Props) {
  const onClickNavigation = (item: string) => setSelected(item);

  return (
    <S.Layout>
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
    </S.Layout>
  );
}
