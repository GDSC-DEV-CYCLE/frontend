import styled, { css } from 'styled-components';

import { Body1, Body2 } from '../../../styles/common';

export const Layout = styled.div`
  width: 184px;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.gray3};
  margin: 0 0 8px 0;

  ${Body1};
`;

interface NavigationButtonProps {
  isSelected: boolean;
}

export const NavigationButton = styled.button<NavigationButtonProps>`
  display: flex;
  justify-content: flex-start;
  padding: 10px 16px;
  width: 100%;
  border: none;
  white-space: nowrap;
  cursor: pointer;

  border-radius: ${({ theme }) => theme.radius.sm};

  ${({ isSelected, theme }) =>
    isSelected
      ? css`
          background-color: ${theme.colors.gray1};
          color: ${theme.colors.black};
        `
      : css`
          background-color: ${theme.colors.white};
          color: ${theme.colors.gray3};
        `};

  ${Body2}
`;
