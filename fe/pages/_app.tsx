import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import Head from 'next/head';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import GlobalStyle from '../styles/globals';
import store from '../store';

declare global {
  interface Window {
    Kakao: any;
  }
}

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  // const [queryClient] = React.useState(() => new QueryClient());
  const persist = persistStore(store);

  useEffect(() => {
    // 카카오 SDK 초기화
    if (!window.Kakao.isInitialized()) {
      // 초기화 되어있지 않을 경우(중복 초기화 에러 방지)
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_SDK_KEY); // env 환경변수 사용
      console.log(window.Kakao.isInitialized()); // 초기화 여부 확인(true 나와야 함)
    }
  }, []);
  return (
    <>
      <Head>
        <title>Haru Palette</title>
      </Head>
      <QueryClientProvider client={client}>
        <Hydrate state={pageProps?.dehydratedState}>
          <Provider store={store}>
            <PersistGate persistor={persist}>
              <GlobalStyle />
              <Component {...pageProps} />
            </PersistGate>
          </Provider>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}
