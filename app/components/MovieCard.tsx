import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Star, Clock, Calendar } from "lucide-react";
import { IMovie } from "../contracts/IMovie";
import { MovieServiceFactory } from "../services/MovieServiceFactory";
import { MovieBadge } from "./MovieBadge";

/**
 * Properties for the MovieCard presentation component.
 */
interface MovieCardProperties {
  /**
   * The movie domain entity to display.
   */
  readonly movie: IMovie;
}

/**
 * Interactive preview card displaying a movie poster, title, rating, runtime, and genre tags.
 * Clicking navigates to the detailed movie view.
 *
 * @param properties - Component properties.
 * @returns Rendered movie card link element.
 */
export function MovieCard({ movie }: MovieCardProperties) {
  const movieFormatterService = MovieServiceFactory.getMovieFormatterService();
  const formattedDuration = movieFormatterService.formatDuration(
    movie.durationInMinutes
  );
  const formattedRating = movieFormatterService.formatRating(movie.viewerRating);

  return (
    <Link
      href={`/movies/${movie.identifier}`}
      className="group block h-full focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-2xl"
    >
      <article className="flex flex-col h-full overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/60 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-500/10">
        <div className="relative aspect-[2/3] w-full overflow-hidden bg-slate-950">
          <Image
            src={movie.posterImageUrl}
            alt={`Poster for ${movie.title}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

          {/* Top Rating Badge */}
          <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-slate-950/80 px-2.5 py-1 text-xs font-semibold text-amber-400 backdrop-blur-md border border-amber-500/30 shadow-md">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{formattedRating}</span>
          </div>

          {/* Age Rating Badge */}
          <div className="absolute top-3 left-3">
            <MovieBadge label={movie.ageRating} variant="age" />
          </div>

          {/* Duration Badge Bottom Left */}
          <div className="absolute bottom-3 left-3 flex items-center gap-1 rounded-md bg-slate-950/80 px-2 py-0.5 text-xs text-slate-300 backdrop-blur-md border border-slate-800">
            <Clock className="w-3 h-3 text-slate-400" />
            <span>{formattedDuration}</span>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-500" />
              {movie.releaseYear}
            </span>
            <span>•</span>
            <span className="truncate">{movie.director}</span>
          </div>

          <h3 className="font-semibold text-lg text-slate-100 group-hover:text-amber-400 transition-colors line-clamp-1">
            {movie.title}
          </h3>

          <p className="text-xs text-slate-400 italic mb-3">
            {movie.originalTitle}
          </p>

          <p className="text-sm text-slate-300 line-clamp-2 mb-4 flex-1">
            {movie.shortDescription}
          </p>

          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
            {movie.genres.slice(0, 3).map((genre) => (
              <MovieBadge key={genre} label={genre} variant="genre" />
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
