import axios from 'axios';
import { useMutation, useQuery } from 'react-query';
import { BASE_URL, CACHE_TIME, FRIEND, STALE_TIME } from '../constants/api';
import { getCookie } from '../utils/cookie';

/** 캐릭터 조회 */
export const useGetFriends = async () => {
  //   요청 url
  const queryKey = BASE_URL + FRIEND;
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

/** 캐릭터 선택 */
export const usePatchFriends = async (friendId: number) => {
  //   요청 url
  const queryKey = `${BASE_URL}${FRIEND}/${String(friendId)}`;
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

/** 캐릭터 구매 */
export const usePostFriends = async (friendId: number) => {
  //   요청 url
  const queryKey = BASE_URL + FRIEND;
  //   axios 요청
  const queryFn = await axios
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
  return useMutation(queryKey, queryFn);
};
