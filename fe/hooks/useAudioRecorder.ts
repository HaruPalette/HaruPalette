import { useState } from 'react';
import axios from 'axios';
import { getCookie } from '../utils/cookie';
import { BASE_URL, STT } from '../constants/api';
import { useAppSelector } from './reduxHook';
import { selectScript } from '../store/modules/script';

const useAudioRecorder = () => {
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder>();
  const [isRecording, setIsRecording] = useState(false);
  let recordedChunks: Blob[] = [];
  const order = useAppSelector(selectScript).totalScriptCount;

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream, { mimeType: 'audio/webm' });
    if (!recorder) return;
    recordedChunks = [];
    recorder.start();
    recorder.ondataavailable = event => {
      recordedChunks.push(event.data);
    };
    recorder.onstop = () => {
      const blob = new Blob(recordedChunks, { type: 'audio/webm' });
      const audioFile = new File([blob], 'audio.webm', { type: 'audio/webm' });
      const formData = new FormData();
      formData.append('file', audioFile);
      const queryKey = `${BASE_URL}${STT}/${order}`;
      axios.post(queryKey, formData, {
        headers: {
          Authorization: getCookie('Authorization'),
          'Content-Type': 'multipart/form-data',
        },
      });
    };
    setMediaRecorder(recorder);
    setIsRecording(true);
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setIsRecording(false);
    }
  };

  const pauseRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.pause();
      setIsRecording(false);
    }
  };

  const resumeRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.resume();
      setIsRecording(true);
    }
  };

  const forceQuit = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setIsRecording(false);
    }
  };

  return {
    recordedChunks,
    startRecording,
    stopRecording,
    pauseRecording,
    resumeRecording,
    isRecording,
    forceQuit,
  };
};

export default useAudioRecorder;
