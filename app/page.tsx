import React from "react";
import Link from "next/link";
import { ArrowRight, Film, Star, Sparkles, ShieldCheck, Zap } from "lucide-react";
import { MovieServiceFactory } from "./services/MovieServiceFactory";
import { MovieHeroBanner } from "./components/MovieHeroBanner";
import { MovieGrid } from "./components/MovieGrid";

export default async function HomePage() {
  const movieService = MovieServiceFactory.getMovieService();
  const featuredMovies = await movieService.fetchFeaturedMovies();
  const totalMoviesCount = await movieService.fetchTotalMoviesCount();
  const averageRating = await movieService.fetchAverageRating();

  const heroMovie = featuredMovies[0];
  const secondaryFeaturedMovies = featuredMovies.slice(1, 5);

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex flex-col gap-14">
      {/* Hero Banner Section */}
      {heroMovie && <MovieHeroBanner featuredMovie={heroMovie} />}

      {/* Statistics Bar */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur-md">
        <div className="flex flex-col items-center justify-center p-3 text-center border-r border-slate-800/80 last:border-none">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 mb-2">
            <Film className="w-5 h-5" />
          </div>
          <span className="text-2xl sm:text-3xl font-extrabold text-white">
            {totalMoviesCount}
          </span>
          <span className="text-xs text-slate-400">Dostępnych filmów</span>
        </div>

        <div className="flex flex-col items-center justify-center p-3 text-center md:border-r border-slate-800/80">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 mb-2">
            <Star className="w-5 h-5 fill-amber-400" />
          </div>
          <span className="text-2xl sm:text-3xl font-extrabold text-white">
            {averageRating}
          </span>
          <span className="text-xs text-slate-400">Średnia ocena biblioteki</span>
        </div>

        <div className="flex flex-col items-center justify-center p-3 text-center border-r border-slate-800/80">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 mb-2">
            <Sparkles className="w-5 h-5" />
          </div>
          <span className="text-2xl sm:text-3xl font-extrabold text-white">
            100%
          </span>
          <span className="text-xs text-slate-400">Jakość Cinema HD</span>
        </div>

        <div className="flex flex-col items-center justify-center p-3 text-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 mb-2">
            <Zap className="w-5 h-5" />
          </div>
          <span className="text-2xl sm:text-3xl font-extrabold text-white">
            SPA
          </span>
          <span className="text-xs text-slate-400">Błyskawiczna nawigacja</span>
        </div>
      </section>

      {/* Featured Movies Section */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Najwyżej Oceniane</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Polecane tytuły w kinotece
            </h2>
          </div>

          <Link
            href="/movies"
            className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors group"
          >
            <span>Przejdź do pełnego katalogu</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <MovieGrid movies={secondaryFeaturedMovies} />
      </section>

      {/* Value proposition / Features */}
      <section className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/80 via-slate-900/40 to-slate-950 p-8 sm:p-12">
        <div className="max-w-2xl mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Odkrywaj kino na własnych zasadach
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Aplikacja Movie Library łączy przejrzystość z kinowym klimatem.
            Filtruj filmy według ulubionych gatunków, sprawdzaj oceny krytyków,
            poznaj szczegółowe informacje o obsadzie i oglądaj oficjalne zwiastuny.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-3 rounded-2xl border border-slate-800/80 bg-slate-950/60 p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400">
              <Film className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-slate-100">Baza Arcydzieł</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Starannie wyselekcjonowane tytuły reprezentujące najważniejsze
              gatunki filmowe – od ponadczasowych klasyków po nowości sci-fi.
            </p>
          </div>

          <div className="flex flex-col gap-3 rounded-2xl border border-slate-800/80 bg-slate-950/60 p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-slate-100">Wyszukiwanie na Żywo</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Dynamiczny system filtrowania i sortowania bez konieczności
              przeładowywania strony w architekturze Single Page Application.
            </p>
          </div>

          <div className="flex flex-col gap-3 rounded-2xl border border-slate-800/80 bg-slate-950/60 p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-slate-100">Architektura SOLID</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Projekt oparty o zasady czystego kodu, małe komponenty Building
              Blocks oraz pełne pokrycie testami jednostkowymi.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
