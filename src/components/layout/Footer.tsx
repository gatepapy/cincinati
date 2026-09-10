"use client";

import Link from "next/link";
import { useState } from "react";
import { InstagramIcon, FacebookIcon, XIcon } from "@/components/icons";
import { NAV_LINKS, SITE } from "@/lib/data";

const socialIcons: Record<string, typeof InstagramIcon> = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  X: XIcon,
};

export function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  }

  return (
    <footer className="border-t border-cream-50/10 bg-midnight-950">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <span className="text-xl font-bold tracking-wide text-cream-50">
              {SITE.name}
            </span>
            <p className="max-w-xs text-sm font-normal leading-relaxed text-cream-200/70">
              {SITE.description}
            </p>
            <div className="flex gap-4 pt-2">
              {SITE.socials.map((s) => {
                const Icon = socialIcons[s.label] ?? InstagramIcon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-cream-50/15 text-cream-100 transition-colors hover:border-espresso-400 hover:text-espresso-400"
                  >
                    <Icon width={16} height={16} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-espresso-400">
              Explore
            </h3>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-normal text-cream-200/75 transition-colors hover:text-cream-50"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-espresso-400">
              Visit
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm font-normal text-cream-200/75">
              <li>{SITE.address.line1}</li>
              <li>{SITE.address.line2}</li>
              <li className="pt-2">
                <a href={`tel:${SITE.phone}`} className="hover:text-cream-50">
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="hover:text-cream-50">
                  {SITE.email}
                </a>
              </li>
            </ul>
            <ul className="mt-4 flex flex-col gap-1.5 border-t border-cream-50/10 pt-4 text-sm font-normal text-cream-200/75">
              {SITE.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-6">
                  <span>{h.day}</span>
                  <span className="text-cream-100/90">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-espresso-400">
              Stay In The Loop
            </h3>
            <p className="mb-4 text-sm font-normal leading-relaxed text-cream-200/70">
              Seasonal menus, events and first access to reservations.
            </p>
            {submitted ? (
              <p className="text-sm font-medium text-espresso-400">
                You&apos;re on the list — thank you.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="w-full rounded-full border border-cream-50/20 bg-transparent px-5 py-3 text-sm text-cream-50 placeholder:text-cream-200/40 outline-none transition-colors focus:border-espresso-400"
                />
                <button
                  type="submit"
                  className="w-full rounded-full bg-espresso-500 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-cream-50 transition-colors hover:bg-espresso-400"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-cream-50/10 pt-8 text-xs font-normal text-cream-200/50 md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p>Placeholder site — imagery via Unsplash.</p>
        </div>
      </div>
    </footer>
  );
}
