import { ColorTypes } from '@emotion/react';
import styled from '@emotion/styled';
import useTheme from '../../hooks/useTheme';
import { common } from '../../styles/theme';

function ScrollToTopButton() {
  const theme = useTheme();
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <TopButton onClick={handleScrollToTop} theme={theme}>
      <i className="fas fa-arrow-up"></i>
    </TopButton>
  );
}

export default ScrollToTopButton;

const TopButton = styled.button<{ theme: ColorTypes }>`
  position: absolute;
  right: ${common.fontSize.fs40};
  bottom: ${common.fontSize.fs40};

  display: flex;
  align-items: center;
  justify-content: center;

  width: ${common.fontSize.fs48};
  height: ${common.fontSize.fs48};

  border-radius: 50%;

  background-color: ${props => props.theme.primary20};
  color: white;

  cursor: pointer;
  z-index: 1;
`;
