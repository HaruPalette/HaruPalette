import { useState } from 'react';

const useAudioRecorder = () => {
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder>();
  const [isRecording, setIsRecording] = useState(false);
  let recordedChunks: Blob[] = [];

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream, { mimeType: 'audio/webm' });
    if (!recorder) return;
    recordedChunks = [];
    recorder.start();
    recorder.ondataavailable = event => {
      recordedChunks.push(event.data);
    };
    // recorder.addEventListener('dataavailable', event => {
    //   setRecordedChunks(prevChunks => [...prevChunks, event.data]);
    // });
    recorder.onstop = () => {
      const blob = new Blob(recordedChunks, { type: 'audio/webm' });
      const audioFile = new File([blob], 'audio.webm', { type: 'audio/webm' });
      const formData = new FormData();
      formData.append('file', audioFile);
      console.log(formData.get('file'));
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
      // setRecordedChunks([]);
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
