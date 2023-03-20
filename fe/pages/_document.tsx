import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
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
          content="https://harupalette.com/images/common/harupalette_main.png"
        />

        {/* 카카오 SDK import */}
        <script src="https://developers.kakao.com/sdk/js/kakao.min.js" />

        <title>Haru Palette</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
