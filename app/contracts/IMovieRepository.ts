import { IMovie } from "./IMovie";

/**
 * Data access abstraction defining contract for movie persistence and querying operations.
 * Adheres to the Repository pattern and Dependency Inversion Principle.
 */
export interface IMovieRepository {
  /**
   * Retrieves all movies available in the repository.
   *
   * @returns A promise resolving to an immutable array of movies.
   */
  getAllMovies(): Promise<readonly IMovie[]>;

  /**
   * Retrieves a specific movie by its unique identifier slug.
   *
   * @param identifier - Unique identifier of the movie to find.
   * @returns A promise resolving to the matched movie, or null if not found.
   */
  getMovieByIdentifier(identifier: string): Promise<IMovie | null>;

  /**
   * Retrieves a curated list of featured movies for highlight sections.
   *
   * @returns A promise resolving to an array of featured movies.
   */
  getFeaturedMovies(): Promise<readonly IMovie[]>;
}
