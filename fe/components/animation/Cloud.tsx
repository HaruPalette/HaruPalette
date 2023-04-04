import { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { weatherTypes } from '@emotion/react';
import useAnimationFrame from '../../hooks/useAnimationFrame';
import { useAppSelector } from '../../hooks/reduxHook';
import { selectTheme } from '../../store/modules/theme';
import { weatherDark, weatherLight } from '../../styles/weather';

const CloudCanvas = styled.canvas<{ theme: weatherTypes }>`
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: ${props => props.theme.clouds};
  position: fixed;
  z-index: 0;
`;

function Cloud() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const totalRef = useRef<number>(25);
  const cloudImageRef = useRef<HTMLImageElement[]>([]);
  const isDark = useAppSelector(selectTheme);
  const theme = isDark ? weatherDark : weatherLight;

  const randomBetween = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const imagePromise = (src: string) => {
    return new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        cloudImageRef.current.push(img);
        return resolve(img);
      };
      img.onerror = () => reject();
    });
  };

  class CloudElem {
    x: number;
    y: number;
    width: number;
    height: number;
    opacity: number;
    velocity: number;

    constructor() {
      const img = cloudImageRef.current[randomBetween(0, 3)];
      this.x = randomBetween(-window.innerWidth, window.innerWidth);
      this.width = 600;
      this.height = img.height * (this.width / img.width);
      this.y = randomBetween(
        -this.height / 2,
        window.innerHeight - this.height / 2,
      );
      this.opacity = randomBetween(5, 10) / 10;
      this.velocity = randomBetween(1, 3);
    }

    draw() {
      const ctx = canvasRef.current?.getContext('2d');
      if (!ctx) return;
      ctx.save();
      ctx.globalAlpha = this.opacity;
      ctx.drawImage(
        cloudImageRef.current[0],
        this.x,
        this.y,
        this.width,
        this.height,
      );
      ctx.restore();
    }

    animate() {
      this.x += this.velocity;
      if (this.x > window.innerWidth) {
        this.x = -window.innerWidth;
      }
      this.draw();
    }
  }

  const cloudListRef = useRef<CloudElem[]>([]);

  useAnimationFrame(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    cloudListRef.current.forEach(cloud => cloud.animate());
  }, 0);

  const init = async () => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;
    await imagePromise('/assets/img/cloud/cloud1.png');
    await imagePromise('/assets/img/cloud/cloud2.png');
    await imagePromise('/assets/img/cloud/cloud3.png');
    await imagePromise('/assets/img/cloud/cloud4.png');
    cloudListRef.current = [];
    for (let i = 0; i < totalRef.current; i++) {
      cloudListRef.current.push(new CloudElem());
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
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  return <CloudCanvas ref={canvasRef} theme={theme} />;
}

export default Cloud;
