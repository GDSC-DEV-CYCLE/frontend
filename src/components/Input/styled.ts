import styled from 'styled-components';

import { Body1 } from '../../styles/common';

export const Input = styled.input`
  width: 100%;
  padding: 8px 20px;
  outline: none;
  box-sizing: border-box;
  border: ${({ theme }) => `1px solid ${theme.colors.gray2}`};
  border-radius: ${({ theme }) => theme.radius.sm};

  ${Body1}

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray2};
  }
`;
