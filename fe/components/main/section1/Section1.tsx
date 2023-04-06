import styled from '@emotion/styled';
import useScreenY from '../../../hooks/useScreenY';
import SectionCard from './SectionCard';
import useCard from '../../../constants/card';
import JellyList from '../../common/JellyList';
import { useSectionOneBall } from '../../../hooks/useBall';
import Mouse from '../Mouse';
import AnimationCard from './AnimationCard';

const Section = styled.section<{ windowHeight: number }>`
  width: 100vw;
  height: 100vh;
  display: flex;

  opacity: ${props =>
    props.windowHeight >= 1000 && props.windowHeight <= 1800 ? 1 : 0};
  justify-content: space-between;
  align-items: center;

  position: relative;

  padding: 0 10rem;

  @media screen and (max-width: 500px) {
    // center
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
`;

const SectionText = styled.h1<{ windowHeight: number }>`
  display: flex;
  text-align: start;
  flex-direction: column;
  justify-content: center;
  color: #ffffff;

  z-index: 2;

  font-size: 5vw;
  opacity: ${props => props.windowHeight - 1100};

  @media screen and (max-width: 500px) {
    margin-bottom: 8rem;
    font-size: 3rem;
    line-height: 3.5rem;
    color: black;
  }
`;

const CardContainer = styled.article<{ windowHeight: number }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;

  opacity: ${props => props.windowHeight - 1100};

  @media screen and (max-width: 500px) {
    scale: 1.4;
  }
`;

const Row = styled.article`
  display: flex;
  justify-content: center;
`;

const Background = styled.div<{ windowHeight: number }>`
  // center
  position: fixed;
  top: 50%;
  left: 50%;
  display: ${props =>
    props.windowHeight >= 1400 && props.windowHeight < 2200 ? 'flex' : 'none'};
`;

function Section1() {
  const windowHeight = useScreenY();
  const cardList = useCard();
  const ball = useSectionOneBall();

  return (
    <Section windowHeight={windowHeight}>
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
      <Background windowHeight={windowHeight}>
        <JellyList ball={ball} />
      </Background>
      {windowHeight > 2000 ? <div /> : <Mouse top={2200} />}
    </Section>
  );
}

export default Section1;
