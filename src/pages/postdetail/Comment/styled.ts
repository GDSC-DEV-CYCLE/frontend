import styled from 'styled-components';

import { Body1 } from '../../../styles/common';

export const Layout = styled.div`
  padding: 16px;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.gray2}`};
`;

export const CommentInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const WriterAndTimeContainer = styled.div`
  display: flex;
`;

export const Writer = styled.p`
  margin: 0px;
  color: ${({ theme }) => theme.colors.gray3};

  ${Body1};
`;

export const Time = styled(Writer)`
  margin: 0 0 0 8px;
`;

export const DeleteButton = styled(Writer)`
  cursor: pointer;
`;

export const Comment = styled.p`
  color: ${({ theme }) => theme.colors.black};
  ${Body1};
`;

export const LikeButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
