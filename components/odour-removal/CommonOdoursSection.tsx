import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, PawPrint, Cigarette, CupSoda, Waves, Sofa, RectangleHorizontal, Layers3, Home } from "lucide-react";
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";
const odours = [
  { title: "Pet Odours", description: "Repeated accidents or use of the same area can allow smells to settle into carpets, rugs and furniture.", icon: PawPrint },
  { title: "Smoke", description: "Smoke particles can cling to soft furnishings and leave rooms smelling stale after ventilation.", icon: Cigarette },
  { title: "Food & Drink", description: "Spills and food residues can leave lingering smells after penetrating fibres.", icon: CupSoda },
  { title: "Musty Smells", description: "A musty smell needs assessment of its underlying cause before treatment.", icon: Waves },
  { title: "Sofa Odours", description: "Regular sitting, pets, food and spills can gradually affect upholstered seating.", icon: Sofa },
  { title: "Rug Odours", description: "Rugs can trap smells from spills, pets, moisture and general use.", icon: RectangleHorizontal },
  { title: "Carpet Odours", description: "Carpets may retain smells from accidents, liquids and repeated exposure.", icon: Layers3 },
  { title: "Household Odours", description: "Busy homes can develop localised smells in heavily used soft furnishings.", icon: Home },
];
export default function CommonOdoursSection(){return <section className="py-16 lg:py-24 bg-navy-dark"><div className="container-page grid lg:grid-cols-2 gap-12 items-center mb-14"><Reveal direction="left"><h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Common Odours We Can Assess</h2><p className="text-white/70 mb-8">Unwanted smells can come from many different sources, and each problem needs to be considered individually.</p><Link href="/contact-us" className="btn-accent">Tell Us About the Odour <ArrowUpRight size={18}/></Link></Reveal><Reveal direction="right" delay={0.1}><div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl"><Image src="/images/services/odour-removal.jpg" alt="Professional odour treatment on soft furnishings" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover"/></div></Reveal></div><StaggerGroup className="container-page grid sm:grid-cols-2 lg:grid-cols-4 gap-4">{odours.map(item=><StaggerItem key={item.title}><div className="h-full rounded-2xl bg-white/5 border border-white/10 p-5"><item.icon size={22} className="text-accent mb-3"/><h3 className="font-bold text-white mb-2">{item.title}</h3><p className="text-xs leading-relaxed text-white/65">{item.description}</p></div></StaggerItem>)}</StaggerGroup></section>}
