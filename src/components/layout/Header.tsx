"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const MOBILE_MENU_ID = "main-nav-menu";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMobileMenuOpen(false), []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    if (mobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen, closeMenu]);

  const navigation = [
    { name: "About Us", href: "/about" },
    { name: "Our Mission", href: "/mission" },
    { name: "Programs", href: "/programs" },
    { name: "How to Help", href: "/help" },
    { name: "Partner With Us", href: "/partner" },
    { name: "Transparency", href: "/transparency" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav
        className="container mx-auto px-4 py-4 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-display font-bold text-primary-700 hover:text-primary-600 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 rounded"
        >
          Help Westmoreland
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-6" role="list">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 rounded px-1 py-0.5"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA - link styled as button for valid HTML */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/donate"
            className="bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-2.5 rounded-lg transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2"
          >
            Donate Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden p-2 -m-2 text-gray-700 hover:text-primary-600 rounded-lg transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls={MOBILE_MENU_ID}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <XMarkIcon className="h-6 w-6" aria-hidden />
          ) : (
            <Bars3Icon className="h-6 w-6" aria-hidden />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        id={MOBILE_MENU_ID}
        className={`lg:hidden bg-white border-t ${!mobileMenuOpen ? "hidden" : ""}`}
        aria-hidden={!mobileMenuOpen}
        role="dialog"
        aria-label="Mobile navigation menu"
      >
        <ul className="container mx-auto px-4 py-4 space-y-1" role="list">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="block py-3 px-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 font-medium rounded-lg transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-inset"
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li className="pt-2 mt-2 border-t border-gray-200">
            <Link
              href="/donate"
              className="block text-center bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3 rounded-lg transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2"
              onClick={closeMenu}
            >
              Donate Now
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
