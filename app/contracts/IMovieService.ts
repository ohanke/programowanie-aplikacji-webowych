import { IMovie } from "./IMovie";

export interface IMovieService {
  fetchAllMovies(): Promise<readonly IMovie[]>;
  fetchMovieByIdentifier(identifier: string): Promise<IMovie | null>;
  fetchFeaturedMovies(): Promise<readonly IMovie[]>;
  fetchTotalMoviesCount(): Promise<number>;
  fetchAverageRating(): Promise<number>;
}
