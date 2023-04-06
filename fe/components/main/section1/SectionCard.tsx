import styled from '@emotion/styled';
import Image from 'next/image';
import { CardData } from '../../../types/commonTypes';

const Card = styled.span<{ background: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  width: 13vw;
  min-width: 5rem;
  height: 13vw;
  min-height: 5rem;

  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  margin: 1rem 0;
  margin-left: 2rem;

  border-radius: 2.11rem;

  background-color: ${props => props.background};

  & img {
    @media screen and (max-width: 500px) {
      margin: -0.5rem;
      border-radius: 0.5rem;
      scale: 0.6;
      padding-top: 10px;
    }
  }

  & span {
    @media screen and (max-width: 500px) {
      margin-bottom: 20px;
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
    margin: 1rem;
    border-radius: 0.5rem;
    scale: 1.2;
  }
`;

function SectionCard(props: { cardData: CardData }) {
  const { cardData } = props;
  return (
    <Card background={cardData.backgroundColor}>
      <Image
        src={cardData.image}
        width={90}
        height={90}
        alt={cardData.script}
      />
      <span>{cardData.script}</span>
    </Card>
  );
}

export default SectionCard;
