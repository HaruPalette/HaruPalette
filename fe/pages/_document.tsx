import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <meta name="description" content="음성으로 기록하는 일기장 서비스" />
        {/* Facebook, Kakao Open Graph 설정 */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://harupalette.com/" />
        <meta property="og:title" content="하루팔레트" />
        <meta
          property="og:description"
          content="음성으로 기록하는 일기, 하루팔레트"
        />
        <meta
          property="og:image"
          content="/assets/img/common/kakao_open_graph.svg"
        />

        {/* 네이버 site verification 등록 */}
        <meta
          name="naver-site-verification"
          content="b1e5587d9e7fda16395f0ffd66ffbd3cb6b4eeb2"
        />

        {/* 구글 search console 등록 */}
        <meta
          name="google-site-verification"
          content="BjvSd03oEZ9Hxq7EeIwIQ6thNQ_Bli11Hn8ExJn-P-o"
        />

        {/* 카카오 SDK import */}
        <script src="https://developers.kakao.com/sdk/js/kakao.min.js" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
          integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=="
          crossOrigin="anonymous"
        />
      </body>
    </Html>
  );
}
