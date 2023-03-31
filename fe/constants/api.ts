// 기본 URL
export const BASE_URL = 'https://harupalette.com:8080';

// API 엔드 포인트
export const V1 = 'api/v1';
export const V2 = 'api/v2';

// 정보 조회
export const USERS = `${V1} + '/users'`;
// 리마인드
export const REMIND = `${USERS} + '/remind'`;

// 상세조회
export const DIARIES = `${V1} + '/diaries'`;
// STT
export const STT = `${DIARIES} + '/stt'`;
// 이미지 조회
export const IMAGE = `${DIARIES} + '/image'`;
// 수정 조회
export const SCRIPT = `${DIARIES} + '/script'`;

// 달력 목록
export const CALENDARS = `${V1} + '/calendars'`;

// 도전과제 조회
export const CHALLENGE = `${V1} + '/challenge'`;
// 캐릭터 조회
export const FRIEND = `${V1} + '/friend'`;
// 포인트 내역 조회
export const POINTS = `${V1} + '/points'`;
