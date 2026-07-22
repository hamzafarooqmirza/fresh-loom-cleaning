import Image from "next/image";
import { SprayCan } from "lucide-react";
import { galleryItems } from "@/lib/data";

export default function Gallery() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-page">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow justify-center mb-4">
            <SprayCan size={16} /> Our Project
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark">
            Latest Projects From Our Works
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {galleryItems.map((item) => (
            <div key={item.title} className="rounded-2xl overflow-hidden shadow-sm border border-black/5">
              <div className="grid grid-cols-2 text-center bg-navy-dark text-white text-sm font-semibold">
                <div className="py-2">Before</div>
                <div className="py-2">After</div>
              </div>
              <div className="grid grid-cols-2">
                <Image
                  src={item.before}
                  alt={`${item.title} before`}
                  width={704}
                  height={384}
                  className="w-full h-auto object-cover"
                />
                <Image
                  src={item.after}
                  alt={`${item.title} after`}
                  width={704}
                  height={384}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
