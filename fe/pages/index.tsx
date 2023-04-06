import styled from '@emotion/styled';
import { ColorTypes } from '@emotion/react';
import { useEffect } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import ScrollToTopButton from '../components/button/ScrollToTopButton';
import useTheme from '../hooks/useTheme';
import MovingBall from '../components/animation/MovingBall';
import Section0 from '../components/main/section0/Section0';
import Section1 from '../components/main/section1/Section1';
import Section2 from '../components/main/section2/Section2';
import Section3 from '../components/main/section3/Section3';
import Section4 from '../components/main/section4/Section4';
import Section5 from '../components/main/section5/Section5';
import Section6 from '../components/main/section6/Section6';
import Section7 from '../components/main/section7/Section7';
import Snackbar from '../components/common/Snackbar';
import { useAppDispatch } from '../hooks/reduxHook';
import { changeLinkSuccess } from '../store/modules/menu';
// import Section2 from '../components/main/section2/Section2';

const HomePage = styled.div<{ theme: ColorTypes }>`
  width: 100vw;
  background-color: ${props => props.theme.background};

  will-change: all;
  overflow-x: hidden;
`;

const MainContainer = styled.main<{ theme: ColorTypes }>`
  width: 100vw;
  display: flex;
  flex-direction: column;

  background-color: ${props => props.theme.background};
  color: ${props => props.theme.color};

  @media screen and (max-width: 960px) {
  }
`;

export default function Home() {
  const theme = useTheme();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(changeLinkSuccess('/'));
  }, []);

  return (
    <HomePage theme={theme}>
      <Header />
      <Snackbar />
      <MovingBall />
      <MainContainer theme={theme}>
        <Section0 />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
      </MainContainer>
      <ScrollToTopButton />
      <Footer />
    </HomePage>
  );
}
