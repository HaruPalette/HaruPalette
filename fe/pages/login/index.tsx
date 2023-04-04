import { useAppDispatch } from '../../hooks/reduxHook';
import { loginSuccess } from '../../store/modules/profile';
import { useGetUsers } from '../../apis/users';
import { setCookie } from '../../utils/cookie';

function Login() {
  const dispatch = useAppDispatch();
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
  const user = useGetUsers();
  if (!user.isLoading) {
    dispatch(loginSuccess(user.data));
    window.location.href = '/';
  }
  return <div>로딩중 ...</div>;
}

export default Login;
