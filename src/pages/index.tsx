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

const Home: NextPage<IProps> = ({allPostsData}) => {

  return (
    <>
      <Container>
        <Head>
          <title>! CMD DC5 2021-2022 </title>
          <link href="/favicon.ico" rel="icon" />
        </Head>

        <Main className="text-left justify-start">
          <h1 className="text-green-400 uppercase text-4xl py-4 font-black">EXPO</h1>
          <h2 className="text-purple-600 uppercase text-sm font-black">Interface &amp; User Experience Design</h2>
          <ul className="container no-underline flex flex-wrap  justify-start text-black mb-10">
            {allPostsData.map(({ id, title }) => (
              <li key={id} className="py-2 px-3 text-3xl font-medium  hover:text-purple-600 transition duration-300 ease-in-out">
                <Link href={`/team/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                
              </li>
            ))}
          </ul>
        </Main>
      </Container>
    </>
  );
};

export default Home;
