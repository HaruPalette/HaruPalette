import styled from '@emotion/styled';
import Image from 'next/image';
import { common } from '../../styles/theme';

function LoginButton() {
  const loginKakao = () => {
    window.Kakao.Auth.authorize({
      redirectUri: process.env.NEXT_PUBLIC_KAKAO_REDIRECTURI,
    });
    window.location.href = process.env.NEXT_PUBLIC_LOGIN_REDIRECTURI
      ? process.env.NEXT_PUBLIC_LOGIN_REDIRECTURI
      : '/';
  };

  return (
    <KakaoLogInButton type="button" onClick={loginKakao}>
      <Image
        src={'assets/img/common/kakao.svg'}
        width={24}
        height={24}
        alt="kakao"
      />
      로그인
    </KakaoLogInButton>
  );
}

export default LoginButton;

const KakaoLogInButton = styled.button`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 1rem;

  width: 5rem;
  height: 2.5rem;

  border-radius: ${common.fontSize.fs8};
  background-color: #ffeb3b;
  font-size: ${common.fontSize.fs16};
  font-weight: bold;

  color: black;
`;
