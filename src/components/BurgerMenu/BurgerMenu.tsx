import React from "react";
import Image from "next/image";
import styles from "./BurgerMenu.module.scss";
import Link from "next/link";

export const BurgerMenu = () => {
    //this is unused for now but may be used later
  return (
    <div className={styles.burgerMenu}>
      <div className={styles.burgerMenu__icon}>
        <span className={styles.burgerMenu__icon__line}></span>
        <span className={styles.burgerMenu__icon__line}></span>
        <span className={styles.burgerMenu__icon__line}></span>
      </div>
      <div className={styles.burgerMenu__links}>
        <Link href="/movies">
          <a>Home</a>
        </Link>
        <Link href="/tv">
          <a>TV Shows</a>
        </Link>
        <Link href="/people">
          <a>People</a>
        </Link>
      </div>
    </div>
  );
};
