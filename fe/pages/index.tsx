import styled from '@emotion/styled';
import { ColorTypes } from '@emotion/react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import ScrollToTopButton from '../components/button/ScrollToTopButton';
import useTheme from '../hooks/useTheme';
import MovingBall from '../components/animation/MovingBall';

const HomePage = styled.div<{ theme: ColorTypes }>`
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.background};
`;

export default function Home() {
  const theme = useTheme();

  return (
    <HomePage theme={theme}>
      <Header />
      <MovingBall />
      <ScrollToTopButton />
      <Footer />
    </HomePage>
  );
}
