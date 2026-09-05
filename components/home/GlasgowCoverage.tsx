import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { siteInfo } from "@/lib/data";
import Reveal from "../Reveal";

export default function GlasgowCoverage() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
        <Reveal direction="left">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src={siteInfo.mapEmbedUrl}
              width="600"
              height="400"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${siteInfo.name} service area map`}
              className="w-full h-[320px] lg:h-[380px] border-0"
            />
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          <span className="eyebrow mb-4">
            <MapPin size={16} /> Local Cleaning Service
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-6">
            Carpet &amp; Upholstery Cleaning Across Glasgow
          </h2>
          <p className="text-slate-600 mb-4">
            {siteInfo.name} is a Glasgow-based carpet cleaning company providing professional
            carpet cleaning services, along with upholstery, sofa and rug cleaning, for homes and
            businesses across the city.
          </p>
          <p className="text-slate-600 mb-4">
            Whether you need a carpet refreshed after months of everyday use, a sofa cleaned after
            a spill or a rug given a deeper clean, our local cleaning service is here to help.
          </p>
          <p className="text-slate-600 mb-8">
            As well as Glasgow, we&apos;re also able to travel to nearby towns and cities,
            including{" "}
            <Link href="/areas/edinburgh" className="text-accent-dark font-semibold hover:underline">
              Edinburgh
            </Link>
            ,{" "}
            <Link href="/areas/stirling" className="text-accent-dark font-semibold hover:underline">
              Stirling
            </Link>
            ,{" "}
            <Link href="/areas/perth" className="text-accent-dark font-semibold hover:underline">
              Perth
            </Link>
            ,{" "}
            <Link href="/areas/dundee" className="text-accent-dark font-semibold hover:underline">
              Dundee
            </Link>{" "}
            and{" "}
            <Link href="/areas/dunfermline" className="text-accent-dark font-semibold hover:underline">
              Dunfermline
            </Link>
            , for professional carpet cleaners and upholstery cleaners on request.
          </p>
          <Link href="/contact-us" className="btn-accent">
            Request a Quote <ArrowUpRight size={18} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
