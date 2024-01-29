import React from "react";
import Image from "next/image";
import styles from "./MovieCard.module.scss";

export const MovieCard = () => {
  return (
    <div className={styles.card}>
      <figure className={styles['card__image']}>
        <Image
          src="https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg"
          alt="aquaman"
          fill
          objectFit="cover"
          objectPosition="top"

        />
      </figure>

      <h2 className={styles['card__title']}>Aquaman et les poissons</h2>
      <div className={styles['card__genre']}>
        <p className={styles['card__genre__pill']}>genre</p>
        <p className={styles['card__genre__pill']}>genre</p>
        <p className={styles['card__genre__pill']}>genre</p>
      </div>
      <div className={styles['card__info']}>
        <p className={styles['card__info__vote']}>vote</p>
        <p className={styles['card__info__date']}>date date date</p>
      </div>
    </div>
  );
};