import styled from '@emotion/styled';
import Image from 'next/image';
import { ColorTypes } from '@emotion/react';
import useScreenY from '../../../hooks/useScreenY';
import SectionCalendar from './SectionCalendar';
import useTheme from '../../../hooks/useTheme';
import EMOJI from '../../../constants/emoji';
import { useAppSelector } from '../../../hooks/reduxHook';
import { selectTheme } from '../../../store/modules/theme';
// import Mouse from '../Mouse';

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
  font-size: 3.8vw;
  color: ${props => props.theme.primary40};

  @media screen and (min-height: 800px) {
    font-size: 4.5vw;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    text-align: center;
    font-size: 3rem;
    top: 30%;
  }
`;

const EmojiContainer = styled.div<{
  windowHeight: number;
  top: string;
  height: number;
  left: string;
  isDark: boolean;
}>`
  width: 100px;
  height: 100px;
  position: fixed;
  top: ${props => props.top};
  left: ${props => props.left};
  transform: translate(-50%, -50%)
    translateY(${props => props.windowHeight / -(props.height / 20) + 300}px);
  z-index: 999;
  opacity: ${props =>
    props.windowHeight > 4900 + props.height &&
    props.windowHeight < 6200 + props.height
      ? 1
      : 0};
  transition: opacity 0.4s ease-in-out;
  border-radius: 50%;
  box-shadow: 0 0.5rem 1rem
    ${props =>
      props.isDark ? 'rgba(255, 255, 255, 0.25)' : 'rgba(0, 0, 0, 0.25)'};
  overflow: hidden;

  @media screen and (max-width: 500px) {
    width: 50px;
    height: 50px;
  }
`;

const Emoji = styled(Image)`
  width: 100%;
  height: 100%;
`;

function Section4() {
  const windowHeight = useScreenY();
  const theme = useTheme();
  const isDark = useAppSelector(selectTheme);

  return (
    <Section windowHeight={windowHeight}>
      <SectionText theme={theme}>감정 분석 달력</SectionText>
      <SectionCalendar />
      {Object.entries(EMOJI).map(([key, value]) =>
        windowHeight >= 4600 + value.height &&
        windowHeight < 5900 + value.height ? (
          <EmojiContainer
            key={key}
            windowHeight={windowHeight}
            top={value.top}
            left={value.left}
            height={value.height}
            isDark={isDark}
          >
            <Emoji src={value.url} width={100} height={100} alt={value.alt} />
          </EmojiContainer>
        ) : (
          <div key={value.idx} />
        ),
      )}
      {/* {windowHeight < 5100 ? <div /> : <Mouse top={6850} />} */}
    </Section>
  );
}

export default Section4;
