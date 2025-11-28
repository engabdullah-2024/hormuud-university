// app/graduators/page.tsx
"use client";

import Image from "next/image";
import { GraduationCap, Quote } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Graduator = {
  id: number;
  name: string;
  classOf: string;
  image: string;
  note?: string;
};

const graduators: Graduator[] = [
  {
    id: 1,
    name: "Abdisalan Abdikadir",
    classOf: "Class of 2024",
    image: "/1.jpg",
    note: "Stay curious, stay consistent, and keep serving your community.",
  },
  {
    id: 2,
    name: "Ali Abdullahi Maow",
    classOf: "Class of 2024",
    image: "/2.jpg",
    note: "Small daily progress becomes big change over time.",
  },
  {
    id: 3,
    name: "Farhio Yasin Omar",
    classOf: "Class of 2024",
    image: "/3.jpg",
    note: "Believe in your voice. The world needs your ideas.",
  },
  {
    id: 4,
    name: "—",
    classOf: "Class of 2024",
    image: "/4.jpg",
  },
  {
    id: 5,
    name: "Mohamed Khalif Mumin",
    classOf: "Class of 2024",
    image: "/5.jpg",
  },
  {
    id: 6,
    name: "Abdullahi Mohamed Hassan",
    classOf: "Class of 2024",
    image: "/6.jpg",
  },
  {
    id: 7,
    name: "Mohamed Omar Mohamed",
    classOf: "Class of 2024",
    image: "/7.jpg",
  },
  {
    id: 8,
    name: "—",
    classOf: "Class of 2024",
    image: "/8.jpg",
  },
];

export default function GraduatorsPage() {
  return (
    <main className="min-h-screen bg-muted/30">
      <section className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 lg:px-6 lg:py-14">
        {/* Header */}
        <header className="space-y-3 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
            <GraduationCap className="h-4 w-4" />
            Graduators
          </div>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Words of wisdom from those who walked before you
          </h1>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground md:text-base">
            A peaceful gallery of Hormuud University graduates — sharing calm
            confidence, gratitude, and quiet motivation for the next generation
            of students.
          </p>
        </header>

        {/* Subtle divider */}
        <div className="mx-auto h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-emerald-200 to-transparent" />

        {/* Grid of graduators */}
        <div className="grid gap-6 pt-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {graduators.map((grad) => (
            <Card
              key={grad.id}
              className="flex h-full flex-col items-center border-slate-200 bg-background/90 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md"
            >
              <CardContent className="flex w-full flex-1 flex-col items-center gap-3 p-5 pb-6">
                {/* Avatar */}
                <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-emerald-500/70 bg-slate-100 shadow-sm sm:h-32 sm:w-32">
                  <Image
                    src={grad.image}
                    alt={grad.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Name & class */}
                <div className="text-center">
                  <p className="text-sm font-semibold text-slate-900">
                    {grad.name}
                  </p>
                  <Badge className="mt-1 bg-emerald-50 text-[11px] font-medium text-emerald-700">
                    {grad.classOf}
                  </Badge>
                </div>

                {/* Optional note */}
                {grad.note && (
                  <div className="mt-1 flex items-start gap-2 text-xs text-muted-foreground">
                    <Quote className="mt-0.5 h-3 w-3 text-emerald-500" />
                    <p className="text-left leading-relaxed">{grad.note}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom note */}
        <div className="pt-4 text-center text-xs text-muted-foreground md:text-sm">
          More graduators will be added as our alumni family grows.  
          <span className="block md:inline"> May your journey be filled with peace, purpose, and knowledge.</span>
        </div>
      </section>
    </main>
  );
}
