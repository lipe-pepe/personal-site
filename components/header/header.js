import { useState } from "react";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import styles from "./header.module.css";

export default function Header() {
  const [hamburgerMenuActive, setHamburgerMenuActive] = useState(false);

  return (
    <div>
      <header className={styles.hamburgerMenu}>
        <a
          onClick={() => {
            setHamburgerMenuActive(!hamburgerMenuActive);
          }}
        >
          <HiMenu className={styles.hamburgerIcon} />
        </a>
      </header>
      <header className={styles.header}>
        <div className={styles.regularHeader}>
          <Link href="/">
            <a className={styles.button}>Home</a>
          </Link>
          <Link href="/posts">
            <a className={styles.button}>Blog</a>
          </Link>
          <Link href="/cv">
            <a className={styles.button}>Currículo</a>
          </Link>
        </div>
      </header>
      {hamburgerMenuActive && (
        <div className={styles.menuItems}>
          <Link href="/">
            <a className={styles.button}>Home</a>
          </Link>
          <Link href="/posts">
            <a className={styles.button}>Blog</a>
          </Link>
          <Link href="/cv">
            <a className={styles.button}>Currículo</a>
          </Link>
        </div>
      )}
    </div>
  );
}
