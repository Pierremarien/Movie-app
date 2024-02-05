import { urlBuilder } from './urlBuilder';

export async function fetchMoviesGenres() {
    const url = urlBuilder('/genre/movie/list', {});
    const response = await fetch(url);
  
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  
    const data = await response.json();
    return data.genres;
  }