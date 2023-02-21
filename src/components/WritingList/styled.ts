import styled from 'styled-components';

import { Body1, Display1 } from '../../styles/common';

export const Layout = styled.div`
  padding: 16px;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.gray2}`};
  cursor: pointer;
`;

export const Title = styled.p`
  margin: 0 0 8px 0;
  ${Display1};
`;

export const Content = styled.p`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  max-height: 2.5em;
  text-align: left;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  margin: 0 0 16px 0;
  color: ${({ theme }) => theme.colors.gray3};

  ${Body1};
`;

export const TagsContainer = styled.div`
  display: flex;
  margin: 0 0 16px 0;
`;

export const TagWrapper = styled.div`
  margin: 0 8px 0 0;
`;

export const SubInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SubInfo = styled.p`
  margin: 0px;
  color: ${({ theme }) => theme.colors.gray3};

  ${Body1};
`;
