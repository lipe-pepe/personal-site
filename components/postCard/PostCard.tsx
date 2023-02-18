import Link from "next/link";

import Date from "../date";

import utilStyles from "../../styles/utils.module.css";
import styles from "./PostCard.module.css";

export interface PostCardProps {
  title: string;
  id: string;
  date: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, id, date }) => {
  return (
    <div className={styles.container}>
      <li key={id}>
        <Link href={`/posts/${id}`}>{title}</Link>
        <br />
        <small className={utilStyles.lightText}>
          <Date dateString={date} />
        </small>
      </li>
    </div>
  );
};

export default PostCard;
