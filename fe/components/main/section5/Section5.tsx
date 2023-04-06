import styled from '@emotion/styled';
import Round from '../../progressbar/Round';
import useScreenY from '../../../hooks/useScreenY';

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10rem;
  position: relative;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    padding: 0 1rem;
  }
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const SectionText = styled.h1`
  font-size: 5vw;
  margin-bottom: 1rem;
`;

const ChallengeContainer = styled.article<{ windowHeight: number }>`
  display: ${props =>
    props.windowHeight > 6800 && props.windowHeight < 8200 ? 'flex' : 'none'};
  opacity: ${props =>
    props.windowHeight > 7000 && props.windowHeight < 8000 ? 1 : 0};
  width: 40vw;
  height: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 500px) {
    width: 100%;
    justify-content: center;
    align-items: flex-start;
    scale: 0.8;
    padding: 0 1rem;
    display: ${props =>
      props.windowHeight > 6500 && props.windowHeight < 8000 ? 'flex' : 'none'};
    opacity: ${props =>
      props.windowHeight > 6700 && props.windowHeight < 7800 ? 1 : 0};
  }
`;

const ChallengeItem = styled.div`
  @media screen and (max-width: 500px) {
    scale: 0.8;
  }
`;

function Section5() {
  const windowHeight = useScreenY();
  const ROUND_DATA = [
    {
      currCnt: 3,
      allCnt: 3,
      desc: '주 3회 작성하기',
      color: '20',
    },
    {
      currCnt: 3,
      allCnt: 7,
      desc: '주 7회 작성하기',
      color: '40',
    },
  ];
  return (
    <Section>
      <RightContainer>
        <SectionText>챌린지 달성</SectionText>
        <p>
          꾸준한 일기 작성 통해 의지를 올려보고!
          <br />
          대량의 포인트도 쌓아보고!
        </p>
      </RightContainer>
      <ChallengeContainer windowHeight={windowHeight}>
        {ROUND_DATA.map(data => (
          <ChallengeItem key={data.allCnt}>
            <Round data={data} />
          </ChallengeItem>
        ))}
      </ChallengeContainer>
    </Section>
  );
}

export default Section5;
