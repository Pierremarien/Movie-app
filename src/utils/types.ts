export interface Movie {
    id: number;
    title: string;
    genre_ids: number[];
    backdrop_path: string;
    poster_path: string;
    overview: string;
    release_date: string;
    vote_average: number;
    vote_count: number;
}