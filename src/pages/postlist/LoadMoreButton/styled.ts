import styled from 'styled-components';

import { Body1 } from '../../../styles/common';

export const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px;
  width: 70px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray3};

  ${Body1}
`;
