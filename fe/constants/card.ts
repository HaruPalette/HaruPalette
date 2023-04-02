import useTheme from '../hooks/useTheme';
import { CardData } from '../types/commonTypes';

const useCard = () => {
  const theme = useTheme();

  const CARD_LIST: CardData[] = [
    {
      image: '/assets/img/common/card1.svg',
      script: '일기 공유',
      backgroundColor: `${theme.primary20}`,
    },
    {
      image: '/assets/img/common/card2.svg',
      script: '감정 달력',
      backgroundColor: `${theme.diaryBackground}`,
    },
    {
      image: '/assets/img/common/card3.svg',
      script: '도전 과제',
      backgroundColor: `${theme.primary40}`,
    },
    {
      image: '/assets/img/common/card4.svg',
      script: '일기 작성',
      backgroundColor: `${theme.primary20}`,
    },
  ];

  return CARD_LIST;
};

export default useCard;
