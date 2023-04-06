import styled from '@emotion/styled';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHook';
import { changeMainChar, selectProfile } from '../../../store/modules/profile';
// import ModelCreate from '../../common/ModelCreate';
import ModelShopMain from '../../common/ModelShopMain';
import JellyList from '../../common/JellyList';
import { useSectionFourBall } from '../../../hooks/useBall';
import useScreenY from '../../../hooks/useScreenY';

const Section = styled.section`
  width: 100vw;
  height: 200vh;
  display: flex;
  flex-direction: column;
  position: relative;

  transition: font-size 0s ease-in-out;

  @media screen and (max-width: 960px) {
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
      props.windowHeight >= 8400 && props.windowHeight < 8850
        ? 'flex'
        : 'none'};
  }
`;

const Main = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding-top: 550px;

  & span {
    z-index: 2;
    /* padding-top: 40px; */
  }
`;

const MainModel = styled.div``;

const FriendList = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-bottom: 550px;
  padding-right: 80px;
`;

const ModelButton = styled.button`
  width: 10rem;
  scale: 0.25;
  cursor: pointer;
  /* margin: 10px; */

  @media screen and (min-height: 800px) {
    scale: 0.4;
  }
`;

function Section6() {
  const curCharName = useAppSelector(selectProfile).chrName;
  const mainCharName = useAppSelector(selectProfile).mainChrName;
  const ball = useSectionFourBall();
  const windowHeight = useScreenY();
  console.log(windowHeight);

  const dispatch = useAppDispatch();

  const handleModelClick = (name: string) => {
    dispatch(changeMainChar(name));
  };

  return (
    <Section>
      <Background windowHeight={windowHeight}>
        <JellyList ball={ball} />
      </Background>
      <Main>
        <MainModel>
          <ModelShopMain
            data={curCharName !== 'haru' ? curCharName : mainCharName}
          />
        </MainModel>
        <span>아래의 캐릭터를 눌러 보세요 !</span>
        <FriendList>
          <ModelButton type="button" onClick={() => handleModelClick('haru')}>
            <ModelShopMain data="haru" />
          </ModelButton>
          <ModelButton type="button" onClick={() => handleModelClick('tori')}>
            <ModelShopMain data="tori" />
          </ModelButton>
          <ModelButton type="button" onClick={() => handleModelClick('gomi')}>
            <ModelShopMain data="gomi" />
          </ModelButton>
        </FriendList>
      </Main>
    </Section>
  );
}

export default Section6;
