import { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import useAnimationFrame from '../../hooks/useAnimationFrame';

const SnowCanvas = styled.canvas`
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #000;
  background-image: linear-gradient(
    to top,
    rgba(255, 255, 255, 0.7) 0%,
    rgba(255, 255, 255, 0.5) 5%,
    rgba(255, 255, 255, 0.1) 70%
  );
  position: fixed;
  z-index: 0;
`;

function SnowAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const totalRef = useRef<number>(200);

  const randomBetween = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  class Snow {
    color: string;
    x: number;
    y: number;
    velocity: { x: number; y: number };
    radius: number;
    opacity: number;
    opacityRate: number;

    constructor() {
      this.color = '155, 155, 155';
      // this.color = '255, 255, 255';
      this.x = randomBetween(0, window.innerWidth);
      this.y = randomBetween(-(window.innerHeight * 0.2), window.innerHeight);
      this.radius = randomBetween(10, 20) / 5;
      this.velocity = {
        x: randomBetween(-3, 3),
        y: randomBetween(2, 5),
      };
      this.opacity = randomBetween(1, 10) / 10;
      this.opacityRate = randomBetween(1, 3) / 100;
    }
    reset() {
      this.x = randomBetween(0, window.innerWidth);
      this.y = randomBetween(-(window.innerHeight * 0.2), window.innerHeight);
      this.velocity = {
        x: randomBetween(-3, 3),
        y: randomBetween(2, 5),
      };
      this.radius = randomBetween(10, 20) / 5;
      this.opacity = randomBetween(-10, 0) / 10;
      this.opacityRate = randomBetween(3, 5) / 100;
    }

    draw() {
      const ctx = canvasRef.current?.getContext('2d');
      if (!ctx) return;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.shadowColor = '#9b9b9b';
      ctx.shadowBlur = 15;
      ctx.shadowOffsetY = 1;
      ctx.shadowOffsetX = 1;
      ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
      ctx.strokeStyle = `rgba(${this.color}, ${this.opacity})`;
      ctx.fill();
      ctx.stroke();
      ctx.closePath();
    }

    update() {
      this.x += this.velocity.x;
      this.y += this.velocity.y;
      this.opacity += this.opacityRate;
      if (this.opacity > 2) {
        this.opacityRate *= -1;
      } else if (this.opacity < 0 && this.opacityRate < 0) {
        this.reset();
      }
    }
  }

  class Snow2 {
    x: number;
    y: number;
    radius: number;
    opacity: number;
    opacityRate: number;
    color: string;

    constructor() {
      this.x = randomBetween(0, window.innerWidth);
      this.y = randomBetween(0, window.innerHeight);
      this.radius = randomBetween(0, 10) / 10;
      this.opacity = randomBetween(-10, 0) / 10;
      this.opacityRate = 0.01;
      this.color = '155, 155, 155';
    }
    reset() {
      this.x = randomBetween(0, window.innerWidth);
      this.y = randomBetween(0, window.innerHeight);
      this.radius = randomBetween(0, 10) / 10;
      this.opacity = randomBetween(-10, 0) / 10;
      this.opacityRate = 0.01;
    }
    draw() {
      const ctx = canvasRef.current?.getContext('2d');
      if (!ctx) return;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
      ctx.strokeStyle = `rgba(${this.color}, ${this.opacity})`;
      ctx.fill();
      ctx.stroke();
      ctx.closePath();
    }
    update() {
      this.y -= 0.1;
      this.opacity += this.opacityRate;
      if (this.opacity > 1.5) {
        this.opacityRate *= -1;
      } else if (this.opacity < 0 && this.opacityRate < 0) {
        this.reset();
      }
    }
  }

  const snowRef = useRef<Snow[]>([]);
  const snow2Ref = useRef<Snow2[]>([]);

  useAnimationFrame(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    for (let i = 0; i < totalRef.current; i++) {
      snowRef.current[i].draw();
      snowRef.current[i].update();
      snow2Ref.current[i].draw();
      snow2Ref.current[i].update();
    }
  }, 0);

  const resizeHandler = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    snowRef.current = [];
    snow2Ref.current = [];
    for (let i = 0; i < totalRef.current; i++) {
      snowRef.current.push(new Snow());
      snow2Ref.current.push(new Snow2());
    }
  };

  const init = () => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;
    resizeHandler();
  };

  useEffect(() => {
    init();
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  return <SnowCanvas ref={canvasRef} />;
}

export default SnowAnimation;
