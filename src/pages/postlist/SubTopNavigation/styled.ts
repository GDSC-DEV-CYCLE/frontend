import styled from 'styled-components';

import { Body1 } from '../../../styles/common';

export const Layout = styled.div`
  display: flex;
  justify-content: flex-start;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.gray2}`};
`;

interface NavigationButtonProps {
  isSelected: boolean;
}

export const NavigationButton = styled.div<NavigationButtonProps>`
  padding: 12px;
  cursor: pointer;
  color: ${({ theme, isSelected }) => theme.colors[isSelected ? 'black' : 'gray3']};

  ${Body1};
  font-weight: ${({ isSelected }) => (isSelected ? 700 : 500)};
`;
