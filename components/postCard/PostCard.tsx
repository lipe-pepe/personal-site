import Link from "next/link";

import Date from "../date";

import utilStyles from "../../styles/utils.module.css";
import styles from "./PostCard.module.css";

export interface PostCardProps {
  title: string;
  subtitle: string;
  id: string;
  date: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, subtitle, id, date }) => {
  return (
    <div className={styles.container}>
      <li key={id}>
        <Link href={`/posts/${id}`}>{title}</Link>
        <br />
        {subtitle != null && (
          <>
            <small className={utilStyles.lightText}>{subtitle}</small>
            <br />
          </>
        )}
        <br />
        <small className={utilStyles.lightText}>
          <Date dateString={date} />
        </small>
      </li>
    </div>
  );
};

export default PostCard;
