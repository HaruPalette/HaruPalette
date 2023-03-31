import styled from '@emotion/styled';
import useScreenY from '../../../hooks/useScreenY';

const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;

  transition: font-size 0s ease-in-out;

  @media screen and (max-width: 960px) {
  }

  @media screen and (max-width: 500px) {
  }
`;

const SectionText = styled.h1<{ windowHeight: number }>`
  display: flex;
  text-align: start;

  z-index: 1;

  transition: 0s ease-in-out;

  font-size: 5vw;
  opacity: ${props => props.windowHeight / 500 - 2};

  margin-right: 10vw;
`;

function Section2() {
  const windowHeight = useScreenY();

  return (
    <Section>
      <article></article>
      <SectionText windowHeight={windowHeight}>언제, 어디서든</SectionText>
    </Section>
  );
}

export default Section2;
