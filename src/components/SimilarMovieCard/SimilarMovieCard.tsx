import React from "react";
import Image from "next/legacy/image";
import styles from "./SimilarMovieCard.module.scss";

export const SimilarMovieCard = () => {
  return (
    <div className={styles.card}>
      <figure className={styles["card__image"]}>
        <Image
          src="https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg"
          alt="aquaman"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
        />
      </figure>
      <div className={styles["card__info"]}>
        <h2 className={styles["card__info__title"]}>Aquaman et les poissons</h2>
        <div className={styles["card__info__genre"]}>
          {/* display only the first four genres for a movie here the rest will be in the detailed movie page if there are more than 4*/}
          <button className={styles["card__info__genre__pill"]}>genre</button>
          <button className={styles["card__info__genre__pill"]}>genre</button>
          <button className={styles["card__info__genre__pill"]}>genre</button>
        </div>
        <div className={styles["card__info__stats"]}>
          <p className={styles["card__info__stats__vote"]}>vote</p>
          <p className={styles["card__info__stats__date"]}>date date date</p>
        </div>
      </div>
    </div>
  );
};
