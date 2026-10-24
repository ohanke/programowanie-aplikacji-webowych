import { IMovie } from "./IMovie";
import { IMovieFilterCriteria } from "./IMovieFilterCriteria";

export interface IMovieFilterService {
  filterAndSortMovies(
    movies: readonly IMovie[],
    criteria: IMovieFilterCriteria
  ): readonly IMovie[];

  extractUniqueGenres(movies: readonly IMovie[]): readonly string[];
}
