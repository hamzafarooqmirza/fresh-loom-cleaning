import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Coffee, Utensils, Footprints, PawPrint, Droplet, CupSoda, Sparkles, MoveHorizontal } from "lucide-react";
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";

const problems = [
  { label: "Coffee & Tea", icon: Coffee },
  { label: "Food Spills", icon: Utensils },
  { label: "Mud", icon: Footprints },
  { label: "Pet Marks", icon: PawPrint },
  { label: "Greasy Marks", icon: Droplet },
  { label: "Drink Spills", icon: CupSoda },
  { label: "Everyday Spots", icon: Sparkles },
  { label: "High-Traffic Marks", icon: MoveHorizontal },
];

export default function RugStainsSection() {
  return (
    <section className="py-16 lg:py-24 bg-navy-dark">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center mb-14">
        <Reveal direction="left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Focused Care for Rug Spots &amp; Stains
          </h2>
          <div className="space-y-4 text-white/70 mb-6">
            <p>
              A single spill can stand out dramatically on a rug, especially when it contrasts
              with the surrounding pattern or colour.
            </p>
            <p>
              Our rug spot cleaning approach focuses on individual problem areas where appropriate
              rather than assuming every mark will respond to the same treatment.
            </p>
            <p>
              During rug stain treatment, factors such as the source of the mark, rug fibre,
              colour, age of the stain and any products previously used can all matter. Marks on
              fitted flooring are treated differently — see our{" "}
              <Link href="/services/carpet-cleaning" className="text-accent font-semibold hover:underline">
                carpet cleaning
              </Link>{" "}
              service for that.
            </p>
          </div>
          <p className="text-sm text-white/60 mb-8">
            Professional rug stain cleaning can improve many common marks, but some substances may
            permanently affect fibres or dyes. Never guarantee that every rug stain can be removed
            completely.
          </p>
          <Link href="/contact-us" className="btn-accent">
            Ask About a Rug Stain <ArrowUpRight size={18} />
          </Link>
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/services/rug-cleaning.jpg"
              alt="Careful spot treatment on a rug"
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
