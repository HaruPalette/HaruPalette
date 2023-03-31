import React, { useRef, useEffect, useCallback } from 'react';

const useAnimationFrame = (
  callback: () => void,
  delay: number,
  deps?: React.DependencyList | undefined,
) => {
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>(0);

  const animate = useCallback(
    (timestamp: number) => {
      if (previousTimeRef.current !== undefined) {
        const progress = timestamp - previousTimeRef.current;
        if (progress > delay) {
          callback();
          previousTimeRef.current = timestamp;
        }
      }
      requestRef.current = requestAnimationFrame(animate);
    },
    [callback],
  );

  const depsArray = deps || [];
  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current !== undefined) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [requestRef, animate, ...depsArray]);
};

export default useAnimationFrame;
