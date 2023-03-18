import Image from 'next/image';
import Link from 'next/link';
import styled from '@emotion/styled';

import LoginButton from '../button/LoginButton';
import DarkModeButton from '../button/DarkModeButton';
import Logo from './Logo';
import NavList from '../nav/NavList';

function Header() {
  return (
    <HaruHeader>
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

const primary = 'pink';
const inheritBlack = 'black';
const inheritWhite = 'white';

const HaruHeader = styled.header`
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background: ${inheritBlack};
  color: ${inheritWhite};
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
