import axios from 'axios';
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
import { getCookie } from '../utils/cookie';

/** 사용자 정보 조회 */
export const useGetUsers = async () => {
  //   요청 url
  const queryKey = BASE_URL + USERS;
  //   axios 요청
  const queryFn = await axios
    .get(queryKey, {
      headers: {
        Authorization: `${getCookie('Authorization')}`,
      },
    })
    .then(res => res.data);
  return queryFn;
};

/** 사용자 리마인드 */
export const useGetUsersRemind = async () => {
  //   요청 url
  const queryKey = BASE_URL + REMIND;
  //   axios 요청
  const queryFn = await axios
    .get(queryKey, {
      headers: {
        Authorization: `${getCookie('Authorization')}`,
      },
    })
    .then(res => res.data);
  return useQuery(queryKey, queryFn, {
    staleTime: STALE_TIME,
    cacheTime: CACHE_TIME,
  });
};

/** 사용자 도전 과제 조회 */
export const useGetUsersChallenge = async () => {
  //   요청 url
  const queryKey = BASE_URL + CHALLENGE;
  //   axios 요청
  const queryFn = await axios
    .get(queryKey, {
      headers: {
        Authorization: `${getCookie('Authorization')}`,
      },
    })
    .then(res => res.data);
  return useQuery(queryKey, queryFn, {
    staleTime: STALE_TIME,
    cacheTime: CACHE_TIME,
  });
};

/** 사용자 포인트 내역 조회 */
export const useGetUsersPoints = async (category: string, date: string) => {
  // 요청 url
  const queryKey = BASE_URL + POINTS;
  //   axios 요청
  const queryFn = await axios
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
  return useQuery(queryKey, queryFn, {
    staleTime: STALE_TIME,
    cacheTime: CACHE_TIME,
  });
};
