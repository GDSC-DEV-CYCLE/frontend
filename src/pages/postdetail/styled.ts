import styled from 'styled-components';

import { Body1, Display2 } from '../../styles/common';

export const Layout = styled.div`
  max-width: 630px;
  margin: auto;
`;

export const PostInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 0 0 25px 0;
`;

export const Title = styled.p`
  margin: 0 0 12px 0;
  ${Display2};
`;

export const Writer = styled.p`
  margin: 0px;
  color: ${({ theme }) => theme.colors.gray3};
  ${Body1};
`;

export const Content = styled.p`
  color: ${({ theme }) => theme.colors.black};
  ${Body1}
`;

export const TagsContainer = styled.div``;

export const PostLayout = styled.div`
  padding: 20px;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.gray2}`};
`;

export const CommentsLayout = styled.div``;
