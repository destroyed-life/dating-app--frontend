import type { NextPage } from 'next';
import Login from './login';
import Head from 'next/head';
import { Button } from '../stories/Button';
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
