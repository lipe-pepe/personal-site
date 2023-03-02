import Head from "next/head";
import { GetStaticProps } from "next";
import Link from "next/link";

import { getSortedPostsData } from "../../lib/posts";

import Layout, { siteTitle } from "../../components/layout";
import PostCard from "../../components/postCard/PostCard";

import utilStyles from "../../styles/utils.module.css";

import { HiArrowSmLeft } from "react-icons/hi";

export default function Posts({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    subtitle: string;
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
      <ul className={utilStyles.posts}>
        {allPostsData.map(({ id, date, title, subtitle }) => (
          <PostCard
            title={title}
            subtitle={subtitle}
            id={id}
            date={date}
          ></PostCard>
        ))}
      </ul>
      <Link href={"/"}>
        <div className={utilStyles.back}>
          <HiArrowSmLeft />
          <p className={utilStyles.link}>Voltar para página Inicial</p>
        </div>
      </Link>
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
