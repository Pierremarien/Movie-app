import React from "react";
import Image from "next/legacy/image";
import styles from "./SimilarMovieCard.module.scss";
import type { Genre, Movie } from "@/utils/types";

interface SimilarMovieProps {
  movie: Movie;
  genres: Genre[];
}

export const SimilarMovieCard: React.FC<SimilarMovieProps> = ({movie, genres}) => {
  const movieGenres = genres
    .filter((genre) => movie.genre_ids.includes(genre.id))
    .slice(0, 4);
  return (
    <div className={styles.card}>
      <figure className={styles["card__image"]}>
      <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
        />
      </figure>
      <div className={styles["card__info"]}>
        <h2 className={styles["card__info__title"]}>{movie.title}</h2>
        <div className={styles["card__info__genre"]}>
        {movieGenres.map((genre) => (
            <button
              key={genre.id}
              className={styles["card__info__genre__pill"]}
            >
              {genre.name}
            </button>
            ))}
        </div>
        <div className={styles["card__info__stats"]}>
          <p className={styles["card__info__stats__vote"]}>{movie.vote_average}</p>
          <p className={styles["card__info__stats__date"]}>{movie.release_date}</p>
        </div>
      </div>
    </div>
  );
};
