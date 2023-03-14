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
  return (
    <StylesHeader>
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
`;
