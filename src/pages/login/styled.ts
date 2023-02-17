import styled from 'styled-components';

import DefaultButton from '../../components/Button/DefaultButton';
import { Body1 } from '../../styles/common';

export const DevCycleLogoImage = styled.img`
  height: 24px;
`;

export const LoginPageLayout = styled.div`
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

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const SignUpButton = styled(DefaultButton)`
  background-color: #fff0;
  color: ${({ theme }) => theme.colors.gray2};

  width: fit-content;

  &:hover {
    background-color: #fff1;
    color: ${({ theme }) => theme.colors.gray3};
  }
`;

export const ErrorMessageBox = styled.div`
  color: ${({ theme }) => theme.colors.error};
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${Body1}
`;
