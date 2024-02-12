export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

export interface Movie {
  id: number;
  poster_path: string | null;
  title: string;
  vote_average: number;
  release_date: string;
  genre_ids: number[];
  vote_count: number;
  status: string;
  popularity: number;
  overview: string;
  production_companies: ProductionCompany[];
}
