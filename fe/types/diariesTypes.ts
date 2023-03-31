export interface DiaryData {
  diaryId: number;
  date: string;
  contents: string;
  weather: string;
  ename: string;
  answer: string;
  image: string;
  stickerCode: string;
  neutral: number;
  happy: number;
  surprise: number;
  anger: number;
  disgust: number;
  anxiety: number;
  sadness: number;
}

export interface ImageData {
  image: string;
}

export interface STTData {
  contents: string;
}

export interface ScriptData {
  contents: string;
  image: string;
}

export interface DiariesResponse {
  diaryData: DiaryData;
}

export interface ImageResponse {
  imageData: ImageData;
}

export interface STTResponse {
  sttData: STTData;
}

export interface ScriptResponse {
  scriptData: ScriptData;
}
