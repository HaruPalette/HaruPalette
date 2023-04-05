import styled from '@emotion/styled';
import Image from 'next/image';
import { ColorTypes } from '@emotion/react';
import useScreenY from '../../../hooks/useScreenY';
import SectionCalendar from './SectionCalendar';
import useTheme from '../../../hooks/useTheme';
import EMOJI from '../../../constants/emoji';

const Section = styled.section<{ windowHeight: number }>`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  opacity: ${props =>
    props.windowHeight > 5000 && props.windowHeight < 6200 ? 1 : 0};

  padding: 0 10rem;

  transition: all 0.5s ease-in-out;

  @media screen and (max-width: 960px) {
  }

  @media screen and (max-width: 500px) {
    padding: 0;
  }
`;

const SectionText = styled.h1<{ theme: ColorTypes }>`
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 5vw;

  @media screen and (max-width: 500px) {
    top: 20%;
    z-index: 999;
  }
`;

const Emoji = styled(Image)<{
  top: string;
  left: string;
  height: number;
  windowHeight: number;
}>`
  width: 10%;
  height: 10%;
  position: fixed;
  top: ${props => props.top};
  left: ${props => props.left};
  transform: translate(-50%, -50%)
    translateY(${props => props.windowHeight / (props.height / -20) + 300}px);
  z-index: 999;
  opacity: ${props =>
    props.windowHeight > 4900 + props.height &&
    props.windowHeight < 5700 + props.height
      ? 1
      : 0};
  transition: opacity 0.4s ease-in-out;
`;

function Section4() {
  const windowHeight = useScreenY();
  const theme = useTheme();
  return (
    <Section windowHeight={windowHeight}>
      <SectionText theme={theme}>감정 분석 달력</SectionText>
      <SectionCalendar />
      {Object.entries(EMOJI).map(([key, value]) =>
        windowHeight >= 4600 + value.height &&
        windowHeight < 5900 + value.height ? (
          <Emoji
            key={key}
            src={value.url}
            width={0}
            height={value.height}
            top={value.top}
            left={value.left}
            windowHeight={windowHeight}
            alt={key}
          />
        ) : (
          <div />
        ),
      )}
    </Section>
  );
}

export default Section4;
