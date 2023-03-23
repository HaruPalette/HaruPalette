import { Inter } from 'next/font/google';

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import ScrollToTopButton from '../components/button/ScrollToTopButton';
import Ball from '../components/animation/Ball';
import useTheme from '../hooks/useTheme';

// const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const theme = useTheme();
  const BALL_DATA = {
    top: 250,
    left: 250,
    width: 50,
    height: 50,
    color: theme.primary20,
  };

  return (
    <>
      <Header />
      <Ball ballData={BALL_DATA}></Ball>
      <ScrollToTopButton></ScrollToTopButton>
      <Footer />
    </>
  );
}
