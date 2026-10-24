import { IMovie } from "../contracts/IMovie";
import { IMovieRepository } from "../contracts/IMovieRepository";
import { initialMoviesData } from "../data/moviesData";

/**
 * In-memory persistence implementation of the IMovieRepository interface.
 * Stores movies in an immutable internal array and provides asynchronous data access.
 */
export class InMemoryMovieRepository implements IMovieRepository {
  private readonly moviesList: readonly IMovie[];

  /**
   * Initializes the repository with an initial dataset of movies.
   *
   * @param moviesList - Optional custom list of movies. Defaults to initialMoviesData.
   */
  public constructor(moviesList: readonly IMovie[] = initialMoviesData) {
    this.moviesList = [...moviesList];
  }

  /**
   * Returns all movies stored within the in-memory collection.
   *
   * @returns A promise resolving to an immutable array of all movies.
   */
  public async getAllMovies(): Promise<readonly IMovie[]> {
    return this.moviesList;
  }

  /**
   * Finds a movie matching the specified slug identifier.
   *
   * @param identifier - The unique slug identifier of the movie to find.
   * @returns A promise resolving to the matched movie, or null if not found.
   */
  public async getMovieByIdentifier(
    identifier: string
  ): Promise<IMovie | null> {
    const matchedMovie = this.moviesList.find(
      (movie) => movie.identifier === identifier
    );

    return matchedMovie ?? null;
  }

  /**
   * Filters the collection to return only movies marked as featured.
   *
   * @returns A promise resolving to an array of featured movies.
   */
  public async getFeaturedMovies(): Promise<readonly IMovie[]> {
    return this.moviesList.filter((movie) => movie.isFeatured);
  }
}
