import styled, { css } from 'styled-components';

import { Body1 } from '../../styles/common';

export const Tag = styled.div`
  cursor: default;
  width: fit-content;

  ${({ theme: { spacing, colors, radius } }) =>
    css`
      padding: ${spacing.sm} ${spacing.md};
      background-color: ${colors.gray1};
      color: ${colors.black};
      border-radius: ${radius.sm};
    `}

  ${Body1}
`;
