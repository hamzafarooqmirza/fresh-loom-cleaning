import Image from "next/image";
import { Info } from "lucide-react";
import { siteInfo } from "@/lib/data";
import Reveal from "../Reveal";

export default function SteamCleaningSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
        <Reveal direction="left">
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/services/upholstery-cleaning.jpg"
              alt="Professional carpet cleaning machine and extraction equipment in use"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-6">
            Professional Carpet Steam Cleaning
          </h2>
          <div className="space-y-4 text-slate-600 mb-6">
            <p>
              Different carpets and situations may require different cleaning methods. Where
              suitable, carpet steam cleaning can form part of a professional deep-cleaning
              approach designed to loosen dirt and extract it from the carpet.
            </p>
            <p>
              Our professional carpet steam cleaning service is carried out with the carpet&apos;s
              material and condition in mind rather than using exactly the same treatment for
              every job.
            </p>
            <p>
              Customers sometimes use the term steam carpet cleaning to describe hot-water
              extraction and other professional methods. What matters most is choosing an
              appropriate method for the carpet rather than simply using the strongest possible
              treatment.
            </p>
            <p>
              {`If you are unsure which approach your carpet needs, ${siteInfo.name} can assess it before cleaning begins.`}
            </p>
          </div>

          <div className="flex items-start gap-3 rounded-xl bg-navy/5 border border-navy/10 p-4">
            <Info size={20} className="text-navy shrink-0 mt-0.5" />
            <p className="text-sm font-medium text-navy-dark">
              Method chosen according to carpet
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
