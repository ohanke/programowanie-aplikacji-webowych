import React from "react";
import Link from "next/link";
import { Film, Heart, Code2 } from "lucide-react";

export function ApplicationFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-slate-800/80 bg-slate-950/90 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center border-b border-slate-800/80 pb-8">
          {/* Column 1: Brand Info */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500 text-slate-950">
                <Film className="w-4 h-4" />
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                KINOTEKA
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm">
              Nowoczesna aplikacja Single Page Application do przeglądania i
              wyszukiwania filmów kinowych, stworzona w oparciu o architekturę SOLID.
            </p>
          </div>

          {/* Column 2: Author and University Details */}
          <div className="flex flex-col gap-1 text-xs">
            <span className="font-semibold text-slate-200 uppercase tracking-wider text-[11px]">
              Projekt Akademicki
            </span>
            <p className="text-slate-400">
              Autor: <strong className="text-slate-200">Oscar Hanke</strong>
            </p>
            <p className="text-slate-400">
              Nr albumu: <strong className="text-slate-200">89607</strong>
            </p>
            <p className="text-slate-400">
              Temat 1: <strong className="text-amber-400">Movie Library (Biblioteka filmów)</strong>
            </p>
          </div>

          {/* Column 3: Navigation and Stacks */}
          <div className="flex flex-col gap-2 text-xs md:items-end">
            <div className="flex items-center gap-2 text-slate-400">
              <Code2 className="w-4 h-4 text-amber-500" />
              <span>Next.js 15 • React 19 • TypeScript • Tailwind v4</span>
            </div>
            <div className="flex gap-4">
              <Link href="/" className="hover:text-amber-400 transition-colors">
                Strona Główna
              </Link>
              <Link href="/movies" className="hover:text-amber-400 transition-colors">
                Katalog
              </Link>
              <Link href="/about" className="hover:text-amber-400 transition-colors">
                O Projekcie
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs text-slate-500">
          <p>© {currentYear} Kinoteka. Wszelkie prawa zastrzeżone.</p>
          <p className="flex items-center gap-1">
            Zrealizowano z <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> w ramach zajęć programowania aplikacji webowych.
          </p>
        </div>
      </div>
    </footer>
  );
}
