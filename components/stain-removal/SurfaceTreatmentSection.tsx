import Link from "next/link";
import { Layers3, Sofa, Armchair, RectangleHorizontal } from "lucide-react";
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";

const surfaces = [
  { icon: Layers3, title: "Carpet Stain Removal", href: "/services/carpet-cleaning", description: "Professional carpet stain removal can target individual marks while taking the carpet fibre and surrounding area into consideration." },
  { icon: Sofa, title: "Sofa Stain Removal", href: "/services/sofa-cleaning", description: "Our sofa stain removal approach considers the upholstery fabric before treatment begins." },
  { icon: Armchair, title: "Upholstery Stain Removal", href: "/services/upholstery-cleaning", description: "Suitable furniture can receive focused upholstery stain removal for individual problem areas." },
  { icon: RectangleHorizontal, title: "Rug Stain Removal", href: "/services/rug-cleaning", description: "Professional rug stain removal should consider the rug's fibres, dyes and construction before treatment." },
];

export default function SurfaceTreatmentSection() {
  return <section className="py-16 lg:py-24 bg-cream"><div className="container-page">
    <Reveal className="max-w-2xl mb-14">
      <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-6">Stain Treatment Across Different Furnishings</h2>
      <div className="space-y-4 text-slate-600"><p>Stains do not only happen on carpets.</p><p>A drink can reach a sofa cushion, food can land on a dining chair and muddy footwear can leave a mark across a rug.</p><p>We provide targeted treatment for suitable surfaces while considering the characteristics of each material.</p></div>
    </Reveal>
    <StaggerGroup className="grid sm:grid-cols-2 gap-6">{surfaces.map((item) => <StaggerItem key={item.title}><Link href={item.href} className="block h-full bg-white rounded-2xl border border-black/5 shadow-sm p-7 transition-transform hover:-translate-y-1"><div className="w-12 h-12 rounded-full bg-accent/10 text-accent-dark flex items-center justify-center mb-5"><item.icon size={22} /></div><h3 className="text-lg font-bold text-navy-dark mb-2">{item.title}</h3><p className="text-sm text-slate-600">{item.description}</p></Link></StaggerItem>)}</StaggerGroup>
  </div></section>;
}
