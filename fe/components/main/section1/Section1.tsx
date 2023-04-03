import styled from '@emotion/styled';
import useScreenY from '../../../hooks/useScreenY';
import SectionCard from './SectionCard';
import useCard from '../../../constants/card';
import AnimationCard from './AnimationCard';

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;

  transition: font-size 0s ease-in-out;

  padding: 0 10rem;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    justify-content: space-around;
    height: 50vh;
  }
`;

const SectionText = styled.h1<{ windowHeight: number }>`
  display: flex;
  text-align: start;

  width: 50vw;
  z-index: 1;

  font-size: 5vw;
  opacity: ${props => props.windowHeight - 1250};

  @media screen and (max-width: 500px) {
    padding-left: 1rem;
  }
`;

const CardContainer = styled.article<{ windowHeight: number }>`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 50vw;

  opacity: ${props => props.windowHeight - 1250};
`;

const Row = styled.article`
  display: flex;
`;

function Section1() {
  const windowHeight = useScreenY();
  const cardList = useCard();
  return (
    <Section>
      <SectionText windowHeight={windowHeight}>
        하루 팔레트,
        <br />
        당신의 오늘을
        <br />
        기록해보세요
      </SectionText>
      <CardContainer windowHeight={windowHeight}>
        <Row>
          <SectionCard cardData={cardList[0]} />
          <AnimationCard cardData={cardList[1]} windowHeight={windowHeight} />
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
