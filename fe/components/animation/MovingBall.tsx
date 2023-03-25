import React, { useRef, useEffect } from 'react';
import { BallReturn } from '../../types/movingBallTypes';

import useAnimationFrame from '../../hooks/useAnimationFrame';

function MovingBall() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const Ball = (color: string) => {
    return {
      color,
      nNodes: 140,
      transferSpeed: 0.2,
      propagationSpeed: 0.2,
      resistance: 0.9,

      wo: 0,
      ho: 0,
      lastColor: undefined as number | undefined,
      dxNode: 0,
      mouse: {
        x: 0,
        y: 0,
        xo: undefined as number | undefined,
        yo: undefined as number | undefined,
        limit: 50,
      },
      mouseX: 0,
      mouseY: 0,
      velocity: 0,
      direction: 0,
      mouseRadius: 0,
      x: [] as number[],
      y: [] as number[],
      x0: [] as number[],
      y0: [] as number[],
      vx: [] as number[],
      vy: [] as number[],
    };
  };

  const ballRef = useRef<BallReturn>(Ball('red'));

  const resizeScreen = (ball: BallReturn) => {
    ball.wo = canvasRef.current?.width || 0;
    ball.ho = canvasRef.current?.height || 0;
    ball.dxNode = ball.wo / ball.nNodes;

    for (let i = 0; i <= ball.nNodes; i++) {
      ball.x[i] = ball.dxNode * i;
      ball.x0[i] = ball.dxNode * i;
    }
  };

  const init = (ball: BallReturn) => {
    resizeScreen(ball);
    for (let i = 0; i <= ball.nNodes; i++) {
      ball.x[i] = ball.dxNode * i;
      ball.y[i] = ball.ho / 2;

      ball.x0[i] = ball.x[i];
      ball.y0[i] = ball.y[i];

      ball.vx[i] = 5 * Math.random() - 2.5;
      ball.vy[i] = 5 * Math.random() - 2.5;
      // ball.vx[i] = 0;
      // ball.vy[i] = 0;
    }
    ballRef.current = ball;
  };

  const distance = (x: number, y: number, x0: number, y0: number) => {
    x -= x0;
    y -= y0;
    return Math.sqrt(x * x + y * y);
  };

  const nodeTransfer = (ball: BallReturn) => {
    let dvx = 0;
    let dvy = 0;
    for (let i = 0; i <= ball.nNodes; i++) {
      if (i === 0) {
        dvx = ball.x[i + 1] + ball.x[ball.nNodes] - 2 * ball.x[i];
        dvy = ball.y[i + 1] + ball.y[ball.nNodes] - 2 * ball.y[i];
      } else if (i === ball.nNodes) {
        dvx = ball.x[i - 1] + ball.x[0] - 2 * ball.x[i];
        dvy = ball.y[i - 1] + ball.y[0] - 2 * ball.y[i];
      } else {
        dvx = ball.x[i + 1] + ball.x[i - 1] - 2 * ball.x[i];
        dvy = ball.y[i + 1] + ball.y[i - 1] - 2 * ball.y[i];
      }

      dvx *= ball.propagationSpeed;
      dvy *= ball.propagationSpeed;

      ball.vx[i] = (ball.vx[i] + dvx) * ball.resistance;
      ball.vy[i] = (ball.vy[i] + dvy) * ball.resistance;
    }
  };

  const nodeMove = (ball: BallReturn) => {
    for (let i = 0; i <= ball.nNodes; i++) {
      ball.y[i] += ball.vy[i];
      ball.vy[i] += (ball.y0[i] - ball.y[i]) / 100;

      if (i !== 0 && i !== ball.nNodes) {
        ball.x[i] += ball.vx[i];
        ball.vx[i] += (ball.x0[i] - ball.x[i]) / 100;
      } else {
        ball.vx[i] = 0;
      }
    }
  };

  const nodeDraw = (ball: BallReturn, ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, ball.wo, ball.ho);
    ctx.beginPath();
    ctx.fillStyle = ball.color;

    const step = (2 * Math.PI) / ball.nNodes;
    const w = ball.wo / 2;
    const h = ball.ho / 2;
    let r = 100;
    let i = 0;

    for (let theta = 0; theta < 2 * Math.PI; theta += step) {
      i = theta / step;
      r = (ball.y[i] / h) * (h / 1.5);

      const x = w + r * Math.cos(theta);
      const y = h - r * Math.sin(theta);

      ctx.lineTo(x, y);
    }

    ctx.fill();
    ctx.closePath();
  };

  const loop = (ball: BallReturn, ctx: CanvasRenderingContext2D) => {
    if (ball.mouse.xo === undefined || ball.mouse.yo === undefined) {
      ball.mouse.xo = ball.mouseX;
      ball.mouse.yo = ball.mouseY;
    }

    const dx = ball.mouseX - ball.mouse.xo;
    const dy = ball.mouseY - ball.mouse.yo;
    const dist = distance(ball.wo / 2, ball.ho / 2, ball.mouseX, ball.mouseY);

    if (ball.mouseRadius !== dist) {
      ball.direction = 1;
      if (ball.mouseRadius > dist) {
        ball.direction = -1;
      }
      ball.mouseRadius = dist;
    }

    ball.velocity *= ball.direction;

    ball.mouse.x = Math.max(Math.min(dx, ball.mouse.limit), -ball.mouse.limit);
    ball.mouse.y = Math.max(
      Math.min(ball.velocity, ball.mouse.limit),
      -ball.mouse.limit,
    );

    ball.velocity = Math.sqrt(dx * dx + dy * dy) * 1.5;

    nodeTransfer(ball);
    nodeMove(ball);
    nodeDraw(ball, ctx);

    ball.mouse.xo = ball.mouseX;
    ball.mouse.yo = ball.mouseY;
  };

  const action = (ball: BallReturn, ctx: CanvasRenderingContext2D) => {
    const c = ctx.getImageData(ball.mouseX, ball.mouseY, 1, 1).data;
    if (!c) return;
    const newColor = c[0];
    if (ball.lastColor === undefined) {
      ball.lastColor = newColor;
      return;
    }

    if (ball.lastColor !== newColor) {
      let i = 0;
      let closeNode = Math.round(ball.mouseX / ball.dxNode);
      let dist = 0;

      const step = (2 * Math.PI) / ball.nNodes;
      const w = ball.wo / 2;
      const h = ball.ho / 2;
      let r = 100;

      const angleRadius = Math.atan2(
        ball.ho / 2 - ball.mouseY,
        ball.wo / 2 - ball.mouseX,
      );
      const x1 = w - r * Math.cos(angleRadius);
      const y1 = h - r * Math.sin(angleRadius);
      let theta;
      for (theta = 0; theta < 2 * Math.PI; theta += step) {
        i = theta / step;
        r = (ball.y[i] / h) * (h / 1.5);

        const x2 = w - r * Math.cos(theta);
        const y2 = h + r * Math.sin(theta);

        const newDist = distance(x1, y1, x2, y2);
        if (dist < newDist) {
          dist = newDist;
          closeNode = i;
        }
      }

      const yStrong = Math.ceil(Math.abs(ball.mouse.y) / 7);
      if (yStrong === 0) return;

      for (i = 0; i <= ball.nNodes; i++) {
        const nodeDist = Math.abs(closeNode - i);

        theta =
          Math.max((yStrong - nodeDist) / yStrong, 0) * Math.PI - Math.PI / 2;
        const yRange = (Math.sin(theta) + 1) / 2;

        const dv = ball.transferSpeed * ball.mouse.y * yRange;

        ball.vx[i] += dv * (ball.mouse.x / ball.mouse.y) * 0.5;
        ball.vy[i] += dv;
      }
    }
    ball.lastColor = newColor;
  };

  const mouseMoveHandler = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ballRef.current.mouseX = e.clientX;
    ballRef.current.mouseY = e.clientY;
    action(ballRef.current, ctx);
  };

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    loop(ballRef.current, ctx);
  };

  const resizeHandler = () => {
    resizeScreen(ballRef.current);
  };

  useAnimationFrame(draw, 0);

  useEffect(() => {
    const ball = Ball('red');
    init(ball);
    ballRef.current = ball;
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  return (
    <canvas
      width={500}
      height={500}
      ref={canvasRef}
      onMouseMove={mouseMoveHandler}
    />
  );
}

export default MovingBall;
