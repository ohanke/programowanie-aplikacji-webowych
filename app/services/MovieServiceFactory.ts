import { IMovieFilterService } from "../contracts/IMovieFilterService";
import { IMovieFormatterService } from "../contracts/IMovieFormatterService";
import { IMovieRepository } from "../contracts/IMovieRepository";
import { IMovieService } from "../contracts/IMovieService";
import { InMemoryMovieRepository } from "../repositories/InMemoryMovieRepository";
import { MovieFilterService } from "./MovieFilterService";
import { MovieFormatterService } from "./MovieFormatterService";
import { MovieService } from "./MovieService";

/**
 * Service locator and factory providing lazy-initialized singleton instances of application services.
 * Facilitates loose coupling and centralized dependency management across server and client components.
 */
class MovieServiceFactory {
  private static movieRepositoryInstance: IMovieRepository | null = null;
  private static movieServiceInstance: IMovieService | null = null;
  private static movieFilterServiceInstance: IMovieFilterService | null = null;
  private static movieFormatterServiceInstance: IMovieFormatterService | null = null;

  /**
   * Retrieves or instantiates the singleton IMovieRepository instance.
   *
   * @returns The active movie repository.
   */
  public static getMovieRepository(): IMovieRepository {
    if (!this.movieRepositoryInstance) {
      this.movieRepositoryInstance = new InMemoryMovieRepository();
    }
    return this.movieRepositoryInstance;
  }

  /**
   * Retrieves or instantiates the singleton IMovieService instance.
   *
   * @returns The active movie business service.
   */
  public static getMovieService(): IMovieService {
    if (!this.movieServiceInstance) {
      this.movieServiceInstance = new MovieService(this.getMovieRepository());
    }
    return this.movieServiceInstance;
  }

  /**
   * Retrieves or instantiates the singleton IMovieFilterService instance.
   *
   * @returns The active movie filtering and sorting service.
   */
  public static getMovieFilterService(): IMovieFilterService {
    if (!this.movieFilterServiceInstance) {
      this.movieFilterServiceInstance = new MovieFilterService();
    }
    return this.movieFilterServiceInstance;
  }

  /**
   * Retrieves or instantiates the singleton IMovieFormatterService instance.
   *
   * @returns The active movie metadata formatting service.
   */
  public static getMovieFormatterService(): IMovieFormatterService {
    if (!this.movieFormatterServiceInstance) {
      this.movieFormatterServiceInstance = new MovieFormatterService();
    }
    return this.movieFormatterServiceInstance;
  }
}

export { MovieServiceFactory };
