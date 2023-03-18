import styled from '@emotion/styled';
import Link from 'next/link';

function NavList() {
  const navList = [
    {
      title: '일기 작성',
      link: '/',
    },
    {
      title: '달력 보기',
      link: '/',
    },
    {
      title: '상점 가기',
      link: '/',
    },
  ];

  return (
    <HaruNav>
      {navList.map((item, idx) => (
        <NavItem key={idx} href={item.link}>
          {item.title}
        </NavItem>
      ))}
    </HaruNav>
  );
}

export default NavList;

const inheritWhite = 'white';

const HaruNav = styled.nav`
  display: flex;
`;

const NavItem = styled(Link)`
  color: ${inheritWhite};
  text-decoration: none;
  margin-left: 1.5rem;
`;
