import { IMovie } from "../contracts/IMovie";
import { IMovieRepository } from "../contracts/IMovieRepository";
import { IMovieService } from "../contracts/IMovieService";

export class MovieService implements IMovieService {
  public constructor(private readonly movieRepository: IMovieRepository) {}

  public async fetchAllMovies(): Promise<readonly IMovie[]> {
    return this.movieRepository.getAllMovies();
  }

  public async fetchMovieByIdentifier(
    identifier: string
  ): Promise<IMovie | null> {
    return this.movieRepository.getMovieByIdentifier(identifier);
  }

  public async fetchFeaturedMovies(): Promise<readonly IMovie[]> {
    return this.movieRepository.getFeaturedMovies();
  }

  public async fetchTotalMoviesCount(): Promise<number> {
    const movies = await this.movieRepository.getAllMovies();
    return movies.length;
  }

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
