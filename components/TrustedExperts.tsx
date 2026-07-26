import { ArrowUpRight, SprayCan } from "lucide-react";
import { aboutPage, siteInfo } from "@/lib/data";
import Reveal from "./Reveal";

export default function TrustedExperts() {
  return (
    <section className="py-16">
      <Reveal className="container-page max-w-3xl">
        <span className="eyebrow mb-4">
          <SprayCan size={16} /> About us
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-6">
          Trusted Experts In Professional Cleaning Services
        </h2>
        {aboutPage.intro.map((p) => (
          <p key={p} className="text-slate-600 mb-4">
            {p}
          </p>
        ))}
        <a href={siteInfo.phoneHref} className="btn-accent mt-4">
          Call Us <ArrowUpRight size={18} />
        </a>
      </Reveal>
    </section>
  );
}
