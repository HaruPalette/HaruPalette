import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import useTheme from '../../hooks/useTheme';
import { ColorTheme } from '../../styles/theme';

function Pulse() {
  const theme = useTheme();
  return (
    <Container>
      <Circle1 theme={theme} />
      <Circle2 theme={theme} />
      <Circle3 theme={theme} />
    </Container>
  );
}

const pulse = keyframes`
    25% {
		opacity: 0.4;
	}
	
	100% {
		transform: scale(1);
	}
`;

const Container = styled.div`
  z-index: -1;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: absolute;
`;

const Circle1 = styled.div<{ theme: ColorTheme }>`
  width: 1200px;
  height: 1200px;
  border-radius: 1200px;
  margin: auto;
  transform: scale(0);
  opacity: 0;
  background: ${props => props.theme.primary20};
  animation: ${pulse} 2s cubic-bezier(0.5, 0.5, 0, 1) infinite;
  position: absolute;
  top: calc(50% - 600px);
  left: calc(50% - 600px);
  @media all and(max-width: 960px) {
    width: 968px;
    height: 968px;
    top: calc(50% - 484px);
    left: calc(50% - 484px);
  }
  @media all and(max-width: 480px) {
    width: 750px;
    height: 750px;
    top: calc(50% - 375px);
    left: calc(50% - 375px);
  }
`;

const Circle2 = styled.div<{ theme: ColorTheme }>`
  width: 1200px;
  height: 1200px;
  border-radius: 1200px;
  margin: auto;
  transform: scale(0);
  opacity: 0;
  background: ${props => props.theme.primary60};
  animation: ${pulse} 2s 0.75s cubic-bezier(0.5, 0.5, 0, 1) infinite;
  position: absolute;
  top: calc(50% - 600px);
  left: calc(50% - 600px);
  @media all and(max-width: 960px) {
    width: 968px;
    height: 968px;
    top: calc(50% - 484px);
    left: calc(50% - 484px);
  }
  @media all and(max-width: 480px) {
    width: 750px;
    height: 750px;
    top: calc(50% - 375px);
    left: calc(50% - 375px);
  }
`;

const Circle3 = styled.div<{ theme: ColorTheme }>`
  width: 1200px;
  height: 1200px;
  border-radius: 1200px;
  margin: auto;
  transform: scale(0);
  opacity: 0;
  background: ${props => props.theme.primary40};
  animation: ${pulse} 2s 1.5s cubic-bezier(0.5, 0.5, 0, 1) infinite;
  position: absolute;
  top: calc(50% - 600px);
  left: calc(50% - 600px);
  @media all and(max-width: 960px) {
    width: 968px;
    height: 968px;
    top: calc(50% - 484px);
    left: calc(50% - 484px);
  }
  @media all and(max-width: 480px) {
    width: 750px;
    height: 750px;
    top: calc(50% - 375px);
    left: calc(50% - 375px);
  }
`;

export default Pulse;
