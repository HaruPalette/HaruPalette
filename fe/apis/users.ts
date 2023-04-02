import axios, { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import {
  BASE_URL,
  CACHE_TIME,
  CHALLENGE,
  POINTS,
  REMIND,
  STALE_TIME,
  USERS,
} from '../constants/api';
import { ErrorResponse } from '../types/commonTypes';
import { UsersResponse } from '../types/usersTypes';
import { getCookie } from '../utils/cookie';

/** 사용자 정보 조회 */
export const useGetUsers = () => {
  //   요청 url
  const queryKey = BASE_URL + USERS;
  //   axios 요청
  const queryFn = axios
    .get(queryKey, {
      headers: {
        Authorization: `${getCookie('Authorization')}`,
      },
    })
    .then(res => res.data);

  const { isLoading, data, isError, error } = useQuery<
    AxiosResponse<UsersResponse>,
    AxiosError<ErrorResponse>
  >([USERS], () => queryFn, {
    keepPreviousData: true,
    staleTime: STALE_TIME,
    cacheTime: CACHE_TIME,
  });

  return { isLoading, data, isError, error };
};

/** 사용자 리마인드 */
export const useGetUsersRemind = (token: string | undefined) => {
  //   요청 url
  const queryKey = BASE_URL + REMIND;
  //   axios 요청
  const queryFn = axios
    .get(queryKey, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then(res => res.data);

  return queryFn;
  // const { isLoading, data, isError, error } = useQuery<
  //   AxiosResponse<UsersResponse>,
  //   AxiosError<ErrorResponse>
  // >([REMIND], () => queryFn, {
  //   keepPreviousData: true,
  //   staleTime: STALE_TIME,
  //   cacheTime: CACHE_TIME,
  // });

  // return { isLoading, data, isError, error };
};

/** 사용자 도전 과제 조회 */
export const useGetUsersChallenge = (token: string | undefined) => {
  //   요청 url
  const queryKey = BASE_URL + CHALLENGE;
  //   axios 요청
  const queryFn = axios
    .get(queryKey, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then(res => res.data);

  return queryFn;

  // const { isLoading, data, isError, error } = useQuery<
  //   AxiosResponse<UsersResponse>,
  //   AxiosError<ErrorResponse>
  // >([CHALLENGE], () => queryFn, {
  //   keepPreviousData: true,
  //   staleTime: STALE_TIME,
  //   cacheTime: CACHE_TIME,
  // });

  // return { isLoading, data, isError, error };
};

/** 사용자 포인트 내역 조회 */
export const useGetUsersPoints = (category: string, date: string) => {
  // 요청 url
  const queryKey = BASE_URL + POINTS;
  //   axios 요청
  const queryFn = axios
    .get(queryKey, {
      headers: {
        Authorization: `${getCookie('Authorization')}`,
      },
      params: {
        category,
        date,
      },
    })
    .then(res => res.data);

  const { isLoading, data, isError, error } = useQuery<
    AxiosResponse<UsersResponse>,
    AxiosError<ErrorResponse>
  >([POINTS], () => queryFn, {
    keepPreviousData: true,
    staleTime: STALE_TIME,
    cacheTime: CACHE_TIME,
  });

  return { isLoading, data, isError, error };
};
