export interface IMovie {
  readonly identifier: string;
  readonly title: string;
  readonly originalTitle: string;
  readonly releaseYear: number;
  readonly genres: readonly string[];
  readonly director: string;
  readonly castMembers: readonly string[];
  readonly durationInMinutes: number;
  readonly viewerRating: number;
  readonly ageRating: string;
  readonly posterImageUrl: string;
  readonly backdropImageUrl: string;
  readonly shortDescription: string;
  readonly detailedSynopsis: string;
  readonly trailerYouTubeUrl: string;
  readonly isFeatured: boolean;
}
