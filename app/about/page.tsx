import React from "react";
import Link from "next/link";
import {
  Film,
  User,
  BookOpen,
  CheckCircle2,
  Code2,
  Layers,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "O Projekcie | Kinoteka - Movie Library",
  description:
    "Informacje o projekcie Movie Library, autorze, architekturze SOLID oraz zastosowanych technologiach.",
};

export default function AboutPage() {
  const implementedFeatures = [
    {
      title: "Strona główna (Home)",
      description:
        "Kinowy Hero Banner z wyróżnionym hitem, statystyki biblioteki, lista polecanych tytułów oraz sekcja korzyści.",
    },
    {
      title: "Nawigacja SPA (Single Page Application)",
      description:
        "Błyskawiczne przełączanie widoków bez przeładowywania strony w oparciu o Next.js App Router.",
    },
    {
      title: "Katalog Filmów z wyszukiwaniem i filtrami",
      description:
        "Wyszukiwarka tekstowa na żywo, filtrowanie po gatunkach oraz wielowariantowe sortowanie (ocena, rok, tytuł, czas trwania).",
    },
    {
      title: "Kinowy widok szczegółowy filmu (/movies/[id])",
      description:
        "Panoramiczny backdrop, plakat, metadane, oceny, pełny zarys fabuły, lista obsady oraz odnośnik do zwiastuna.",
    },
    {
      title: "Pełna responsywność (RWD)",
      description:
        "Adaptacyjny interfejs dostosowany do smartfonów (menu hamburger), tabletów i monitorów desktopowych.",
    },
    {
      title: "Architektura SOLID & Podejście Building Blocks",
      description:
        "Separacja logiki biznesowej od komponentów UI, małe interfejsy, inwersja zależności i pokrycie testami Vitest.",
    },
  ];

  const technologies = [
    { name: "Next.js 15", category: "Framework SSR & App Router" },
    { name: "React 19", category: "Biblioteka interfejsów użytkownika" },
    { name: "TypeScript 5", category: "Statyczne typowanie kodu" },
    { name: "Tailwind CSS v4", category: "Nowoczesne stylowanie atomowe" },
    { name: "Vitest", category: "Szybki runner testów jednostkowych" },
    { name: "Lucide React", category: "Zestaw kinowych ikon wektorowych" },
  ];

  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex flex-col gap-12">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider">
          <BookOpen className="w-4 h-4" />
          <span>Informacje o projekcie</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
          Kinoteka – Movie Library
        </h1>
        <p className="text-sm sm:text-base text-slate-400 max-w-3xl leading-relaxed">
          Aplikacja internetowa typu Single Page Application (SPA) zrealizowana
          w ramach przedmiotu Programowanie i testowanie aplikacji webowych.
        </p>
      </div>

      {/* Author and Project Details Card */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-md">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20">
              <User className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Dane Studenta</h2>
              <p className="text-xs text-slate-400">Autor i twórca projektu</p>
            </div>
          </div>

          <dl className="flex flex-col gap-4 text-sm">
            <div className="flex justify-between border-b border-slate-800/80 pb-3">
              <dt className="text-slate-400">Imię i nazwisko</dt>
              <dd className="font-semibold text-slate-200">Oscar Hanke</dd>
            </div>
            <div className="flex justify-between border-b border-slate-800/80 pb-3">
              <dt className="text-slate-400">Numer albumu</dt>
              <dd className="font-semibold text-amber-400">89607</dd>
            </div>
            <div className="flex justify-between border-b border-slate-800/80 pb-3">
              <dt className="text-slate-400">Przypisany temat</dt>
              <dd className="font-semibold text-slate-200">
                1. Movie Library – biblioteka filmów
              </dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-400">Status wdrożenia</dt>
              <dd className="font-semibold text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                Ukończony & Przetestowany
              </dd>
            </div>
          </dl>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-md">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/30">
              <Code2 className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Stos Technologiczny</h2>
              <p className="text-xs text-slate-400">Wykorzystane narzędzia</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {technologies.map((technology) => (
              <div
                key={technology.name}
                className="flex flex-col rounded-xl border border-slate-800/80 bg-slate-950/60 p-3"
              >
                <span className="font-semibold text-sm text-slate-200">
                  {technology.name}
                </span>
                <span className="text-[11px] text-slate-400">
                  {technology.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements fulfillment section */}
      <section className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 backdrop-blur-md">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">
              Realizacja Wymagań Projektowych
            </h2>
            <p className="text-xs text-slate-400">
              Zgodność z instrukcją zadania laboratoryjnego
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {implementedFeatures.map((feature) => (
            <div
              key={feature.title}
              className="flex items-start gap-3 rounded-2xl border border-slate-800/80 bg-slate-950/60 p-4"
            >
              <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-sm text-slate-100 mb-1">
                  {feature.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-6">
        <div>
          <h3 className="text-base font-bold text-amber-300 mb-1">
            Chcesz zobaczyć katalog filmów w akcji?
          </h3>
          <p className="text-xs text-slate-300">
            Przejdź do biblioteki i przetestuj filtrowanie po gatunkach oraz
            wyszukiwarkę na żywo.
          </p>
        </div>

        <Link
          href="/movies"
          className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-2.5 text-xs font-bold text-slate-950 shadow-md transition-all hover:bg-amber-400 shrink-0"
        >
          <span>Otwórz Katalog</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </main>
  );
}
