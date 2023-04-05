import { useEffect, useRef } from 'react';
import { weatherTypes } from '@emotion/react';
import styled from '@emotion/styled';
import useAnimationFrame from '../../hooks/useAnimationFrame';
import { useAppSelector } from '../../hooks/reduxHook';
import { selectTheme } from '../../store/modules/theme';
import { weatherDark, weatherLight } from '../../styles/weather';

const RainCanvas = styled.canvas<{ theme: weatherTypes }>`
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: ${props => props.theme.rain};
  position: fixed;
  z-index: 0;
`;

function Rain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const totalRef = useRef<number>(50);
  const THUNDER_RATE = 0.003;
  const isDark = useAppSelector(selectTheme);
  const theme = isDark ? weatherDark : weatherLight;
  const audioRef = useRef<HTMLAudioElement>(null);

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
      ctx.fillStyle = isDark ? '#8899a6' : `rgba(255, 255, 255, 0.7)`;
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
      if (isDark) {
        gradient.addColorStop(0, `rgba(96, 114, 129, ${this.opacity})`);
        gradient.addColorStop(1, `rgba(18, 23, 27, ${this.opacity})`);
      } else {
        gradient.addColorStop(0, `rgba(14, 15, 55, ${this.opacity})`);
        gradient.addColorStop(0.95, `rgba(150, 224, 240, ${this.opacity})`);
        gradient.addColorStop(1, `rgba(250, 150, 100, ${this.opacity})`);
      }
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
      // this.velocity.x = mouseRef.current.isActive
      //   ? randomBetween(-1, 1) +
      //     (-window.innerWidth / 2 + mouseRef.current.x) / 100
      //   : randomBetween(-1, 1);
      this.x += this.velocity.x;
      this.y += this.velocity.y;
      this.draw();
    }
  }

  const rainListRef = useRef<RainElem[]>([]);

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

  const resizeHandler = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
  };

  useEffect(() => {
    resizeHandler();
    if (audioRef.current) {
      audioRef.current.volume = 1.0;
    }
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  return (
    <>
      <RainCanvas ref={canvasRef} theme={theme} />
      <audio autoPlay loop ref={audioRef}>
        <source src="/assets/sound/rain.mp3" type="audio/mpeg" />
      </audio>
    </>
  );
}

export default Rain;
