import { describe, expect, it } from "vitest";
import { MovieFormatterService } from "../MovieFormatterService";

describe("MovieFormatterService", () => {
  const movieFormatterService = new MovieFormatterService();

  describe("formatDuration", () => {
    it("should format minutes into hours and remaining minutes", () => {
      const formattedDuration = movieFormatterService.formatDuration(148);
      expect(formattedDuration).toBe("2h 28min");
    });

    it("should format exact hours without remaining minutes if zero", () => {
      const formattedDuration = movieFormatterService.formatDuration(120);
      expect(formattedDuration).toBe("2h 0min");
    });

    it("should format durations under one hour correctly", () => {
      const formattedDuration = movieFormatterService.formatDuration(45);
      expect(formattedDuration).toBe("45min");
    });

    it("should return 0min for zero or negative durations", () => {
      expect(movieFormatterService.formatDuration(0)).toBe("0min");
      expect(movieFormatterService.formatDuration(-15)).toBe("0min");
    });
  });

  describe("formatRating", () => {
    it("should format numeric rating with one decimal point and max scale", () => {
      const formattedRating = movieFormatterService.formatRating(8.8);
      expect(formattedRating).toBe("8.8 / 10");
    });

    it("should format whole integer rating with point zero", () => {
      const formattedRating = movieFormatterService.formatRating(9);
      expect(formattedRating).toBe("9.0 / 10");
    });
  });

  describe("formatGenres", () => {
    it("should join multiple genres with comma and space", () => {
      const formattedGenres = movieFormatterService.formatGenres([
        "Action",
        "Sci-Fi",
        "Thriller",
      ]);
      expect(formattedGenres).toBe("Action, Sci-Fi, Thriller");
    });

    it("should return empty string when genre list is empty", () => {
      const formattedGenres = movieFormatterService.formatGenres([]);
      expect(formattedGenres).toBe("");
    });
  });
});
