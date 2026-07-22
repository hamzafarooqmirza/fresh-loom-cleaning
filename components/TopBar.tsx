import { Mail, MapPin, Phone } from "lucide-react";
import { siteInfo, socialLinks } from "@/lib/data";
import { FacebookIcon, InstagramIcon, LinkedInIcon, XIcon, YouTubeIcon } from "./SocialIcons";

const socialIcons = {
  Facebook: FacebookIcon,
  X: XIcon,
  LinkedIn: LinkedInIcon,
  Instagram: InstagramIcon,
  YouTube: YouTubeIcon,
};

export default function TopBar() {
  return (
    <div className="hidden md:block bg-navy-dark text-white/90 text-sm">
      <div className="container-page flex items-center justify-between py-2.5">
        <ul className="flex items-center gap-6">
          <li>
            <a href={siteInfo.phoneHref} className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone size={14} /> {siteInfo.phone}
            </a>
          </li>
          <li>
            <a
              href={`mailto:${siteInfo.email}`}
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Mail size={14} /> {siteInfo.email}
            </a>
          </li>
          <li className="flex items-center gap-2">
            <MapPin size={14} /> {siteInfo.address}
          </li>
        </ul>
        <ul className="flex items-center gap-3">
          {socialLinks.map((s) => {
            const Icon = socialIcons[s.label as keyof typeof socialIcons];
            return (
              <li key={s.label}>
                <a
                  href={s.href}
                  aria-label={s.label}
                  className="w-7 h-7 flex items-center justify-center rounded-full bg-white/10 hover:bg-accent hover:text-navy-dark transition-colors"
                >
                  <Icon size={13} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
