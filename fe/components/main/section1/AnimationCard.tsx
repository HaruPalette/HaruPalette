import styled from '@emotion/styled';
import Image from 'next/image';
import { CardData } from '../../../types/commonTypes';

const Card = styled.span<{ background: string; windowHeight: number }>`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-around;

  width: 12vw;
  min-width: 5rem;
  height: 12vw;
  min-height: 5rem;

  transform: ${props => {
    if (props.windowHeight > 1400) {
      return 'rotate(15deg) translateX(15%)';
    } else {
      return 'rotate(0deg) translateX(0%)';
    }
  }};

  font-size: 1.5rem;
  margin: 1rem 0;
  margin-left: 2rem;

  border-radius: 0.5rem;

  background-color: ${props => props.background};

  @media screen and (max-width: 960px) {
    font-size: 14px;
    margin: 0.5rem 0;
    margin-left: 1rem;
    justify-content: space-around;
  }

  @media screen and (max-width: 500px) {
    font-size: 12px;
    margin: 0.25rem 0;
    margin-left: 0.5rem;
  }
`;

function AnimationCard(props: { cardData: CardData; windowHeight: number }) {
  const { cardData, windowHeight } = props;
  console.log(windowHeight);
  return (
    <Card background={cardData.backgroundColor} windowHeight={windowHeight}>
      <Image
        src={cardData.image}
        width={48}
        height={48}
        alt={cardData.script}
      />
      {cardData.script}
    </Card>
  );
}

export default AnimationCard;
