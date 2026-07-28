"use client";

import { useState, FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { services, siteInfo } from "@/lib/data";

export default function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

  function toggleService(title: string) {
    setSelected((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const phone = data.get("phone") as string;
    const message = data.get("message") as string;

    const lines = [
      "Hi Fresh Loom Cleaning! I'd like a quote.",
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      selected.length ? `Services: ${selected.join(", ")}` : null,
      message ? `Message: ${message}` : null,
    ].filter(Boolean);

    const waNumber = siteInfo.phoneHref.replace("tel:+", "");
    const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-navy/5 border border-navy/10 p-8 text-center">
        <h3 className="text-xl font-bold text-navy-dark mb-2">Thank you!</h3>
        <p className="text-slate-600">
          We&apos;ve opened WhatsApp with your quote request. Send the message and our team will
          get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 bg-white rounded-2xl shadow-sm border border-black/5 p-6 sm:p-8">
      <div className="grid sm:grid-cols-2 gap-4">
        <input
          required
          name="name"
          type="text"
          placeholder="Your Name"
          className="rounded-xl border border-black/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
        />
        <input
          required
          name="email"
          type="email"
          placeholder="Your Email"
          className="rounded-xl border border-black/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>
      <input
        name="phone"
        type="tel"
        placeholder="Your Phone"
        className="rounded-xl border border-black/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
      />

      <div>
        <p className="font-medium text-navy-dark mb-2">Select Services</p>
        <div className="flex flex-wrap gap-2">
          {services.map((s) => (
            <label
              key={s.slug}
              className={`cursor-pointer text-sm px-3 py-2 rounded-full border transition-colors ${
                selected.includes(s.title)
                  ? "bg-navy text-white border-navy"
                  : "border-black/15 text-navy-dark hover:border-navy"
              }`}
            >
              <input
                type="checkbox"
                className="hidden"
                checked={selected.includes(s.title)}
                onChange={() => toggleService(s.title)}
              />
              {s.title}
            </label>
          ))}
        </div>
      </div>

      <textarea
        name="message"
        placeholder="Message"
        rows={4}
        className="rounded-xl border border-black/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
      />

      <button type="submit" className="btn-accent justify-center">
        Submit Now <ArrowUpRight size={18} />
      </button>
    </form>
  );
}
