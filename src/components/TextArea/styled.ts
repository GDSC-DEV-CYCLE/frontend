import styled, { css } from 'styled-components';

import { Body1 } from '../../styles/common';

export const TextArea = styled.textarea`
  padding: 15px;
  width: 100%;
  outline: none;
  border: none;
  resize: none;
  box-sizing: border-box;

  ${({ theme }) =>
    css`
      background-color: ${theme.colors.gray1};
      color: ${theme.colors.black};
      border-radius: ${theme.radius.sm};
    `}

  ${Body1}
`;
