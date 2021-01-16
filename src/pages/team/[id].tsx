import { getAllPostIds, getPostData } from '../../../lib/posts';
import Head from 'next/head';
import Link from 'next/link';
import React, {Fragment} from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import 'tailwindcss/dist/tailwind.css';


import Container from '@/components/Container';
import Main from '@/components/Main';
import Miro from '@/components/Miro';
import ProfilePicture from '@/components/ProfilePicture';

import styles from '../../styles/Post.module.css';


export default function Post({
    postData
  }: {
    postData: {
      title: string
      date: string
      meta: string
      members: any
      contentHtml: string
      miro: string
    }
  }) {
    return (
      <Container>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <Main>

          <Link href="/">
            <a>
              <svg className="m-4 fill-current text-white hover:text-purple-600 transition duration-300 ease-in-out" width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-4.828 11.5l4.608 3.763-.679.737-6.101-5 6.112-5 .666.753-4.604 3.747h11.826v1h-11.828z"/>
              </svg>
            </a>
          </Link>
          <article className="container max-w-full bg-white bg-opacity-95 text-black-85 p-4 m-4 rounded-xl">
            <header>


            </header>
            <h1 className="text-4xl font-black uppercase text-center my-10">{postData.title}</h1>
            <section className="flex flex-wrap justify-center">
              
              {postData.members.map(({ name, img}) => (
                <Fragment>
                  <div className="w-1/6 flex flex-col flex-wrap text-center">
                    <figure className="rounded-full h-32 w-32  m-auto overflow-hidden">
                      <ProfilePicture src={ img }></ProfilePicture>
                    </figure>
                    <h3 className="text-center w-full">{name}</h3>
                  </div>
                  
                  
                </Fragment>
                
                
              ))}
            </section>

            <section className={styles.postContent} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />

            <h4 className="text-xl font-black uppercase text-purple-600 my-6">Leave us some feedback, thanks :)</h4>   
            <Miro src={ postData.miro }></Miro>
          </article>
          
        </Main>
      </Container>
    )
  }
  
  export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
  }
  
  export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postData = await getPostData(params.id as string)
    return {
      props: {
        postData
      }
    }
  }
