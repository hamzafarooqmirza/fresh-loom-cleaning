import Link from "next/link";
import { Clock, ArrowUpRight } from "lucide-react";
import PhotoHero from "@/components/PhotoHero";
import CtaBanner from "@/components/CtaBanner";
import Reveal from "@/components/Reveal";
import { siteInfo } from "@/lib/data";

export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "h3"; text: string };

export type LegalSection = {
  id: string;
  heading: string;
  blocks: LegalBlock[];
};

export type LegalContent = {
  title: string;
  breadcrumbLabel: string;
  heroImage: string;
  lastUpdated: string;
  intro: string[];
  sections: LegalSection[];
};

function Block({ block }: { block: LegalBlock }) {
  if (block.type === "h3") {
    return <h3 className="text-lg font-bold text-navy-dark mt-6 mb-2">{block.text}</h3>;
  }
  if (block.type === "ul") {
    return (
      <ul className="list-disc pl-5 space-y-2 text-slate-600 mb-4">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  return <p className="text-slate-600 mb-4 leading-relaxed">{block.text}</p>;
}

export default function LegalPage({ content }: { content: LegalContent }) {
  return (
    <>
      <PhotoHero
        title={content.title}
        breadcrumbLabel={content.breadcrumbLabel}
        image={content.heroImage}
      />

      <section className="py-16 lg:py-24">
        <div className="container-page grid lg:grid-cols-[260px_1fr] gap-12">
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="eyebrow mb-4">
                <Clock size={16} /> Last Updated
              </p>
              <p className="text-sm font-semibold text-navy-dark mb-8">{content.lastUpdated}</p>

              <p className="font-heading font-bold text-navy-dark text-sm uppercase tracking-wide mb-3">
                On This Page
              </p>
              <nav className="flex flex-col gap-2">
                {content.sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="text-sm text-slate-600 hover:text-accent transition-colors"
                  >
                    {section.heading}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="max-w-3xl">
            <div className="lg:hidden inline-flex items-center gap-2 text-sm font-semibold text-navy-dark bg-light rounded-full px-4 py-2 mb-8">
              <Clock size={16} className="text-accent" /> Last Updated: {content.lastUpdated}
            </div>

            <Reveal className="space-y-4 mb-10">
              {content.intro.map((p) => (
                <p key={p} className="text-slate-600 leading-relaxed text-lg">
                  {p}
                </p>
              ))}
            </Reveal>

            {content.sections.map((section) => (
              <div key={section.id} id={section.id} className="mb-12 scroll-mt-28">
                <Reveal>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-navy-dark mb-4">
                    {section.heading}
                  </h2>
                  {section.blocks.map((block, i) => (
                    <Block key={i} block={block} />
                  ))}
                </Reveal>
              </div>
            ))}

            <div className="rounded-2xl bg-light border border-black/5 p-6 sm:p-8 mt-4">
              <p className="text-slate-600 mb-1">
                Questions about this page? Get in touch with {siteInfo.name}:
              </p>
              <p className="font-heading font-bold text-navy-dark">
                <Link href={`mailto:${siteInfo.email}`} className="hover:text-accent transition-colors">
                  {siteInfo.email}
                </Link>{" "}
                <span className="text-slate-400 mx-1">|</span>{" "}
                <a href={siteInfo.phoneHref} className="hover:text-accent transition-colors">
                  {siteInfo.phone}
                </a>
              </p>
              <p className="text-sm text-slate-500 mt-2">{siteInfo.address}</p>
              <Link href="/contact-us" className="inline-flex items-center gap-1 text-sm font-heading font-semibold uppercase tracking-wide text-accent hover:text-accent-dark transition-colors mt-4">
                Contact Us <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
