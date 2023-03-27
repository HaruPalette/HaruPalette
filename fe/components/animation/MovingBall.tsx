import React, { useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import { BallReturn } from '../../types/movingBallTypes';
import useAnimationFrame from '../../hooks/useAnimationFrame';

const SangukIsGod = styled.canvas`
  position: relative;
`;

function MovingBall() {
  // const { top, left, width, height, color } = props.ballData;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const Ball = (
    color: string,
    sX: number,
    sY: number,
    width: number,
    height: number,
  ) => {
    return {
      color,
      nNodes: 140,
      transferSpeed: 0.2,
      propagationSpeed: 0.2,
      resistance: 0.9,

      wo: width,
      ho: height,
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

      resizeScreen() {
        this.dxNode = this.wo / this.nNodes;

        for (let i = 0; i <= this.nNodes; i++) {
          this.x[i] = this.dxNode * i;
          this.y[i] = this.ho / 2;

          this.x0[i] = this.x[i];
          this.y0[i] = this.y[i];
        }
      },

      init() {
        this.resizeScreen();
        for (let i = 0; i <= this.nNodes; i++) {
          // 찌리릿
          this.vx[i] = 5 * Math.random() - 2.5;
          this.vy[i] = 5 * Math.random() - 2.5;

          this.vx[i] = 0;
          this.vy[i] = 0;
        }
      },

      distance(x: number, y: number, x0: number, y0: number) {
        const nx = x - x0;
        const ny = y - y0;
        return Math.sqrt(nx * nx + ny * ny);
      },

      nodeTransfer() {
        let dvx = 0;
        let dvy = 0;
        for (let i = 0; i <= this.nNodes; i++) {
          if (i === 0) {
            dvx = this.x[i + 1] + this.x[this.nNodes] - 2 * this.x[i];
            dvy = this.y[i + 1] + this.y[this.nNodes] - 2 * this.y[i];
          } else if (i === this.nNodes) {
            dvx = this.x[i - 1] + this.x[0] - 2 * this.x[i];
            dvy = this.y[i - 1] + this.y[0] - 2 * this.y[i];
          } else {
            dvx = this.x[i + 1] + this.x[i - 1] - 2 * this.x[i];
            dvy = this.y[i + 1] + this.y[i - 1] - 2 * this.y[i];
          }

          dvx *= this.propagationSpeed;
          dvy *= this.propagationSpeed;

          this.vx[i] = (this.vx[i] + dvx) * this.resistance;
          this.vy[i] = (this.vy[i] + dvy) * this.resistance;
        }
      },

      nodeMove() {
        for (let i = 0; i <= this.nNodes; i++) {
          this.y[i] += this.vy[i];
          this.vy[i] += (this.y0[i] - this.y[i]) / 100;

          if (i !== 0 && i !== this.nNodes) {
            this.x[i] += this.vx[i];
            this.vx[i] += (this.x0[i] - this.x[i]) / 100;
          } else {
            this.vx[i] = 0;
          }
        }
      },

      nodeDraw(ctx: CanvasRenderingContext2D) {
        ctx.clearRect(0, 0, this.wo, this.ho);
        ctx.beginPath();
        ctx.fillStyle = this.color;

        const step = (2 * Math.PI) / this.nNodes;
        const w = sX + this.wo / 2;
        const h = sY + this.ho / 2;
        let r = 100;
        let i = 0;

        for (let theta = 0; theta < 2 * Math.PI; theta += step) {
          i = theta / step;
          r = (this.y[i] / h) * (h / 1.5);

          const x = w + r * Math.cos(theta);
          const y = h - r * Math.sin(theta);

          ctx.lineTo(x, y);
        }

        ctx.fill();
        ctx.closePath();
      },

      loop(ctx: CanvasRenderingContext2D) {
        if (this.mouse.xo === undefined || this.mouse.yo === undefined) {
          this.mouse.xo = this.mouseX;
          this.mouse.yo = this.mouseY;
        }

        const dx = this.mouseX - this.mouse.xo;
        const dy = this.mouseY - this.mouse.yo;
        const dist = this.distance(
          sX + this.wo / 2,
          sY + this.ho / 2,
          this.mouseX,
          this.mouseY,
        );

        if (this.mouseRadius !== dist) {
          this.direction = 1;
          if (this.mouseRadius > dist) {
            this.direction = -1;
          }
          this.mouseRadius = dist;
        }

        this.velocity *= this.direction;

        this.mouse.x = Math.max(
          Math.min(dx, this.mouse.limit),
          -this.mouse.limit,
        );
        this.mouse.y = Math.max(
          Math.min(this.velocity, this.mouse.limit),
          -this.mouse.limit,
        );

        this.velocity = Math.sqrt(dx * dx + dy * dy) * 1.5;

        this.nodeTransfer();
        this.nodeMove();

        this.mouse.xo = this.mouseX;
        this.mouse.yo = this.mouseY;
      },

      action(ctx: CanvasRenderingContext2D) {
        const c = ctx.getImageData(this.mouseX, this.mouseY, 1, 1).data;
        if (!c) return;
        // if (
        //   this.mouseX - w > width / 2 + 10 ||
        //   this.mouseY - h > height / 2 + 10
        // )
        //   return;
        const newColor = c[0];
        if (this.lastColor === undefined) {
          this.lastColor = newColor;
          return;
        }

        if (this.lastColor !== newColor) {
          let i = 0;
          let closeNode = Math.round(this.mouseX / this.dxNode);
          let dist = 0;
          const w = sX + this.wo / 2;
          const h = sY + this.ho / 2;
          const step = (2 * Math.PI) / this.nNodes;

          let r = 100;

          const angleRadius = Math.atan2(
            sY + this.ho / 2 - this.mouseY,
            sX + this.wo / 2 - this.mouseX,
          );
          const x1 = w - r * Math.cos(angleRadius);
          const y1 = h - r * Math.sin(angleRadius);
          let theta;
          for (theta = 0; theta < 2 * Math.PI; theta += step) {
            i = theta / step;
            r = (this.y[i] / h) * (h / 1.5);

            const x2 = w - r * Math.cos(theta);
            const y2 = h + r * Math.sin(theta);

            const newDist = this.distance(x1, y1, x2, y2);
            if (dist < newDist) {
              dist = newDist;
              closeNode = i;
            }
          }

          const yStrong = Math.ceil(Math.abs(this.mouse.y) / 7);
          if (yStrong === 0) return;

          for (i = 0; i <= this.nNodes; i++) {
            const nodeDist = Math.abs(closeNode - i);

            theta =
              Math.max((yStrong - nodeDist) / yStrong, 0) * Math.PI -
              Math.PI / 2;
            const yRange = (Math.sin(theta) + 1) / 2;

            const dv = this.transferSpeed * this.mouse.y * yRange;

            this.vx[i] += dv * (this.mouse.x / this.mouse.y) * 0.5;
            this.vy[i] += dv;
          }
        }
        this.lastColor = newColor;
      },
    };
  };

  const ballRef = useRef<BallReturn[]>([]);

  const mouseMoveHandler = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    for (let i = 0; i < ballRef.current.length; i++) {
      ballRef.current[i].mouseX = e.clientX;
      ballRef.current[i].mouseY = e.clientY;
      ballRef.current[i].action(ctx);
    }
  };

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < ballRef.current.length; i++) {
      ballRef.current[i].loop(ctx);
      ballRef.current[i].nodeDraw(ctx);
    }
  };

  const resizeHandler = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    for (let i = 0; i < ballRef.current.length; i++) {
      ballRef.current[i].resizeScreen();
    }
  };

  useAnimationFrame(draw, 0);

  const colors = ['', 'red', 'blue', 'green'];

  useEffect(() => {
    for (let i = 1; i <= 3; i++) {
      const ball = Ball(colors[i], i * 250, 250, 200, 200);
      ball.init();
      ballRef.current.push(ball);
    }
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  return (
    <SangukIsGod
      width={1000}
      height={500}
      ref={canvasRef}
      onMouseMove={mouseMoveHandler}
    />
  );
}

export default MovingBall;
