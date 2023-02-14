import styled from 'styled-components';

import { Body1 } from '../../../styles/common';

export const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.gray1};
  border-radius: ${({ theme }) => theme.radius.sm};
`;

export const Name = styled.p`
  margin: 0 0 5px 0;
  color: ${({ theme }) => theme.colors.black};

  ${Body1}
`;

export const Introduction = styled.p`
  margin: 0px;
  color: ${({ theme }) => theme.colors.gray3};

  ${Body1}
`;
