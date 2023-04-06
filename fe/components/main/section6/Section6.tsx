import styled from '@emotion/styled';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHook';
import { changeMainChar, selectProfile } from '../../../store/modules/profile';
import ModelCreate from '../../common/ModelCreate';
import ModelShopMain from '../../common/ModelShopMain';

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
`;

function Section6() {
  const curCharName = useAppSelector(selectProfile).chrName;
  const mainCharName = useAppSelector(selectProfile).mainChrName;
  const dispatch = useAppDispatch();

  const handleModelClick = (name: string) => {
    dispatch(changeMainChar(name));
  };

  return (
    <Section>
      <ModelShopMain
        data={curCharName !== 'haru' ? curCharName : mainCharName}
      />
      <FriendList>
        <ModelButton type="button" onClick={() => handleModelClick('haru')}>
          <ModelCreate data="haru" />
        </ModelButton>
        <ModelButton type="button" onClick={() => handleModelClick('tori')}>
          <ModelCreate data="tori" />
        </ModelButton>
        <ModelButton type="button" onClick={() => handleModelClick('gomi')}>
          <ModelCreate data="gomi" />
        </ModelButton>
      </FriendList>
    </Section>
  );
}

export default Section6;
