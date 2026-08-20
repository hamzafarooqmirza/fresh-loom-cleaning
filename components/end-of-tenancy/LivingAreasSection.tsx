import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Coffee, Wine, Droplet, Utensils, PenLine, Cookie, HeartPulse, Footprints } from "lucide-react";
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";

const stains = [
  { title: "Coffee", description: "Dark drink spills can become more noticeable as they dry into light-coloured fibres.", icon: Coffee },
  { title: "Red Wine", description: "Strong pigments can leave obvious marks, particularly on pale carpets and upholstery.", icon: Wine },
  { title: "Grease", description: "Oily marks behave differently from water-based spills and can attract additional dirt.", icon: Droplet },
  { title: "Curry", description: "Food oils and strong colour pigments can make curry marks particularly noticeable.", icon: Utensils },
  { title: "Ink", description: "Ink can spread when treated incorrectly, making careful assessment important.", icon: PenLine },
  { title: "Chocolate", description: "Chocolate can combine oils, sugars and pigments in a single mark.", icon: Cookie },
  { title: "Blood", description: "This protein-based stain needs a different approach from many food and drink spills.", icon: HeartPulse },
  { title: "Mud & Grass", description: "Mud treatment and grass stain removal depend on the fibres and plant pigments involved.", icon: Footprints },
];

export default function CommonStainsSection() {
  return (
    <section className="py-16 lg:py-24 bg-navy-dark">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center mb-14">
        <Reveal direction="left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Cleaning the Spaces Beyond the Kitchen & Bathroom</h2>
          <div className="space-y-4 text-white/70 mb-8">
            <p>Everyday life creates plenty of opportunities for spills and marks.</p>
            <p>Some are water-based, some contain oils and others carry strong natural or artificial pigments. Knowing what caused the stain can help determine how it should be approached.</p>
            <p>Our stain cleaning process focuses on the affected area while taking the surrounding fibres into consideration.</p>
          </div>
          <Link href="/contact-us" className="btn-accent">Tell Us About Your Property <ArrowUpRight size={18} /></Link>
        </Reveal>
        <Reveal direction="right" delay={0.1}>
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
            <Image src="/images/services/end-of-tenancy-deep-clean.jpg" alt="Targeted stain removal on fabric" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </Reveal>
      </div>
      <StaggerGroup className="container-page grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stains.map((stain) => <StaggerItem key={stain.title}>
          <div className="h-full rounded-2xl bg-white/5 border border-white/10 p-5">
            <stain.icon size={22} className="text-accent mb-3" />
            <h3 className="font-bold text-white mb-2">{stain.title}</h3>
            <p className="text-xs leading-relaxed text-white/65">{stain.description}</p>
          </div>
        </StaggerItem>)}
      </StaggerGroup>
    </section>
  );
}
