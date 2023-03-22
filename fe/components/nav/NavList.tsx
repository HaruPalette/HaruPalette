import styled from '@emotion/styled';
import Link from 'next/link';
import getTheme from '../../hooks/themeHook';
import { ColorTheme } from '../../styles/theme';

function NavList() {
  const navList = [
    {
      title: '일기 작성',
      link: '/create',
    },
    {
      title: '달력 보기',
      link: '/',
    },
    {
      title: '상점 가기',
      link: '/shop',
    },
  ];
  // 현재 테마 가져오기
  const theme = getTheme();
  return (
    <HaruNav>
      {navList.map((item, idx) => (
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
`;

const NavItem = styled(Link)<{ theme?: ColorTheme }>`
  color: ${props => props.theme.color};
  text-decoration: none;
  width: 5rem;
  margin-left: 1.5rem;
`;
