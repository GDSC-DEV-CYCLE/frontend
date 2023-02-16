import styled, { css } from 'styled-components';

import { Body1 } from '../../../styles/common';

interface ButtonProps {
  isSelected: boolean;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  border: none;
  white-space: nowrap;
  transition-duration: 0.2s;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radius.sm};
  padding: ${({ theme }) => theme.spacing.md};

  ${({ isSelected, theme }) =>
    isSelected
      ? css`
          background-color: ${theme.colors.primary};
          color: ${theme.colors.white};
        `
      : css`
          background-color: ${theme.colors.gray1};
          color: ${theme.colors.gray3};
        `};

  ${Body1}
`;

export const NumberWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
