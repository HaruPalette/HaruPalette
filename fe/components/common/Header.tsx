import styled from '@emotion/styled';

import LoginButton from '../button/LoginButton';
import DarkModeButton from '../button/DarkModeButton';
import Logo from './Logo';
import NavList from '../nav/NavList';
import useTheme from '../../hooks/useTheme';
import { ColorTypes } from '@emotion/react';
import MobileNavList from '../nav/MobileNavList';
import useScreenY from '../../hooks/useScreenY';
import { useEffect } from 'react';
import HamburgerButton from '../button/HamburgerButton';

function Header() {
  const theme = useTheme();
  const screenY = useScreenY();

  useEffect(() => {
    console.log(screenY);
  }, [screenY]);
  return (
    <HaruHeader theme={theme} screenY={screenY}>
      <HeaderContainer>
        <HamburgerButton />
        <LeftContainer>
          <Logo />
          <NavList />
        </LeftContainer>

        <RightContainer>
          <DarkModeButton />
          <LoginButton />
        </RightContainer>
      </HeaderContainer>
      <MobileNavList />
    </HaruHeader>
  );
}

export default Header;

const HaruHeader = styled.header<{ theme: ColorTypes; screenY: number }>`
  width: 100vw;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  background: ${props =>
    props.screenY === 0 ? `rgda(0,0,0,0)` : props.theme.background};
  color: ${props => props.theme.color};
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 160px;

  @media all and (max-width: 960px) {
    padding: 0 1rem;
  }
`;

const LeftContainer = styled.div`
  height: 88px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 500px) {
    width: 10rem;
    justify-content: center;
  }
`;

const RightContainer = styled.div`
  width: 10rem;
  height: 88px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 500px) {
    width: 6rem;
  }
`;
