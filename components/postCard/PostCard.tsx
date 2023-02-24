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
    <Link href={`/posts/${id}`}>
      <div className={styles.container}>
        <li key={id}>
          <p className={styles.title}>{title}</p>
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
    </Link>
  );
};

export default PostCard;
