import styled from '@emotion/styled';
import { useRef, useState } from 'react';

interface BallData {
  top: string;
  left: string;
  width: number;
  height: number;
  color: string;
}

interface Coordinate {
  x: number;
  y: number;
}

function Ball(props: { ballData: BallData }) {
  const ballData = props.ballData;
  const ballRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState<Coordinate | undefined>(
    undefined,
  );

  window.onmousemove = e => {
    let winPercent = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      },
      distFromCenter =
        1 -
        Math.abs(((e.clientX - window.innerWidth / 2) / window.innerWidth) * 2);

    setMousePosition({ x: winPercent.x, y: winPercent.y });
  };

  console.log(mousePosition);
  return (
    <BallCanvas
      id="ball"
      ballData={ballData}
      width={ballData.width}
      height={ballData.height}
      ref={ballRef}
    ></BallCanvas>
  );
}

export default Ball;

const BallCanvas = styled.canvas<{ ballData: BallData }>`
  position: absolute;

  top: ${props => props.ballData.top};
  left: ${props => props.ballData.left};

  border-radius: 50%;
  background: ${props => props.ballData.color};
`;
