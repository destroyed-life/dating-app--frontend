import { NextComponentType } from 'next';
import type { AppProps } from 'next/app';
import { AppContext, AppInitialProps } from 'next/app';

import '../styles/globals.css';

const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}) => {
  return <Component {...pageProps} />;
};

export default MyApp;
