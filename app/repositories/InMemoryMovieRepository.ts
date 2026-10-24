import { IMovie } from "../contracts/IMovie";
import { IMovieRepository } from "../contracts/IMovieRepository";
import { initialMoviesData } from "../data/moviesData";

export class InMemoryMovieRepository implements IMovieRepository {
  private readonly moviesList: readonly IMovie[];

  public constructor(moviesList: readonly IMovie[] = initialMoviesData) {
    this.moviesList = [...moviesList];
  }

  public async getAllMovies(): Promise<readonly IMovie[]> {
    return this.moviesList;
  }

  public async getMovieByIdentifier(
    identifier: string
  ): Promise<IMovie | null> {
    const matchedMovie = this.moviesList.find(
      (movie) => movie.identifier === identifier
    );

    return matchedMovie ?? null;
  }

  public async getFeaturedMovies(): Promise<readonly IMovie[]> {
    return this.moviesList.filter((movie) => movie.isFeatured);
  }
}
