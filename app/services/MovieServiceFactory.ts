import { IMovieFilterService } from "../contracts/IMovieFilterService";
import { IMovieFormatterService } from "../contracts/IMovieFormatterService";
import { IMovieRepository } from "../contracts/IMovieRepository";
import { IMovieService } from "../contracts/IMovieService";
import { InMemoryMovieRepository } from "../repositories/InMemoryMovieRepository";
import { MovieFilterService } from "./MovieFilterService";
import { MovieFormatterService } from "./MovieFormatterService";
import { MovieService } from "./MovieService";

class MovieServiceFactory {
  private static movieRepositoryInstance: IMovieRepository | null = null;
  private static movieServiceInstance: IMovieService | null = null;
  private static movieFilterServiceInstance: IMovieFilterService | null = null;
  private static movieFormatterServiceInstance: IMovieFormatterService | null = null;

  public static getMovieRepository(): IMovieRepository {
    if (!this.movieRepositoryInstance) {
      this.movieRepositoryInstance = new InMemoryMovieRepository();
    }
    return this.movieRepositoryInstance;
  }

  public static getMovieService(): IMovieService {
    if (!this.movieServiceInstance) {
      this.movieServiceInstance = new MovieService(this.getMovieRepository());
    }
    return this.movieServiceInstance;
  }

  public static getMovieFilterService(): IMovieFilterService {
    if (!this.movieFilterServiceInstance) {
      this.movieFilterServiceInstance = new MovieFilterService();
    }
    return this.movieFilterServiceInstance;
  }

  public static getMovieFormatterService(): IMovieFormatterService {
    if (!this.movieFormatterServiceInstance) {
      this.movieFormatterServiceInstance = new MovieFormatterService();
    }
    return this.movieFormatterServiceInstance;
  }
}

export { MovieServiceFactory };
