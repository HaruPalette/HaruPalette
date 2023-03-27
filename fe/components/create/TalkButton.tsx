import { ColorTypes } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import useTheme from '../../hooks/useTheme';
import { startRecodingSuccess } from '../../store/modules/script';
import { common } from '../../styles/theme';

const CustomButton = styled.button<{ theme: ColorTypes }>`
  display: flex;
  align-items: center;
  justify-content: space-around;

  position: absolute;
  top: 70vh;

  z-index: 1;

  width: 10rem;
  height: 4rem;

  border-radius: 2rem;
  border: 2px solid ${props => props.theme.primary20};

  font-size: 1.5rem;
  font-weight: 600;

  padding: 0 1rem;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.color};

  &:hover {
    border: 2px solid ${props => props.theme.border};
    background-color: ${props => props.theme.primary40};
    color: ${common.colors.inheritWhite};
  }
`;

function TalkButton() {
  const theme = useTheme();
  const dispatch = useDispatch();

  const handleRecode = () => {
    dispatch(startRecodingSuccess());
  };

  return (
    <CustomButton type="button" theme={theme} onClick={handleRecode}>
      <Image
        src="/assets/img/common/mic.svg"
        width={32}
        height={32}
        alt="mic"
      ></Image>
      <h4>대화하기</h4>
    </CustomButton>
  );
}

export default TalkButton;
