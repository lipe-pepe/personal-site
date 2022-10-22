import Layout from "../../components/layout";
import styles from "./posts.module.css";
import utilStyles from "../../styles/utils.module.css";
import Date from "../../components/date";

import { getSortedPostsData } from "../../lib/posts";
import Link from "next/link";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {
  return (
    <Layout>
      <h1 className={utilStyles.headingXl}>Blog 📰</h1>
      <ul className={styles.list}>
        {allPostsData.map(({ id, date, title, subtitle }) => (
          <li className={styles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>
                <h2>{title}</h2>
              </a>
            </Link>
            <h4>{subtitle}</h4>
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
