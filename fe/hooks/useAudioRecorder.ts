import { WaveFile } from 'wavefile';
import { useState } from 'react';

const encodeWAV = (chunks: Blob[]): Blob => {
  const waveFile = new WaveFile();

  chunks.forEach(chunk => {
    waveFile.fromScratch(1, 44100, '32f', [chunk.arrayBuffer()]);
  });

  waveFile.toBitDepth('24');

  return new Blob([waveFile.toBuffer()]);
};

const useAudioRecorder = () => {
  const [recordedChunks, setRecordedChunks] = useState<Blob[]>([]);
  const [recordedChunksWAV, setRecordedChunksWAV] = useState<Blob[]>([]);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(
    null,
  );
  const [isRecording, setIsRecording] = useState(false);

  const startRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
      const recorder = new MediaRecorder(stream);
      recorder.start();
      recorder.addEventListener('dataavailable', event => {
        setRecordedChunks(prevChunks => [...prevChunks, event.data]);
      });
      setMediaRecorder(recorder);
      setIsRecording(true);
    });
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setIsRecording(false);
      const chunksWAV = encodeWAV(recordedChunks);
      setRecordedChunksWAV(prevChunks => [...prevChunks, chunksWAV]);
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

  return {
    recordedChunks,
    startRecording,
    stopRecording,
    pauseRecording,
    resumeRecording,
    isRecording,
    recordedChunksWAV,
  };
};

export default useAudioRecorder;
