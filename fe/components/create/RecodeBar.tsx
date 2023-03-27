import { ColorTypes } from '@emotion/react';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/reduxHook';
import useTheme from '../../hooks/useTheme';
import { selectScript } from '../../store/modules/script';
import { common } from '../../styles/theme';
import RecodeProgressBar from './RecodeProgresssBar';
import SaveButton from './SaveButton';
import StopButton from './StopButton';

const RecodeContainer = styled.div`
  position: absolute;
  top: 70vh;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 20rem;
  height: 6rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;

  width: 80%;
  margin: 0 auto;
`;

const MusicProgress = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 20px;
  cursor: pointer;
`;

const MusicProgressTime = styled.div`
  position: absolute;
  top: 12px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MusicCurrentTime = styled.h4<{ theme: ColorTypes }>`
  color: ${props => props.theme.color};
  font-size: 12px;
  opacity: 1;
`;

const MusicDurationTime = styled.h4<{ theme: ColorTypes }>`
  color: ${props => props.theme.color};
  font-size: 12px;
  opacity: 1;
`;

function RecodeBar() {
  const theme = useTheme();
  const [second, setSecond] = useState<number>(0);
  const isPause = useAppSelector(selectScript).isPausing;

  let recordedChunks = [];
  let mediaRecorder;

  const startRecording = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then(function (stream) {
        mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.start();
        mediaRecorder.addEventListener('dataavailable', function (event) {
          recordedChunks.push(event.data);
        });
      });
  };

  useEffect(() => {
    if (second < 180 && !isPause) {
      setTimeout(() => {
        setSecond(second + 0.1);
      }, 100);
    }

    if (second === 0) {
      startRecording();
    }
  }, [second, isPause]);

  return (
    <RecodeContainer>
      <RecodeProgressBar second={second} />
      <MusicProgress>
        <MusicProgressTime>
          <MusicCurrentTime theme={theme}>
            {Math.floor(second)}
          </MusicCurrentTime>
          <MusicDurationTime theme={theme}>180</MusicDurationTime>
        </MusicProgressTime>
      </MusicProgress>
      <ButtonContainer>
        <StopButton />
        <SaveButton />
      </ButtonContainer>
    </RecodeContainer>
  );
}

export default RecodeBar;
