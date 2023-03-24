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

function MobileNavList() {
  const menu: Menu = useAppSelector(selectMenu);
  const theme: ColorTypes = useTheme();
  const dispatch = useAppDispatch();
  const handleChangeLink = (link: string) => {
    dispatch(changeLinkSuccess(link));
  };

  console.log(menu.link);
  return (
    <HaruNav menu={menu}>
      {NAV_LIST.map((item, idx) =>
        menu.link === item.link ? (
          <CurNavItem
            key={idx}
            href={item.link}
            theme={theme}
            onClick={() => handleChangeLink(item.link)}
          >
            {item.title}
          </CurNavItem>
        ) : (
          <NavItem
            key={idx}
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

const HaruNav = styled.nav<{ menu: Menu }>`
  display: none;

  @media screen and (max-width: 500px) {
    display: flex;
  }
  -webkit-transition: 0.4s ease-in-out;
  -moz-transition: 0.4s ease-in-out;
  -o-transition: 0.4s ease-in-out;
  transition: 0.4s ease-in-out;

  ${props =>
    !props.menu.isActive &&
    css`
      transform: translate(-500px);
    `}
`;

const CurNavItem = styled(Link)<{ theme: ColorTypes }>`
  color: ${props => props.theme.main};
  width: 5rem;
  margin-left: ${common.fontSize.fs24};

  &:hover {
    color: ${props => props.theme.primary40};
  }
`;

const NavItem = styled(Link)<{ theme: ColorTypes }>`
  color: ${common.colors.secondary};
  width: 5rem;
  margin-left: ${common.fontSize.fs24};

  &:hover {
    color: ${props => props.theme.primary40};
  }
`;
