import styled from '@emotion/styled';
import { useEffect } from 'react';
import { ColorTypes } from '@emotion/react';
import useScreenY from '../../../hooks/useScreenY';
import Pulse from '../../animation/Pulse';
import { useAppDispatch } from '../../../hooks/reduxHook';
import { setPulseStart } from '../../../store/modules/script';
import useTheme from '../../../hooks/useTheme';
import Mouse from '../Mouse';
import ScriptTalk from '../../animation/ScriptTalk';
import { SECTION_3 } from '../../../constants/script';
import { common } from '../../../styles/theme';
// How to axios patch method with useMutation
const Section = styled.section<{ windowHeight: number }>`
  width: 100vw;
  height: 200vh;
  opacity: ${props =>
    props.windowHeight >= 3900 && props.windowHeight < 5000 ? 1 : 0};
  align-items: flex-start;

  padding: 0 10rem;

  @media screen and (max-width: 960px) {
    padding: 0 1rem;
  }
`;

const TextContainer = styled.article<{ windowHeight: number }>`
  display: ${props =>
    props.windowHeight >= 3700 && props.windowHeight < 4400 ? 'flex' : 'none'};
  opacity: ${props =>
    props.windowHeight >= 3800 && props.windowHeight < 4300 ? 1 : 0};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 5vw;
  z-index: 9;

  // article 태그의 자식 요소중 div 태그의 첫번째 h1 자식 요소에만 적용
  & > div > h1:first-of-type {
    background: #f86363;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    white-space: nowrap;
  }

  @media screen and (max-width: 500px) {
  }
`;

const SectionTextYes = styled.h1<{ theme: ColorTypes; windowHeight: number }>`
  opacity: ${props =>
    props.windowHeight >= 4500 && props.windowHeight < 5000 ? 1 : 0};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 5vw;
  z-index: 9;
  background: ${common.colors.success};

  transition: all 0.5s ease-in-out;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  white-space: nowrap;

  @media screen and (max-width: 500px) {
    font-size: 2rem;
  }
`;

const Background = styled.div<{ windowHeight: number }>`
  opacity: ${props =>
    props.windowHeight >= 4500 && props.windowHeight < 5000 ? 1 : 0};
`;

function Section3() {
  const windowHeight = useScreenY();
  const theme = useTheme();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setPulseStart());
  });

  return (
    <Section windowHeight={windowHeight}>
      <TextContainer windowHeight={windowHeight}>
        {windowHeight < 3900 ? (
          <div />
        ) : (
          <ScriptTalk talkData={SECTION_3} type="main" />
        )}
      </TextContainer>
      <SectionTextYes theme={theme} windowHeight={windowHeight}>
        목소리는 YES
      </SectionTextYes>
      <Background windowHeight={windowHeight}>
        {windowHeight < 4500 || windowHeight > 5000 ? <div /> : <Pulse />}
      </Background>
      {windowHeight < 3900 || windowHeight > 4100 ? (
        <div />
      ) : (
        <Mouse top={4500} />
      )}
      {windowHeight < 4500 ? <div /> : <Mouse top={5100} />}
    </Section>
  );
}

export default Section3;
