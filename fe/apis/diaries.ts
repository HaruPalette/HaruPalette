import axios from 'axios';
import { BASE_URL, CALENDARS, DIARIES, SCRIPT } from '../constants/api';
import { getCookie } from '../utils/cookie';

/** 일기 상세 조회 */
export const useGetDiaries = (diaryId: number, token: string | undefined) => {
  //   요청 url
  const queryKey = BASE_URL + DIARIES;
  //   axios 요청
  const queryFn = axios
    .get(queryKey, {
      headers: {
        Authorization: `${token}`,
      },
      params: {
        diaryId,
      },
    })
    .then(res => res.data);

  return queryFn;
};

/** 일기 작성 */
export const usePostDiaries = (
  stickerCode: string,
  weather: string,
  contents: string,
  friendId: number,
  image: string,
  file: File | null,
) => {
  const formData = new FormData();
  formData.append('file', file as Blob);
  formData.append(
    'diaryDto',
    new Blob(
      [
        JSON.stringify({
          stickerCode,
          weather,
          contents,
          friendId,
          image,
        }),
      ],
      {
        type: 'application/json',
      },
    ),
  );
  //   요청 url
  const queryKey = BASE_URL + DIARIES;
  //   axios 요청
  const queryFn = () =>
    axios.post(queryKey, formData, {
      headers: {
        Authorization: `${getCookie('Authorization')}`,
        'Content-Type': 'multipart/form-data',
      },
    });
  return queryFn;
};

/** 일기 수정 조회 */
export const useGetDiariesScript = (order: number) => {
  //   요청 url
  const queryKey = BASE_URL + SCRIPT;
  //   axios 요청
  const queryFn = axios.get(queryKey, {
    headers: {
      Authorization: `${getCookie('Authorization')}`,
    },
    params: {
      order,
    },
  });

  return queryFn;
};

/** 일기 삭제 */
export const usePatchDiaries = (diaryId: number) => {
  //   요청 url
  const queryKey = `${BASE_URL}${DIARIES}/${String(diaryId)}`;
  //   axios 요청
  const queryFn = () =>
    axios.patch(
      queryKey,
      {},
      {
        headers: {
          Authorization: getCookie('Authorization'),
        },
      },
    );

  return queryFn;
};

/** 달력 조회 */
export const useGetDiariesCalendars = (
  date: string,
  token: string | undefined,
) => {
  //   요청 url
  const queryKey = BASE_URL + CALENDARS;
  //   axios 요청
  const queryFn = axios
    .get(queryKey, {
      headers: {
        Authorization: `${token}`,
      },
      params: {
        date,
      },
    })
    .then(res => res.data);

  return queryFn;
};

/** 스크립트 초기화 */
export const usePostDiariesScript = () => {
  //   요청 url
  const queryKey = BASE_URL + SCRIPT;
  //   axios 요청
  const queryFn = () =>
    axios
      .post(
        queryKey,
        {},
        {
          headers: {
            Authorization: `${getCookie('Authorization')}`,
          },
        },
      )
      .then(res => res.data);

  return queryFn;
};
