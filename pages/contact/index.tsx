import Head from "next/head";
import Link from "next/link";

import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

import Layout, { siteTitle } from "../../components/layout";

import utilStyles from "../../styles/utils.module.css";

import { HiArrowSmLeft } from "react-icons/hi";

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Blog | {siteTitle}</title>
      </Head>
      <h2 className={utilStyles.headingXl}>Contato 📧</h2>
      <br />
      <div className={utilStyles.section}>
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
      </div>

      <br />
      <Link href={"/"}>
        <div className={utilStyles.back}>
          <HiArrowSmLeft />
          <p className={utilStyles.link}>Voltar para página Inicial</p>
        </div>
      </Link>
    </Layout>
  );
}
