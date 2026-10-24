"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Film, Menu, X, Clapperboard, Compass, Info } from "lucide-react";

export function NavigationBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const currentPathname = usePathname();

  const navigationLinks = [
    {
      label: "Strona Główna",
      path: "/",
      icon: Clapperboard,
    },
    {
      label: "Katalog Filmów",
      path: "/movies",
      icon: Compass,
    },
    {
      label: "O Projekcie",
      path: "/about",
      icon: Info,
    },
  ];

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen((previousState) => !previousState);
  };

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-md shadow-lg shadow-black/40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3.5">
        {/* Brand Logo */}
        <Link
          href="/"
          onClick={handleCloseMobileMenu}
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-600 to-amber-400 text-slate-950 shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
            <Film className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors">
              KINOTEKA
            </span>
            <span className="text-[10px] font-medium tracking-widest text-slate-400 uppercase">
              Movie Library SPA
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5" aria-label="Nawigacja główna">
          {navigationLinks.map((link) => {
            const isActive =
              link.path === "/"
                ? currentPathname === "/"
                : currentPathname.startsWith(link.path);
            const IconComponent = link.icon;

            return (
              <Link
                key={link.path}
                href={link.path}
                className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-all ${
                  isActive
                    ? "bg-amber-500/10 text-amber-400 border border-amber-500/20 shadow-sm"
                    : "text-slate-300 hover:bg-slate-900 hover:text-white"
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger Menu Toggle Button */}
        <div className="flex items-center md:hidden">
          <button
            type="button"
            onClick={handleToggleMobileMenu}
            className="rounded-xl border border-slate-800 bg-slate-900/80 p-2 text-slate-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            aria-label={isMobileMenuOpen ? "Zamknij menu" : "Otwórz menu"}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800/80 bg-slate-950/95 px-4 pt-3 pb-5 backdrop-blur-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-1.5" aria-label="Menu mobilne">
            {navigationLinks.map((link) => {
              const isActive =
                link.path === "/"
                  ? currentPathname === "/"
                  : currentPathname.startsWith(link.path);
              const IconComponent = link.icon;

              return (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={handleCloseMobileMenu}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-amber-500/15 text-amber-400 border border-amber-500/20"
                      : "text-slate-300 hover:bg-slate-900 hover:text-white"
                  }`}
                >
                  <IconComponent className="w-5 h-5 text-amber-500" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
