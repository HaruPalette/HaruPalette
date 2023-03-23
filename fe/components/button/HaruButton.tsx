import { ColorTypes } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { useAppSelector } from '../../hooks/reduxHook';
import useTheme from '../../hooks/useTheme';
import { selectProfile } from '../../store/modules/profile';
import { common } from '../../styles/theme';
import { ButtonData } from '../../types/commonTypes';

function HaruButton(props: { buttonData: ButtonData }) {
  const buttonData = props.buttonData;
  const theme = useTheme();

  return (
    <CustomButton type="button" theme={theme} buttonData={buttonData}>
      <Image
        src={buttonData.image}
        width={32}
        height={32}
        alt={buttonData.context}
      ></Image>
      {buttonData.context}
    </CustomButton>
  );
}

export default HaruButton;

const CustomButton = styled.button<{
  theme: ColorTypes;
  buttonData: ButtonData;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  z-index: 1;

  width: ${props => props.buttonData.width}rem;
  height: ${props => props.buttonData.height}rem;

  border-radius: ${props => props.buttonData.height / 2}rem;
  border: 2px solid ${props => props.theme.primary20};

  font-size: ${props => props.buttonData.fs}rem;
  font-weight: 600;

  padding: 0 1rem;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.color};

  &:hover {
    border: 2px solid ${props => props.theme.border};
    background-color: ${props => props.theme.primary80};
    color: ${common.colors.inheritWhite};
  }
`;
