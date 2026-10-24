import React from "react";
import { Film } from "lucide-react";
import { MovieServiceFactory } from "../services/MovieServiceFactory";
import { MovieCatalogClient } from "../components/MovieCatalogClient";

export const metadata = {
  title: "Katalog Filmów | Kinoteka",
  description: "Przeglądaj, filtruj i wyszukuj filmy w katalogu Kinoteki",
};

export default async function MoviesPage() {
  const movieService = MovieServiceFactory.getMovieService();
  const allMovies = await movieService.fetchAllMovies();

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="flex flex-col gap-2 mb-8">
        <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider">
          <Film className="w-4 h-4" />
          <span>Biblioteka Kinowa</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          Katalog Filmów
        </h1>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
          Skorzystaj z wyszukiwarki i filtrów gatunkowych, aby odnaleźć
          interesujący Cię tytuł. Kliknij w kartę filmu, aby poznać pełną
          obsadę, recenzje oraz obejrzeć zwiastun.
        </p>
      </div>

      <MovieCatalogClient initialMovies={allMovies} />
    </main>
  );
}
