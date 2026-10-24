export interface IMovieFormatterService {
  formatDuration(durationInMinutes: number): string;
  formatRating(viewerRating: number): string;
  formatGenres(genres: readonly string[]): string;
}
