import styled from '@emotion/styled';
import Round, { DiaryProps } from '../progressbar/Round';
import { useNowDate, useDate } from '../../hooks/useDate';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 80vw;
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
    const renderRoundArr = dummy.map((el: DiaryProps, index: number) => {
      return <Round key={index} data={el} />;
    });
    return renderRoundArr;
  };

  return <Container>{renderRound()}</Container>;
}

export default Challenge;
