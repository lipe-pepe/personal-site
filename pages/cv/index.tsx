import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";

export default function Curriculum() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} - Currículo</title>
      </Head>
    </Layout>
  );
}
