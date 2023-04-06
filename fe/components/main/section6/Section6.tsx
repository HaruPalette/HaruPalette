import styled from '@emotion/styled';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHook';
import { changeMainChar, selectProfile } from '../../../store/modules/profile';
import ModelShopBackCard from '../../common/ModelShopBackCard';
import ModelShopMain from '../../common/ModelShopMain';
import JellyList from '../../common/JellyList';
import { useSectionFourBall } from '../../../hooks/useBall';
import useScreenY from '../../../hooks/useScreenY';

const Section = styled.section`
  width: 100vw;
  height: 200vh;
  padding: 36rem 0;
  display: flex;
  flex-direction: column;
  position: relative;

  transition: font-size 0s ease-in-out;

  @media screen and (max-width: 960px) {
    justify-content: space-around;
    align-items: center;
    padding: 0;
  }

  @media screen and (max-width: 500px) {
  }
`;

const Background = styled.div<{ windowHeight: number }>`
  position: fixed;
  top: 50%;
  left: 50%;
  display: ${props =>
    props.windowHeight >= 7600 && props.windowHeight < 8050 ? 'flex' : 'none'};

  @media screen and (min-height: 800px) {
    display: ${props =>
      props.windowHeight >= 8800 && props.windowHeight < 9250
        ? 'flex'
        : 'none'};
  }
`;

const RightContainer = styled.div<{ windowHeight: number }>`
  position: absolute;
  top: 350px;
  width: 100vw;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & p {
    font-size: 1.3vw;
    color: white;
  }
  z-index: 2;
  /* display: ${props =>
    props.windowHeight > 6200 && props.windowHeight < 6950 ? 'flex' : 'none'};
  opacity: ${props =>
    props.windowHeight >= 6450 && props.windowHeight < 6900 ? 1 : 0}; */

  @media screen and (min-height: 800px) {
    display: ${props =>
      props.windowHeight > 8800 && props.windowHeight < 9250 ? 'flex' : 'none'};
    opacity: ${props =>
      props.windowHeight >= 8800 && props.windowHeight < 9250 ? 1 : 0};
  }

  @media screen and (max-width: 501px) {
    top: 0px;
  }
`;

const SectionText = styled.h1`
  font-size: 4vw;
  color: white;
  @media screen and (max-width: 501px) {
    font-size: 3rem;
  }
`;

const SectionTextDesc = styled.span`
  font-size: 16px;
  @media screen and (max-width: 501px) {
    font-size: 0.8rem;
  }
`;

const Main = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  & span {
    z-index: 2;
    color: black;

    @media screen and (max-width: 501px) {
      text-align: center;
      align-items: center;
    }
  }
  @media screen and (max-width: 501px) {
    font-size: 0.8rem;
    margin-bottom: 550px;
  }
`;

const MainModel = styled.div`
  margin-bottom: 2rem;
  @media screen and (max-width: 501px) {
    font-size: 0.8rem;
    margin-bottom: 0rem;
  }
`;

const FriendList = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 501px) {
    padding-bottom: 100px;
    width: auto;
    scale: 0.3;
  }
`;

const ModelButton = styled.button`
  scale: 0.8;
  cursor: pointer;

  @media screen and (min-height: 800px) {
    scale: 0.8;
  }
  @media screen and (max-width: 501px) {
    scale: 1.8;
    margin: 0 2.5rem;
  }
`;

function Section6() {
  const curCharName = useAppSelector(selectProfile).chrName;
  const mainCharName = useAppSelector(selectProfile).mainChrName;
  const ball = useSectionFourBall();
  const windowHeight = useScreenY();
  // console.log(windowHeight);

  const dispatch = useAppDispatch();

  const handleModelClick = (name: string) => {
    dispatch(changeMainChar(name));
  };

  return (
    <Section>
      <Background windowHeight={windowHeight}>
        <JellyList ball={ball} />
      </Background>
      <RightContainer windowHeight={windowHeight}>
        <SectionText>앙증맞은 캐릭터</SectionText>
        <SectionTextDesc>
          고양이, 다람쥐, 판다 친구들을 구매해보세요. <br />
          귀여운 친구마다 서로 다른 테마로 변경되는 걸 확인해 보세요!
        </SectionTextDesc>
      </RightContainer>
      <Main>
        <MainModel>
          <ModelShopMain
            data={curCharName !== 'haru' ? curCharName : mainCharName}
          />
        </MainModel>
        <span>아래의 캐릭터를 눌러 보세요 !</span>
        <FriendList>
          <ModelButton type="button" onClick={() => handleModelClick('haru')}>
            <ModelShopBackCard data="haru" />
          </ModelButton>
          <ModelButton type="button" onClick={() => handleModelClick('tori')}>
            <ModelShopBackCard data="tori" />
          </ModelButton>
          <ModelButton type="button" onClick={() => handleModelClick('gomi')}>
            <ModelShopBackCard data="gomi" />
          </ModelButton>
        </FriendList>
      </Main>
    </Section>
  );
}

export default Section6;
