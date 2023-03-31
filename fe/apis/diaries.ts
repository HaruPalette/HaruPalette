import axios from 'axios';
import { useMutation, useQuery } from 'react-query';
import {
  BASE_URL,
  CACHE_TIME,
  CALENDARS,
  DIARIES,
  SCRIPT,
  STALE_TIME,
  STT,
} from '../constants/api';
import { getCookie } from '../utils/cookie';

/** 일기 상세 조회 */
export const useGetDiaries = async (diaryId: number) => {
  //   요청 url
  const queryKey = BASE_URL + DIARIES;
  //   axios 요청
  const queryFn = await axios
    .get(queryKey, {
      headers: {
        Authorization: `${getCookie('Authorization')}`,
      },
      params: {
        diaryId,
      },
    })
    .then(res => res.data);
  return useQuery(queryKey, queryFn, {
    staleTime: STALE_TIME,
    cacheTime: CACHE_TIME,
  });
};

/** 일기 STT */
export const usePostDiariesSTT = async (file: MediaStream) => {
  //   요청 url
  const queryKey = BASE_URL + STT;
  //   axios 요청
  const queryFn = await axios
    .post(
      queryKey,
      {
        file,
      },
      {
        headers: {
          Authorization: `${getCookie('Authorization')}`,
        },
      },
    )
    .then(res => res.data);
  return useMutation(queryKey, queryFn);
};

/** 일기 작성 */
export const usePostDiaries = async (
  stickerCode: string,
  weather: string,
  contents: string,
  friend: number,
  image: string,
  file: MediaStream | null,
) => {
  //   요청 url
  const queryKey = BASE_URL + DIARIES;
  //   axios 요청
  const queryFn = await axios
    .post(
      queryKey,
      {
        stickerCode,
        weather,
        contents,
        friend,
        image,
        file,
      },
      {
        headers: {
          Authorization: `${getCookie('Authorization')}`,
        },
      },
    )
    .then(res => res.data);
  return useMutation(queryKey, queryFn);
};

/** 일기 수정 조회 */
export const useGetDiariesScript = async (index: number) => {
  //   요청 url
  const queryKey = BASE_URL + SCRIPT;
  //   axios 요청
  const queryFn = await axios
    .get(queryKey, {
      headers: {
        Authorization: `${getCookie('Authorization')}`,
      },
      params: {
        index,
      },
    })
    .then(res => res.data);
  return useQuery(queryKey, queryFn, {
    staleTime: STALE_TIME,
    cacheTime: CACHE_TIME,
  });
};

/** 일기 삭제 */
export const usePatchDiaries = async (diaryId: number) => {
  //   요청 url
  const queryKey = `${BASE_URL}${DIARIES}/${String(diaryId)}`;
  //   axios 요청
  const queryFn = await axios
    .patch(
      queryKey,
      {},
      {
        headers: {
          Authorization: `${getCookie('Authorization')}`,
        },
      },
    )
    .then(res => res.data);
  return useMutation(queryKey, queryFn);
};

/** 달력 조회 */
export const useGetDiariesCalendars = async (date: string) => {
  //   요청 url
  const queryKey = BASE_URL + CALENDARS;
  //   axios 요청
  const queryFn = await axios
    .get(queryKey, {
      headers: {
        Authorization: `${getCookie('Authorization')}`,
      },
      params: {
        date,
      },
    })
    .then(res => res.data);
  return useQuery(queryKey, queryFn, {
    staleTime: STALE_TIME,
    cacheTime: CACHE_TIME,
  });
};
