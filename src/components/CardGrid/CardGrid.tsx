import { MovieCard } from "../MovieCard/MovieCard";
import styles from "./CardGrid.module.scss";
import type { Genre, Movie } from "@/utils/types";
import Link from "next/link";

interface CardGridProps {
  movies: Movie[];
  genres: Genre[];
}

export const CardGrid: React.FC<CardGridProps> = ({ movies, genres }) => {
  return (
    <div className={styles.grid}>
      {movies
        .filter((movie) => movie.poster_path && movie.poster_path.trim() !== "")
        .map((movie) => (
          <Link href={`/movie/${movie.id}`} key={movie.id}>
            <MovieCard movie={movie} genres={genres} />
          </Link>
        ))}
    </div>
  );
};
