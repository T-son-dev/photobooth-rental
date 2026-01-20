"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-purple-600 rounded-xl flex items-center justify-center">
              <svg
                className="w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
                SnapBooth
              </span>
              <p className="text-xs text-gray-500">Premium Photo Experience</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#inicio"
              className="text-gray-700 hover:text-rose-500 transition-colors font-medium"
            >
              Inicio
            </Link>
            <Link
              href="#equipos"
              className="text-gray-700 hover:text-rose-500 transition-colors font-medium"
            >
              Equipos
            </Link>
            <Link
              href="#galeria"
              className="text-gray-700 hover:text-rose-500 transition-colors font-medium"
            >
              Galería
            </Link>
            <Link
              href="#precios"
              className="text-gray-700 hover:text-rose-500 transition-colors font-medium"
            >
              Precios
            </Link>
            <Link
              href="#contacto"
              className="text-gray-700 hover:text-rose-500 transition-colors font-medium"
            >
              Contacto
            </Link>
            <Link
              href="#reservar"
              className="btn-primary px-6 py-3 rounded-full text-white font-semibold"
            >
              Reservar Ahora
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <Link
                href="#inicio"
                className="text-gray-700 hover:text-rose-500 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                href="#equipos"
                className="text-gray-700 hover:text-rose-500 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Equipos
              </Link>
              <Link
                href="#galeria"
                className="text-gray-700 hover:text-rose-500 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Galería
              </Link>
              <Link
                href="#precios"
                className="text-gray-700 hover:text-rose-500 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Precios
              </Link>
              <Link
                href="#contacto"
                className="text-gray-700 hover:text-rose-500 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
              <Link
                href="#reservar"
                className="btn-primary px-6 py-3 rounded-full text-white font-semibold text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Reservar Ahora
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
