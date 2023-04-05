import { ColorTypes } from '@emotion/react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { NAV_LIST } from '../../constants/nav';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import useTheme from '../../hooks/useTheme';
import { changeLinkSuccess, selectMenu } from '../../store/modules/menu';
import { selectProfile } from '../../store/modules/profile';
import { common } from '../../styles/theme';

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

function NavList() {
  const theme = useTheme();
  const menu = useAppSelector(selectMenu);
  const today = useAppSelector(selectProfile).isToday;
  const dispatch = useAppDispatch();
  const handleChangeLink = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: string,
  ) => {
    if (link === '/create' && today) {
      e.preventDefault();
      window.alert(
        '오늘 작성한 일기가 존재합니다. 다시 작성하려면 일기 삭제 후 작성 부탁드립니다 🎨',
      );
    } else dispatch(changeLinkSuccess(link));
  };
  return (
    <HaruNav>
      {NAV_LIST.map(item =>
        menu.link === item.link ? (
          <CurNavItem
            key={item.title}
            href={item.link}
            theme={theme}
            onClick={e => handleChangeLink(e, item.link)}
          >
            {item.title}
          </CurNavItem>
        ) : (
          <NavItem
            key={item.title}
            href={item.link}
            theme={theme}
            onClick={e => handleChangeLink(e, item.link)}
          >
            {item.title}
          </NavItem>
        ),
      )}
    </HaruNav>
  );
}

export default NavList;
