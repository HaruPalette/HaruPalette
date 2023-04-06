import styled from '@emotion/styled';
import useScreenY from '../../../hooks/useScreenY';
import { MAIN_SCRIPT } from '../../../constants/script';
import ScriptTalk from '../../animation/ScriptTalk';
import Mouse from '../Mouse';

const Section = styled.section<{ windowHeight: number }>`
  width: 100vw;
  height: 1600px;
  opacity: ${props => 2 - props.windowHeight / 500};

  h1:nth-of-type(1) {
    position: fixed;
    top: 50%;
    left: 50%;
    text-align: center;

    transform: translate(-50%, -50%);
    z-index: 1;

    transition: font-size 0s ease-in-out;

    font-size: ${props =>
      props.windowHeight >= 1500
        ? '1rem'
        : `calc(5vw + ${props.windowHeight / 10}px)`};
    @media screen and (max-width: 500px) {
      font-size: 30px;
    }
  }
`;

function Section0() {
  const windowHeight = useScreenY();
  return (
    <Section windowHeight={windowHeight}>
      {windowHeight > 1000 ? (
        <div />
      ) : (
        <ScriptTalk talkData={MAIN_SCRIPT} type="main" />
      )}
      {windowHeight > 500 ? <div /> : <Mouse top={1600} />}
    </Section>
  );
}

export default Section0;
