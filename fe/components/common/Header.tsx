import styled from '@emotion/styled';
import { ColorTypes } from '@emotion/react';
import LoginButton from '../button/LoginButton';
import DarkModeButton from '../button/DarkModeButton';
import Logo from './Logo';
import NavList from '../nav/NavList';
import useTheme from '../../hooks/useTheme';
import MobileNavList from '../nav/MobileNavList';
import useScreenY from '../../hooks/useScreenY';
import HamburgerButton from '../button/HamburgerButton';
import { useAppSelector } from '../../hooks/reduxHook';
import { selectMenu } from '../../store/modules/menu';

const HaruHeader = styled.header<{
  theme: ColorTypes;
  screenY: number;
  isActive: boolean;
}>`
  width: 100vw;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  background: ${props =>
    props.screenY === 0 && !props.isActive
      ? `rgba(0, 0, 0, 0)`
      : props.theme.background};
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
  display: none;
  @media screen and (max-width: 500px) {
    display: flex;
    align-items: center;
    justify-content: start;
    width: 6rem;
    height: 88px;
  }
`;

const CenterContainer = styled.div`
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

function Header() {
  const theme = useTheme();
  const screenY = useScreenY();
  const active = useAppSelector(selectMenu).isActive;

  return (
    <>
      <HaruHeader theme={theme} screenY={screenY} isActive={active}>
        <HeaderContainer>
          <LeftContainer>
            <HamburgerButton />
          </LeftContainer>

          <CenterContainer>
            <Logo />
            <NavList />
          </CenterContainer>

          <RightContainer>
            <DarkModeButton />
            <LoginButton />
          </RightContainer>
        </HeaderContainer>
      </HaruHeader>

      <MobileNavList />
    </>
  );
}

export default Header;
