export interface DiaryData {
  diaryId: number;
  date: string;
  contents: string;
  weather: string;
  friendId: number;
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

export interface STTResponse {
  sttData: STTData;
}

export interface ScriptResponse {
  scriptData: ScriptData;
}

export interface UseGetDiariesResult {
  isLoading: boolean;
  diaryData: DiaryData | undefined;
  isError: boolean;
  errorMessage: string | undefined;
}

export interface UseGetScriptResult {
  isLoading: boolean;
  scriptData: ScriptData | undefined;
  isError: boolean;
  errorMessage: string | undefined;
}
