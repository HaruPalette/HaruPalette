import styled from '@emotion/styled';
import Image from 'next/image';
import { CardData } from '../../../types/commonTypes';

const Card = styled.span<{ background: string }>`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-around;

  width: 10vw;
  min-width: 5rem;
  height: 10vw;
  min-height: 5rem;

  margin: 2rem;
  padding: 0.5rem;

  border-radius: 0.5rem;

  background-color: ${props => props.background};

  @media screen and (max-width: 960px) {
    font-size: 14px;
    margin: 1rem;
    justify-content: space-around;
  }

  @media screen and (max-width: 500px) {
    font-size: 12px;
    margin: 0.5rem;
    justify-content: space-around;
  }
`;

function SectionCard(props: { cardData: CardData }) {
  const { cardData } = props;
  return (
    <Card background={cardData.backgroundColor}>
      <Image
        src={cardData.image}
        width={40}
        height={40}
        alt={cardData.script}
      />
      {cardData.script}
    </Card>
  );
}

export default SectionCard;
