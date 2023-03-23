export interface DiaryData {
  diaryId: number;
  date: string;
  contents: string;
  weather: string;
  friendId: number;
  answerId: string;
  image: string;
  stickerCode: string;
}

export interface UseGetDiariesResult {
  isLoading: boolean;
  diaryData: DiaryData | undefined;
  isError: boolean;
  errorMessage: string | undefined;
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
