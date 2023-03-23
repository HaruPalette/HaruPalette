import { ColorTypes, css } from '@emotion/react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { NAV_LIST } from '../../constants/nav';
import { useAppSelector } from '../../hooks/reduxHook';
import useTheme from '../../hooks/useTheme';
import { selectMenu } from '../../store/modules/menu';
import theme from '../../store/modules/theme';
import { common } from '../../styles/theme';
import HamburgerButton from '../button/HamburgerButton';

function MobileNavList() {
  const isActive = useAppSelector(selectMenu);
  const theme = useTheme();

  return (
    <HaruNav isActive={isActive}>
      {NAV_LIST.map((item, idx) => (
        <NavItem key={idx} href={item.link} theme={theme}>
          {item.title}
        </NavItem>
      ))}
    </HaruNav>
  );
}

export default MobileNavList;

const HaruNav = styled.nav<{ isActive: boolean }>`
  display: none;

  @media screen and (max-width: 500px) {
    display: flex;
  }
  -webkit-transition: 0.4s ease-in-out;
  -moz-transition: 0.4s ease-in-out;
  -o-transition: 0.4s ease-in-out;
  transition: 0.4s ease-in-out;

  ${props =>
    !props.isActive &&
    css`
      transform: translate(-500px);
    `}
`;

const NavItem = styled(Link)<{ theme: ColorTypes }>`
  color: ${props => props.theme.color};
  text-decoration: none;
  width: 5rem;
  margin-left: ${common.fontSize.fs24};
`;
