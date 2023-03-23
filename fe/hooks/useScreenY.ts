import { useEffect, useState } from 'react';

const useScreenY = () => {
  const [screenY, setScreenY] = useState<number>(0);

  useEffect(() => {
    setScreenY(window.screenY);
  }, []);

  return screenY;
};

export default useScreenY;
