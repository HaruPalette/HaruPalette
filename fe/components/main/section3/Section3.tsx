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

const SectionText = styled.h1``;

function Section3() {
  const windowHeight = useScreenY();

  return (
    <Section>
      <article></article>
      <SectionText>언제, 어디서든</SectionText>
    </Section>
  );
}

export default Section3;
