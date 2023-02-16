import styled from 'styled-components';

import SideNavigation from '../../components/Navigation/SideNavigation';
import { Display3 } from '../../styles/common';

export const Layout = styled.div`
  display: flex;
  justify-content: center;
`;

export const MainLayout = styled.div`
  width: 630px;
  margin: 50px 24px 0 24px;
`;

export const Title = styled.p`
  margin: 0px;
  ${Display3}
`;

export const MyPageSideNavigation = styled(SideNavigation)`
  margin: 100px 0 0 0;
`;
