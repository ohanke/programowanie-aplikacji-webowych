import { describe, expect, it } from "vitest";
import { InMemoryMovieRepository } from "../repositories/InMemoryMovieRepository";
import { MovieFilterService } from "../services/MovieFilterService";
import { MovieFormatterService } from "../services/MovieFormatterService";
import { MovieService } from "../services/MovieService";

describe("MovieLibrary Integration Test", () => {
  const movieRepository = new InMemoryMovieRepository();
  const movieService = new MovieService(movieRepository);
  const movieFilterService = new MovieFilterService();
  const movieFormatterService = new MovieFormatterService();

  it("should integrate repository, service, and filter to search movies seamlessly", async () => {
    const allMovies = await movieService.fetchAllMovies();
    expect(allMovies.length).toBe(10);

    const sciFiMovies = movieFilterService.filterAndSortMovies(allMovies, {
      searchQuery: "",
      selectedGenre: "Sci-Fi",
      sortOrder: "RATING_DESCENDING",
    });

    expect(sciFiMovies.length).toBeGreaterThanOrEqual(3);
    expect(sciFiMovies[0].genres).toContain("Sci-Fi");

    const topRatedSciFiMovie = sciFiMovies[0];
    const formattedDuration = movieFormatterService.formatDuration(
      topRatedSciFiMovie.durationInMinutes
    );
    const formattedRating = movieFormatterService.formatRating(
      topRatedSciFiMovie.viewerRating
    );

    expect(formattedDuration).toMatch(/^\d+h \d+min$/);
    expect(formattedRating).toMatch(/^\d+\.\d+ \/ 10$/);
  });

  it("should integrate repository and service to calculate realistic overall library statistics", async () => {
    const totalCount = await movieService.fetchTotalMoviesCount();
    const averageRating = await movieService.fetchAverageRating();

    expect(totalCount).toBe(10);
    expect(averageRating).toBeGreaterThanOrEqual(8.0);
    expect(averageRating).toBeLessThanOrEqual(10.0);
  });
});
