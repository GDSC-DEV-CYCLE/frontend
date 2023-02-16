import styled, { css } from 'styled-components';

import { Body2 } from '../../../styles/common';

export const Layout = styled.div`
  padding: 24px 250px;
`;

export const LogoButton = styled.button`
  background-color: transparent;
  font-weight: 700;
  font-size: 20px;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.black};
`;

interface NavigationButtonProps {
  isSelected: boolean;
}

export const NavigationButton = styled.button<NavigationButtonProps>`
  background-color: transparent;

  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray3};

  ${({ theme, isSelected }) =>
    isSelected
      ? css`
          border-bottom: 1px solid ${theme.colors.primary};
        `
      : css`
          border: none;
        `}

  ${Body2}
`;
