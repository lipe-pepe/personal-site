import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";

export default function Posts() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} - Blog</title>
      </Head>
    </Layout>
  );
}
