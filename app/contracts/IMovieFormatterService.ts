/**
 * Service contract responsible for formatting movie metadata into localized presentation strings.
 */
export interface IMovieFormatterService {
  /**
   * Formats a total runtime duration in minutes into a human-readable string (e.g., 148 -> "2h 28min").
   *
   * @param durationInMinutes - Runtime in minutes.
   * @returns Formatted duration string.
   */
  formatDuration(durationInMinutes: number): string;

  /**
   * Formats a numeric viewer rating into a standard string representation (e.g., 8.8 -> "8.8 / 10").
   *
   * @param viewerRating - Rating score between 0.0 and 10.0.
   * @returns Formatted rating label.
   */
  formatRating(viewerRating: number): string;

  /**
   * Joins a collection of genre tags into a comma-separated presentation string.
   *
   * @param genres - Array of genre strings.
   * @returns Comma-separated genre list.
   */
  formatGenres(genres: readonly string[]): string;
}
