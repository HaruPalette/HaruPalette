export default interface AudioRecorder {
  recordedChunks: Blob[];
  startRecording: any;
  stopRecording: any;
  pauseRecording: any;
  resumeRecording: any;
  isRecording: boolean;
  recordedChunksWAV: Blob[];
}
