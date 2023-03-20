import styled from '@emotion/styled';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import getTheme from '../../hooks/themeHook';
import { selectTheme, setTheme } from '../../store/modules/theme';
import { ColorTheme } from '../../styles/theme';

function DarkModeButton() {
  // 현재 다크모드 여부
  const isDark = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();
  // 캐릭터 + 다크모드 여부를 파악해 theme 반환받기
  const theme = getTheme();
  // 다크모드 변경
  const handleChangeTheme = () => {
    dispatch(setTheme(!isDark));
  };
  const img = `assets/img/common/${isDark ? 'dark' : 'light'}/${
    isDark ? 'dark' : 'light'
  }_theme.svg`;
  return (
    <ThemeButton onClick={handleChangeTheme} theme={theme}>
      <Image src={img} width={24} height={24} alt="theme" />
    </ThemeButton>
  );
}

export default DarkModeButton;

const ThemeButton = styled.button<{ theme?: ColorTheme }>`
  cursor: pointer;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: ${props => props.theme.background};
`;
