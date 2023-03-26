// 기본 URL
export const BASE_URL: string =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8080/api'
    : 'https://harupalette.com/api';

// API 엔드 포인트
export const V1: string = '/api/v1';
export const V2: string = '/api/v2';

// 정보 조회
export const USERS: string = V1 + '/users';
// 리마인드
export const REMIND: string = USERS + '/remind';

// 상세조회
export const DIARIES: string = V1 + '/diaries';
// STT
export const STT: string = DIARIES + '/stt';
// 이미지 조회
export const IMAGE: string = DIARIES + '/image';
// 수정 조회
export const SCRIPT: string = DIARIES + '/script';

// 달력 목록
export const CALENDARS: string = V1 + '/calendars';

// 도전과제 조회
export const CHALLENGE: string = V1 + '/challenge';
// 캐릭터 조회
export const FRIEND: string = V1 + '/friend';
// 포인트 내역 조회
export const POINTS: string = V1 + '/points';
