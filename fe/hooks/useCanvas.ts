import React, { useRef, useEffect } from 'react';

const useCanvas = (
  canvasWidth: number,
  canvasHeight: number,
  deps?: React.DependencyList | undefined,
) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const depsArray = deps || [];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    const setCanvas = () => {
      const devicePixelRatio = window.devicePixelRatio || 1;

      if (canvas && ctx) {
        canvas.style.width = `${canvasWidth}px`;
        canvas.style.height = `${canvasHeight}px`;

        canvas.width = canvasWidth * devicePixelRatio;
        canvas.height = canvasHeight * devicePixelRatio;

        ctx.scale(devicePixelRatio, devicePixelRatio);
      }
    };
    if (canvasWidth !== -1 && canvasHeight !== -1) {
      setCanvas();
    }
  }, [canvasWidth, canvasHeight, ...depsArray]);

  return canvasRef;
};

export default useCanvas;
