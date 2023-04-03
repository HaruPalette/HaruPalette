import styled from '@emotion/styled';
import Jelly from '../animation/Jelly';
import { BallData } from '../../types/commonTypes';

const JellyListStyles = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;

  @media all and (max-width: 960px) {
    width: 100vw;
    height: 120%;
  }

  @media all and (max-width: 500px) {
    width: 100vw;
    height: 140%;
  }
`;

function JellyList(props: { ball: BallData[] }) {
  const { ball } = props;
  return (
    <JellyListStyles>
      {ball.map((item: BallData) => {
        return <Jelly ballData={item} key={item.left} />;
      })}
    </JellyListStyles>
  );
}

export default JellyList;
