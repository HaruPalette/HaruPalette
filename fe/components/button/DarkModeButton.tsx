import styled from '@emotion/styled';
import Image from 'next/image';

function DarkModeButton() {
  const handleChangeTheme = () => {};
  return (
    <ThemeButton onClick={handleChangeTheme}>
      <Image
        src="assets/img/common/dark/dark_theme.svg"
        width={24}
        height={24}
        alt="theme"
      />
    </ThemeButton>
  );
}

export default DarkModeButton;

const ThemeButton = styled.button`
  cursor: pointer;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
`;
