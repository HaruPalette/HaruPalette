import axios, { AxiosError, AxiosResponse } from 'axios';
import { useMutation, useQuery } from 'react-query';
import { BASE_URL, CACHE_TIME, FRIEND, STALE_TIME } from '../constants/api';
import { ErrorResponse } from '../types/commonTypes';
import { UsersResponse } from '../types/usersTypes';
import { getCookie } from '../utils/cookie';

/** 캐릭터 조회 */
export const useGetFriends = () => {
  //   요청 url
  const queryKey = BASE_URL + FRIEND;
  //   axios 요청
  const queryFn = axios
    .get(queryKey, {
      headers: {
        Authorization: `${getCookie('Authorization')}`,
      },
    })
    .then(res => res.data);

  return queryFn;

  // const { isLoading, data, isError, error } = useQuery<
  //   AxiosResponse<UsersResponse>,
  //   AxiosError<ErrorResponse>
  // >([FRIEND], () => queryFn, {
  //   keepPreviousData: true,
  //   staleTime: STALE_TIME,
  //   cacheTime: CACHE_TIME,
  // });

  // return { isLoading, data, isError, error };
};

/** 캐릭터 선택 */
export const usePatchFriends = (friendId: number) => {
  //   요청 url
  const queryKey = `${BASE_URL}${FRIEND}/${String(friendId)}`;
  //   axios 요청
  const queryFn = () =>
    axios.patch(
      queryKey,
      {},
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
  // >([FRIEND, friendId], () => queryFn);

  // return { isLoading, data, isError, error };
};

/** 캐릭터 구매 */
export const usePostFriends = (friendId: number) => {
  //   요청 url
  const queryKey = BASE_URL + FRIEND;
  //   axios 요청
  const queryFn = axios
    .post(
      queryKey,
      {
        friendId,
      },
      {
        headers: {
          Authorization: `${getCookie('Authorization')}`,
        },
      },
    )
    .then(res => res.data);

  return queryFn;

  // const { isLoading, data, isError, error } = useMutation<
  //   AxiosResponse<UsersResponse>,
  //   AxiosError<ErrorResponse>
  // >([FRIEND], () => queryFn);

  // return { isLoading, data, isError, error };
};
