'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef } from 'react';

const projectSubLinks = [
  { label: 'Commercial Projects', href: '/projects/commercial' },
  { label: 'Hospitality Projects', href: '/projects/hospitality' },
  { label: 'Residential Projects', href: '/projects/residential' },
];

const productSubLinks = [
  { label: 'Wardrobes', href: '/products/wardrobes' },
  { label: 'Kitchens', href: '/products/kitchens' },
  { label: 'Libraries', href: '/products/libraries' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const productsDropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function openDropdown() {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    setDropdownOpen(true);
  }

  function closeDropdown() {
    dropdownTimer.current = setTimeout(() => setDropdownOpen(false), 140);
  }

  function openProductsDropdown() {
    if (productsDropdownTimer.current) clearTimeout(productsDropdownTimer.current);
    setProductsDropdownOpen(true);
  }

  function closeProductsDropdown() {
    productsDropdownTimer.current = setTimeout(() => setProductsDropdownOpen(false), 140);
  }

  return (
    <header className="nav">
      {/* Logo */}
      <Link href="/" className="flex items-center shrink-0">
        <Image
          src="/images/NewLogo.jpg"
          alt="The M Concept"
          width={64}
          height={64}
          className="rounded-sm object-contain"
          priority
        />
      </Link>

      {/* ── Desktop nav ───────────────────────────────────────────────────── */}
      <nav className="hidden md:flex items-center gap-10">
        <Link href="/company" className="nav-link">Company</Link>

        {/* Projects with dropdown */}
        <div
          className="relative"
          onMouseEnter={openDropdown}
          onMouseLeave={closeDropdown}
        >
          <Link
            href="/projects"
            className="nav-link flex items-center gap-1.5"
          >
            Projects
            <svg
              width="9"
              height="9"
              viewBox="0 0 9 9"
              fill="none"
              aria-hidden="true"
              className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
            >
              <path d="M1.5 3L4.5 6L7.5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          {/* Dropdown panel */}
          <div
            className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50 transition-all duration-200 ${
              dropdownOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-1 pointer-events-none'
            }`}
          >
            <div
              className="bg-background border border-border min-w-[210px]"
              style={{ boxShadow: '0 8px 40px rgba(44,29,16,0.13)' }}
            >
              {projectSubLinks.map((sub) => (
                <Link
                  key={sub.href}
                  href={sub.href}
                  className="flex items-center gap-3 px-5 py-3.5 font-label text-[0.7rem] uppercase tracking-[0.2em] text-stone-600 hover:text-coral-500 hover:bg-wood-50 transition-colors duration-150 group/item"
                  onClick={() => setDropdownOpen(false)}
                >
                  <span
                    className="h-px w-0 group-hover/item:w-4 shrink-0 transition-all duration-300"
                    style={{ background: '#BF9468' }}
                  />
                  {sub.label}
                </Link>
              ))}
              <div className="border-t border-border">
                <Link
                  href="/projects"
                  className="flex items-center px-5 py-3 font-label text-[0.65rem] uppercase tracking-[0.2em] text-stone-400 hover:text-stone-600 transition-colors duration-150"
                  onClick={() => setDropdownOpen(false)}
                >
                  All Projects
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Products with dropdown */}
        <div
          className="relative"
          onMouseEnter={openProductsDropdown}
          onMouseLeave={closeProductsDropdown}
        >
          <Link
            href="/products"
            className="nav-link flex items-center gap-1.5"
          >
            Products
            <svg
              width="9"
              height="9"
              viewBox="0 0 9 9"
              fill="none"
              aria-hidden="true"
              className={`transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180' : ''}`}
            >
              <path d="M1.5 3L4.5 6L7.5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          {/* Dropdown panel */}
          <div
            className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50 transition-all duration-200 ${
              productsDropdownOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-1 pointer-events-none'
            }`}
          >
            <div
              className="bg-background border border-border min-w-[180px]"
              style={{ boxShadow: '0 8px 40px rgba(44,29,16,0.13)' }}
            >
              {productSubLinks.map((sub) => (
                <Link
                  key={sub.href}
                  href={sub.href}
                  className="flex items-center gap-3 px-5 py-3.5 font-label text-[0.7rem] uppercase tracking-[0.2em] text-stone-600 hover:text-coral-500 hover:bg-wood-50 transition-colors duration-150 group/item"
                  onClick={() => setProductsDropdownOpen(false)}
                >
                  <span
                    className="h-px w-0 group-hover/item:w-4 shrink-0 transition-all duration-300"
                    style={{ background: '#BF9468' }}
                  />
                  {sub.label}
                </Link>
              ))}
              <div className="border-t border-border">
                <Link
                  href="/products"
                  className="flex items-center px-5 py-3 font-label text-[0.65rem] uppercase tracking-[0.2em] text-stone-400 hover:text-stone-600 transition-colors duration-150"
                  onClick={() => setProductsDropdownOpen(false)}
                >
                  All Products
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Link href="/contact" className="nav-link">Contact</Link>
        <Link href="/materia" className="nav-link">Materia</Link>
      </nav>

      {/* Desktop CTA */}
      <div className="hidden md:flex items-center gap-4">
        <Link href="/contact" className="btn-outline btn-sm">
          Start a Project
        </Link>
      </div>

      {/* ── Mobile hamburger ──────────────────────────────────────────────── */}
      <button
        className="md:hidden p-2 rounded text-stone-700 hover:bg-wood-100 transition-colors"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen((o) => !o)}
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
          {menuOpen ? (
            <>
              <line x1="4" y1="4" x2="18" y2="18" />
              <line x1="18" y1="4" x2="4" y2="18" />
            </>
          ) : (
            <>
              <line x1="3" y1="7"  x2="19" y2="7"  />
              <line x1="3" y1="11" x2="19" y2="11" />
              <line x1="3" y1="15" x2="19" y2="15" />
            </>
          )}
        </svg>
      </button>

      {/* ── Mobile drawer ─────────────────────────────────────────────────── */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-border px-6 py-8 flex flex-col gap-6 md:hidden">
          <Link
            href="/company"
            className="font-label text-[0.875rem] text-stone-700 uppercase tracking-widest hover:text-coral-500 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Company
          </Link>

          {/* Projects accordion */}
          <div>
            <button
              className="flex items-center justify-between w-full font-label text-[0.875rem] text-stone-700 uppercase tracking-widest hover:text-coral-500 transition-colors"
              onClick={() => setMobileProjectsOpen((o) => !o)}
            >
              Projects
              <svg
                width="9"
                height="9"
                viewBox="0 0 9 9"
                fill="none"
                aria-hidden="true"
                className={`transition-transform duration-200 ${mobileProjectsOpen ? 'rotate-180' : ''}`}
              >
                <path d="M1.5 3L4.5 6L7.5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {mobileProjectsOpen && (
              <div className="mt-4 ml-1 flex flex-col gap-4 border-l-2 pl-5" style={{ borderColor: 'rgba(166,124,82,0.25)' }}>
                {projectSubLinks.map((sub) => (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    className="font-label text-[0.75rem] text-stone-500 uppercase tracking-widest hover:text-coral-500 transition-colors"
                    onClick={() => { setMenuOpen(false); setMobileProjectsOpen(false); }}
                  >
                    {sub.label}
                  </Link>
                ))}
                <Link
                  href="/projects"
                  className="font-label text-[0.7rem] text-stone-400 uppercase tracking-widest hover:text-stone-600 transition-colors"
                  onClick={() => { setMenuOpen(false); setMobileProjectsOpen(false); }}
                >
                  All Projects
                </Link>
              </div>
            )}
          </div>

          {/* Products accordion */}
          <div>
            <button
              className="flex items-center justify-between w-full font-label text-[0.875rem] text-stone-700 uppercase tracking-widest hover:text-coral-500 transition-colors"
              onClick={() => setMobileProductsOpen((o) => !o)}
            >
              Products
              <svg
                width="9"
                height="9"
                viewBox="0 0 9 9"
                fill="none"
                aria-hidden="true"
                className={`transition-transform duration-200 ${mobileProductsOpen ? 'rotate-180' : ''}`}
              >
                <path d="M1.5 3L4.5 6L7.5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {mobileProductsOpen && (
              <div className="mt-4 ml-1 flex flex-col gap-4 border-l-2 pl-5" style={{ borderColor: 'rgba(166,124,82,0.25)' }}>
                {productSubLinks.map((sub) => (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    className="font-label text-[0.75rem] text-stone-500 uppercase tracking-widest hover:text-coral-500 transition-colors"
                    onClick={() => { setMenuOpen(false); setMobileProductsOpen(false); }}
                  >
                    {sub.label}
                  </Link>
                ))}
                <Link
                  href="/products"
                  className="font-label text-[0.7rem] text-stone-400 uppercase tracking-widest hover:text-stone-600 transition-colors"
                  onClick={() => { setMenuOpen(false); setMobileProductsOpen(false); }}
                >
                  All Products
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className="font-label text-[0.875rem] text-stone-700 uppercase tracking-widest hover:text-coral-500 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/materia"
            className="font-label text-[0.875rem] text-stone-700 uppercase tracking-widest hover:text-coral-500 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Materia
          </Link>

          <div className="pt-4 border-t border-border">
            <Link
              href="/contact"
              className="btn-primary btn-sm w-full justify-center"
              onClick={() => setMenuOpen(false)}
            >
              Start a Project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
