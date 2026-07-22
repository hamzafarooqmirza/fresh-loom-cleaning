import { ArrowUpRight, SprayCan } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-16 lg:py-24">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <Image
            src="/images/services/carpet-cleaning.svg"
            alt="About Fresh Loom Cleaning"
            width={800}
            height={534}
            className="rounded-3xl shadow-xl w-full h-auto"
          />
          <div className="absolute -bottom-6 -right-6 bg-navy-dark text-white rounded-2xl px-6 py-4 shadow-xl hidden sm:block">
            <div className="text-2xl font-extrabold">10+</div>
            <div className="text-sm text-white/80">Experience</div>
          </div>
        </div>

        <div>
          <span className="eyebrow mb-4">
            <SprayCan size={16} /> About us
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-6">
            Trusted Experts In Professional Cleaning Services
          </h2>
          <p className="text-slate-600 mb-4">
            Freshloom Carpet &amp; Upholstery Cleaning Limited provides professional cleaning
            services designed to restore cleanliness, freshness, and comfort to homes and
            businesses. Our experienced team uses advanced equipment and proven techniques to
            remove dirt, stains, allergens, and unwanted odors from carpets and furniture.
          </p>
          <p className="text-slate-600 mb-8">
            We are committed to delivering reliable service, exceptional results, and complete
            customer satisfaction. With careful attention to detail and safe cleaning methods, we
            help extend the life of your carpets, rugs, sofas, and upholstery while creating a
            healthier indoor environment.
          </p>
          <a href="#contact" className="btn-accent">
            Read More <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
