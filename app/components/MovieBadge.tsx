import React from "react";

/**
 * Properties for the MovieBadge presentation component.
 */
interface MovieBadgeProperties {
  /**
   * Text label displayed inside the badge.
   */
  readonly label: string;

  /**
   * Visual variant altering badge background and text accent color.
   */
  readonly variant?: "genre" | "rating" | "year" | "age";
}

/**
 * Compact pill badge component used across cards and detail pages for genres, ratings, and years.
 *
 * @param properties - Component properties.
 * @returns Rendered badge element.
 */
export function MovieBadge({
  label,
  variant = "genre",
}: MovieBadgeProperties) {
  let styleClasses =
    "inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium tracking-wide";

  switch (variant) {
    case "rating":
      styleClasses += " bg-amber-500/20 text-amber-400 border border-amber-500/30";
      break;
    case "age":
      styleClasses += " bg-rose-500/20 text-rose-300 border border-rose-500/30";
      break;
    case "year":
      styleClasses += " bg-slate-800 text-slate-300 border border-slate-700";
      break;
    case "genre":
    default:
      styleClasses +=
        " bg-slate-800/90 text-slate-200 border border-slate-700/80 hover:bg-slate-700 transition-colors";
      break;
  }

  return <span className={styleClasses}>{label}</span>;
}
