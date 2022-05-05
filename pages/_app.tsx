import '../styles/globals.css';
import type { AppProps } from 'next/app';
import 'antd/dist/antd.css';
import NextNProgress from 'nextjs-progressbar';
import { ComponentProps } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const nProgressConfigs: ComponentProps<typeof NextNProgress> = {
    color: '#29D',
    startPosition: 0.3,
    stopDelayMs: 200,
    height: 3,
    showOnShallow: true,
  };

  return (
    <>
      <NextNProgress {...nProgressConfigs} />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
