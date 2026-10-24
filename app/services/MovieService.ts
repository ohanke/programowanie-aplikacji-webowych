import { IMovie } from "../contracts/IMovie";
import { IMovieRepository } from "../contracts/IMovieRepository";
import { IMovieService } from "../contracts/IMovieService";

/**
 * Domain service implementation encapsulating business logic, queries, and aggregations for movies.
 * Adheres to the Dependency Inversion Principle by depending exclusively on IMovieRepository.
 */
export class MovieService implements IMovieService {
  /**
   * Initializes a new instance of the MovieService class.
   *
   * @param movieRepository - The repository instance providing movie data access.
   */
  public constructor(private readonly movieRepository: IMovieRepository) {}

  /**
   * Fetches the entire collection of movies available in the repository.
   *
   * @returns A promise resolving to an array of all movies.
   */
  public async fetchAllMovies(): Promise<readonly IMovie[]> {
    return this.movieRepository.getAllMovies();
  }

  /**
   * Finds a movie matching the specified slug identifier.
   *
   * @param identifier - The unique slug identifier of the movie.
   * @returns A promise resolving to the found movie, or null if no match exists.
   */
  public async fetchMovieByIdentifier(
    identifier: string
  ): Promise<IMovie | null> {
    return this.movieRepository.getMovieByIdentifier(identifier);
  }

  /**
   * Fetches movies tagged as featured for showcase carousels or banners.
   *
   * @returns A promise resolving to an array of featured movies.
   */
  public async fetchFeaturedMovies(): Promise<readonly IMovie[]> {
    return this.movieRepository.getFeaturedMovies();
  }

  /**
   * Computes the total quantity of movies registered in the library.
   *
   * @returns A promise resolving to the total movie count.
   */
  public async fetchTotalMoviesCount(): Promise<number> {
    const movies = await this.movieRepository.getAllMovies();
    return movies.length;
  }

  /**
   * Calculates the arithmetic mean of viewer ratings across all movies, rounded to 1 decimal place.
   *
   * @returns A promise resolving to the average rating (e.g., 8.8), or 0 if no movies exist.
   */
  public async fetchAverageRating(): Promise<number> {
    const movies = await this.movieRepository.getAllMovies();

    if (movies.length === 0) {
      return 0;
    }

    const totalRatingSum = movies.reduce(
      (accumulator, movie) => accumulator + movie.viewerRating,
      0
    );

    const calculatedAverage = totalRatingSum / movies.length;
    return Math.round(calculatedAverage * 10) / 10;
  }
}
