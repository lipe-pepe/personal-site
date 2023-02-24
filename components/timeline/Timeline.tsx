import { TimelineItem, TimelineItemProps } from "../timelineItem/TimelineItem";

import styles from "./Timeline.module.css";

export interface TimelineProps {
  title: string;
  items: TimelineItemProps[];
}

const Timeline: React.FC<TimelineProps> = ({ title, items }) => {
  return (
    <div>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.separator} />
      {items.map(({ image, title, subtitle, date, items }) => (
        <div>
          <TimelineItem
            image={image}
            title={title}
            subtitle={subtitle}
            date={date}
            items={items}
          />
          <br />
        </div>
      ))}
    </div>
  );
};

export default Timeline;
