import { ColorTypes } from '@emotion/react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { NAV_LIST } from '../../constants/nav';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import useTheme from '../../hooks/useTheme';
import { changeLinkSuccess, selectMenu } from '../../store/modules/menu';
import { common } from '../../styles/theme';

function NavList() {
  const theme = useTheme();
  const menu = useAppSelector(selectMenu);
  const dispatch = useAppDispatch();
  const handleChangeLink = (link: string) => {
    dispatch(changeLinkSuccess(link));
  };
  return (
    <HaruNav>
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

export default NavList;

const HaruNav = styled.nav`
  display: flex;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const CurNavItem = styled(Link)<{ theme: ColorTypes }>`
  text-align: center;

  color: ${props => props.theme.main};
  width: 5rem;
  margin-left: ${common.fontSize.fs24};

  &:hover {
    color: ${props => props.theme.primary40};
  }
`;

const NavItem = styled(Link)<{ theme: ColorTypes }>`
  text-align: center;

  color: ${common.colors.secondary};
  width: 5rem;
  margin-left: ${common.fontSize.fs24};

  &:hover {
    color: ${props => props.theme.primary40};
  }
`;
