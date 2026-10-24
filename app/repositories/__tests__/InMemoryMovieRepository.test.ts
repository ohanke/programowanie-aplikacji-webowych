import { describe, expect, it } from "vitest";
import { initialMoviesData } from "../../data/moviesData";
import { InMemoryMovieRepository } from "../InMemoryMovieRepository";

describe("InMemoryMovieRepository", () => {
  const movieRepository = new InMemoryMovieRepository(initialMoviesData);

  it("should return all movies in the repository", async () => {
    const allMovies = await movieRepository.getAllMovies();
    expect(allMovies.length).toBe(10);
  });

  it("should retrieve a movie by its unique identifier", async () => {
    const movie = await movieRepository.getMovieByIdentifier("inception-2010");
    expect(movie).not.toBeNull();
    expect(movie?.title).toBe("Incepcja");
    expect(movie?.director).toBe("Christopher Nolan");
  });

  it("should return null when searching for an identifier that does not exist", async () => {
    const movie = await movieRepository.getMovieByIdentifier("non-existent-movie-id");
    expect(movie).toBeNull();
  });

  it("should return only featured movies", async () => {
    const featuredMovies = await movieRepository.getFeaturedMovies();
    expect(featuredMovies.length).toBeGreaterThan(0);
    expect(featuredMovies.every((movie) => movie.isFeatured)).toBe(true);
  });
});
