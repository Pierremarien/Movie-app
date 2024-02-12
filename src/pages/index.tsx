import { useState, useEffect } from "react";
import { CardGrid } from "@/components/CardGrid/CardGrid";
import { FiltersGrid } from "@/components/FiltersGrid/FiltersGrid";
import styles from "./Home.module.scss";
import { fetchMoviesGenres } from "@/app/api/fetchMoviesGenres";
import { fetchMovies, fetchMoviesByName } from "@/app/api/fetchMovies";

import { Movie } from "@/utils/types";

export default function Home({
  genres,
  searchQuery,
  setSearchQuery,
}: {
  genres: any;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);

  const resetFilter = () => {
    setSelectedGenres([]);
    setMovies([]);
    setSearchQuery("");
  };

  const selectGenre = (id: number) => {
    setSelectedGenres((prevGenres) => {
      if (prevGenres.includes(id)) {
        return prevGenres.filter((genreId) => genreId !== id);
      } else {
        return [...prevGenres, id];
      }
    });
    setMovies([]);
    setPage(1);
    setSearchQuery("");
  };

  useEffect(() => {
    if (searchQuery) {
      setMovies([]);
      setPage(1);
    }
  }, [searchQuery]);

  useEffect(() => {
    const loadMovies = async () => {
      setIsLoading(true);
      let newMovies: { results: Movie[] };
      if (searchQuery) {
        newMovies = await fetchMoviesByName(searchQuery, page);
      } else {
        newMovies = await fetchMovies({
          page: page.toString(),
          with_genres: selectedGenres.join(","),
          query: searchQuery,
        });
      }
      setMovies((prevMovies) => [...prevMovies, ...newMovies.results]);
      setIsLoading(false);
    };
    loadMovies();
  }, [page, selectedGenres, searchQuery]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
          document.documentElement.offsetHeight ||
        isLoading
      ) {
        return;
      }
      setPage((prevPage) => prevPage + 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  return (
    <div className={styles.page}>
      <section>
        <FiltersGrid
          genres={genres}
          selectGenre={selectGenre}
          resetFilter={resetFilter}
          selectedGenres={selectedGenres}
        />
        <CardGrid genres={genres} movies={movies} />
      </section>
    </div>
  );
}

export async function getServerSideProps() {
  const genres = await fetchMoviesGenres();
  return { props: { genres } };
}
