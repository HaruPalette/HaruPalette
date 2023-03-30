import axios, { AxiosInstance } from 'axios';
// import jwtDecode from 'jwt-decode';
import { BASE_URL } from '../constants/api';
import { getCookie } from './cookie';
// import { ACCESS_TOKEN } from '../constants/token';

// interface DecodedToken {
//   exp: number;
// }

// refresh token을 사용해 access token을 재발급 받는 함수
// const reissueAccessToken = async () => {
//   const refreshToken = Cookies.get(REFRESH_TOKEN);
//   if (!refreshToken) {
//     throw new Error('No refresh token found.');
//   }

//   const response = await axios.post(
//     '/users/reissue',
//     { refreshToken },
//     { withCredentials: true },
//   );
//   const { accessToken } = response.data;
//   Cookies.set(ACCESS_TOKEN, accessToken, { expires: 1 });

//   return accessToken;
// };

const createAxiosInstance = (): AxiosInstance => {
  const baseURL = BASE_URL;
  const accessToken: string | undefined = getCookie('Authorization');
  const headers = { Authorization: `${accessToken}` };
  const axiosInstance = axios.create({
    baseURL,
    headers,
  });

  // interceptor
  // axiosInstance.interceptors.response.use(
  //   async (response: AxiosResponse<any>) => {
  //     // Check if access token is present and not expired
  //     if (accessToken) {
  //       const decodedToken: DecodedToken = jwtDecode(accessToken);
  //       const currentTime = Date.now() / 1000;

  //       if (decodedToken.exp > currentTime + 300) {
  //         console.log('토큰 만료기간이 남아 axios 요청을 보냄');
  //         response.config.headers.Authorization = `${accessToken}`;
  //       } else {
  //         console.log('토큰 만료기간이 다가와 새로운 토큰을 발급');
  //       }
  //     } else {
  //       console.log('비로그인 상태');
  //     }

  //     return response;
  //   },

  //   async (error: AxiosError) => {
  //     const temp = error;
  //     // response error
  //     if (temp.response) {
  //       try {
  //         accessToken = await reissueAccessToken();

  //         // 재발급  받은 access token을 header에 추가
  //         temp.response.config.headers.Authorization = `Bearer ${accessToken}`;
  //         // 재시도
  //         const response = await axios.request(temp.response.config);
  //         return response;
  //       } catch (err) {
  //         console.log('토큰이 만료되어 로그아웃 처리');
  //       }
  //     }

  //     return Promise.reject(error);
  //   },
  // );

  return axiosInstance;
};

export const axiosInstance = createAxiosInstance();
export default createAxiosInstance;
