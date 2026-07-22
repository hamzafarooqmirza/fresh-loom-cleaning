"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { navLinks, services, siteInfo } from "@/lib/data";
import TopBar from "./TopBar";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
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
                  className="flex items-center gap-1 font-medium text-navy-dark hover:text-accent-dark transition-colors py-2"
                >
                  {link.label} <ChevronDown size={14} />
                </a>
                <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-xl rounded-lg py-2 min-w-[220px] border border-black/5">
                  {services.map((s) => (
                    <a
                      key={s.slug}
                      href="#services"
                      className="block px-4 py-2 text-sm text-navy-dark hover:bg-light hover:text-accent-dark"
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
                className="font-medium text-navy-dark hover:text-accent-dark transition-colors"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        <a href="#contact" className="hidden lg:inline-flex btn-accent">
          Get a Quote
        </a>

        <button
          aria-label="Toggle menu"
          className="lg:hidden text-navy-dark"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-black/5 bg-white">
          <nav className="container-page flex flex-col py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2 font-medium text-navy-dark hover:text-accent-dark"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-accent mt-2 justify-center">
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
