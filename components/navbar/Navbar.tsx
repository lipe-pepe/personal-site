import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { HiMenu } from "react-icons/hi";

import styles from "./navbar.module.css";
import utilStyles from "../../styles/utils.module.css";

const Navbar: React.FC = () => {
  const [hamburgerMenuActive, setHamburgerMenuActive] = useState(false);

  return (
    <div className={styles.navbar}>
      <div className={styles.main}>
        <Link href={"/"}>
          <div className={styles.title}>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={40}
              width={40}
              alt={"Felipe Pêpe"}
            />
            <h1 className={styles.titleHeading}>felipe pêpe</h1>
          </div>
        </Link>
        <button
          className={styles.hamburgerButton}
          onClick={() => {
            setHamburgerMenuActive(!hamburgerMenuActive);
          }}
        >
          <HiMenu className={styles.hamburgerIcon} />
        </button>
      </div>

      {/* Menu mobile */}
      {hamburgerMenuActive && (
        <div className={styles.menu}>
          <Link href="/posts">
            <p className={styles.menuButton}>Blog</p>
          </Link>
          <Link href="/cv">
            <p className={styles.menuButton}>Currículo</p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
