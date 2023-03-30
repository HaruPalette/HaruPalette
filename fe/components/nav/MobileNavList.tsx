import { ColorTypes, css } from '@emotion/react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { NAV_LIST } from '../../constants/nav';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import useTheme from '../../hooks/useTheme';
import { changeLinkSuccess, selectMenu } from '../../store/modules/menu';
import { common } from '../../styles/theme';

interface Menu {
  isActive: boolean;
  link: string;
}

const HaruNav = styled.nav<{ menu: Menu; theme: ColorTypes }>`
  display: none;

  -webkit-transition: 0.4s ease-in-out;
  -moz-transition: 0.4s ease-in-out;
  -o-transition: 0.4s ease-in-out;
  transition: 0.4s ease-in-out;

  ${props =>
    !props.menu.isActive &&
    css`
      transform: translateY(-500px);
    `}

  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;

    width: 100%;

    position: fixed;
    top: 5.5rem;

    z-index: 9;

    background: ${props =>
      !props.menu.isActive ? `rgba(0, 0, 0, 0)` : props.theme.background};
    color: ${props => props.theme.color};
  }
`;

const CurNavItem = styled(Link)<{ theme: ColorTypes }>`
  color: ${props => props.theme.main};
  height: 3rem;
  margin-left: ${common.fontSize.fs24};

  &:hover {
    color: ${props => props.theme.primary40};
  }
`;

const NavItem = styled(Link)<{ theme: ColorTypes }>`
  color: ${common.colors.secondary};
  height: 3rem;
  margin-left: ${common.fontSize.fs24};

  &:hover {
    color: ${props => props.theme.primary40};
  }
`;

function MobileNavList() {
  const menu: Menu = useAppSelector(selectMenu);
  const theme: ColorTypes = useTheme();
  const dispatch = useAppDispatch();

  const handleChangeLink = (link: string) => {
    dispatch(changeLinkSuccess(link));
  };

  return (
    <HaruNav menu={menu} theme={theme}>
      {NAV_LIST.map(item =>
        menu.link === item.link ? (
          <CurNavItem
            key={item.title}
            href={item.link}
            theme={theme}
            onClick={() => handleChangeLink(item.link)}
          >
            {item.title}
          </CurNavItem>
        ) : (
          <NavItem
            key={item.title}
            href={item.link}
            theme={theme}
            onClick={() => handleChangeLink(item.link)}
          >
            {item.title}
          </NavItem>
        ),
      )}
    </HaruNav>
  );
}

export default MobileNavList;
