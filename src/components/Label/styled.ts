import styled from 'styled-components';

import { Body1 } from '../../styles/common';

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;

  color: ${({ theme }) => theme.colors.gray3};

  ${Body1}
`;
