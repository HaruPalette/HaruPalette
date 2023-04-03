import styled from '@emotion/styled';
import { useEffect } from 'react';
import { ColorTypes } from '@emotion/react';
import useScreenY from '../../../hooks/useScreenY';
import Pulse from '../../animation/Pulse';
import { useAppDispatch } from '../../../hooks/reduxHook';
import { setPulseStart } from '../../../store/modules/script';
import useTheme from '../../../hooks/useTheme';
import Mouse from '../Mouse';

const Section = styled.section<{ windowHeight: number }>`
  width: 100vw;
  height: 250vh;
  opacity: ${props =>
    props.windowHeight >= 3900 && props.windowHeight < 5400 ? 1 : 0};
  align-items: flex-start;

  padding: 0 10rem;

  /* transition: font-size 0s ease-in-out; */

  @media screen and (max-width: 960px) {
    padding: 0 1rem;
  }
`;

const TextContainer = styled.article<{ windowHeight: number }>`
  display: flex;
  flex-direction: column;
  margin-top: 200px;
  position: ${props =>
    props.windowHeight >= 3900 && props.windowHeight < 4400
      ? 'relative'
      : 'fixed'};
  top: ${props =>
    props.windowHeight >= 3900 && props.windowHeight < 4400
      ? 0
      : 'calc(50% - 200px)'};
  left: ${props =>
    props.windowHeight >= 3600 && props.windowHeight < 4400 ? 0 : '10rem'};
  transform: ${props =>
    props.windowHeight >= 3600 && props.windowHeight < 4400
      ? ''
      : 'translate(0%, -50%)'};

  transition: transform 0s ease-in-out;
  @media screen and (max-width: 500px) {
    position: ${props =>
      props.windowHeight >= 3200 && props.windowHeight < 4400
        ? 'relative'
        : 'fixed'};
    top: -15%;
    left: 35%;
    opacity: ${props =>
      props.windowHeight >= 3900 && props.windowHeight < 5400 ? 1 : 0};
    align-items: flex-start;
    transform: ${props =>
      props.windowHeight >= 3600 && props.windowHeight < 4400
        ? ''
        : 'translate(0%, 500%)'};
  }
`;

const SectionTextNo = styled.h1<{ theme: ColorTypes; windowHeight: number }>`
  font-size: 5vw;
  z-index: 9;
  background: ${props =>
    props.windowHeight >= 3900 && props.windowHeight < 4400
      ? `${props.theme.color}`
      : `linear-gradient(
    to right,
    ${props.theme.color},
    red
  );`};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  white-space: nowrap;

  margin-left: ${props =>
    props.windowHeight >= 4600 ? `${4600 - props.windowHeight}px` : '0'};
`;
const SectionTextYes = styled.h1<{ theme: ColorTypes; windowHeight: number }>`
  font-size: 5vw;
  z-index: 9;
  background: ${props =>
    props.windowHeight >= 3900 && props.windowHeight < 4400
      ? `${props.theme.color}`
      : `linear-gradient(
    to right,
    ${props.theme.color},
    green
  );`};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  white-space: nowrap;

  margin-left: ${props =>
    props.windowHeight >= 5000 ? `${5000 - props.windowHeight}px` : '0'};
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
      <Pulse />
      <TextContainer windowHeight={windowHeight}>
        <SectionTextNo theme={theme} windowHeight={windowHeight}>
          타이핑은 NO
        </SectionTextNo>
        <SectionTextYes theme={theme} windowHeight={windowHeight}>
          목소리는 YES
        </SectionTextYes>
      </TextContainer>
      {windowHeight < 4200 ? <div /> : <Mouse top={6600} />}
    </Section>
  );
}

export default Section3;
