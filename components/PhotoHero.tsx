import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PhotoHero({
  title,
  image,
  breadcrumbLabel,
}: {
  title: string;
  image: string;
  breadcrumbLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-dark">
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover opacity-40"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/80 to-transparent" />
      <div className="absolute -right-16 -bottom-24 w-72 h-72 rounded-full bg-accent/80 -z-0" />

      <div className="container-page relative py-16 lg:py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">{title}</h1>
        <div className="flex items-center gap-2 text-sm font-medium text-white/70">
          <Link href="/" className="hover:text-accent transition-colors uppercase">
            Home
          </Link>
          <ChevronRight size={14} />
          <span className="text-accent uppercase">{breadcrumbLabel ?? title}</span>
        </div>
      </div>
    </section>
  );
}
