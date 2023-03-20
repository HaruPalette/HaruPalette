import { Inter } from 'next/font/google';

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

// const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}
