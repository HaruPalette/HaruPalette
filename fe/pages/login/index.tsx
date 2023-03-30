import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useGetUsers } from '../../hooks/reactQueryHooks/useUsers';
import { loginSuccess } from '../../store/modules/profile';
import { setCookie } from '../../utils/cookie';

function Login() {
  const dispatch = useDispatch();
  useEffect(() => {
    const Authorization = new URLSearchParams(window.location.search).get(
      'Authorization',
    );
    if (Authorization) setCookie('Authorization', Authorization);
    // useGetUsers
    dispatch(loginSuccess(useGetUsers().userData));

    console.log(Authorization);
  }, []);
  return <div>로딩중 ...</div>;
}

export default Login;
