/* eslint-disable no-empty-pattern */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import 'tailwindcss/dist/tailwind.css';

import Container from '@/components/Container';
import Main from '@/components/Main';

import { getSortedPostsData } from '../../lib/posts';

interface Post {
  title: string;
  id: string;
}

interface IProps {
  allPostsData: Post[];
}

function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = shuffleArray(getSortedPostsData());
  return {
    props: {
      allPostsData
    }
  };
};

const Home: NextPage<IProps> = ({}) => {

  return (
    <>
      <Container>
        <Head>
          <title>! CMD DC5 2021-2022 </title>
          <link href="/favicon.ico" rel="icon" />
        </Head>

        <Main className="text-left justify-start">
          <h1 className="text-green-400 uppercase text-4xl py-4 font-black">EXPO</h1>
          
        </Main>
      </Container>
    </>
  );
};

export default Home;
