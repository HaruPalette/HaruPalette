import { Inter } from 'next/font/google';

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import ScrollToTopButton from '../components/button/ScrollToTopButton';
import Ball from '../components/animation/Ball';

// const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const BALL_DATA = {
    top: '100px',
    left: '100px',
    width: 500,
    height: 500,
    color: 'black',
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
