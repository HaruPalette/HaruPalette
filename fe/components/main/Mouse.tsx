import { ColorTypes, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import useTheme from '../../hooks/useTheme';

const mouseWheel = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(6px);
  }
`;

const mouseScroll = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

const MouseWrapper = styled.button`
  position: fixed;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: 999;
`;

const MouseIcon = styled.div<{ theme: ColorTypes }>`
  height: 35px;
  width: 22px;
  border-radius: 12px;
  border: 2px solid ${props => props.theme.color};
  position: relative;

  &::after {
    content: '';
    height: 5px;
    width: 3px;
    display: block;
    margin: 5px auto;
    border: 2px solid ${props => props.theme.color};
    border-radius: 8px;
    animation: ${mouseWheel} 1s linear infinite;
  }
`;

const MouseArrow = styled.div<{ theme: ColorTypes }>`
  display: block;
  transform: rotate(45deg);
  border-right: 2px solid ${props => props.theme.color};
  border-bottom: 2px solid ${props => props.theme.color};
  margin: 2px 0 3px 6px;
  width: 8px;
  height: 8px;
  animation: ${mouseScroll} 1s infinite;
  animation-delay: 100ms;
  animation-direction: alternate;

  &::before,
  &::after {
    content: '';
    position: absolute;
    display: block;
    border-right: 2px solid ${props => props.theme.color};
    border-bottom: 2px solid ${props => props.theme.color};
    width: 8px;
    height: 8px;
    animation: ${mouseScroll} 1s infinite;
  }

  &::after {
    margin: 7px 0 3px 7px;
    animation-delay: 200ms;
    animation-direction: alternate;
  }

  &::before {
    margin: 14px 0 3px 14px;
    animation-delay: 300ms;
    animation-direction: alternate;
  }
`;
function Mouse(props: { top: number }) {
  const { top } = props;
  const theme = useTheme();

  const handleNextSection = () => {
    window.scrollTo({
      top,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <MouseWrapper type="button" onClick={handleNextSection}>
      <MouseIcon theme={theme} />
      <MouseArrow theme={theme} />
    </MouseWrapper>
  );
}

export default Mouse;
