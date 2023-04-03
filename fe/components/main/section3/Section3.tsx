import styled from '@emotion/styled';
import { useEffect } from 'react';
import useScreenY from '../../../hooks/useScreenY';
import Pulse from '../../animation/Pulse';
import { useAppDispatch } from '../../../hooks/reduxHook';
import { setPulseStart } from '../../../store/modules/script';

const Section = styled.section<{ windowHeight: number }>`
  width: 100vw;
  height: 100vh;
  display: ${props => (props.windowHeight >= 3600 ? 'flex' : 'none')};
  align-items: center;
  position: relative;

  padding: 0 10rem;

  transition: font-size 0s ease-in-out;

  @media screen and (max-width: 960px) {
    padding: 0 1rem;
  }

  @media screen and (max-width: 500px) {
  }
`;

const SectionText = styled.h1`
  font-size: 5vw;
  z-index: 9;
`;

function Section3() {
  const windowHeight = useScreenY();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setPulseStart());
  });

  return (
    <Section windowHeight={windowHeight}>
      <Pulse />
      <SectionText>
        타이핑은 NO
        <br />
        음성은 YES
        <br />
      </SectionText>
    </Section>
  );
}

export default Section3;
