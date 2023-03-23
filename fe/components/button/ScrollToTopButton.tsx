import { ColorTypes } from '@emotion/react';
import styled from '@emotion/styled';
import useScreenY from '../../hooks/useScreenY';
import useTheme from '../../hooks/useTheme';
import { common } from '../../styles/theme';

function ScrollToTopButton() {
  const screenY = useScreenY();
  const theme = useTheme();
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <TopButton
      type="button"
      onClick={handleScrollToTop}
      theme={theme}
      screenY={screenY}
    >
      <i className="fas fa-arrow-up"></i>
    </TopButton>
  );
}

export default ScrollToTopButton;

const TopButton = styled.button<{ theme: ColorTypes; screenY: number }>`
  position: absolute;
  right: ${common.fontSize.fs40};
  bottom: 124px;

  display: ${props => (props.screenY >= 900 ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;

  width: ${common.fontSize.fs48};
  height: ${common.fontSize.fs48};

  border-radius: 50%;

  background-color: ${props => props.theme.primary20};
  color: white;

  cursor: pointer;
  z-index: 1;

  &:hover {
    background-color: ${props => props.theme.primary40};
  }
`;
