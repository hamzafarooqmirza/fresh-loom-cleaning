"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { navLinks, services, siteInfo } from "@/lib/data";
import TopBar from "./TopBar";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream shadow-sm">
      <TopBar />
      <div className="container-page flex items-center justify-between py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt={siteInfo.name}
            width={215}
            height={57}
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            link.label === "Services" ? (
              <div key={link.label} className="relative group">
                <a
                  href={link.href}
                  className="flex items-center gap-1 font-heading font-semibold text-sm uppercase tracking-wide text-navy-dark hover:text-accent transition-colors py-2"
                >
                  {link.label} <ChevronDown size={14} />
                </a>
                <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-xl rounded-lg py-2 min-w-[220px] border border-black/5">
                  {services.map((s) => (
                    <a
                      key={s.slug}
                      href="#services"
                      className="block px-4 py-2 text-sm text-navy-dark hover:bg-light hover:text-accent"
                    >
                      {s.title}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className={`font-heading font-semibold text-sm uppercase tracking-wide transition-colors ${
                  link.label === "Home" ? "text-accent" : "text-navy-dark hover:text-accent"
                }`}
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <button aria-label="Search" className="text-navy hover:text-accent transition-colors">
            <Search size={20} />
          </button>
          <a href="#contact" className="btn-navy">
            Get a Quote
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden text-navy-dark"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-black/5 bg-cream">
          <nav className="container-page flex flex-col py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`py-2 font-heading font-semibold text-sm uppercase tracking-wide ${
                  link.label === "Home" ? "text-accent" : "text-navy-dark hover:text-accent"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-navy mt-2 justify-center">
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
