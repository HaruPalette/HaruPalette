import styled from '@emotion/styled';
import useScreenY from '../../../hooks/useScreenY';
import Pulse from '../../animation/Pulse';

const Section = styled.section<{ windowHeight: number }>`
  width: 100vw;
  height: 100vh;
  display: ${props => (props.windowHeight >= 3900 ? 'flex' : 'none')};
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

const SectionText = styled.h1``;

function Section3() {
  const windowHeight = useScreenY();

  return (
    <Section windowHeight={windowHeight}>
      <Pulse />
      <SectionText>언제, 어디서든</SectionText>
    </Section>
  );
}

export default Section3;
