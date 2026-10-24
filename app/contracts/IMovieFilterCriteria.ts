/**
 * Supported sorting orders for movie catalog presentation.
 */
export type MovieSortOrder =
  | "RATING_DESCENDING"
  | "YEAR_DESCENDING"
  | "TITLE_ASCENDING"
  | "DURATION_DESCENDING";

/**
 * Filter and sort parameters applied to movie queries.
 */
export interface IMovieFilterCriteria {
  /**
   * Search term matched against title, original title, director, and cast.
   */
  readonly searchQuery: string;

  /**
   * Selected genre filter, or "ALL" to include all genres.
   */
  readonly selectedGenre: string;

  /**
   * Chosen ordering strategy for catalog results.
   */
  readonly sortOrder: MovieSortOrder;
}
