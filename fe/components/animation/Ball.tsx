import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';

interface BallData {
  top: number;
  left: number;
  width: number;
  height: number;
  color: string;
}

interface MousePosition {
  x: number;
  y: number;
  distFromCenter: number;
}

function Ball(props: { ballData: BallData }) {
  const ballData = props.ballData;
  const ballRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    distFromCenter: 0,
  });

  useEffect(() => {
    window.onmousemove = e => {
      let winPercent = {
          x: e.clientX / window.innerWidth,
          y: e.clientY / window.innerHeight,
        },
        distFromCenter =
          1 -
          Math.abs(
            ((e.clientX - window.innerWidth / 2) / window.innerWidth) * 2,
          );

      setMousePosition({
        x: winPercent.x,
        y: winPercent.y,
        distFromCenter: distFromCenter,
      });
    };
  }, []);

  return (
    <BallCanvas
      id="ball"
      ballData={ballData}
      mousePosition={mousePosition}
      width={ballData.width}
      height={ballData.height}
      ref={ballRef}
    ></BallCanvas>
  );
}

export default Ball;

const ballScale = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.5);
  }

  100% {
    transform: scale(1);
  }
`;

const BallCanvas = styled.canvas<{
  ballData: BallData;
  mousePosition: MousePosition;
}>`
  position: absolute;
  will-change: auto;

  top: ${props => props.ballData.top - 50 * props.mousePosition.y}px;
  left: ${props => props.ballData.left - 50 * props.mousePosition.x}px;

  border-radius: 50%;
  background: ${props => props.ballData.color};

  &:hover {
    animation: ${ballScale} 2s ease-in-out infinite;
  }
`;
