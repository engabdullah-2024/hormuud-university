"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const footerNav = [
  {
    title: "Admission",
    links: [
      { label: "Entry Requirements", href: "/admission/requirements" },
      { label: "How to Apply", href: "/admission/how-to-apply" },
      { label: "Scholarships & Financial Aid", href: "/admission/scholarships" },
    ],
  },
  {
    title: "Academic",
    links: [
      { label: "Undergraduate", href: "/programmes/undergraduate" },
      { label: "Postgraduate Diploma", href: "/programmes/postgraduate-diploma" },
      { label: "Postgraduate", href: "/programmes/postgraduate" },
    ],
  },
  {
    title: "Facilities",
    links: [
      { label: "HU Facilities", href: "/facilities" },
      { label: "Industrial Training", href: "/industrial-training" },
    ],
  },
  {
    title: "HU Centers",
    links: [
      { label: "ICT Centers", href: "/centers/ict" },
      {
        label: "Weather & Climate Studies",
        href: "/centers/weather-and-climate",
      },
    ],
  },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-slate-950 text-slate-50">
      {/* Top area */}
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 lg:px-6 lg:py-12">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,2fr)]">
          {/* Contact + mini newsletter */}
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Contact us
              </p>

              <div className="space-y-2 text-sm text-slate-200">
                <p className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 text-emerald-300" />
                  <span>Wadajir district, Mogadishu – Somalia</span>
                </p>
                <p className="flex items-start gap-2">
                  <Phone className="mt-0.5 h-4 w-4 text-emerald-300" />
                  <span>
                    <span className="font-medium">Landline:</span> (+2521) 858117
                    <br />
                    <span className="font-medium">Mobile:</span> (+252) 613311119
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <Mail className="mt-0.5 h-4 w-4 text-emerald-300" />
                  <a
                    href="mailto:info@hu.edu.so"
                    className="text-slate-200 underline-offset-4 hover:underline"
                  >
                    info@hu.edu.so
                  </a>
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Stay informed
              </p>
              <p className="text-xs text-slate-400">
                Get occasional updates about admissions, scholarships and
                university news.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col gap-2 sm:flex-row"
              >
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-slate-900/60 text-xs placeholder:text-slate-500"
                />
                <Button
                  type="submit"
                  className="whitespace-nowrap rounded-full bg-emerald-500 px-4 text-xs font-semibold text-slate-950 hover:bg-emerald-400"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>

          {/* Navigation columns */}
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {footerNav.map((group) => (
              <div key={group.title} className="space-y-3">
                <p className="text-sm font-semibold text-slate-50">
                  {group.title}
                </p>
                <ul className="space-y-2 text-xs text-slate-300">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="hover:text-emerald-300 hover:underline hover:underline-offset-4"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator className="border-slate-800" />

        {/* Bottom row */}
        <div className="flex flex-col gap-4 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-medium text-slate-200">
              Hormuud University
            </span>
            <span className="hidden text-slate-600 md:inline">•</span>
            <span>© {year}. All rights reserved.</span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex gap-3">
              <Link
                href="/privacy-policy"
                className="hover:text-emerald-300 hover:underline hover:underline-offset-4"
              >
                Privacy Policy
              </Link>
              <span className="text-slate-600">•</span>
              <Link
                href="/security-policy"
                className="hover:text-emerald-300 hover:underline hover:underline-offset-4"
              >
                Security Policy
              </Link>
            </div>

            <div className="h-4 w-px bg-slate-700" />

            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400">Follow HU</span>
              <div className="flex items-center gap-1.5">
                <SocialIcon ariaLabel="Facebook" href="https://facebook.com">
                  <Facebook className="h-3.5 w-3.5" />
                </SocialIcon>
                <SocialIcon ariaLabel="YouTube" href="https://youtube.com">
                  <Youtube className="h-3.5 w-3.5" />
                </SocialIcon>
                <SocialIcon ariaLabel="Instagram" href="https://instagram.com">
                  <Instagram className="h-3.5 w-3.5" />
                </SocialIcon>
                <SocialIcon ariaLabel="LinkedIn" href="https://linkedin.com">
                  <Linkedin className="h-3.5 w-3.5" />
                </SocialIcon>
                <SocialIcon ariaLabel="X (Twitter)" href="https://x.com">
                  <Twitter className="h-3.5 w-3.5" />
                </SocialIcon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/**
 * Small circular social button using shadcn Button
 */
function SocialIcon({
  href,
  ariaLabel,
  children,
}: {
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
}) {
  return (
    <Button
      asChild
      size="icon"
      variant="outline"
      className="h-7 w-7 rounded-full border-slate-700 bg-slate-900/70 text-slate-200 hover:border-emerald-400 hover:bg-slate-900"
      aria-label={ariaLabel}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
}
