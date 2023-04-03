import styled from '@emotion/styled';
import Round, { DiaryProps } from '../progressbar/Round';
import { useNowDate, useDate } from '../../hooks/useDate';

const Container = styled.div`
  position: relative;
  width: 35vw;
  height: 520px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  @media all and (max-width: 1410px) {
    margin-top: 20px;
    width: 40vw;
  }
  @media all and (max-width: 1220px) {
    margin-top: 20px;
    width: 45vw;
  }
  @media all and (max-width: 1150px) {
    margin-top: 20px;
    width: 50vw;
  }
  @media all and (max-width: 1000px) {
    margin-bottom: 100px;
    margin-top: 110px;
    width: 60vw;
  }
  @media all and (max-width: 840px) {
    width: 70vw;
  }
  @media all and (max-width: 700px) {
    width: 80vw;
  }

  @media all and (max-width: 620px) {
    width: 90vw;
  }
  @media all and (max-width: 560px) {
    width: 100vw;
    transform: scale(0.95);
  }
  @media all and (max-width: 460px) {
    margin-top: 70px;
    width: 65vw;
  }
`;

const dummy: DiaryProps[] = [
  {
    index: 0,
    currCnt: 1,
    AllCnt: 3,
    desc: '일기 3번 작성',
    color: 'primary20',
  },
  {
    index: 1,
    currCnt: 2,
    AllCnt: 5,
    desc: '일기 5번 작성',
    color: 'primary40',
  },
  {
    index: 2,
    currCnt: 3,
    AllCnt: 7,
    desc: '일기 7번 작성',
    color: 'primary60',
  },
  {
    index: 3,
    currCnt: 27,
    AllCnt: useNowDate(useDate().year, useDate().month),
    desc: '한달 연속 작성',
    color: 'primary80',
  },
];

function Challenge() {
  const renderRound = () => {
    const renderRoundArr = dummy.map((el: DiaryProps) => {
      return <Round key={el.index} data={el} />;
    });
    return renderRoundArr;
  };

  return <Container>{renderRound()}</Container>;
}

export default Challenge;
