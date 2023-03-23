import { ColorTypes } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import useTheme from '../../hooks/useTheme';
import { selectProfile } from '../../store/modules/profile';
import { common } from '../../styles/theme';

function CreateButton() {
  const theme = useTheme();
  const chr = useSelector(selectProfile);
  const icon = `assets/img/${chr.chrName}/2d.svg`;
  return (
    <Link href={'/create'}>
      <ButtonStyles type="button" theme={theme}>
        일기 쓰러 갈래 ?&nbsp;&nbsp;
        <Image src={icon} width={72} height={60} alt="2d" />
      </ButtonStyles>
    </Link>
  );
}

export default CreateButton;

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

  @media all and (max-width: 480px) {
    transform: scale(0.75);
  }
`;
