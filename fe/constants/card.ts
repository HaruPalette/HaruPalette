// import useTheme from '../hooks/useTheme';
import { CardData } from '../types/commonTypes';

const useCard = () => {
  // const theme = useTheme();

  const CARD_LIST: CardData[] = [
    {
      image: '/assets/img/common/card1.svg',
      script: '일기 작성',
      backgroundColor: '#FF6F6F',
    },
    {
      image: '/assets/img/common/card2.svg',
      script: '위로 한마디',
      backgroundColor: '#FFF6E9',
    },
    {
      image: '/assets/img/common/card3.svg',
      script: '일기 꾸미기',
      backgroundColor: '#F62F5F',
    },
    {
      image: '/assets/img/common/card4.svg',
      script: '일기 공유',
      backgroundColor: '#FB9A9A',
    },
  ];

  return CARD_LIST;
};

export default useCard;
