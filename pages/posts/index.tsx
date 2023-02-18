import Head from "next/head";
import { GetStaticProps } from "next";

import { getSortedPostsData } from "../../lib/posts";

import Layout, { siteTitle } from "../../components/layout";
import PostCard from "../../components/postCard/PostCard";

import utilStyles from "../../styles/utils.module.css";

export default function Posts({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout>
      <Head>
        <title>Blog | {siteTitle}</title>
      </Head>
      <h2 className={utilStyles.headingXl}>Blog 📰</h2>
      <br />
      <ul className={utilStyles.list}>
        {allPostsData.map(({ id, date, title }) => (
          <PostCard title={title} id={id} date={date}></PostCard>
        ))}
      </ul>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
