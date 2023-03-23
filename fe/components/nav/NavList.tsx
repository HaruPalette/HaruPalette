import { ColorTypes } from '@emotion/react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { NAV_LIST } from '../../constants/nav';
import { useAppDispatch } from '../../hooks/reduxHook';
import useTheme from '../../hooks/useTheme';
import { changeLinkSuccess } from '../../store/modules/menu';
import { common } from '../../styles/theme';

function NavList() {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const handleChangeLink = () => {
    dispatch(changeLinkSuccess(''));
  };
  return (
    <HaruNav>
      {NAV_LIST.map((item, idx) => (
        <NavItem
          key={idx}
          href={item.link}
          theme={theme}
          onClick={handleChangeLink}
        >
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
