import styled, { css } from 'styled-components';

import { Body1 } from '../../styles/common';

interface ButtonProps {
  color: 'primary' | 'normal';
}

export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  height: 40px;
  width: 100%;
  border-radius: ${({ theme }) => theme.radius.sm};
  padding: ${({ theme }) => theme.spacing.md};
  transition-duration: 0.2s;

  ${({ color, theme }) =>
    color === 'primary'
      ? css`
          background-color: ${theme.colors.primary};
          border: none;
          color: ${theme.colors.white};
        `
      : css`
          background-color: ${theme.colors.white};
          border: 1px solid ${theme.colors.primary};
          color: ${theme.colors.primary};
        `};

  ${Body1}

  &:hover {
    background-color: ${({ theme, color }) =>
      color === 'primary' ? theme.colors.primaryDeep : theme.colors.primary15};
  }

  &:disabled {
    ${({ color, theme }) =>
      color === 'primary'
        ? css`
            background-color: ${theme.colors.gray2};
          `
        : css`
            background-color: ${theme.colors.white};
            border: 1px solid ${theme.colors.gray2};
            color: ${theme.colors.gray2};
          `};
  }
`;
