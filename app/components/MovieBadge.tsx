import React from "react";

interface MovieBadgeProperties {
  readonly label: string;
  readonly variant?: "genre" | "rating" | "year" | "age";
}

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
