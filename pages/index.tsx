import type { NextPage } from 'next';
import Head from 'next/head';

import { Button } from '../stories/Button';
import Login from './login';
import MainBanner from './mainbanner';

const Home: NextPage = () => {
  return (
    <>
      <Login />
      <MainBanner />
    </>
  );
};

export default Home;
