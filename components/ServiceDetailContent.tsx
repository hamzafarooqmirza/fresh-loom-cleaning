import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { siteInfo } from "@/lib/data";
import Reveal from "./Reveal";

export default function ServiceDetailContent({
  title,
  image,
  intro,
  included,
}: {
  title: string;
  image: string;
  intro: string[];
  included: string[];
}) {
  const half = Math.ceil(included.length / 2);

  return (
    <Reveal>
      <Image
        src={image}
        alt={title}
        width={800}
        height={534}
        className="rounded-2xl shadow-lg w-full h-auto mb-8"
      />

      <h2 className="text-2xl md:text-3xl font-extrabold text-navy-dark mb-2">
        Professional {title} Care
      </h2>
      <div className="w-16 h-1 bg-accent rounded-full mb-6" />

      {intro.map((p) => (
        <p key={p} className="text-slate-600 mb-4">
          {p}
        </p>
      ))}

      <a href={siteInfo.phoneHref} className="btn-navy mt-2 mb-10">
        Call Us <ArrowUpRight size={18} />
      </a>

      <h3 className="text-xl font-bold text-navy-dark mb-4">What&rsquo;s Included</h3>
      <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2 border-t border-black/10 pt-4">
        {[included.slice(0, half), included.slice(half)].map((column, i) => (
          <ul key={i} className="space-y-2">
            {column.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                <Check size={16} className="text-accent shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </Reveal>
  );
}
