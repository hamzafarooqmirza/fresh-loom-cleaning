import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../Reveal";

export default function DeepCurtainSplit() {
  return (
    <section className="py-16 lg:py-24 bg-light">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
        <Reveal direction="left">
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/services/upholstery-cleaning.jpg"
              alt="Deep cleaning full-length curtains"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          <span className="text-xs font-bold uppercase tracking-wide text-accent-dark mb-3 block">
            For Curtains That Need a Thorough Refresh
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-6">
            Deep Cleaning for Well-Used Curtains
          </h2>
          <div className="space-y-4 text-slate-600 mb-8">
            <p>Curtains can stay in place for years, which means gradual build-up is easy to overlook.</p>
            <p>
              Fabric close to frequently opened windows may collect more airborne particles. Lower sections encounter household activity, while folds can hold fine dust that is difficult to reach through surface cleaning.
            </p>
            <p>Deep curtain cleaning gives suitable curtains more thorough attention when they need more than routine maintenance.</p>
            <p>
              The goal is not to apply the strongest possible treatment. It is to understand the fabric and choose an approach appropriate for the curtains in front of us.
            </p>
            <p>
              The fabric and construction remain central to every decision.
            </p>
          </div>
          <Link href="/contact-us" className="btn-accent">
            Ask About Deep Curtain Cleaning <ArrowUpRight size={18} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
