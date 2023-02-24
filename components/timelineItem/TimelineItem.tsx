import Image from "next/image";

import styles from "./TimelineItem.module.css";
import utilStyles from "../../styles/utils.module.css";

export interface TimelineItemProps {
  image?: string;
  title: string;
  subtitle: string;
  date: string;
  items?: string[];
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  image,
  title,
  subtitle,
  date,
  items,
}) => {
  return (
    <div className={styles.timelineItem}>
      {image && (
        <div className={styles.image}>
          <Image
            priority
            src={`/images/${image}`}
            className={utilStyles.borderCircle}
            layout="fill"
            alt={image}
          />
        </div>
      )}
      <div>
        <h1 className={utilStyles.headingMd}>{title}</h1>
        <small className={utilStyles.paragraphSm}>{subtitle}</small>
        <br />
        <small className={utilStyles.lightText}>{date}</small>
        {items && (
          <ul className={styles.list}>
            {items.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
