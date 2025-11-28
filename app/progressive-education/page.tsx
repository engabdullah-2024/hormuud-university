// app/progressive-education/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const items = [
  {
    slug: "creative",
    title: "Creative @ HU",
    subtitle: "Engineering beyond the shoreline",
    image: "/creative.webp",
    href: "/stories/creative",
    tag: "Innovation & Field Work",
  },
  {
    slug: "invent",
    title: "Invent @ HU",
    subtitle: "Tomorrow depends on what we work on today",
    image: "/invent_hu.jpg",
    href: "/stories/invent",
    tag: "Projects & Labs",
  },
  {
    slug: "ceremony",
    title: "Ceremony @ HU",
    subtitle: "Moments of recognition and new beginnings",
    image: "/cermony@hu.webp",
    href: "/stories/ceremony",
    tag: "Campus Life",
  },
  {
    slug: "study",
    title: "Study @ HU",
    subtitle: "Come with an idea and make it real",
    image: "/study@hu.jpeg",
    href: "/stories/study",
    tag: "Student Success",
  },
];

// ✅ DEFAULT EXPORT – required by Next.js
export default function ProgressiveEducationPage() {
  return (
    <main className="min-h-screen bg-muted/20">
      <ProgressiveEducationSection />
    </main>
  );
}

// Your existing section kept as-is (just used inside the page)
function ProgressiveEducationSection() {
  return (
    <section className="w-full bg-background py-12 md:py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 lg:px-6">
        {/* Heading */}
        <header className="space-y-3 text-center">
          <Badge className="mx-auto border-emerald-200 bg-emerald-50 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Our learning culture
          </Badge>
          <h2 className="text-2xl font-semibold tracking-tight text-emerald-900 md:text-3xl">
            A university for a{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-sky-500 bg-clip-text text-transparent">
              progressive education
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground md:text-base">
            Learning at Hormuud University goes beyond lectures: students build,
            explore, celebrate and grow together through real-world experience.
          </p>
        </header>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <Link key={item.slug} href={item.href}>
              <Card className="group h-full overflow-hidden border-0 bg-transparent shadow-none transition-transform hover:-translate-y-1">
                <div className="relative h-56 w-full overflow-hidden rounded-xl md:h-60">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />

                  <CardContent className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-4 text-white">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-emerald-200">
                        {item.tag}
                      </p>
                      <ArrowRight className="h-4 w-4 text-emerald-200 opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>
                    <h3 className="text-sm font-semibold md:text-base">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-emerald-50/85 md:text-xs">
                      {item.subtitle}
                    </p>
                  </CardContent>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Optional CTA under grid */}
        <div className="flex justify-center pt-2">
          <Button
            asChild
            variant="outline"
            className="rounded-full border-emerald-300 text-xs font-medium text-emerald-700 hover:bg-emerald-50 md:text-sm"
          >
            <Link href="/campus-life">Discover more stories from HU</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
