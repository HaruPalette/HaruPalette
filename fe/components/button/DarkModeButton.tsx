import { ColorTypes } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import useTheme from '../../hooks/useTheme';
import { selectTheme, setTheme } from '../../store/modules/theme';
import { common } from '../../styles/theme';

const ThemeButton = styled.button<{ theme: ColorTypes }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${common.fontSize.fs40};
  height: ${common.fontSize.fs40};
  border-radius: 50%;
  background: ${props => props.theme.background};

  @media all and (max-width: 500px) {
    width: 2rem;
    height: 2rem;
  }
`;

const ThemeImage = styled(Image)`
  @media all and (max-width: 500px) {
    width: 1.2rem;
    height: 1.2rem;
  }
`;

function DarkModeButton() {
  const isDark = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();
  const theme = useTheme();

  const handleChangeTheme = () => {
    dispatch(setTheme(!isDark));
  };
  const img = `/assets/img/common/${isDark ? 'dark' : 'light'}/${
    isDark ? 'dark' : 'light'
  }_theme.svg`;
  return (
    <ThemeButton onClick={handleChangeTheme} theme={theme}>
      <ThemeImage src={img} width={24} height={24} alt="theme" />
    </ThemeButton>
  );
}

export default DarkModeButton;
