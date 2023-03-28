import styled from '@emotion/styled';
import { ColorTypes } from '@emotion/react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import ScrollToTopButton from '../components/button/ScrollToTopButton';
import useTheme from '../hooks/useTheme';
import MovingBall from '../components/animation/MovingBall';
import ScriptTalk from '../components/animation/ScriptTalk';

const HomePage = styled.div<{ theme: ColorTypes }>`
  width: 100vw;
  background-color: ${props => props.theme.background};

  will-change: all;
`;

const MainContainer = styled.main<{ theme: ColorTypes }>`
  display: flex;
  justify-content: center;
  width: 100vw;
  background-color: ${props => props.theme.background};
`;

const Section1 = styled.section`
  width: 100vw;
  height: 150vh;
  display: flex;
  align-items: center;
  position: relative;

  h1:nth-of-type(1) {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 100%;
    text-align: center;

    animation: all 0s ease-in-out;

    transform: translate(-50%, -50%);
    z-index: 99;

    font-size: 5vw;
  }

  canvas:nth-of-type(1) {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export default function Home() {
  const theme = useTheme();
  return (
    <HomePage theme={theme}>
      <Header />
      <MainContainer theme={theme}>
        <Section1>
          <ScriptTalk />
          <MovingBall />
        </Section1>
      </MainContainer>
      <ScrollToTopButton />
      <Footer />
    </HomePage>
  );
}
