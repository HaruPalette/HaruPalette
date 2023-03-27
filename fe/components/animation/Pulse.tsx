import { ColorTypes, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import useTheme from '../../hooks/useTheme';

const transform = keyframes`
    0%,
  100% { border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%; } 
   14% {  border-radius: 40% 60% 54% 46% / 49% 60% 40% 51%; } 
   28% { border-radius: 50% 50% 50% 50% / 55% 50% 50% 50%; } 
   56% {  border-radius: 61% 39% 67% 33% / 70% 50% 50% 30%; } 
   70% { border-radius: 50% 50% 34% 66% / 56% 68% 32% 44%; } 
   84% { border-radius: 46% 54% 50% 50% / 35% 61% 39% 65%; } 
`;

const pulse = keyframes`
    25% {
		opacity: .4;
	}
	
	100% {
		transform: scale(1);
	}
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: absolute;
`;

const Circle1 = styled.div<{ theme: ColorTypes }>`
  width: 1200px;
  height: 1200px;
  border-radius: 1200px;
  margin: auto;
  transform: scale(0);
  opacity: 0;
  background-color: ${props => props.theme.primary20};
  transform-style: preserve-3d;
  animation: ${pulse} 2s cubic-bezier(0.5, 0.5, 0, 1) infinite,
    ${transform} 3s ease-in-out infinite both alternate;

  position: absolute;
  top: calc(50% - 600px);
  left: calc(50% - 600px);
  @media all and (max-width: 960px) {
    width: 968px;
    height: 968px;
    top: calc(50% - 484px);
    left: calc(50% - 484px);
  }
  @media all and (max-width: 480px) {
    width: 500px;
    height: 500px;
    top: calc(50% - 250px);
    left: calc(50% - 250px);
  }
`;

const Circle2 = styled.div<{ theme: ColorTypes }>`
  width: 1200px;
  height: 1200px;
  border-radius: 1200px;
  margin: auto;
  transform: scale(0);
  opacity: 0;
  background-color: ${props => props.theme.primary40};
  transform-style: preserve-3d;
  animation: ${pulse} 2s 0.75s cubic-bezier(0.5, 0.5, 0, 1) infinite,
    ${transform} 4s ease-in-out infinite both alternate;

  position: absolute;
  top: calc(50% - 600px);
  left: calc(50% - 600px);
  @media all and (max-width: 960px) {
    width: 968px;
    height: 968px;
    top: calc(50% - 484px);
    left: calc(50% - 484px);
  }
  @media all and (max-width: 480px) {
    width: 500px;
    height: 500px;
    top: calc(50% - 250px);
    left: calc(50% - 250px);
  }
`;

const Circle3 = styled.div<{ theme: ColorTypes }>`
  width: 1200px;
  height: 1200px;
  border-radius: 1200px;
  margin: auto;
  transform: scale(0);
  opacity: 0;
  background-color: ${props => props.theme.primary60};
  transform-style: preserve-3d;
  animation: ${pulse} 2s 1.5s cubic-bezier(0.5, 0.5, 0, 1) infinite,
    ${transform} 5s ease-in-out infinite both alternate;

  position: absolute;
  top: calc(50% - 600px);
  left: calc(50% - 600px);
  @media all and (max-width: 960px) {
    width: 968px;
    height: 968px;
    top: calc(50% - 484px);
    left: calc(50% - 484px);
  }
  @media all and (max-width: 480px) {
    width: 500px;
    height: 500px;
    top: calc(50% - 250px);
    left: calc(50% - 250px);
  }
`;

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

export default Pulse;
