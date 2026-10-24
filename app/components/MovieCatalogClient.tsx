"use client";

import React, { useMemo, useState } from "react";
import { IMovie } from "../contracts/IMovie";
import { IMovieFilterCriteria } from "../contracts/IMovieFilterCriteria";
import { MovieServiceFactory } from "../services/MovieServiceFactory";
import { MovieGrid } from "./MovieGrid";
import { MovieSearchFilterBar } from "./MovieSearchFilterBar";

interface MovieCatalogClientProperties {
  readonly initialMovies: readonly IMovie[];
}

export function MovieCatalogClient({
  initialMovies,
}: MovieCatalogClientProperties) {
  const movieFilterService = MovieServiceFactory.getMovieFilterService();

  const [filterCriteria, setFilterCriteria] = useState<IMovieFilterCriteria>({
    searchQuery: "",
    selectedGenre: "ALL",
    sortOrder: "RATING_DESCENDING",
  });

  const availableGenres = useMemo(() => {
    return movieFilterService.extractUniqueGenres(initialMovies);
  }, [initialMovies, movieFilterService]);

  const filteredMovies = useMemo(() => {
    return movieFilterService.filterAndSortMovies(initialMovies, filterCriteria);
  }, [initialMovies, filterCriteria, movieFilterService]);

  return (
    <div>
      <MovieSearchFilterBar
        criteria={filterCriteria}
        availableGenres={availableGenres}
        totalResultsCount={filteredMovies.length}
        onCriteriaChange={setFilterCriteria}
      />

      <MovieGrid movies={filteredMovies} />
    </div>
  );
}
