import { IMovieFormatterService } from "../contracts/IMovieFormatterService";

export class MovieFormatterService implements IMovieFormatterService {
  public formatDuration(durationInMinutes: number): string {
    if (durationInMinutes <= 0) {
      return "0min";
    }

    const hours = Math.floor(durationInMinutes / 60);
    const remainingMinutes = durationInMinutes % 60;

    if (hours === 0) {
      return `${remainingMinutes}min`;
    }

    return `${hours}h ${remainingMinutes}min`;
  }

  public formatRating(viewerRating: number): string {
    return `${viewerRating.toFixed(1)} / 10`;
  }

  public formatGenres(genres: readonly string[]): string {
    return genres.join(", ");
  }
}
