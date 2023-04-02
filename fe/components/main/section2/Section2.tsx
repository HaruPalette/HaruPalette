import styled from '@emotion/styled';
import Image from 'next/image';
import useScreenY from '../../../hooks/useScreenY';
import { useAppSelector } from '../../../hooks/reduxHook';
import { selectTheme } from '../../../store/modules/theme';

const Section = styled.section<{ windowHeight: number }>`
  width: 100%;
  height: 300vh;
  opacity: ${props =>
    props.windowHeight >= 1500 && props.windowHeight <= 5250 ? 'flex' : 'none'};
  align-items: center;
  justify-content: space-between;
  position: relative;

  padding: 0 10rem;

  transition: font-size 0s ease-in-out;

  @media screen and (max-width: 960px) {
    padding: 0 1rem;
  }

  @media screen and (max-width: 500px) {
  }
`;

const DesktopMockUp = styled.article<{ windowHeight: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;

  position: fixed;
  top: 50%;
  transform: translateY(-50%);

  opacity: ${props =>
    props.windowHeight >= 2200 && props.windowHeight <= 2700 ? 1 : 0};

  @media screen and (max-width: 960px) {
    scale: 0.8;
  }
`;

const TabletMockUp = styled.article<{ windowHeight: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;

  position: fixed;
  top: 50%;
  transform: translateY(-50%);

  opacity: ${props =>
    props.windowHeight >= 2700 && props.windowHeight <= 3200 ? 1 : 0};

  @media screen and (max-width: 960px) {
    scale: 0.8;
  }
`;

const MobileMockUp = styled.article<{ windowHeight: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;

  position: fixed;
  top: 50%;
  transform: translateY(-50%);

  opacity: ${props =>
    props.windowHeight >= 3200 && props.windowHeight <= 3700 ? 1 : 0};

  @media screen and (max-width: 960px) {
    scale: 0.8;
  }
`;

const DesktopText = styled.h1<{ windowHeight: number }>`
  display: flex;
  text-align: start;

  position: fixed;
  top: 50%;
  transform: translateY(-50%);

  right: 10rem;

  z-index: 1;

  transition: 0s ease-in-out;

  font-size: 5vw;
  opacity: ${props =>
    props.windowHeight >= 2200 && props.windowHeight <= 2700 ? 1 : 0};

  @media screen and (max-width: 960px) {
    right: 1rem;
  }
`;

const TabletText = styled.h1<{ windowHeight: number }>`
  display: flex;
  text-align: start;

  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  right: 10rem;

  z-index: 1;

  transition: 0s ease-in-out;

  font-size: 5vw;
  opacity: ${props =>
    props.windowHeight >= 2700 && props.windowHeight <= 3200 ? 1 : 0};

  @media screen and (max-width: 960px) {
    right: 1rem;
  }
`;

const MobileText = styled.h1<{ windowHeight: number }>`
  display: flex;
  text-align: start;

  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  right: 10rem;

  z-index: 1;

  transition: 0s ease-in-out;

  font-size: 5vw;
  opacity: ${props =>
    props.windowHeight >= 3200 && props.windowHeight <= 3700 ? 1 : 0};

  @media screen and (max-width: 960px) {
    right: 1rem;
  }
`;

function Section2() {
  const isDark = useAppSelector(selectTheme);
  const windowHeight = useScreenY();

  return (
    <Section windowHeight={windowHeight}>
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
    </Section>
  );
}

export default Section2;
