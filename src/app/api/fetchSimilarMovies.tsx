import { urlBuilder } from "./urlBuilder";

export async function fetchSimilarMovies(
  id: string,
  filters: Record<string, string>
) {
  const baseFilters = {
    language: "en-US",
    ...filters,
  };
  const url = urlBuilder(`/movie/${id}/similar`, baseFilters);
  const res = await fetch(url);
  const data = await res.json();
  return data.results;
}
