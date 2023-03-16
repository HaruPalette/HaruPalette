import Image from "next/image";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "next/link";

function Header() {
  const menuItem = [
    {
      title: "일기 작성",
      link: "/",
    },
    {
      title: "달력 보기",
      link: "/",
    },
    {
      title: "상점 가기",
      link: "/",
    },
  ];
  const menu = menuItem.map((item) => {
    return (
      <Link
        css={{
          color: "white",
          textDecoration: "none",
          margin: "24px",
        }}
        key={item.title}
        href={item.link}
      >
        {item.title}
      </Link>
    );
  });

  const loginKakao = () => {
    window.Kakao.Auth.authorize({
      redirectUri: process.env.NEXT_PUBLIC_KAKAO_REDIRECTURI,
    });
    window.location.href = process.env.NEXT_PUBLIC_LOGIN_REDIRECTURI
      ? process.env.NEXT_PUBLIC_LOGIN_REDIRECTURI
      : "/";
  };
  return (
    <StylesHeader>
      <div
        css={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          css={{
            fontSize: "48px",
            fontWeight: "bold",
            marginRight: "32px",
          }}
        >
          LOGO
        </div>
        {menu}
      </div>
      <div
        css={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          css={{
            width: "40px",
            height: "40px",
            background: "white",
            borderRadius: "20px",
            textAlign: "center",
            lineHeight: "50px",
            marginRight: "16px",
          }}
        >
          <Image src="assets/img/common/dark/dark_theme.svg" width={24} height={24} alt="theme" />
        </div>
        <button
          css={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "104px",
            height: "40px",
            borderRadius: "8px",
            background: "#FFEB3B",
          }}
          type="button"
          onClick={loginKakao}
        >
          <Image src="assets/img/common/kakao.svg" width={24} height={24} alt="kakao" />
          <div
            css={{
              fontSize: "16px",
              fontWeight: "bold",
              marginLeft: "8px",
            }}
          >
            로그인
          </div>
        </button>
      </div>
    </StylesHeader>
  );
}

export default Header;

const StylesHeader = styled.div`
  height: 88px;
  width: calc(100vw - 320px);
  position: fixed;
  top: 0;
  left: 0;
  background: black;
  color: white;
  padding: 0 160px;
  display: flex;
  flex-diraction: row;
  align-items: center;
  justify-content: space-between;
`;
