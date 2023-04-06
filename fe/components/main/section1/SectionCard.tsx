import styled from '@emotion/styled';
import Image from 'next/image';
import { CardData } from '../../../types/commonTypes';

const Card = styled.span<{ background: string }>`
  display: flex;
  flex-direction: column;

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
    margin-left: 55px;

    @media screen and (max-width: 500px) {
      margin: 0rem;
      border-radius: 0.5rem;
      scale: 0.7;
      margin-top: 20px;
      padding-right: 15px;
    }
  }

  & span {
    margin-left: 50px;
    text-align: @media screen and (max-width: 500px) {
      margin-left: 1rem;
      padding-bottom: 30px;
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
