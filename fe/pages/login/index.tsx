// import axios from 'axios';
import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { useGetUsers } from '../../hooks/reactQueryHooks/useUsers';
// import { loginSuccess } from '../../store/modules/profile';
import { getCookie, setCookie } from '../../utils/cookie';

function Login() {
  // const dispatch = useDispatch();
  // const users = useGetUsers;

  useEffect(() => {
    // URL에서 토큰 값 뽑아내기
    const ACCESS_TOKEN = new URL(window.location.href).searchParams.get(
      'Authorization',
    );
    const REFRESH_TOKEN = new URL(window.location.href).searchParams.get(
      'refreshToken',
    );

    // 쿠키 util을 사용해 쿠키에 토큰 저장
    if (ACCESS_TOKEN) {
      setCookie('Authorization', ACCESS_TOKEN, {
        path: '/',
        secure: true,
        sameSite: 'none',
      });
    }
    if (REFRESH_TOKEN) {
      setCookie('refreshToken', REFRESH_TOKEN, {
        path: '/',
        secure: true,
        sameSite: 'none',
      });
    }
    if (getCookie('Authorization') && getCookie('refreshToken')) {
      window.location.href = '/';
    }
  });

  // 토큰을 잘 받았을 경우
  // const users = useGetUsers().userData;
  // if (getCookie('Authorization') && getCookie('refreshToken')) {
  // console.log(getCookie('Authorization'));
  // 로그인 상태 변경
  // axios
  //   .get('https://harupalette.com:8080/api/v1/users', {
  //     headers: {
  //       Authorization: `${getCookie('Authorization')}`,
  //     },
  //   })
  //   .then(res => {
  //     console.log(res.data);
  //     dispatch(loginSuccess(res.data));
  //   });
  // const user = users().userData;
  // dispatch(loginSuccess(user));
  // }
  return <div>로딩중 ...</div>;
}

export default Login;
