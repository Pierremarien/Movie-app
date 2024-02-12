import React from "react";
import { fetchMovie } from "@/app/api/fetchMovie";
import type { Movie, Genre, ProductionCompany } from "@/utils/types";
import Image from "next/legacy/image";
import Link from "next/link";
import { fetchMoviesGenres } from "@/app/api/fetchMoviesGenres";
import { SimilarMovieCard } from "@/components/SimilarMovieCard/SimilarMovieCard";
import { fetchSimilarMovies } from "@/app/api/fetchSimilarMovies";
import styles from "./Movie.module.scss";

export default function Movie({
  movie,
  genres,
  similarMovies,
}: {
  movie: Movie;
  genres: Genre[];
  similarMovies: Movie[];
}) {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <figure className={styles.container__poster}>
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          />
        </figure>
        <div className={styles.container__block}>
          <h2>{movie.title}</h2>
          <div className={styles.container__block__status}>
            <p>{movie.status}</p>
            <div className={styles.container__block__status__info}>
              <p>{movie.vote_average}/10</p>
              <p>{movie.vote_count} votes</p>
            </div>
          </div>
          <div className={styles.container__block__description}>
            <div className={styles.container__block__description__data}>
              <p>{movie.popularity} views</p>
              <p>{movie.release_date}</p>
              {genres.map((genre) => (
                <Link
                  className={styles.container__block__description__data__link}
                  key={genre.id}
                  href="/"
                >
                  &#35;{genre.name}
                </Link>
              ))}
            </div>
            <p>{movie.overview}</p>
            <div className={styles.container__block__description__companies}>
              {movie.production_companies
                .filter(
                  (company: ProductionCompany) =>
                    company.logo_path && company.logo_path.trim() !== ""
                )
                .map((company: ProductionCompany) => (
                  <div
                    className={
                      styles.container__block__description__companies__company
                    }
                    key={company.id}
                  >
                    <figure
                      className={
                        styles.container__block__description__companies__company__logo
                      }
                    >
                      <Image
                        src={`https://image.tmdb.org/t/p/original/${company.logo_path}.svg`}
                        alt={company.name}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                      />
                    </figure>
                    <div
                      className={
                        styles.container__block__description__companies__company__infos
                      }
                    >
                      <p>{company.name}</p>
                      <p>{company.origin_country}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.movies}>
        {similarMovies
          .filter(
            (movie) => movie.poster_path && movie.poster_path.trim() !== ""
          )
          .map((movie) => (
            <Link href={`/movie/${movie.id}`} key={movie.id}>
              <SimilarMovieCard genres={genres} movie={movie} />
            </Link>
          ))}
      </div>
    </section>
  );
}

export async function getServerSideProps({
  params,
}: {
  params: { id: string };
}) {
  const movie = await fetchMovie(params.id);
  const genres = await fetchMoviesGenres();
  const similarMovies = await fetchSimilarMovies(params.id, { page: "1" });

  return { props: { movie, genres, similarMovies } };
}
