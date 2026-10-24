import { describe, expect, it } from "vitest";
import { IMovie } from "../../contracts/IMovie";
import { MovieFilterService } from "../MovieFilterService";

describe("MovieFilterService", () => {
  const movieFilterService = new MovieFilterService();

  const sampleMoviesList: readonly IMovie[] = [
    {
      identifier: "inception-2010",
      title: "Inception",
      originalTitle: "Inception",
      releaseYear: 2010,
      genres: ["Sci-Fi", "Action"],
      director: "Christopher Nolan",
      castMembers: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"],
      durationInMinutes: 148,
      viewerRating: 8.8,
      ageRating: "13+",
      posterImageUrl: "https://example.com/inception.jpg",
      backdropImageUrl: "https://example.com/inception-backdrop.jpg",
      shortDescription: "A thief who steals corporate secrets.",
      detailedSynopsis: "Dom Cobb is a skilled thief...",
      trailerYouTubeUrl: "https://youtube.com/watch?v=YoHD9XEInc0",
      isFeatured: true,
    },
    {
      identifier: "interstellar-2014",
      title: "Interstellar",
      originalTitle: "Interstellar",
      releaseYear: 2014,
      genres: ["Sci-Fi", "Drama"],
      director: "Christopher Nolan",
      castMembers: ["Matthew McConaughey", "Anne Hathaway"],
      durationInMinutes: 169,
      viewerRating: 8.7,
      ageRating: "13+",
      posterImageUrl: "https://example.com/interstellar.jpg",
      backdropImageUrl: "https://example.com/interstellar-backdrop.jpg",
      shortDescription: "A team of explorers travel through a wormhole.",
      detailedSynopsis: "Earth's future has been riddled by disasters...",
      trailerYouTubeUrl: "https://youtube.com/watch?v=zSWdZVtXT7E",
      isFeatured: true,
    },
    {
      identifier: "pulp-fiction-1994",
      title: "Pulp Fiction",
      originalTitle: "Pulp Fiction",
      releaseYear: 1994,
      genres: ["Crime", "Drama"],
      director: "Quentin Tarantino",
      castMembers: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
      durationInMinutes: 154,
      viewerRating: 8.9,
      ageRating: "18+",
      posterImageUrl: "https://example.com/pulp.jpg",
      backdropImageUrl: "https://example.com/pulp-backdrop.jpg",
      shortDescription: "The lives of two mob hitmen.",
      detailedSynopsis: "A burger-loving hit man...",
      trailerYouTubeUrl: "https://youtube.com/watch?v=s7EdQ4FqbhY",
      isFeatured: false,
    },
  ];

  describe("filterAndSortMovies", () => {
    it("should return all movies when search query is empty and genre is ALL", () => {
      const filteredMovies = movieFilterService.filterAndSortMovies(
        sampleMoviesList,
        {
          searchQuery: "",
          selectedGenre: "ALL",
          sortOrder: "RATING_DESCENDING",
        }
      );

      expect(filteredMovies).toHaveLength(3);
    });

    it("should filter movies matching search query in title regardless of case", () => {
      const filteredMovies = movieFilterService.filterAndSortMovies(
        sampleMoviesList,
        {
          searchQuery: "inter",
          selectedGenre: "ALL",
          sortOrder: "RATING_DESCENDING",
        }
      );

      expect(filteredMovies).toHaveLength(1);
      expect(filteredMovies[0].title).toBe("Interstellar");
    });

    it("should filter movies matching search query in director name", () => {
      const filteredMovies = movieFilterService.filterAndSortMovies(
        sampleMoviesList,
        {
          searchQuery: "Tarantino",
          selectedGenre: "ALL",
          sortOrder: "RATING_DESCENDING",
        }
      );

      expect(filteredMovies).toHaveLength(1);
      expect(filteredMovies[0].title).toBe("Pulp Fiction");
    });

    it("should filter movies by specific genre", () => {
      const filteredMovies = movieFilterService.filterAndSortMovies(
        sampleMoviesList,
        {
          searchQuery: "",
          selectedGenre: "Crime",
          sortOrder: "RATING_DESCENDING",
        }
      );

      expect(filteredMovies).toHaveLength(1);
      expect(filteredMovies[0].title).toBe("Pulp Fiction");
    });

    it("should sort movies by rating in descending order", () => {
      const sortedMovies = movieFilterService.filterAndSortMovies(
        sampleMoviesList,
        {
          searchQuery: "",
          selectedGenre: "ALL",
          sortOrder: "RATING_DESCENDING",
        }
      );

      expect(sortedMovies[0].viewerRating).toBe(8.9);
      expect(sortedMovies[1].viewerRating).toBe(8.8);
      expect(sortedMovies[2].viewerRating).toBe(8.7);
    });

    it("should sort movies by release year in descending order", () => {
      const sortedMovies = movieFilterService.filterAndSortMovies(
        sampleMoviesList,
        {
          searchQuery: "",
          selectedGenre: "ALL",
          sortOrder: "YEAR_DESCENDING",
        }
      );

      expect(sortedMovies[0].releaseYear).toBe(2014);
      expect(sortedMovies[1].releaseYear).toBe(2010);
      expect(sortedMovies[2].releaseYear).toBe(1994);
    });

    it("should sort movies by title in ascending alphabetical order", () => {
      const sortedMovies = movieFilterService.filterAndSortMovies(
        sampleMoviesList,
        {
          searchQuery: "",
          selectedGenre: "ALL",
          sortOrder: "TITLE_ASCENDING",
        }
      );

      expect(sortedMovies[0].title).toBe("Inception");
      expect(sortedMovies[1].title).toBe("Interstellar");
      expect(sortedMovies[2].title).toBe("Pulp Fiction");
    });

    it("should sort movies by duration in descending order", () => {
      const sortedMovies = movieFilterService.filterAndSortMovies(
        sampleMoviesList,
        {
          searchQuery: "",
          selectedGenre: "ALL",
          sortOrder: "DURATION_DESCENDING",
        }
      );

      expect(sortedMovies[0].durationInMinutes).toBe(169);
      expect(sortedMovies[1].durationInMinutes).toBe(154);
      expect(sortedMovies[2].durationInMinutes).toBe(148);
    });
  });

  describe("extractUniqueGenres", () => {
    it("should return a sorted unique list of all movie genres", () => {
      const uniqueGenres = movieFilterService.extractUniqueGenres(sampleMoviesList);
      expect(uniqueGenres).toEqual(["Action", "Crime", "Drama", "Sci-Fi"]);
    });

    it("should return an empty array when given an empty list of movies", () => {
      const uniqueGenres = movieFilterService.extractUniqueGenres([]);
      expect(uniqueGenres).toEqual([]);
    });
  });
});
