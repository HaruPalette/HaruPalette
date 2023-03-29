import { WaveFile } from 'wavefile';
import { useState } from 'react';
import { MediaRecorder, register } from 'extendable-media-recorder';
import { connect } from 'extendable-media-recorder-wav-encoder';
import { IMediaRecorderConstructor } from 'extendable-media-recorder/src/interfaces/media-recorder-constructor';
import { IMediaRecorder } from 'extendable-media-recorder/src/interfaces/media-recorder';

// const encodeWAV = (chunks: Blob[]): Blob => {
//   const waveFile = new WaveFile();
//   waveFile.fromScratch(1, 16000, '16', []);
//   chunks.forEach(chunk => {
//     waveFile.addData(chunk.arrayBuffer());
//   });
//   console.log(waveFile);

//   return new Blob([waveFile.toBuffer()]);
// };

const useAudioRecorder = () => {
  const [recordedChunks, setRecordedChunks] = useState<Blob[]>([]);
  const [recordedChunksWAV, setRecordedChunksWAV] = useState<Blob[]>([]);
  const [mediaRecorder, setMediaRecorder] = useState<IMediaRecorder | null>(
    null,
  );
  const [isRecording, setIsRecording] = useState(false);

  const startRecording = async () => {
    await register(await connect());
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream, { mimeType: 'audio/wav' });
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
      // const chunksWAV = encodeWAV(recordedChunks);
      // setRecordedChunksWAV(prevChunks => [...prevChunks, chunksWAV]);
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
