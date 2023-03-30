import { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import useAnimationFrame from '../../hooks/useAnimationFrame';

const CherryBlossomCanvas = styled.canvas`
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(
    to bottom right,
    rgba(255, 255, 255, 1) 0%,
    rgba(220, 248, 255, 1) 50%,
    rgba(255, 217, 220, 0.9) 100%
  );
  position: fixed;
  z-index: 0;
`;

function CherryBlossom() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const totalRef = useRef<number>(70);
  const petalImageRef = useRef<HTMLImageElement[]>([]);
  const imagePromise = (src: string) => {
    return new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        petalImageRef.current.push(img);
        return resolve(img);
      };
      img.onerror = () => reject();
    });
  };

  const randomBetween = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  class CherryBlossomElem {
    img: HTMLImageElement;
    x: number;
    y: number;
    width: number;
    height: number;
    opacity: number;
    velocity: { x: number; y: number };
    flip: number;
    flipRate: number;

    constructor() {
      [this.img] = petalImageRef.current;
      this.x = randomBetween(0, window.innerWidth);
      this.y = randomBetween(-window.innerHeight, window.innerHeight);
      this.width = randomBetween(30, 45);
      this.height = randomBetween(20, 30);
      this.opacity = this.width / 45;
      this.velocity = {
        x: randomBetween(2, 3),
        y: randomBetween(1, 2),
      };
      this.flip = randomBetween(0, 1);
      this.flipRate = randomBetween(0, 1) * 0.03;
    }

    draw() {
      const ctx = canvasRef.current?.getContext('2d');
      if (!ctx) return;
      if (this.y > window.innerHeight || this.x > window.innerWidth) {
        this.x = -this.img.width;
        this.y = randomBetween(-window.innerHeight, window.innerHeight);
      }
      ctx.globalAlpha = this.opacity;
      ctx.drawImage(
        this.img,
        this.x,
        this.y,
        this.width * (0.66 + Math.abs(Math.cos(this.flip)) / 3),
        this.height * (0.8 + Math.abs(Math.sin(this.flip)) / 2),
      );
    }

    animate() {
      this.x += this.velocity.x;
      this.y += this.velocity.y;
      this.draw();
      this.flip += this.flipRate;
    }
  }

  const petalListRef = useRef<CherryBlossomElem[]>([]);

  useAnimationFrame(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    petalListRef.current.forEach(petal => {
      petal.animate();
    });
  }, 0);

  const resizeHandler = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  const init = async () => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;
    resizeHandler();
    await imagePromise('/assets/img/cherry_blossom/petal.png');
    for (let i = 0; i < totalRef.current; i++) {
      petalListRef.current.push(new CherryBlossomElem());
    }
  };

  useEffect(() => {
    init();
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  return <CherryBlossomCanvas ref={canvasRef} />;
}

export default CherryBlossom;
