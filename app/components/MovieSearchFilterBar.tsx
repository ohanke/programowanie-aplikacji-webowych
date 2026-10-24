"use client";

import React from "react";
import { Search, X, SlidersHorizontal } from "lucide-react";
import {
  IMovieFilterCriteria,
  MovieSortOrder,
} from "../contracts/IMovieFilterCriteria";

interface MovieSearchFilterBarProperties {
  readonly criteria: IMovieFilterCriteria;
  readonly availableGenres: readonly string[];
  readonly totalResultsCount: number;
  readonly onCriteriaChange: (newCriteria: IMovieFilterCriteria) => void;
}

export function MovieSearchFilterBar({
  criteria,
  availableGenres,
  totalResultsCount,
  onCriteriaChange,
}: MovieSearchFilterBarProperties) {
  const handleSearchQueryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    onCriteriaChange({
      ...criteria,
      searchQuery: event.target.value,
    });
  };

  const handleClearSearchQuery = () => {
    onCriteriaChange({
      ...criteria,
      searchQuery: "",
    });
  };

  const handleGenreSelect = (genre: string) => {
    onCriteriaChange({
      ...criteria,
      selectedGenre: genre,
    });
  };

  const handleSortOrderChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    onCriteriaChange({
      ...criteria,
      sortOrder: event.target.value as MovieSortOrder,
    });
  };

  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-md shadow-xl mb-8">
      {/* Upper row: Search input and Sort dropdown */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search input */}
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={criteria.searchQuery}
            onChange={handleSearchQueryChange}
            placeholder="Szukaj po tytule, reżyserze, aktorze..."
            className="w-full rounded-xl border border-slate-700 bg-slate-950/80 py-2.5 pl-10 pr-10 text-sm text-slate-100 placeholder-slate-500 transition-colors focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
          />
          {criteria.searchQuery.length > 0 && (
            <button
              type="button"
              onClick={handleClearSearchQuery}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-400 hover:text-slate-100 focus:outline-none"
              aria-label="Wyczyść wyszukiwanie"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Right side: Results count and Sort dropdown */}
        <div className="flex w-full md:w-auto items-center justify-between md:justify-end gap-3">
          <span className="text-xs font-medium text-slate-400">
            Wyniki: <strong className="text-slate-200">{totalResultsCount}</strong>
          </span>

          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-slate-400" />
            <select
              value={criteria.sortOrder}
              onChange={handleSortOrderChange}
              className="rounded-xl border border-slate-700 bg-slate-950/80 py-2 px-3 text-xs text-slate-200 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
              aria-label="Sortuj według"
            >
              <option value="RATING_DESCENDING">Ocena: od najwyższej</option>
              <option value="YEAR_DESCENDING">Rok: od najnowszego</option>
              <option value="TITLE_ASCENDING">Tytuł: alfabetycznie (A-Z)</option>
              <option value="DURATION_DESCENDING">Czas: od najdłuższego</option>
            </select>
          </div>
        </div>
      </div>

      {/* Lower row: Genre pills */}
      <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/80">
        <span className="text-xs font-medium text-slate-400 mr-1">Gatunek:</span>

        <button
          type="button"
          onClick={() => handleGenreSelect("ALL")}
          className={`rounded-lg px-3 py-1 text-xs font-medium transition-all ${
            criteria.selectedGenre === "ALL"
              ? "bg-amber-500 text-slate-950 font-semibold shadow-md shadow-amber-500/20"
              : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
          }`}
        >
          Wszystkie
        </button>

        {availableGenres.map((genre) => {
          const isSelected = criteria.selectedGenre === genre;
          return (
            <button
              key={genre}
              type="button"
              onClick={() => handleGenreSelect(genre)}
              className={`rounded-lg px-3 py-1 text-xs font-medium transition-all ${
                isSelected
                  ? "bg-amber-500 text-slate-950 font-semibold shadow-md shadow-amber-500/20"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
              }`}
            >
              {genre}
            </button>
          );
        })}
      </div>
    </div>
  );
}
