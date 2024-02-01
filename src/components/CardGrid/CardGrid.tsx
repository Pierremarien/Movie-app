import { MovieCard } from "../MovieCard/MovieCard";
import styles from "./CardGrid.module.scss";

export const CardGrid = () => {
  return (
    <div className={styles.grid}>
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </div>
  );
};
