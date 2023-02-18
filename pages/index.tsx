import Head from "next/head";
import { GetStaticProps } from "next";
import Link from "next/link";

import { getSortedPostsData } from "../lib/posts";

import Layout, { siteTitle } from "../components/layout";
import Date from "../components/date";
import PostCard from "../components/postCard/PostCard";

import utilStyles from "../styles/utils.module.css";

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p style={{ textAlign: "center" }}>
          Olá! Meu nome é Felipe e sou programador full-stack. Esse é o meu
          site!
        </p>
      </section>
      {/* Blog section */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog 📰</h2>
        <ul className={utilStyles.list}>
          {allPostsData.slice(0, 4).map(({ id, date, title }) => (
            <PostCard title={title} id={id} date={date}></PostCard>
          ))}
        </ul>

        <div className={utilStyles.center}>
          <Link href={"posts"}>
            <p className={utilStyles.normalButton}>Ver tudo</p>
          </Link>
        </div>
      </section>

      {/* Curriculum section */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Currículo 📝</h2>
        <p>
          Sou um programador com espírito empreendedor. Atualmente estou
          trabalhando com desenvolvimento web, mas também sou interessado em
          mobile e em desenvolvimento de games. <br></br>
          <br></br>
          Quer saber mais? Você pode conferir meu <b>currículo completo </b>
          clicando{" "}
          <Link href={"cv"}>
            <a>aqui</a>
          </Link>
          . .
        </p>
      </section>
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
