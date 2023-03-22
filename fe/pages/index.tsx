import { Inter } from 'next/font/google';

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import ScrollToTopButton from '../components/button/ScrollToTopButton';

// const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Header />

      <ScrollToTopButton></ScrollToTopButton>
      <Footer />
    </>
  );
}
