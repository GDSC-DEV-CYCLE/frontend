import styled, { css } from 'styled-components';

interface VSpaceProps {
  size: number;
}

export const VSpace = styled.div<VSpaceProps>`
  ${({ size }) =>
    css`
      height: ${size}px;
    `}
`;
