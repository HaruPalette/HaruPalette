import axios, { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import {
  BASE_URL,
  CACHE_TIME,
  CALENDARS,
  DIARIES,
  SCRIPT,
  STALE_TIME,
  STT,
} from '../constants/api';
import { ErrorResponse } from '../types/commonTypes';
import { UsersResponse } from '../types/usersTypes';
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

/** 일기 STT */
export const usePostDiariesSTT = (recordedChunks: Blob[]) => {
  //   요청 url
  const queryKey = BASE_URL + STT;

  const file = new FormData();
  file.append('audio', new Blob(recordedChunks), 'audio.webm');

  //   axios 요청
  const queryFn = () => {
    return axios.post(
      queryKey,
      {
        file,
      },
      {
        headers: {
          Authorization: getCookie('Authorization'),
          'Content-Type': 'multipart/form-data',
        },
      },
    );
  };

  return queryFn;
  //
  // const { isLoading, data, isError, error } = useMutation<
  //   AxiosResponse<UsersResponse>,
  //   AxiosError<ErrorResponse>
  // >([STT], () => queryFn);
  //
  // return { isLoading, data, isError, error };
};

/** 일기 작성 */
export const usePostDiaries = (
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
  const queryFn = () =>
    axios.post(
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
    );
  return queryFn;
  // const { isLoading, data, isError, error } = useMutation<
  //   AxiosResponse<UsersResponse>,
  //   AxiosError<ErrorResponse>
  // >([DIARIES], () => queryFn);

  // return { isLoading, data, isError, error };
};

/** 일기 수정 조회 */
export const useGetDiariesScript = (index: number) => {
  //   요청 url
  const queryKey = BASE_URL + SCRIPT;
  //   axios 요청
  const queryFn = axios
    .get(queryKey, {
      headers: {
        Authorization: `${getCookie('Authorization')}`,
      },
      params: {
        index,
      },
    })
    .then(res => res.data);

  const { isLoading, data, isError, error } = useQuery<
    AxiosResponse<UsersResponse>,
    AxiosError<ErrorResponse>
  >([SCRIPT], () => queryFn, {
    keepPreviousData: true,
    staleTime: STALE_TIME,
    cacheTime: CACHE_TIME,
  });

  return { isLoading, data, isError, error };
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
