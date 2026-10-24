import { describe, expect, it } from "vitest";
import { IMovie } from "../../contracts/IMovie";
import { IMovieRepository } from "../../contracts/IMovieRepository";
import { MovieService } from "../MovieService";

class MockMovieRepository implements IMovieRepository {
  public constructor(private readonly moviesList: readonly IMovie[]) {}

  public async getAllMovies(): Promise<readonly IMovie[]> {
    return this.moviesList;
  }

  public async getMovieByIdentifier(
    identifier: string
  ): Promise<IMovie | null> {
    const foundMovie = this.moviesList.find(
      (movie) => movie.identifier === identifier
    );
    return foundMovie ?? null;
  }

  public async getFeaturedMovies(): Promise<readonly IMovie[]> {
    return this.moviesList.filter((movie) => movie.isFeatured);
  }
}

describe("MovieService", () => {
  const sampleMovies: readonly IMovie[] = [
    {
      identifier: "matrix-1999",
      title: "The Matrix",
      originalTitle: "The Matrix",
      releaseYear: 1999,
      genres: ["Sci-Fi", "Action"],
      director: "Lana Wachowski, Lilly Wachowski",
      castMembers: ["Keanu Reeves", "Laurence Fishburne"],
      durationInMinutes: 136,
      viewerRating: 8.7,
      ageRating: "16+",
      posterImageUrl: "https://example.com/matrix.jpg",
      backdropImageUrl: "https://example.com/matrix-backdrop.jpg",
      shortDescription: "A computer hacker learns about the true nature of reality.",
      detailedSynopsis: "Neo believes that Morpheus knows the truth...",
      trailerYouTubeUrl: "https://youtube.com/watch?v=vKQi3bBA1y8",
      isFeatured: true,
    },
    {
      identifier: "gladiator-2000",
      title: "Gladiator",
      originalTitle: "Gladiator",
      releaseYear: 2000,
      genres: ["Action", "Drama"],
      director: "Ridley Scott",
      castMembers: ["Russell Crowe", "Joaquin Phoenix"],
      durationInMinutes: 155,
      viewerRating: 8.5,
      ageRating: "16+",
      posterImageUrl: "https://example.com/gladiator.jpg",
      backdropImageUrl: "https://example.com/gladiator-backdrop.jpg",
      shortDescription: "A former Roman General sets out to exact vengeance.",
      detailedSynopsis: "Commodus takes power and strips Maximus of his rank...",
      trailerYouTubeUrl: "https://youtube.com/watch?v=owK1qxDselE",
      isFeatured: false,
    },
  ];

  const mockRepository = new MockMovieRepository(sampleMovies);
  const movieService = new MovieService(mockRepository);

  it("should fetch all movies via repository", async () => {
    const movies = await movieService.fetchAllMovies();
    expect(movies).toHaveLength(2);
    expect(movies[0].title).toBe("The Matrix");
  });

  it("should fetch movie by identifier when present", async () => {
    const movie = await movieService.fetchMovieByIdentifier("matrix-1999");
    expect(movie).not.toBeNull();
    expect(movie?.title).toBe("The Matrix");
  });

  it("should return null when movie identifier does not exist", async () => {
    const movie = await movieService.fetchMovieByIdentifier("non-existent");
    expect(movie).toBeNull();
  });

  it("should fetch only featured movies", async () => {
    const featuredMovies = await movieService.fetchFeaturedMovies();
    expect(featuredMovies).toHaveLength(1);
    expect(featuredMovies[0].title).toBe("The Matrix");
  });

  it("should return correct total movies count", async () => {
    const count = await movieService.fetchTotalMoviesCount();
    expect(count).toBe(2);
  });

  it("should calculate correct average viewer rating", async () => {
    const averageRating = await movieService.fetchAverageRating();
    expect(averageRating).toBe(8.6);
  });

  it("should return zero average rating when movies list is empty", async () => {
    const emptyRepository = new MockMovieRepository([]);
    const emptyMovieService = new MovieService(emptyRepository);

    const averageRating = await emptyMovieService.fetchAverageRating();
    expect(averageRating).toBe(0);
  });
});
