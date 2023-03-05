import Head from "next/head";
import { GetStaticProps } from "next";
import Link from "next/link";

import { getSortedPostsData } from "../lib/posts";

import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

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
    subtitle: string;
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
        <ul className={utilStyles.posts}>
          {allPostsData.slice(0, 4).map(({ id, date, title, subtitle }) => (
            <PostCard
              title={title}
              subtitle={subtitle}
              id={id}
              date={date}
            ></PostCard>
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
        <br />
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Contato 📧</h2>
        <div className={utilStyles.flexCol}>
          <a href="mailto:felipepepe21@gmail.com" target="_blank">
            <div className={utilStyles.flexRow}>
              <MdOutlineEmail className={utilStyles.icon} />
              <p className={utilStyles.paragraphLg}>felipepepe21@gmail.com</p>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/felipe-pepe/" target="_blank">
            <div className={utilStyles.flexRow}>
              <BsLinkedin className={utilStyles.icon} />
              <p className={utilStyles.paragraphLg}>
                linkedin.com/in/felipe-pepe/
              </p>
            </div>
          </a>
          <a href="https://github.com/lipe-pepe" target="_blank">
            <div className={utilStyles.flexRow}>
              <BsGithub className={utilStyles.icon} />
              <p className={utilStyles.paragraphLg}>github.com/lipe-pepe</p>
            </div>
          </a>
        </div>
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
