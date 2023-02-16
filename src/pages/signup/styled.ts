import styled from 'styled-components';

import Button from '../../components/Button/DefaultButton';
import { Body1 } from '../../styles/common';

export const DevCycleLogoImage = styled.img`
  height: 24px;
`;

export const SignInPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #fff;
`;

export const ContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 320px;
  min-width: 200px;
  width: 30%;
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ErrorMessageBox = styled.div`
  color: ${({ theme }) => theme.colors.error};
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${Body1}
`;
