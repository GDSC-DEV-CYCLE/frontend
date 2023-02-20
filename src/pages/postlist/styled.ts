import styled, { css } from 'styled-components';

import DefaultButton from '../../components/Button/DefaultButton';
import Input from '../../components/Input';
import { Body1 } from '../../styles/common';

export const Layout = styled.div`
  display: flex;
  justify-content: center;
`;

export const MainLayout = styled.div`
  width: 630px;
  padding: 24px 0 0 0;
  margin: 0 24px;
`;

export const EmptyContainer = styled.div`
  width: 120px;
`;

export const WriteButton = styled(DefaultButton)`
  width: 120px;
  margin: 24px 0 0 0;
  height: fit-content;
  white-space: nowrap;
`;

export const SearchContainer = styled.div`
  display: flex;
  margin: 0 0 16px 0;
`;

export const SeachInputContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const SearchSelect = styled.select`
  padding: 0 8px;
  outline: none;
  cursor: pointer;

  ${({ theme }) =>
    css`
      border: ${`1px solid ${theme.colors.gray2}`};
      border-radius: ${`${theme.radius.sm} 0 0 ${theme.radius.sm}`};
      padding
    `};

  ${Body1}
`;

export const SearchInput = styled(Input)`
  width: 100%;
  border-radius: ${({ theme }) => `0 ${theme.radius.sm} ${theme.radius.sm} 0`};
`;

export const SearchButton = styled(DefaultButton)`
  width: 80px;
  margin: 0 0 0 8px;
`;

export const PostListsContainer = styled.div``;
