import React from "react";
import { Film } from "lucide-react";
import { IMovie } from "../contracts/IMovie";
import { MovieCard } from "./MovieCard";

interface MovieGridProperties {
  readonly movies: readonly IMovie[];
}

export function MovieGrid({ movies }: MovieGridProperties) {
  if (movies.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-800 bg-slate-900/30 p-16 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-800/80 text-slate-400 mb-4">
          <Film className="w-8 h-8" />
        </div>
        <h3 className="text-lg font-semibold text-slate-200 mb-1">
          Brak filmów spełniających kryteria
        </h3>
        <p className="text-sm text-slate-400 max-w-md">
          Spróbuj zmienić słowo kluczowe w wyszukiwarce lub wybierz inny gatunek
          filmowy z powyższej listy.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {movies.map((movie) => (
        <MovieCard key={movie.identifier} movie={movie} />
      ))}
    </div>
  );
}
