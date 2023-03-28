import styled from '@emotion/styled';
import useBall from '../../hooks/useBall';
import Jelly from '../animation/Jelly';

const JellyListStyles = styled.div`
  width: 100%;
  height: 100%;
  /* height: calc(100vh + 5.5rem); */
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  transform: scale(1);

  @media all and (max-width: 960px) {
    width: 100vw;
    height: 120%;
  }

  @media all and (max-width: 500px) {
    width: 100vw;
    height: 140%;
  }
`;

function JellyList() {
  return (
    <JellyListStyles>
      {useBall().map(item => {
        return <Jelly ballData={item} key={item.left} />;
      })}
    </JellyListStyles>
  );
}

export default JellyList;
