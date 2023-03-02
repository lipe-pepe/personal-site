import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";

import { getAllPostIds, getPostData } from "../../lib/posts";

import { HiArrowSmLeft } from "react-icons/hi";

import Layout from "../../components/layout";
import Date from "../../components/date";

import utilStyles from "../../styles/utils.module.css";

export default function Post({
  postData,
}: {
  postData: {
    title: string;
    subtitle: string;
    date: string;
    contentHtml: string;
  };
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <h3 className={utilStyles.paragraphLg}>{postData.subtitle}</h3>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <Link href={"/posts"}>
        <div className={utilStyles.back}>
          <HiArrowSmLeft />
          <p className={utilStyles.link}>Voltar para o blog</p>
        </div>
      </Link>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string);
  return {
    props: {
      postData,
    },
  };
};
