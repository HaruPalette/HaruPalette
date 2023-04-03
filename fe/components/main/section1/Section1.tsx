import styled from '@emotion/styled';
import useScreenY from '../../../hooks/useScreenY';
import SectionCard from './SectionCard';
import useCard from '../../../constants/card';
import JellyList from '../../common/JellyList';
import { useSectionOneBall } from '../../../hooks/useBall';
import Mouse from '../Mouse';

const Section = styled.section<{ windowHeight: number }>`
  width: 100vw;
  height: 100vh;
  display: flex;
  opacity: ${props =>
    props.windowHeight >= 1400 && props.windowHeight <= 1800 ? 1 : 0};
  justify-content: space-between;
  align-items: center;

  position: relative;

  padding: 0 10rem;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: -0.5rem;
  }
`;

const SectionText = styled.h1<{ windowHeight: number }>`
  display: flex;
  text-align: start;

  width: 50vw;
  z-index: 2;

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
  z-index: 2;

  width: 50vw;

  opacity: ${props => props.windowHeight - 1250};
`;

const Row = styled.article`
  display: flex;
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
          <SectionCard cardData={cardList[1]} />
        </Row>
        <Row>
          <SectionCard cardData={cardList[2]} />
          <SectionCard cardData={cardList[3]} />
        </Row>
      </CardContainer>
      <JellyList ball={ball} />
      {windowHeight > 1800 ? <div /> : <Mouse top={2200} />}
    </Section>
  );
}

export default Section1;
