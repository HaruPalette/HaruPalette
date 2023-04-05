import styled from '@emotion/styled';
import { useAppDispatch } from '../../hooks/reduxHook';
import { loginSuccess } from '../../store/modules/profile';
import { useGetUsers } from '../../apis/users';
import { setCookie } from '../../utils/cookie';
import Model from '../../components/common/ModelCharacter2';

// const ModelLoading = styled.canvas`
//   top: 88px;
//   left: 0px;
//   width: 280px;
//   height: 180px;
//   z-index: 12;
// `;

const BlurBg = styled.div`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  z-index: 11;
  display: flex;
  justify-content: center;
  align-items: center;

  background: rgb(255, 255, 255);
`;

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
  return (
    <BlurBg>
      <Model data="foot" />
    </BlurBg>
  );
}

export default Login;
