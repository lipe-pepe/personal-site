import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <a href="https://www.linkedin.com/in/felipe-pepe/" target="_blank">
        <BsLinkedin className={styles.icon} />
      </a>
      <a href="https://github.com/lipe-pepe" target="_blank">
        <BsGithub className={styles.icon} />
      </a>
      <a href="mailto:felipepepe21@gmail.com" target="_blank">
        <MdOutlineEmail className={styles.icon} />
      </a>
    </div>
  );
};

export default Footer;
