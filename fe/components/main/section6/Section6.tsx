import styled from '@emotion/styled';
import { useAppSelector } from '../../../hooks/reduxHook';
import { selectProfile } from '../../../store/modules/profile';
import ModelCreate from '../../common/ModelCreate';
import ModelShopMain from '../../common/ModelShopMain';

const Section = styled.section`
  width: 100vw;
  height: 100vh;
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
  width: 100vw
  display: flex;
  flex-direction: row;
  scale: 0.25;
`;

function Section6() {
  const curCharName = useAppSelector(selectProfile).chrName;

  return (
    <Section>
      <ModelShopMain data={curCharName} />
      <FriendList>
        <div>
          <ModelCreate data="haru" />
        </div>
        <div>
          <ModelCreate data="tori" />
        </div>
        <div>
          <ModelCreate data="gomi" />
        </div>
      </FriendList>
    </Section>
  );
}

export default Section6;
