import Image from "next/image";
import Link from "next/link";
import { footerServiceLinks, navLinks, siteInfo } from "@/lib/data";
import { FacebookIcon, InstagramIcon, LinkedInIcon, YouTubeIcon } from "./SocialIcons";
import FooterContactBar from "./FooterContactBar";
import NewsletterForm from "./NewsletterForm";

const socials = [
  { icon: FacebookIcon, label: "Facebook" },
  { icon: InstagramIcon, label: "Instagram" },
  { icon: LinkedInIcon, label: "LinkedIn" },
  { icon: YouTubeIcon, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="text-white/80">
      <FooterContactBar />

      <div className="bg-navy-dark">
        <div className="container-page py-16 grid md:grid-cols-4 gap-10">
          <div>
            <div className="inline-block bg-white rounded-lg p-2 mb-4">
              <Image src="/images/logo.png" alt={siteInfo.name} width={190} height={53} />
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
                  <Link href={l.href} className="hover:text-accent transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              {footerServiceLinks.map((s) => (
                <li key={s}>
                  <Link
                    href={`/services/${s.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-accent transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Subscribe Now</h4>
            <p className="text-sm mb-4">Subscribe for latest update &amp; News</p>
            <NewsletterForm />
          </div>
        </div>
      </div>

      <div className="bg-navy-dark border-t border-white/10">
        <div className="container-page py-6 pb-24 sm:pb-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>
            Copyright © {new Date().getFullYear()} {siteInfo.legalName}. All Rights Reserved
          </p>
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
