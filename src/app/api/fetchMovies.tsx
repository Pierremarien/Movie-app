import { urlBuilder } from "./urlBuilder";

export async function fetchMovies(filters: Record<string, string>) {
  const baseFilters = {
    include_adult: "false",
    include_video: "false",
    language: "en-US",
    ...filters,
  };

  const url = urlBuilder("/discover/movie", baseFilters);
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

export async function fetchMoviesByName(name: string, page: number = 1) {
  const url = urlBuilder("/search/movie", {
    query: name,
    language: "en-US",
    page: page.toString(),
  });
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
