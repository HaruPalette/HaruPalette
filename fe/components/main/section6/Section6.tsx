import styled from '@emotion/styled';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHook';
import { changeMainChar, selectProfile } from '../../../store/modules/profile';
// import ModelCreate from '../../common/ModelCreate';
import ModelShopMain from '../../common/ModelShopMain';
import JellyList from '../../common/JellyList';
import { useSectionThreeBall } from '../../../hooks/useBall';
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

const MainModel = styled.div`
  width: 500px;
  height: 500px;
  right: 0px;
`;

const FriendList = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
  const ball = useSectionThreeBall();
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
      <MainModel>
        <ModelShopMain
          data={curCharName !== 'haru' ? curCharName : mainCharName}
        />
      </MainModel>
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
    </Section>
  );
}

export default Section6;
