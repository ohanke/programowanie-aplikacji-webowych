import { IMovie } from "./IMovie";

/**
 * High-level business facade contract for orchestrating movie-related operations and library metrics.
 */
export interface IMovieService {
  /**
   * Retrieves all movies currently registered in the system.
   *
   * @returns A promise resolving to an array of all movies.
   */
  fetchAllMovies(): Promise<readonly IMovie[]>;

  /**
   * Locates a movie by its unique identifier.
   *
   * @param identifier - Unique slug identifier.
   * @returns A promise resolving to the matched movie or null if not found.
   */
  fetchMovieByIdentifier(identifier: string): Promise<IMovie | null>;

  /**
   * Retrieves movies designated as featured highlights.
   *
   * @returns A promise resolving to featured movies.
   */
  fetchFeaturedMovies(): Promise<readonly IMovie[]>;

  /**
   * Computes the total count of movies in the collection.
   *
   * @returns A promise resolving to the total quantity.
   */
  fetchTotalMoviesCount(): Promise<number>;

  /**
   * Calculates the overall average viewer rating across all movies, rounded to one decimal place.
   *
   * @returns A promise resolving to the average score, or 0 if empty.
   */
  fetchAverageRating(): Promise<number>;
}
