import { ColorTypes } from '@emotion/react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { NAV_LIST } from '../../constants/nav';
import useTheme from '../../hooks/useTheme';
import { common } from '../../styles/theme';

function NavList() {
  const theme = useTheme();
  return (
    <HaruNav>
      {NAV_LIST.map((item, idx) => (
        <NavItem key={idx} href={item.link} theme={theme}>
          {item.title}
        </NavItem>
      ))}
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

const NavItem = styled(Link)<{ theme: ColorTypes }>`
  color: ${props => props.theme.color};
  text-decoration: none;
  width: 5rem;
  margin-left: ${common.fontSize.fs24};
`;
