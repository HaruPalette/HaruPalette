import styled from '@emotion/styled';
import useScreenY from '../../../hooks/useScreenY';
import { MAIN_SCRIPT } from '../../../constants/script';
import ScriptTalk from '../../animation/ScriptTalk';
import Mouse from '../Mouse';

const Section = styled.section<{ windowHeight: number }>`
  width: 100vw;
  height: 1600px;

  /* display: flex;
  align-items: center;
  justify-content: center; */
  h1:nth-of-type(1) {
    position: fixed;
    top: 50%;
    left: 50%;
    text-align: center;

    transform: translate(-50%, -50%);
    z-index: 1;

    transition: 0s ease-in-out;

    will-change: all;

    font-size: calc(5vw + ${props => props.windowHeight / 10}px);
    opacity: ${props => 1.6 - props.windowHeight / 500};
  }
`;

function Section0() {
  const windowHeight = useScreenY();
  return (
    <Section windowHeight={windowHeight}>
      {windowHeight > 1000 ? (
        <></>
      ) : (
        <ScriptTalk talkData={MAIN_SCRIPT} type="main" />
      )}
      {windowHeight > 500 ? <></> : <Mouse />}
    </Section>
  );
}

export default Section0;
