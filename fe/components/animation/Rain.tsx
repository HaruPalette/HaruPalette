import { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import useAnimationFrame from '../../hooks/useAnimationFrame';

const RainCanvas = styled.canvas`
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(to bottom, #222b33, #12171b);
  position: fixed;
  z-index: 0;
`;

function Rain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<{ x: number; y: number; isActive: boolean }>({
    x: 0,
    y: 0,
    isActive: false,
  });
  const totalRef = useRef<number>(50);
  const THUNDER_RATE = 0.007;

  const randomBetween = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  class Drop {
    x: number;
    y: number;
    velocity: { x: number; y: number };
    gravity: number;

    constructor(x: number, y: number, velocity: { x: number; y: number }) {
      this.x = x;
      this.y = y;
      this.velocity = velocity;
      this.gravity = 1.5;
    }

    draw() {
      const { x, y } = this;
      const ctx = canvasRef.current?.getContext('2d');
      if (!ctx) return;
      ctx.beginPath();
      ctx.arc(x, y, 1.5, 0, Math.PI * 2, false);
      ctx.fillStyle = '#8899a6';
      ctx.fill();
    }

    animate() {
      this.velocity.y += this.gravity;
      this.x += this.velocity.x;
      this.y += this.velocity.y;
      this.draw();
    }
  }

  const dropListRef = useRef<Drop[]>([]);

  class Thunder {
    opacity: number;

    constructor() {
      this.opacity = 0;
    }

    draw() {
      const ctx = canvasRef.current?.getContext('2d');
      if (!ctx) return;
      const gradient = ctx.createLinearGradient(0, 0, 0, window.innerHeight);
      gradient.addColorStop(0, `rgba(66, 84, 99, ${this.opacity})`);
      gradient.addColorStop(1, `rgba(18, 23, 27, ${this.opacity})`);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    }

    animate() {
      if (this.opacity < 0) return;
      this.opacity -= 0.005;
      this.draw();
    }
  }

  const thunderRef = useRef<Thunder>(new Thunder());

  class RainElem {
    x: number;
    y: number;
    velocity: { x: number; y: number };

    constructor(x: number, y: number, velocity: { x: number; y: number }) {
      this.x = x;
      this.y = y;
      this.velocity = velocity;
    }

    draw() {
      const { x, y } = this;
      const ctx = canvasRef.current?.getContext('2d');
      if (!ctx) return;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + this.velocity.x * 2, y + this.velocity.y * 2);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
      // ctx.strokeStyle = '#9b9b9b';
      ctx.stroke();
    }

    splash() {
      for (let i = 0; i < 3; i++) {
        const velocity = {
          x: -this.velocity.x + randomBetween(-2, 2),
          y: -this.velocity.y + randomBetween(5, 10),
        };
        dropListRef.current.push(
          new Drop(this.x, window.innerHeight, velocity),
        );
      }
    }

    animate() {
      if (this.y > window.innerHeight) {
        this.splash();
        this.x = randomBetween(
          -window.innerWidth * 0.2,
          window.innerWidth * 1.2,
        );
        this.y = -20;
      }
      this.velocity.x = mouseRef.current.isActive
        ? randomBetween(-1, 1) +
          (-window.innerWidth / 2 + mouseRef.current.x) / 100
        : randomBetween(-1, 1);
      this.x += this.velocity.x;
      this.y += this.velocity.y;
      this.draw();
    }
  }

  const rainListRef = useRef<RainElem[]>([]);

  const init = () => {
    rainListRef.current = [];
    dropListRef.current = [];
    for (let i = 0; i < totalRef.current; i++) {
      const x = randomBetween(0, window.innerWidth);
      const y = randomBetween(0, window.innerHeight);
      const velocity = {
        x: randomBetween(-1, 1),
        y: randomBetween(13, 18),
      };
      rainListRef.current.push(new RainElem(x, y, velocity));
    }
  };

  useAnimationFrame(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    if (Math.random() < THUNDER_RATE) thunderRef.current.opacity = 1;
    thunderRef.current.animate();
    rainListRef.current.forEach(rain => rain.animate());
    dropListRef.current.forEach((drop, index) => {
      drop.animate();
      if (drop.y > window.innerHeight) dropListRef.current.splice(index, 1);
    });
  }, 0);

  const resizeHandler = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
  };

  useEffect(() => {
    resizeHandler();
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  return (
    <RainCanvas
      ref={canvasRef}
      onMouseEnter={() => {
        mouseRef.current.isActive = true;
      }}
      onMouseLeave={() => {
        mouseRef.current.isActive = false;
      }}
      onMouseMove={e => {
        mouseRef.current.x = e.clientX;
        mouseRef.current.y = e.clientY;
      }}
    />
  );
}

export default Rain;
