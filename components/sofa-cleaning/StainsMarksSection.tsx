import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CupSoda, Utensils, PawPrint, Hand, Sofa, Droplets, Droplet, Wind } from "lucide-react";
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";

const problems = [
  { label: "Coffee & Tea", icon: CupSoda },
  { label: "Food Spills", icon: Utensils },
  { label: "Pet Marks", icon: PawPrint },
  { label: "Mud", icon: Hand },
  { label: "Seat Marks", icon: Sofa },
  { label: "Everyday Accidents", icon: Wind },
  { label: "Greasy Marks", icon: Droplet },
  { label: "Drink Spills", icon: Droplets },
];

export default function StainsMarksSection() {
  return (
    <section className="py-16 lg:py-24 bg-navy-dark">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center mb-14">
        <Reveal direction="left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Focused Care for Sofa Stains &amp; Spills
          </h2>
          <div className="space-y-4 text-white/70 mb-6">
            <p>A small spill can quickly become the first thing you notice whenever you look at your sofa.</p>
            <p>
              Different substances behave differently on fabric. Coffee may soak into fibres differently from grease, food or pet-related marks, and previous DIY products can also affect how a stain responds.
            </p>
            <p>
              Our sofa stain cleaning approach considers the mark as well as the surrounding fabric before treatment begins. Where suitable, targeted sofa stain treatment can be used alongside the main cleaning process.
            </p>
            <p>
              The way a mark responds depends on several factors, including what caused it, the
              upholstery material, how long it has been present and whether another cleaning
              product has already been used. For marks affecting carpets rather than furniture,
              see our{" "}
              <Link href="/services/stain-removal" className="text-accent font-semibold hover:underline">
                stain removal
              </Link>{" "}
              service.
            </p>
          </div>
          <p className="text-sm text-white/60 mb-8">
            Professional treatment can improve many marks, but some substances can permanently
            alter fabric fibres or colour. Never promise complete stain removal before the
            upholstery has been assessed.
          </p>
          <Link href="/contact-us" className="btn-accent">
            Ask About a Sofa Stain <ArrowUpRight size={18} />
          </Link>
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/services/sofa-cleaning.jpg"
              alt="Professional treatment of a mark on fabric upholstery"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>

      <StaggerGroup className="container-page grid grid-cols-2 sm:grid-cols-4 gap-4">
        {problems.map((problem) => (
          <StaggerItem key={problem.label}>
            <div className="flex flex-col items-center gap-2 rounded-2xl bg-white/5 border border-white/10 py-6 px-3 text-center">
              <problem.icon size={22} className="text-accent" />
              <span className="text-sm font-medium text-white/90">{problem.label}</span>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
