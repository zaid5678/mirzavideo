"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-paper border-b border-ink"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-12 lg:px-20 h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/logo.jpeg"
              alt="Mirzavideo"
              width={120}
              height={40}
              className="h-8 md:h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/gallery"
              className={`nav-link font-sans text-xs tracking-widest uppercase text-ink ${
                isActive("/gallery") ? "nav-link-active" : ""
              }`}
            >
              Work
            </Link>
            <Link
              href="/reviews"
              className={`nav-link font-sans text-xs tracking-widest uppercase text-ink ${
                isActive("/reviews") ? "nav-link-active" : ""
              }`}
            >
              Reviews
            </Link>
            <Link
              href="/#about"
              className="nav-link font-sans text-xs tracking-widest uppercase text-ink"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="font-sans text-xs tracking-widest uppercase bg-ink text-paper px-5 py-2.5 transition-all duration-200 hover:bg-paper hover:text-ink border border-ink ml-4"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[6px] p-2"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-6 h-px bg-ink" />
            <span className="block w-6 h-px bg-ink" />
            <span className="block w-6 h-px bg-ink" />
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
