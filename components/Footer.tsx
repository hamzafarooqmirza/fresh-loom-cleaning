import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { footerServiceLinks, navLinks, siteInfo } from "@/lib/data";
import { FacebookIcon, InstagramIcon, LinkedInIcon, YouTubeIcon } from "./SocialIcons";

const socials = [
  { icon: FacebookIcon, label: "Facebook" },
  { icon: InstagramIcon, label: "Instagram" },
  { icon: LinkedInIcon, label: "LinkedIn" },
  { icon: YouTubeIcon, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white/80">
      <div className="container-page py-16 grid md:grid-cols-4 gap-10">
        <div>
          <div className="inline-block bg-white rounded-lg p-2 mb-4">
            <Image src="/images/logo.png" alt={siteInfo.name} width={190} height={51} />
          </div>
          <p className="text-sm mb-6">
            Freshloom Carpet &amp; Upholstery Cleaning Limited provides professional cleaning
            services designed to restore cleanliness, freshness, and comfort to homes and
            businesses.
          </p>
          <div className="flex gap-3">
            {socials.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-navy-dark transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="hover:text-accent transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm">
            {footerServiceLinks.map((s) => (
              <li key={s}>
                <a href="#services" className="hover:text-accent transition-colors">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Get In Touch</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0" /> {siteInfo.address}
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="shrink-0" /> {siteInfo.phone}
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="shrink-0" /> {siteInfo.email}
            </li>
          </ul>
          <div className="mt-4 text-sm">
            {siteInfo.hours.map((h) => (
              <p key={h}>{h}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>Copyright © {new Date().getFullYear()} {siteInfo.legalName}. All Rights Reserved</p>
          <ul className="flex gap-6">
            <li>
              <a href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent transition-colors">
                Terms &amp; Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent transition-colors">
                Cookies Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
