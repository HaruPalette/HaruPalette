import { useEffect, useState } from 'react';

const useScreenY = () => {
  const [screenY, setScreenY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScreenY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return screenY;
};

export default useScreenY;
