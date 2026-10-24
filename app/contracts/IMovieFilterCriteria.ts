export type MovieSortOrder =
  | "RATING_DESCENDING"
  | "YEAR_DESCENDING"
  | "TITLE_ASCENDING"
  | "DURATION_DESCENDING";

export interface IMovieFilterCriteria {
  readonly searchQuery: string;
  readonly selectedGenre: string;
  readonly sortOrder: MovieSortOrder;
}
