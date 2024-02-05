import { useState, useEffect } from 'react';
import { CardGrid } from "@/components/CardGrid/CardGrid";
import { FiltersGrid } from "@/components/FiltersGrid/FiltersGrid";
import styles from "./Home.module.scss";
import { fetchMoviesGenres } from "@/app/api/fetchMoviesGenres";
import { fetchMovies } from "@/app/api/fetchMovies";
import { Movie } from "@/utils/types";

export default function Home({ genres }: { genres: any }) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadMovies = async () => {
      setIsLoading(true);
      const newMovies = await fetchMovies({ page: page.toString() });
      setMovies(prevMovies => [...prevMovies, ...newMovies.results]); 
      setIsLoading(false);
    };
    loadMovies();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
        return;
      }
      setPage((prevPage) => prevPage + 1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

  return (
    <div className={styles.page}>
      <section>
        <FiltersGrid genres={genres} />
        <CardGrid genres={genres} movies={movies} />
      </section>
    </div>
  );
}

export async function getServerSideProps() {
  const genres = await fetchMoviesGenres();
  return { props: { genres } };
}