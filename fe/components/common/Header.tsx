import styled from '@emotion/styled';

import LoginButton from '../button/LoginButton';
import DarkModeButton from '../button/DarkModeButton';
import Logo from './Logo';
import NavList from '../nav/NavList';
import useTheme from '../../hooks/useTheme';
import { ColorTypes } from '@emotion/react';

function Header() {
  const theme = useTheme();

  return (
    <HaruHeader theme={theme}>
      <HeaderContainer>
        <LeftContainer>
          <Logo />
          <NavList />
        </LeftContainer>

        <RightContainer>
          <DarkModeButton />
          <LoginButton />
        </RightContainer>
      </HeaderContainer>
    </HaruHeader>
  );
}

export default Header;

const HaruHeader = styled.header<{ theme: ColorTypes }>`
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background: ${props => props.theme.background};
  color: ${props => props.theme.color};
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 160px;
`;

const LeftContainer = styled.div`
  height: 88px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const RightContainer = styled.div`
  width: 10rem;
  height: 88px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
