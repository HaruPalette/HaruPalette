export interface DiaryData {
  diaryId: number;
  date: string;
  contents: string;
  weather: string;
  friendEname: string;
  answer: string;
  image: string;
  stickerCode: string;
  neutral: number;
  happy: number;
  surprise: number;
  anger: number;
  anxiety: number;
  sadness: number;
  disgust: number;
}

export interface CalendarData {
  diaryId: number;
  happy: number;
  date: string;
}

export interface ScriptData {
  contents: string;
}

export interface ScriptErrorData {
  code: string;
  message: string;
}

export interface DiariesResponse {
  diaryData: DiaryData;
}

export interface ScriptResponse {
  scriptData: ScriptData;
}

export interface CalendarResponse {
  calendarData: CalendarData;
}
