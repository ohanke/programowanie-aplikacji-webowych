import { IMovie } from "../contracts/IMovie";
import {
  IMovieFilterCriteria,
  MovieSortOrder,
} from "../contracts/IMovieFilterCriteria";
import { IMovieFilterService } from "../contracts/IMovieFilterService";

export class MovieFilterService implements IMovieFilterService {
  public filterAndSortMovies(
    movies: readonly IMovie[],
    criteria: IMovieFilterCriteria
  ): readonly IMovie[] {
    const trimmedSearchQuery = criteria.searchQuery.trim().toLowerCase();
    const isGenreFilterActive =
      criteria.selectedGenre.length > 0 &&
      criteria.selectedGenre.toUpperCase() !== "ALL";

    const filteredMovies = movies.filter((movie) => {
      const matchesSearchQuery =
        trimmedSearchQuery.length === 0 ||
        movie.title.toLowerCase().includes(trimmedSearchQuery) ||
        movie.originalTitle.toLowerCase().includes(trimmedSearchQuery) ||
        movie.director.toLowerCase().includes(trimmedSearchQuery) ||
        movie.castMembers.some((castMember) =>
          castMember.toLowerCase().includes(trimmedSearchQuery)
        );

      const matchesGenre =
        !isGenreFilterActive || movie.genres.includes(criteria.selectedGenre);

      return matchesSearchQuery && matchesGenre;
    });

    return this.sortMovies(filteredMovies, criteria.sortOrder);
  }

  public extractUniqueGenres(movies: readonly IMovie[]): readonly string[] {
    const genresSet = new Set<string>();

    for (const movie of movies) {
      for (const genre of movie.genres) {
        genresSet.add(genre);
      }
    }

    return Array.from(genresSet).sort((firstGenre, secondGenre) =>
      firstGenre.localeCompare(secondGenre)
    );
  }

  private sortMovies(
    movies: readonly IMovie[],
    sortOrder: MovieSortOrder
  ): readonly IMovie[] {
    const copyOfMovies = [...movies];

    switch (sortOrder) {
      case "RATING_DESCENDING":
        return copyOfMovies.sort(
          (firstMovie, secondMovie) =>
            secondMovie.viewerRating - firstMovie.viewerRating
        );

      case "YEAR_DESCENDING":
        return copyOfMovies.sort(
          (firstMovie, secondMovie) =>
            secondMovie.releaseYear - firstMovie.releaseYear
        );

      case "TITLE_ASCENDING":
        return copyOfMovies.sort((firstMovie, secondMovie) =>
          firstMovie.title.localeCompare(secondMovie.title)
        );

      case "DURATION_DESCENDING":
        return copyOfMovies.sort(
          (firstMovie, secondMovie) =>
            secondMovie.durationInMinutes - firstMovie.durationInMinutes
        );

      default:
        return copyOfMovies;
    }
  }
}
