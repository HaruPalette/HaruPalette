import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import jwtDecode from 'jwt-decode';
import cookies from 'js-cookie';

interface DecodedToken {
  exp: number;
}

const ACCESS_TOKEN: string = 'access_token';
const REFRESH_TOKEN: string = 'refresh_token';

// refresh token을 사용해 access token을 재발급 받는 함수
const reissueAccessToken = async () => {
  const refreshToken = cookies.get(REFRESH_TOKEN);
  if (!refreshToken) {
    throw new Error('No refresh token found.');
  }

  const response = await axios.post(
    '/users/reissue',
    { refreshToken },
    { withCredentials: true },
  );
  const { accessToken } = response.data;
  cookies.set(ACCESS_TOKEN, accessToken, { expires: 1 });

  return accessToken;
};

const createAxiosInstance = (): AxiosInstance => {
  const baseURL: string =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:8080/api'
      : 'https://harupalette.com/api';
  const accessToken: string | undefined = cookies.get(ACCESS_TOKEN);
  const headers = accessToken
    ? { Authorization: `Bearer ${accessToken}` }
    : undefined;

  const axiosInstance = axios.create({
    baseURL,
    headers,
  });

  // interceptor
  axiosInstance.interceptors.response.use(
    async (response: AxiosResponse<any>) => {
      // Check if access token is present and not expired
      if (accessToken) {
        const decodedToken: DecodedToken = jwtDecode(accessToken);
        const currentTime = Date.now() / 1000;

        if (decodedToken.exp > currentTime + 300) {
          console.log('토큰 만료기간이 남아 axios 요청을 보냄');
          response.config.headers.Authorization = `Bearer ${accessToken}`;
        } else {
          console.log('토큰 만료기간이 다가와 새로운 토큰을 발급');
        }
      } else {
        console.log('비로그인 상태');
      }

      return response;
    },

    async (error: AxiosError) => {
      // response error
      if (error.response) {
        try {
          const accessToken = await reissueAccessToken();

          // 재발급  받은 access token을 header에 추가
          error.response.config.headers.Authorization = `Bearer ${accessToken}`;
          // 재시도
          const response = await axios.request(error.response.config);
          return response;
        } catch (err) {
          console.log('토큰이 만료되어 로그아웃 처리');
        }
      }

      return Promise.reject(error);
    },
  );

  return axiosInstance;
};

export default { createAxiosInstance };
