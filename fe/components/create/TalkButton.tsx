import { ColorTypes } from '@emotion/react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import useTheme from '../../hooks/useTheme';
import {
  endDiarySuceess,
  selectScript,
  startDiarySuccess,
  startRecodingSuccess,
} from '../../store/modules/script';
import { common } from '../../styles/theme';
import AudioRecorder from '../../types/recodeTypes';

const CustomButton = styled.button<{ theme: ColorTypes }>`
  display: flex;
  align-items: center;
  justify-content: space-around;

  z-index: 1;

  width: 10rem;
  height: 4rem;

  scale: 0.8;

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

const ButtonContainer = styled.div<{ index: number }>`
  --index: ${props => props.index};

  display: flex;
  justify-content: space-between;

  button:nth-of-type(1) {
    display: ${props => (props.index !== 3 ? 'flex' : 'none')};
  }

  button:nth-of-type(2) {
    display: ${props => (props.index === 2 ? 'flex' : 'none')};
  }

  button:nth-of-type(3) {
    display: ${props => (props.index === 3 ? 'flex' : 'none')};
  }
`;

function TalkButton(props: { audioRecorder: AudioRecorder }) {
  const { audioRecorder } = props;
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const scriptData = useAppSelector(selectScript);
  const router = useRouter();

  const handleStart = () => {
    dispatch(startDiarySuccess());
  };

  const handleRecode = () => {
    dispatch(startRecodingSuccess());
    audioRecorder.startRecording();
  };

  const handleEnd = () => {
    dispatch(endDiarySuceess());
  };

  const hendleModify = () => {
    router.push('/modify');
    // axios will come here
  };

  return scriptData.curScriptIndex === 0 ? (
    <CustomButton type="button" theme={theme} onClick={handleStart}>
      <i className="fas fa-play" />
      <h4>시작하기</h4>
    </CustomButton>
  ) : (
    <ButtonContainer index={scriptData.curScriptIndex}>
      <CustomButton type="button" theme={theme} onClick={handleRecode}>
        <i className="fas fa-microphone" />
        <h4>대화하기</h4>
      </CustomButton>
      <CustomButton type="button" theme={theme} onClick={handleEnd}>
        <i className="fas fa-power-off" />
        <h4>종료하기</h4>
      </CustomButton>
      <CustomButton type="button" theme={theme} onClick={hendleModify}>
        <i className="fas fa-pen" />
        <h4>일기작성</h4>
      </CustomButton>
    </ButtonContainer>
  );
}

export default TalkButton;
