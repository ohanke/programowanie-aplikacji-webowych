/**
 * Represents a single movie domain entity within the Movie Library.
 * The model is immutable; all properties are strictly read-only.
 */
export interface IMovie {
  /**
   * Unique slug-based identifier for the movie (e.g., "inception-2010").
   */
  readonly identifier: string;

  /**
   * Localized title of the movie.
   */
  readonly title: string;

  /**
   * Original release title of the movie.
   */
  readonly originalTitle: string;

  /**
   * Calendar year of the theatrical or streaming premiere.
   */
  readonly releaseYear: number;

  /**
   * Collection of genre tags associated with the movie (e.g., ["Sci-Fi", "Action"]).
   */
  readonly genres: readonly string[];

  /**
   * Full name of the film director or directing team.
   */
  readonly director: string;

  /**
   * List of primary cast members featured in prominent roles.
   */
  readonly castMembers: readonly string[];

  /**
   * Total runtime duration expressed in minutes.
   */
  readonly durationInMinutes: number;

  /**
   * Average viewer rating on a 0.0 to 10.0 scale.
   */
  readonly viewerRating: number;

  /**
   * Age rating classification (e.g., "13+", "16+", "18+").
   */
  readonly ageRating: string;

  /**
   * Public URL pointing to the vertical poster image (2:3 aspect ratio).
   */
  readonly posterImageUrl: string;

  /**
   * Public URL pointing to the panoramic backdrop image.
   */
  readonly backdropImageUrl: string;

  /**
   * Brief one or two sentence summary displayed on preview cards.
   */
  readonly shortDescription: string;

  /**
   * Comprehensive plot synopsis presented on the detail page.
   */
  readonly detailedSynopsis: string;

  /**
   * Direct URL to the official trailer hosted on YouTube.
   */
  readonly trailerYouTubeUrl: string;

  /**
   * Indicates whether the movie is featured prominently on the home page.
   */
  readonly isFeatured: boolean;
}
