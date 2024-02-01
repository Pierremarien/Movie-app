import React from "react";
import styles from "./Searchbar.module.scss";
import Image from "next/image";

export const Searchbar = () => {
  return (
    <div className={styles.searchbar}>
        <input type="search" placeholder="Search" />
        <button>
          <Image
            src={`/search.svg`}
            alt="Search Icon"
            width="20"
            height="20"
          />
        </button>
    </div>
  );
};
