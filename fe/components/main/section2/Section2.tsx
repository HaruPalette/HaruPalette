import styled from '@emotion/styled';
import Image from 'next/image';
import useScreenY from '../../../hooks/useScreenY';
import { useAppSelector } from '../../../hooks/reduxHook';
import { selectTheme } from '../../../store/modules/theme';
import { useSectionTwoBall } from '../../../hooks/useBall';
import JellyList from '../../common/JellyList';
import Mouse from '../Mouse';

const Section = styled.section<{ windowHeight: number }>`
  width: 100vw;
  height: 300vh;
  display: flex;
  opacity: ${props =>
    props.windowHeight >= 2200 && props.windowHeight < 3700 ? 1 : 0};
  align-items: center;
  justify-content: space-between;
  position: relative;

  padding: 0 10rem;
`;

const DesktopMockUp = styled.article<{ windowHeight: number }>`
  display: ${props =>
    props.windowHeight >= 2000 && props.windowHeight < 3900 ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  width: calc(50vw - 10rem);

  position: fixed;
  top: 50%;
  transform: translateY(-50%);

  opacity: ${props =>
    props.windowHeight >= 2200 && props.windowHeight < 2700 ? 1 : 0};

  @media screen and (max-width: 960px) {
    scale: 0.6;
    transform: translateY(-75%);
  }

  @media screen and (max-width: 500px) {
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-75%, -25%);
    opacity: ${props =>
      props.windowHeight >= 2200 && props.windowHeight < 3700 ? 1 : 0};
  }
`;

const TabletMockUp = styled.article<{ windowHeight: number }>`
  display: ${props =>
    props.windowHeight >= 2500 && props.windowHeight < 3900 ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  width: calc(50vw - 10rem);

  position: fixed;
  top: 50%;
  transform: translateY(-50%);

  opacity: ${props =>
    props.windowHeight >= 2700 && props.windowHeight < 3200 ? 1 : 0};

  @media screen and (max-width: 960px) {
    scale: 0.5;
    transform: translateY(-100%);
  }

  @media screen and (max-width: 500px) {
    scale: 0.33;
    position: fixed;
    top: 45%;
    left: 15%;
    transform: translate(-50%, -50%);
    opacity: ${props =>
      props.windowHeight >= 2700 && props.windowHeight < 3700 ? 1 : 0};
  }
`;

const MobileMockUp = styled.article<{ windowHeight: number }>`
  display: ${props =>
    props.windowHeight >= 3000 && props.windowHeight < 3900 ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  width: calc(50vw - 10rem);

  position: fixed;
  top: 50%;
  transform: translateY(-50%);

  opacity: ${props =>
    props.windowHeight >= 3200 && props.windowHeight < 3700 ? 1 : 0};

  @media screen and (max-width: 960px) {
    scale: 0.5;
    transform: translateY(-100%);
  }

  @media screen and (max-width: 500px) {
    scale: 0.25;
    position: fixed;
    top: 52%;
    left: 70%;
    transform: translate(-50%, -50%);
    opacity: ${props =>
      props.windowHeight >= 3200 && props.windowHeight < 3700 ? 1 : 0};
  }
`;

const DesktopText = styled.h1<{ windowHeight: number }>`
  display: flex;
  text-align: start;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateY(-50%);

  z-index: 1;

  font-size: 5vw;
  opacity: ${props =>
    props.windowHeight >= 2200 && props.windowHeight < 2700 ? 1 : 0};

  @media screen and (max-width: 500px) {
    font-size: 3rem;
    top: 20%;
    left: 1rem;
    opacity: ${props =>
      props.windowHeight >= 2200 && props.windowHeight < 2700 ? 1 : 0.5};
    display: ${props =>
      props.windowHeight >= 2200 && props.windowHeight < 3700
        ? 'flex'
        : 'none'};
  }
`;

const TabletText = styled.h1<{ windowHeight: number }>`
  display: flex;
  text-align: start;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateY(-50%);

  z-index: 1;

  font-size: 5vw;
  opacity: ${props =>
    props.windowHeight >= 2700 && props.windowHeight < 3200 ? 1 : 0};

  @media screen and (max-width: 500px) {
    font-size: 3rem;
    top: 28%;
    left: 1rem;
    opacity: ${props =>
      props.windowHeight >= 2700 && props.windowHeight < 3200 ? 1 : 0.5};
    display: ${props =>
      props.windowHeight >= 2200 && props.windowHeight < 3700
        ? 'flex'
        : 'none'};
  }
`;

const MobileText = styled.h1<{ windowHeight: number }>`
  display: flex;
  text-align: start;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateY(-50%);

  z-index: 1;

  font-size: 5vw;
  opacity: ${props =>
    props.windowHeight >= 3200 && props.windowHeight < 3700 ? 1 : 0};

  @media screen and (max-width: 500px) {
    font-size: 3rem;
    top: 36%;
    left: 1rem;
    opacity: ${props =>
      props.windowHeight >= 3200 && props.windowHeight < 3700 ? 1 : 0.5};
    display: ${props =>
      props.windowHeight >= 2200 && props.windowHeight < 3700
        ? 'flex'
        : 'none'};
  }
`;

const Background = styled.div<{ windowHeight: number }>`
  position: fixed;
  top: 50%;
  left: 50%;
  display: ${props =>
    props.windowHeight >= 2200 && props.windowHeight < 3700 ? 'flex' : 'none'};
`;

function Section2() {
  const isDark = useAppSelector(selectTheme);
  const windowHeight = useScreenY();
  const ball = useSectionTwoBall();

  return (
    <Section windowHeight={windowHeight}>
      <Background windowHeight={windowHeight}>
        <JellyList ball={ball} />
      </Background>
      <DesktopMockUp windowHeight={windowHeight}>
        <Image
          src={
            isDark
              ? '/assets/img/common/mocks/desktop_dark.svg'
              : '/assets/img/common/mocks/desktop_light.svg'
          }
          width={500}
          height={500}
          alt="monitor mockup"
        />
      </DesktopMockUp>
      <DesktopText windowHeight={windowHeight}>쉽고 빠르게</DesktopText>
      <TabletMockUp windowHeight={windowHeight}>
        <Image
          src={
            isDark
              ? '/assets/img/common/mocks/tablet_dark.png'
              : '/assets/img/common/mocks/tablet_light.png'
          }
          width={320}
          height={504}
          alt="monitor mockup"
        />
      </TabletMockUp>
      <TabletText windowHeight={windowHeight}>언제, 어디서든</TabletText>
      <MobileMockUp windowHeight={windowHeight}>
        <Image
          src={
            isDark
              ? '/assets/img/common/mocks/mobile_dark.png'
              : '/assets/img/common/mocks/mobile_light.png'
          }
          width={180}
          height={400}
          alt="mobile mockup"
        />
      </MobileMockUp>
      <MobileText windowHeight={windowHeight}>보다 자유롭게</MobileText>
      {windowHeight >= 2200 && windowHeight < 2700 ? (
        <Mouse top={2700} />
      ) : (
        <div />
      )}
      {windowHeight >= 2700 && windowHeight < 3200 ? (
        <Mouse top={3200} />
      ) : (
        <div />
      )}
      {windowHeight >= 3200 && windowHeight < 3700 ? (
        <Mouse top={3900} />
      ) : (
        <div />
      )}
    </Section>
  );
}

export default Section2;
