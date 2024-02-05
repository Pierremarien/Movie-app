import { MovieCard } from "../MovieCard/MovieCard";
import styles from "./CardGrid.module.scss";
import type { Genre, Movie } from "@/utils/types";


interface CardGridProps {
  movies: Movie[];
  genres: Genre[];
}

export const CardGrid: React.FC<CardGridProps> = ({ movies, genres }) => {
  return (
    <div className={styles.grid}>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} genres={genres} />
      ))}
    </div>
  );
};
