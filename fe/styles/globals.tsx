import { Global, css } from '@emotion/react';

const style = () => css`
  @font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'yg-jalnan';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.2/JalnanOTF00.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    font-family: 'GmarketSansMedium';
    box-sizing: border-box;

    transition: 0.4s ease-in-out;
  }

  button {
    cursor: pointer !important;
    all: unset;
  }

  body::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }

  h1 {
    font-family: 'yg-jalnan';
  }

  a {
    text-decoration: none;
  }
`;

function GlobalStyle() {
  return <Global styles={style} />;
}

export default GlobalStyle;
