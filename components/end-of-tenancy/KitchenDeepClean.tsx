import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../Reveal";

export default function KitchenDeepClean() {
  return (
    <section className="py-16 lg:py-24 bg-light">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
        <Reveal direction="left">
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/services/end-of-tenancy-deep-clean.jpg"
              alt="Professional focused treatment of a realistic household stain"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          <span className="text-xs font-bold uppercase tracking-wide text-accent-dark mb-3 block">
            One of the Most Used Rooms in the Property
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-6">
            Detailed Kitchen Cleaning Before Handover
          </h2>
          <div className="space-y-4 text-slate-600 mb-8">
            <p>Fresh accidents and older pet marks do not always behave in the same way.</p>
            <p>
              A stain can dry, change colour or become more noticeable. Repeated accidents can make the area more difficult to treat.
            </p>
            <p>Old pet stain removal and stubborn pet stain removal begin with the current condition rather than promises of an original appearance.</p>
            <p>
              Professional treatment may improve marks, but permanent discolouration or deeper contamination can limit results.
            </p>
            <p>
              We prefer to set realistic expectations rather than promise a perfect result before seeing the problem.
            </p>
          </div>
          <Link href="/contact-us" className="btn-accent">
            Ask About End of Tenancy Cleaning <ArrowUpRight size={18} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
