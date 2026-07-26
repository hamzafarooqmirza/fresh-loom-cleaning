import { Clock, Headphones, MapPin } from "lucide-react";
import { siteInfo } from "@/lib/data";

const items = [
  {
    icon: MapPin,
    title: "Address",
    lines: [siteInfo.address],
  },
  {
    icon: Headphones,
    title: "Contact",
    lines: [siteInfo.phone, siteInfo.email],
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: siteInfo.hours,
  },
];

export default function FooterContactBar() {
  return (
    <div className="bg-cream">
      <div className="container-page py-10 grid sm:grid-cols-3 gap-8">
        {items.map((item) => (
          <div key={item.title} className="flex items-center gap-4">
            <span className="w-12 h-12 shrink-0 rounded-full bg-white text-navy flex items-center justify-center shadow-sm">
              <item.icon size={20} />
            </span>
            <div>
              <p className="font-heading font-bold text-navy-dark">{item.title}</p>
              {item.lines.map((line) => (
                <p key={line} className="text-sm text-slate-600">
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
