import { useState } from 'react';

const useAudioRecorder = () => {
  const [recordedChunks, setRecordedChunks] = useState<Blob[]>([]);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder>();
  const [isRecording, setIsRecording] = useState(false);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream, { mimeType: 'audio/webm' });
    if (!recorder) return;
    recorder.start();
    recorder.addEventListener('dataavailable', event => {
      setRecordedChunks(prevChunks => [...prevChunks, event.data]);
    });
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
      setRecordedChunks([]);
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
