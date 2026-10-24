import { IMovie } from "./IMovie";

export interface IMovieRepository {
  getAllMovies(): Promise<readonly IMovie[]>;
  getMovieByIdentifier(identifier: string): Promise<IMovie | null>;
  getFeaturedMovies(): Promise<readonly IMovie[]>;
}
