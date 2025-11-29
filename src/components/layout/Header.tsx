"use client";

import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "About Us", href: "/about" },
    { name: "Our Mission", href: "/mission" },
    { name: "Programs", href: "/programs" },
    { name: "How to Help", href: "/help" },
    { name: "Partner With Us", href: "/partner" },
    { name: "Transparency", href: "/transparency" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-display font-bold text-primary-700">
            Help Westmoreland
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-6">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/donate"
            className="bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-2.5 rounded-lg transition"
          >
            Donate Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <ul className="container mx-auto px-4 py-4 space-y-3">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="block py-2 text-gray-700 hover:text-primary-600 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/donate"
                className="block text-center bg-accent-500 text-white font-semibold px-6 py-3 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Donate Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
