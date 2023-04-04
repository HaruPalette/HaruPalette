import { ColorTypes } from '@emotion/react';
import styled from '@emotion/styled';
// import { AxiosError, AxiosResponse } from 'axios';
// import { useMutation } from 'react-query';
// import { STT } from '../../constants/api';
import { useAppDispatch } from '../../hooks/reduxHook';
import useTheme from '../../hooks/useTheme';
import { recodingSuccess } from '../../store/modules/script';
import { common } from '../../styles/theme';
// import { ErrorResponse } from '../../types/commonTypes';
import AudioRecorder from '../../types/recodeTypes';
// import { usePostDiariesSTT } from '../../apis/diaries';

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

function SaveButton(props: { audioRecorder: AudioRecorder }) {
  const { audioRecorder } = props;
  const theme = useTheme();
  const dispatch = useAppDispatch();
  console.log(audioRecorder.recordedChunks);
  // const mutation = useMutation<AxiosResponse<any>, AxiosError<ErrorResponse>>(
  //   [STT],
  //   usePostDiariesSTT(audioRecorder.recordedChunks),
  // );

  const handleRecode = () => {
    dispatch(recodingSuccess());
    audioRecorder.stopRecording();
    // mutation.mutate();
  };

  return (
    <CustomButton type="button" theme={theme} onClick={handleRecode}>
      <i className="fas fa-stop" />
      <h5>대화종료</h5>
    </CustomButton>
  );
}

export default SaveButton;
