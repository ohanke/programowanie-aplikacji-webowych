import { IMovieFormatterService } from "../contracts/IMovieFormatterService";

/**
 * Service implementation responsible for transforming movie metrics into localized textual presentations.
 * Satisfies Single Responsibility Principle by encapsulating display formatting rules.
 */
export class MovieFormatterService implements IMovieFormatterService {
  /**
   * Formats a total runtime duration in minutes into a human-friendly string.
   *
   * @example
   * formatDuration(148) // returns "2h 28min"
   * formatDuration(45)  // returns "45min"
   * formatDuration(0)   // returns "0min"
   *
   * @param durationInMinutes - Runtime duration in minutes.
   * @returns Formatted representation of hours and minutes.
   */
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

  /**
   * Formats a numeric viewer rating to display with exactly one decimal place over ten.
   *
   * @example
   * formatRating(8.8) // returns "8.8 / 10"
   * formatRating(9)   // returns "9.0 / 10"
   *
   * @param viewerRating - Rating score between 0.0 and 10.0.
   * @returns Formatted rating label.
   */
  public formatRating(viewerRating: number): string {
    return `${viewerRating.toFixed(1)} / 10`;
  }

  /**
   * Joins multiple genre names with commas for visual tagging.
   *
   * @example
   * formatGenres(["Action", "Sci-Fi"]) // returns "Action, Sci-Fi"
   *
   * @param genres - Array of genre strings.
   * @returns Comma-separated list of genres, or an empty string.
   */
  public formatGenres(genres: readonly string[]): string {
    return genres.join(", ");
  }
}
