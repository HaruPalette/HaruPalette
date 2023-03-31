import styled from '@emotion/styled';
import useScreenY from '../../../hooks/useScreenY';
import SectionCard from './SectionCard';
import useCard from '../../../constants/card';

const Section = styled.section`
  width: 80%;
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;

  justify-content: space-between;
  transition: font-size 0s ease-in-out;

  @media screen and (max-width: 960px) {
    width: 100%;
  }

  @media screen and (max-width: 500px) {
    width: 80%;
  }
`;

const SectionText = styled.h1<{ windowHeight: number }>`
  display: flex;
  text-align: start;

  z-index: 1;

  transition: 0s ease-in-out;

  font-size: 5vw;
  opacity: ${props => props.windowHeight / 500 - 2};
`;

const CardContainer = styled.article`
  display: flex;
  flex-direction: column;

  width: 40%;
`;

const Row = styled.article`
  display: flex;
`;

function Section1() {
  const windowHeight = useScreenY();
  const cardList = useCard();
  console.log(cardList);
  return (
    <Section>
      <SectionText windowHeight={windowHeight}>
        하루 팔레트,
        <br />
        당신의 오늘을
        <br />
        기록해보세요
      </SectionText>
      <CardContainer>
        <Row>
          <SectionCard cardData={cardList[0]} />
          <SectionCard cardData={cardList[1]} />
        </Row>
        <Row>
          <SectionCard cardData={cardList[2]} />
          <SectionCard cardData={cardList[3]} />
        </Row>
      </CardContainer>
    </Section>
  );
}

export default Section1;
