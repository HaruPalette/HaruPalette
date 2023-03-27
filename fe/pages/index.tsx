import styled from '@emotion/styled';
import { ColorTypes } from '@emotion/react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import ScrollToTopButton from '../components/button/ScrollToTopButton';
import useTheme from '../hooks/useTheme';
import MovingBall from '../components/animation/MovingBall';
import { BallData } from '../types/commonTypes';

const HomePage = styled.div<{ theme: ColorTypes }>`
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.background};
`;

export default function Home() {
  const theme = useTheme();
  const BALL_DATAS: BallData[] = [
    {
      top: '250px',
      left: '250px',
      width: '500',
      height: '500',
      color: theme.primary20,
      opacity: 1,
      delay: 0,
      start: 0,
    },
    {
      top: '150px',
      left: '150px',
      width: '300',
      height: '300',
      color: theme.primary40,
      opacity: 1,
      delay: 0,
      start: 0,
    },
    {
      top: '50px',
      left: '50px',
      width: '100',
      height: '100',
      color: theme.primary60,
      opacity: 1,
      delay: 0,
      start: 0,
    },
  ];

  return (
    <HomePage theme={theme}>
      <Header />
      {BALL_DATAS.map(balldata => (
        <MovingBall ballData={balldata} />
      ))}
      <ScrollToTopButton />
      <Footer />
    </HomePage>
  );
}
