import styled, { css } from 'styled-components';

import { Body2, Body3 } from '../../../styles/common';
import DefaultButton from '../../Button/DefaultButton';

export const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 8vw;
`;

export const LogoButton = styled.button`
  margin: 0 5vw 0 0;
  background-color: transparent;
  font-weight: 700;
  font-size: 20px;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.black};

  display: flex;
  align-items: center;
  justify-content: center;
`;

interface NavigationButtonProps {
  isSelected: boolean;
}

export const NavigationButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavigationButton = styled.button<NavigationButtonProps>`
  margin: 4px 8px 0 0;
  padding: 0 8px 2px 8px;
  background-color: transparent;
  border: none;
  box-sizing: content-box;
  transition-duration: 0.1;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.black};

  ${Body2}

  ${({ theme, isSelected }) =>
    isSelected
      ? css`
          border-bottom: 4px solid ${theme.colors.primary};
          ${Body3}
        `
      : css`
          border-bottom: 4px solid ${theme.colors.white};
        `}
`;

export const UserButtonWrapper = styled.button`
  height: 40px;
  margin: 0px;
  padding: 0px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const LoginButton = styled(DefaultButton)`
  width: 80px;
`;

export const DevCycleLogoImage = styled.img`
  height: 20px;
`;
