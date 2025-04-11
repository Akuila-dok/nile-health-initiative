// components/Navbar.tsx
"use client"
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white opacity-50 shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <Link href="/">
        <span className="text-2xl font-bold text-nile-blue" style={{ fontFamily: "'Caveat', cursive" }}>
            NILE HEALTH INITIATIVES
        </span>
      </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-nile-blue">Home</Link>
          <Link href="#services" className="hover:text-nile-blue">Activities</Link>
          <Link href="#contact" className="hover:text-nile-blue">About Us</Link>
          <Link href="#contact" className="hover:text-nile-blue">Contact</Link>
          <Link href="#donate">
            <button className="bg-gold text-black pr-2 pl-2 rounded-xl cursor-pointer text-sm font-medium hover:bg-yellow-400 transition">
              Donate
            </button>
          </Link>
        </div>
        <button
          className="md:hidden cursor-pointer block"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-4">
          <Link href="#mission" className="block text-gray-700 hover:text-nile-blue">Mission</Link>
          <Link href="#services" className="block text-gray-700 hover:text-nile-blue">What We Do</Link>
          <Link href="#contact" className="block text-gray-700 hover:text-nile-blue">Contact</Link>
          <Link href="#donate">
            <button className="w-full bg-gold text-black px-4 py-2 rounded-full font-medium">
              Donate
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}
