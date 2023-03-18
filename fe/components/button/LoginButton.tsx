import styled from '@emotion/styled';
import Image from 'next/image';

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
    <KakaoLogInButton onClick={loginKakao}>
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

  padding: 0 0.5rem;

  width: 6rem;
  height: 2.5rem;

  border-radius: 0.5rem;
  background-color: #ffeb3b;
  font-size: 1rem;
  font-weight: bold;

  color: black;
`;
