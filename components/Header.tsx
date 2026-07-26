"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { allServices, navLinks, siteInfo } from "@/lib/data";
import TopBar from "./TopBar";
import ServicesMegaMenu from "./ServicesMegaMenu";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesHover, setServicesHover] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return href.startsWith("/") && !href.includes("#") && pathname === href;
  }

  return (
    <header className="sticky top-0 z-50 bg-cream shadow-sm">
      <TopBar />
      <div className="container-page flex items-center justify-between py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt={siteInfo.name}
            width={215}
            height={60}
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            link.label === "Services" ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setServicesHover(true)}
                onMouseLeave={() => setServicesHover(false)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 font-heading font-semibold text-sm uppercase tracking-wide text-navy-dark hover:text-accent transition-colors py-2"
                >
                  {link.label} <ChevronDown size={14} />
                </Link>
                <AnimatePresence>
                  {servicesHover && <ServicesMegaMenu />}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={`font-heading font-semibold text-sm uppercase tracking-wide transition-colors ${
                  isActive(link.href) ? "text-accent" : "text-navy-dark hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <button aria-label="Search" className="text-navy hover:text-accent transition-colors">
            <Search size={20} />
          </button>
          <Link href="/contact-us" className="btn-navy">
            Get a Quote
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden text-navy-dark"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="lg:hidden border-t border-black/5 bg-cream overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <nav className="container-page flex flex-col py-4 gap-1">
              {navLinks.map((link) =>
                link.label === "Services" ? (
                  <div key={link.label}>
                    <button
                      onClick={() => setMobileServicesOpen((v) => !v)}
                      className={`w-full flex items-center justify-between py-2 font-heading font-semibold text-sm uppercase tracking-wide ${
                        isActive(link.href) ? "text-accent" : "text-navy-dark"
                      }`}
                    >
                      {link.label}
                      <motion.span
                        animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown size={16} />
                      </motion.span>
                    </button>
                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden pl-3"
                        >
                          {allServices.map((s) => (
                            <Link
                              key={s.slug}
                              href={`/services/${s.slug}`}
                              onClick={() => setOpen(false)}
                              className="block py-2 text-sm text-navy-dark hover:text-accent"
                            >
                              {s.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`py-2 font-heading font-semibold text-sm uppercase tracking-wide ${
                      isActive(link.href) ? "text-accent" : "text-navy-dark hover:text-accent"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Link href="/contact-us" onClick={() => setOpen(false)} className="btn-navy mt-2 justify-center">
                Get a Quote
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
