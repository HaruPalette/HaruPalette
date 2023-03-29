import styled from '@emotion/styled';
import FriendCard from './FriendCard';

export interface IFriendData {
  characteristic: string[];
  name: string;
  ename: string;
  desc: string;
  amount: number;
  index: number;
}

const friendData: IFriendData[] = [
  {
    characteristic: ['#다정한', '#진솔한', '#ISFP'],
    name: '하루',
    ename: 'haru',
    desc: `안녕🐾 난 하루야😻\n난 하루하루 기록하는 걸 좋아해\n너도 나와 같이 오늘 하루를\n기록하지 않을래?`,
    amount: 0,
    index: 0,
  },
  {
    characteristic: ['#낙천적인', '#발랄한', '#ESFP'],
    name: '토리',
    ename: 'tori',
    desc: '안녕🐾 난 토리야!🐿\n난 도토리를 좋아해서 \n이름도 토리로 개명했어!\n난 외톨이가 아니라구! 나랑 친구할래?',
    amount: 500,
    index: 1,
  },
  {
    characteristic: ['#섬세한', '#느긋한', '#INFJ'],
    name: '고미',
    ename: 'gomi',
    desc: '안녕🐾 난 고미야~🐼\n항상 고민이 많은 나는 \n그걸 일기에 기록하곤해\n어때? 너도 고민을 말해볼래?',
    amount: 100,
    index: 2,
  },
];

function BuyingBuddy() {
  const renderCards = () => {
    const renderCardsArr = friendData.map((el: IFriendData, index: number) => {
      return <FriendCard key={index} data={el} />;
    });
    return renderCardsArr;
  };
  return <Container>{renderCards()}</Container>;
}

export default BuyingBuddy;

const Container = styled.div`
  display: flex;
  width: 80vw;
  height: 300px;
  justify-content: center;
`;
