import axios from 'axios';
import { BASE_URL, FRIEND } from '../constants/api';
import { getCookie } from '../utils/cookie';

/** 캐릭터 조회 */
export const useGetFriends = (token: string | undefined) => {
  //   요청 url
  const queryKey = BASE_URL + FRIEND;
  //   axios 요청
  const queryFn = axios
    .get(queryKey, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then(res => res.data);

  return queryFn;
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
};

/** 캐릭터 구매 */
export const usePostFriends = (friendId: number) => {
  //   요청 url
  const queryKey = BASE_URL + FRIEND;
  //   axios 요청
  const queryFn = () =>
    axios.post(
      queryKey,
      {
        friendId,
      },
      {
        headers: {
          Authorization: `${getCookie('Authorization')}`,
        },
      },
    );

  return queryFn;
};
