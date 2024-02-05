export interface Genre {
    id: number;
    name: string;
  }
  
  export interface Movie {
    id: number;
    poster_path: string;
    title: string;
    vote_average: number;
    release_date: string;
    genre_ids: number[];
  }