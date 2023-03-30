import { ColorTypes } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { useAppSelector } from '../../hooks/reduxHook';
import useTheme from '../../hooks/useTheme';
import { selectProfile } from '../../store/modules/profile';
import { common } from '../../styles/theme';

const ButtonStyles = styled.button<{ theme: ColorTypes }>`
  width: 26rem;
  height: 5.5rem;
  border-radius: 5.5rem;
  border: 1px solid ${props => props.theme.main};
  box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.25);
  background: ${props => props.theme.background};

  color: ${props => props.theme.main};
  font-size: ${common.fontSize.fs32};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  transform: scale(1);

  @media screen and (max-width: 500px) {
    transform: scale(0.75);
    margin-top: -2rem;
  }
`;

function CreateButton() {
  const theme = useTheme();
  const chr = useAppSelector(selectProfile);
  const icon = `/assets/img/${chr.chrName}/2d.svg`;
  return (
    <Link href="/create">
      <ButtonStyles type="button" theme={theme}>
        일기 쓰러 갈래 ?&nbsp;&nbsp;
        <Image src={icon} width={72} height={60} alt="2d" />
      </ButtonStyles>
    </Link>
  );
}

export default CreateButton;
