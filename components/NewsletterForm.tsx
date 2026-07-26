"use client";

import { useState, FormEvent } from "react";
import { Send } from "lucide-react";

export default function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return <p className="text-sm text-accent">Thanks for subscribing!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-stretch gap-2">
      <input
        required
        type="email"
        placeholder="Your email"
        className="min-w-0 flex-1 rounded-full bg-white/10 border border-white/15 px-4 py-2.5 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-accent"
      />
      <button
        type="submit"
        aria-label="Subscribe"
        className="shrink-0 w-10 h-10 rounded-full bg-accent hover:bg-accent-dark text-white flex items-center justify-center transition-colors"
      >
        <Send size={16} />
      </button>
    </form>
  );
}
