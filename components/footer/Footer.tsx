import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <a href="https://www.linkedin.com/in/felipe-pepe/">
        <BsLinkedin className={styles.icon} />
      </a>
      <a href="https://github.com/lipe-pepe">
        <BsGithub className={styles.icon} />
      </a>
      <a href="mailto:felipepepe21@gmail.com">
        <MdOutlineEmail className={styles.icon} />
      </a>
    </div>
  );
};

export default Footer;
