import styled from '@emotion/styled';
import Image from 'next/image';
import { CardData } from '../../../types/commonTypes';

const Card = styled.span<{ background: string; windowHeight: number }>`
  display: flex;
  flex-direction: column;

  justify-content: space-around;

  font-weight: bold;
  color: #f62f5f;

  width: 13vw;
  min-width: 5rem;
  height: 13vw;
  min-height: 5rem;

  transform: ${props => {
    if (props.windowHeight > 1400) {
      return 'rotate(15deg) translateX(15%)';
    }
    return 'rotate(0deg) translateX(0%)';
  }};

  font-size: 1.5rem;
  margin: 1rem 0;
  margin-left: 2rem;

  border-radius: 2.11rem;

  background-color: ${props => props.background};

  & .CardImgDiv {
    transform: ${props => {
      if (props.windowHeight > 1400) {
        return 'rotate(0deg) translateX(0%)';
      }
      return 'rotate(0deg) translateX(0%)';
    }};
    margin-left: 45px;

    @media screen and (max-width: 500px) {
      margin: -0.5rem;
      border-radius: 0.5rem;
      scale: 0.6;
    }
  }
  & span {
    padding-left: 48px;
    @media screen and (max-width: 500px) {
      margin-left: -1.9rem;
      margin-bottom: 10px;
    }
  }

  @media screen and (max-width: 960px) {
    font-size: 14px;
    margin: 0.5rem 0;
    margin-left: 1rem;
    justify-content: space-around;
    border-radius: 1rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 12px;
    margin: 1em;
    border-radius: 0.5rem;
    scale: 1.2;
  }
`;

function AnimationCard(props: { cardData: CardData; windowHeight: number }) {
  const { cardData, windowHeight } = props;
  return (
    <Card background={cardData.backgroundColor} windowHeight={windowHeight}>
      <Image
        className="CardImgDiv"
        src={cardData.image}
        width={90}
        height={90}
        alt={cardData.script}
      />
      <span className="CardText">{cardData.script}</span>
    </Card>
  );
}

export default AnimationCard;
