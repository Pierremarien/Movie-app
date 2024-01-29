import { urlBuilder } from './urlBuilder';

export async function fetchMovie(id: string) {
  const url = urlBuilder(`/movie/${id}`, {language: "en-US"});
  const res = await fetch(url);
  const data = await res.json();
  return data;
}