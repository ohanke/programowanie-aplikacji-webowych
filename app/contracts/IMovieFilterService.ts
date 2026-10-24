import { IMovie } from "./IMovie";
import { IMovieFilterCriteria } from "./IMovieFilterCriteria";

/**
 * Service contract responsible for filtering, searching, and sorting collections of movies.
 */
export interface IMovieFilterService {
  /**
   * Filters and sorts an input array of movies according to specified criteria.
   * Does not mutate the original input array.
   *
   * @param movies - The source collection of movies.
   * @param criteria - Search query, genre filter, and sort order parameters.
   * @returns A newly allocated array of movies satisfying criteria.
   */
  filterAndSortMovies(
    movies: readonly IMovie[],
    criteria: IMovieFilterCriteria
  ): readonly IMovie[];

  /**
   * Extracts a deduplicated and alphabetically sorted list of all genres present in given movies.
   *
   * @param movies - The source collection of movies.
   * @returns An array of unique genre names.
   */
  extractUniqueGenres(movies: readonly IMovie[]): readonly string[];
}
