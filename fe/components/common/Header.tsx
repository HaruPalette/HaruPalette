import Image from 'next/image';
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
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import { selectMenu } from '../../store/modules/menu';
import { logoutSuccess, selectProfile } from '../../store/modules/profile';
import { selectTheme } from '../../store/modules/theme';
import { openSnackBarSuccess } from '../../store/modules/snackbar';

const HaruHeader = styled.header<{
  theme: ColorTypes;
  screenY: number;
  isActive: boolean;
}>`
  width: 100vw;
  z-index: 9999;
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
  height: 88px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 500px) {
  }
`;

const Profile = styled.div`
  width: 7rem;
  height: 2.5rem;
  padding: 0 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  img:nth-of-type(1) {
    margin-right: 1rem;
  }
`;

const ProfileImage = styled(Image)`
  border-radius: 3rem;
`;

const Logout = styled(Image)`
  cursor: pointer;
`;

function Header() {
  const theme = useTheme();
  const screenY = useScreenY();
  const active = useAppSelector(selectMenu).isActive;
  const dark = useAppSelector(selectTheme);
  const profile = useAppSelector(selectProfile);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logoutSuccess());
    dispatch(openSnackBarSuccess('로그아웃 되었습니다.'));
  };

  return (
    <>
      <HaruHeader theme={theme} screenY={screenY} isActive={active}>
        <HeaderContainer>
          {profile.isLogin && (
            <LeftContainer>
              <HamburgerButton />
            </LeftContainer>
          )}
          <CenterContainer>
            <Logo />
            {profile.isLogin && <NavList />}
          </CenterContainer>

          <RightContainer>
            <DarkModeButton />
            {!profile.isLogin && <LoginButton />}
            {profile.isLogin && (
              <Profile>
                <Logout
                  src={`/assets/img/common/${
                    dark ? 'dark' : 'light'
                  }/logout.svg`}
                  width={24}
                  height={24}
                  alt="logout"
                  onClick={handleLogout}
                />
                <ProfileImage
                  src={profile.image}
                  width={48}
                  height={48}
                  alt="profile"
                />
              </Profile>
            )}
          </RightContainer>
        </HeaderContainer>
      </HaruHeader>

      <MobileNavList />
    </>
  );
}

export default Header;
