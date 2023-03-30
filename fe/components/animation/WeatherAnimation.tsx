import { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import useAnimationFrame from '../../hooks/useAnimationFrame';

const WeatherCanvas = styled.canvas`
  position: absolute;
`;

function WeatherAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const totalRef = useRef<number>(50);

  const randomBetween = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  class Rain {
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
      ctx.strokeStyle = 'black';
      ctx.stroke();
    }

    splash;

    animate() {
      this.x += this.velocity.x;
      this.y += this.velocity.y;
      if (this.y >= window.innerHeight) {
        // this.splash();
        this.x = randomBetween(0, window.innerWidth);
        this.y = -20;
      }
      this.draw();
    }
  }

  class Drop {
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
      ctx.arc(x, y, 1.5, 0, Math.PI * 2, false);
      ctx.fillStyle = '#8899a6';
      ctx.fill();
    }

    animate() {
      this.x += this.velocity.x;
      this.y += this.velocity.y;
      if (this.y >= window.innerHeight) {
        this.x = randomBetween(0, window.innerWidth);
        this.y = -20;
      }
      this.draw();
    }
  }

  const rainListRef = useRef<Rain[]>([]);
  const dropListRef = useRef<Drop[]>([]);

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
      rainListRef.current.push(new Rain(x, y, velocity));
    }
  };

  useAnimationFrame(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    rainListRef.current.forEach(rain => rain.animate());
    dropListRef.current.forEach(drop => drop.draw());
  }, 0);

  const resizeHandler = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  useEffect(() => {
    resizeHandler();
    init();
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  return <WeatherCanvas ref={canvasRef} />;
}

export default WeatherAnimation;
