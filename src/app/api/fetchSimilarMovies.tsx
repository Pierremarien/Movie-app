import { urlBuilder } from "./urlBuilder";

export async function fetchSimilarMovies(id: string, filters: Record<string, string>) {
    const baseFilters = {
        include_adult: 'false',
        include_video: 'false',
        language: 'en-US',
        ...filters,
    };
  const url = urlBuilder(`/movie/${id}/similar`, baseFilters);
  const res = await fetch(url);
  const data = await res.json();
  return data;
}