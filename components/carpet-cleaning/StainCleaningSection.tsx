import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Coffee, CupSoda, Utensils, Footprints, Droplet, PawPrint, Wine, Droplets } from "lucide-react";
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";

const stains = [
  { label: "Coffee", icon: Coffee },
  { label: "Tea", icon: CupSoda },
  { label: "Food", icon: Utensils },
  { label: "Mud", icon: Footprints },
  { label: "Grease", icon: Droplet },
  { label: "Pet Marks", icon: PawPrint },
  { label: "Red Wine", icon: Wine },
  { label: "General Spills", icon: Droplets },
];

export default function StainCleaningSection() {
  return (
    <section className="py-16 lg:py-24 bg-navy-dark">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center mb-14">
        <Reveal direction="left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Careful Treatment for Carpet Stains
          </h2>
          <div className="space-y-4 text-white/70 mb-6">
            <p>
              Spills happen. The difficult part is that different stains behave differently once
              they reach carpet fibres.
            </p>
            <p>
              Our carpet stain cleaning approach starts by considering what caused the mark, the
              type of carpet and whether the stain has already been treated with another product.
            </p>
            <p>
              Where appropriate, we carry out targeted carpet stain treatment before or during the
              main clean. See our dedicated{" "}
              <Link href="/services/stain-removal" className="text-accent font-semibold hover:underline">
                stain removal
              </Link>{" "}
              service for more detail.
            </p>
          </div>
          <p className="text-sm text-white/60 mb-8">
            Some stains respond very well to professional treatment while others may have
            permanently changed or damaged the carpet fibres. We will never promise that every
            mark can be removed completely.
          </p>
          <Link href="/contact-us" className="btn-accent">
            Ask About a Carpet Stain <ArrowUpRight size={18} />
          </Link>
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/services/stain-removal.jpg"
              alt="Carpet stain treatment by a professional cleaner"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>

      <StaggerGroup className="container-page grid grid-cols-2 sm:grid-cols-4 gap-4">
        {stains.map((stain) => (
          <StaggerItem key={stain.label}>
            <div className="flex flex-col items-center gap-2 rounded-2xl bg-white/5 border border-white/10 py-6 px-3 text-center">
              <stain.icon size={22} className="text-accent" />
              <span className="text-sm font-medium text-white/90">{stain.label}</span>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
