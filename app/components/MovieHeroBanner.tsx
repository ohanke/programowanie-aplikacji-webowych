import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Star, Play, Info, Clock, Calendar } from "lucide-react";
import { IMovie } from "../contracts/IMovie";
import { MovieServiceFactory } from "../services/MovieServiceFactory";
import { MovieBadge } from "./MovieBadge";

interface MovieHeroBannerProperties {
  readonly featuredMovie: IMovie;
}

export function MovieHeroBanner({
  featuredMovie,
}: MovieHeroBannerProperties) {
  const movieFormatterService = MovieServiceFactory.getMovieFormatterService();
  const formattedDuration = movieFormatterService.formatDuration(
    featuredMovie.durationInMinutes
  );
  const formattedRating = movieFormatterService.formatRating(
    featuredMovie.viewerRating
  );

  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl">
      {/* Background image with layered gradients */}
      <div className="absolute inset-0">
        <Image
          src={featuredMovie.backdropImageUrl}
          alt={`Tło filmu ${featuredMovie.title}`}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col justify-end p-8 md:p-14 min-h-[480px] max-w-4xl">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="rounded-full bg-amber-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-950 shadow-md">
            Wyróżniony Hit
          </span>
          <div className="flex items-center gap-1.5 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold text-amber-400 border border-amber-500/30 backdrop-blur-md">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{formattedRating}</span>
          </div>
          <MovieBadge label={featuredMovie.ageRating} variant="age" />
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-2">
          {featuredMovie.title}
        </h1>

        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300 mb-4">
          <span className="italic text-slate-400">{featuredMovie.originalTitle}</span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4 text-slate-400" />
            {featuredMovie.releaseYear}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-slate-400" />
            {formattedDuration}
          </span>
          <span>•</span>
          <span className="text-slate-400">Reż. {featuredMovie.director}</span>
        </div>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl line-clamp-3 mb-6 leading-relaxed">
          {featuredMovie.detailedSynopsis}
        </p>

        <div className="flex flex-wrap items-center gap-2 mb-8">
          {featuredMovie.genres.map((genre) => (
            <MovieBadge key={genre} label={genre} variant="genre" />
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Link
            href={`/movies/${featuredMovie.identifier}`}
            className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/25 transition-all hover:bg-amber-400 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <Info className="w-4 h-4" />
            <span>Szczegóły filmu</span>
          </Link>

          <a
            href={featuredMovie.trailerYouTubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-6 py-3.5 text-sm font-medium text-slate-200 backdrop-blur-md transition-all hover:bg-slate-800 hover:text-white hover:border-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-500"
          >
            <Play className="w-4 h-4 fill-slate-200 text-slate-200" />
            <span>Oficjalny Zwiastun</span>
          </a>
        </div>
      </div>
    </section>
  );
}
