import React from "react";
import styles from "./FiltersGrid.module.scss";

export const FiltersGrid = () => {
  return (
    <div className={styles.filtersGrid}>
      <button className={styles.filtersGrid__button}>Filter</button>
      <button className={styles.filtersGrid__button}>Filter</button>
      <button className={styles.filtersGrid__button}>Filter</button>
      <button className={styles.filtersGrid__button}>Filter</button>
      <button className={styles.filtersGrid__button}>Filter</button>
      <button className={styles.filtersGrid__button}>Filter</button>
      <button className={styles.filtersGrid__button}>Filter</button>
      <button className={styles.filtersGrid__button}>Filter</button>
      <button className={styles.filtersGrid__button}>Filter</button>
      <button className={styles.filtersGrid__button}>Filter</button>
      <button className={styles.filtersGrid__button}>Filter</button>
    </div>
  );
};
