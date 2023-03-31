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

function Section4() {
  const windowHeight = useScreenY();

  return <Section />;
}

export default Section4;
