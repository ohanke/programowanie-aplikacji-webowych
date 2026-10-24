import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Star,
  Clock,
  Calendar,
  Play,
  User,
  Users,
  Film,
  Sparkles,
} from "lucide-react";
import { MovieServiceFactory } from "../../services/MovieServiceFactory";
import { MovieBadge } from "../../components/MovieBadge";

interface MovieDetailsPageProperties {
  readonly params: Promise<{
    readonly id: string;
  }>;
}

export async function generateMetadata({ params }: MovieDetailsPageProperties) {
  const { id } = await params;
  const movieService = MovieServiceFactory.getMovieService();
  const movie = await movieService.fetchMovieByIdentifier(id);

  if (!movie) {
    return {
      title: "Film nie znaleziony | Kinoteka",
    };
  }

  return {
    title: `${movie.title} (${movie.releaseYear}) | Kinoteka`,
    description: movie.shortDescription,
  };
}

export default async function MovieDetailsPage({
  params,
}: MovieDetailsPageProperties) {
  const { id } = await params;
  const movieService = MovieServiceFactory.getMovieService();
  const movie = await movieService.fetchMovieByIdentifier(id);

  if (!movie) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-24 text-center">
        <div className="flex flex-col items-center justify-center rounded-3xl border border-slate-800 bg-slate-900/40 p-12 backdrop-blur-md">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-400 mb-4">
            <Film className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">
            Film nie został odnaleziony
          </h1>
          <p className="text-sm text-slate-400 mb-6 max-w-md">
            Film o identyfikatorze &quot;{id}&quot; nie istnieje w naszej
            kinotece lub został usunięty.
          </p>
          <Link
            href="/movies"
            className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-all hover:bg-amber-400"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Wróć do katalogu filmów</span>
          </Link>
        </div>
      </main>
    );
  }

  const movieFormatterService = MovieServiceFactory.getMovieFormatterService();
  const formattedDuration = movieFormatterService.formatDuration(
    movie.durationInMinutes
  );
  const formattedRating = movieFormatterService.formatRating(movie.viewerRating);

  return (
    <main className="relative pb-16">
      {/* Panoramic backdrop header */}
      <div className="relative h-[340px] sm:h-[460px] w-full overflow-hidden bg-slate-950">
        <Image
          src={movie.backdropImageUrl}
          alt={`Tło filmu ${movie.title}`}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/80" />

        {/* Back navigation button */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6">
          <Link
            href="/movies"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700/80 bg-slate-900/80 px-4 py-2 text-xs font-semibold text-slate-200 backdrop-blur-md transition-all hover:bg-slate-800 hover:text-white hover:border-slate-600 focus:outline-none"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Wróć do katalogu filmów</span>
          </Link>
        </div>
      </div>

      {/* Main details content overlapping backdrop */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-48 sm:-mt-64 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Movie Poster and Quick Actions (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <div className="relative aspect-[2/3] w-full overflow-hidden rounded-3xl border-2 border-slate-700/60 bg-slate-900 shadow-2xl shadow-black/80">
              <Image
                src={movie.posterImageUrl}
                alt={`Plakat ${movie.title}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
              />

              <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-slate-950/90 px-3 py-1 text-sm font-bold text-amber-400 backdrop-blur-md border border-amber-500/40 shadow-lg">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>{formattedRating}</span>
              </div>

              <div className="absolute top-4 left-4">
                <MovieBadge label={movie.ageRating} variant="age" />
              </div>
            </div>

            {/* Trailer action button */}
            <a
              href={movie.trailerYouTubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 rounded-2xl bg-amber-500 py-4 px-6 text-sm font-bold text-slate-950 shadow-xl shadow-amber-500/20 transition-all hover:bg-amber-400 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <Play className="w-4 h-4 fill-slate-950 text-slate-950" />
              <span>Oglądaj oficjalny zwiastun</span>
            </a>

            {/* Quick technical specs card */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 backdrop-blur-md">
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                Informacje o filmie
              </h3>

              <dl className="flex flex-col gap-3 text-xs">
                <div className="flex justify-between border-b border-slate-800/80 pb-2">
                  <dt className="text-slate-400">Reżyser</dt>
                  <dd className="font-medium text-slate-200">{movie.director}</dd>
                </div>
                <div className="flex justify-between border-b border-slate-800/80 pb-2">
                  <dt className="text-slate-400">Rok premiery</dt>
                  <dd className="font-medium text-slate-200">{movie.releaseYear}</dd>
                </div>
                <div className="flex justify-between border-b border-slate-800/80 pb-2">
                  <dt className="text-slate-400">Czas trwania</dt>
                  <dd className="font-medium text-slate-200">{formattedDuration}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-400">Kategoria wiekowa</dt>
                  <dd className="font-medium text-slate-200">{movie.ageRating}</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Right Column: Title, Synopsis, Cast, Badges (8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-6 lg:pt-16">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                {movie.isFeatured && (
                  <span className="flex items-center gap-1 rounded-full bg-amber-500/20 px-3 py-1 text-xs font-bold text-amber-400 border border-amber-500/30">
                    <Sparkles className="w-3.5 h-3.5" />
                    Wyróżniony
                  </span>
                )}
                {movie.genres.map((genre) => (
                  <MovieBadge key={genre} label={genre} variant="genre" />
                ))}
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-1">
                {movie.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-400 italic mb-4">
                {movie.originalTitle}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-amber-400" />
                  {movie.releaseYear}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-amber-400" />
                  {formattedDuration}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4 text-amber-400" />
                  Reż. {movie.director}
                </span>
              </div>
            </div>

            {/* Synopsis Section */}
            <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md">
              <h2 className="text-lg font-bold text-white mb-3">
                Zarys Fabuły
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {movie.detailedSynopsis}
              </p>
            </section>

            {/* Cast section */}
            <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-amber-400" />
                <h2 className="text-lg font-bold text-white">
                  Główna Obsada Aktorska
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {movie.castMembers.map((actor) => (
                  <div
                    key={actor}
                    className="flex items-center gap-3 rounded-xl border border-slate-800/80 bg-slate-950/60 p-3"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-amber-400 font-semibold text-xs">
                      {actor.charAt(0)}
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-slate-200">
                      {actor}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
