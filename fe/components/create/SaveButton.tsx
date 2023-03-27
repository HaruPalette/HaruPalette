import { ColorTypes } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import useTheme from '../../hooks/useTheme';
import {
  recodingSuccess,
  startRecodingSuccess,
} from '../../store/modules/script';
import { common } from '../../styles/theme';

const CustomButton = styled.button<{ theme: ColorTypes }>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;

  position: relative;

  z-index: 1;

  width: 5rem;
  height: 3rem;

  border-radius: 1.5rem;
  border: 2px solid ${props => props.theme.primary20};

  font-size: 1rem;
  font-weight: 600;

  padding: 0 1rem;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.primary40};

  &:hover {
    border: 2px solid ${props => props.theme.border};
    background-color: ${props => props.theme.primary40};
    color: ${common.colors.inheritWhite};
  }
`;

function SaveButton() {
  const theme = useTheme();
  const dispatch = useDispatch();

  const handleRecode = () => {
    dispatch(recodingSuccess());
  };

  return (
    <CustomButton type="button" theme={theme} onClick={handleRecode}>
      <i className="fas fa-stop"></i>
      <h5>대화종료</h5>
    </CustomButton>
  );
}

export default SaveButton;
