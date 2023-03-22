import { CommonTypes } from '@emotion/react';
import styled from '@emotion/styled';
import useTheme from '../../hooks/useTheme';
import theme from '../../store/modules/theme';
import { ColorTheme, common } from '../../styles/theme';

function ScrollToTopButton() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  const theme = useTheme();

  return (
    <TopButton onClick={handleScrollToTop} common={common} theme={theme}>
      <i className="fas fa-arrow-up"></i>
    </TopButton>
  );
}

export default ScrollToTopButton;

const TopButton = styled.button<{ common: CommonTypes; theme: ColorTheme }>`
  position: absolute;
  right: ${common.fontSize.fs40};
  bottom: ${common.fontSize.fs40};

  width: ${common.fontSize.fs48};
  height: ${common.fontSize.fs48};

  border-radius: 50%;

  background-color: ${props => props.theme.primary20};
  color: white;

  cursor: pointer;
  z-index: 1;
`;
