"use client";

import { useEffect, useRef, useState } from "react";
import { GraduationCap, Medal, BookOpen, Users, ArrowUpRight } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Stat = {
  label: string;
  value: number;
  suffix?: string;
  description: string;
  icon: typeof GraduationCap;
  color: string;
  accent: string;
  badgeBg: string;
};

const stats: Stat[] = [
  {
    label: "Postgraduate students",
    value: 825,
    suffix: "+",
    description: "Across masters and professional programmes.",
    icon: GraduationCap,
    color: "from-indigo-500/10 to-indigo-500/0",
    accent: "text-indigo-600",
    badgeBg: "bg-indigo-500",
  },
  {
    label: "Undergraduate students",
    value: 1142,
    suffix: "+",
    description: "Enrolled in degree and diploma courses.",
    icon: Medal,
    color: "from-rose-500/10 to-rose-500/0",
    accent: "text-rose-600",
    badgeBg: "bg-rose-500",
  },
  {
    label: "Studying students",
    value: 2274,
    suffix: "+",
    description: "Actively attending courses this academic year.",
    icon: BookOpen,
    color: "from-sky-500/10 to-sky-500/0",
    accent: "text-sky-600",
    badgeBg: "bg-sky-500",
  },
  {
    label: "Academic staff",
    value: 134,
    suffix: "+",
    description: "Lecturers, professors & teaching assistants.",
    icon: Users,
    color: "from-amber-500/10 to-amber-500/0",
    accent: "text-amber-600",
    badgeBg: "bg-amber-500",
  },
];

// simple hook to know when an element is in the viewport
function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            // we only need it once
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3, ...options }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [options]);

  return { ref, inView };
}

function StatCard({ stat }: { stat: Stat }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [current, setCurrent] = useState(0);

  // animate count when the card comes into view
  useEffect(() => {
    if (!inView) return;

    const duration = 1100; // ms
    const start = performance.now();

    const animate = (time: number) => {
      const elapsed = time - start;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(progress * stat.value);

      setCurrent(value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCurrent(stat.value); // ensure final value
      }
    };

    requestAnimationFrame(animate);
  }, [inView, stat.value]);

  const Icon = stat.icon;
  const formatted = new Intl.NumberFormat("en-US").format(current);

  return (
    <Card
      ref={ref}
      className="relative overflow-hidden border-slate-200 bg-background/90 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg"
    >
      {/* soft gradient background */}
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${stat.color}`}
      />

      <CardHeader className="relative flex flex-row items-start justify-between gap-3 pb-3">
        <div className="space-y-1">
          <CardTitle className="text-sm font-semibold text-slate-900">
            {stat.label}
          </CardTitle>
        </div>

        <div
          className={`flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-700 ${stat.accent}`}
        >
          <Icon className="h-5 w-5" />
        </div>
      </CardHeader>

      <CardContent className="relative space-y-2 pt-0">
        <div className="flex items-baseline gap-2">
          <span className={`text-2xl font-semibold ${stat.accent}`}>
            {formatted}
            {stat.suffix}
          </span>
          <span className="flex items-center gap-1 text-[11px] uppercase tracking-[0.16em] text-slate-500">
            total
            <ArrowUpRight className="h-3 w-3" />
          </span>
        </div>
        <p className="text-xs text-muted-foreground md:text-sm">
          {stat.description}
        </p>
      </CardContent>

      {/* Value badge in corner */}
      <div className="pointer-events-none absolute right-3 top-3">
        <span
          className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold text-white shadow-sm ${stat.badgeBg}`}
        >
          {stat.value.toLocaleString()}
          {stat.suffix}
        </span>
      </div>
    </Card>
  );
}

export default function FactsFiguresPage() {
  return (
    <main className="min-h-screen bg-muted/30">
      <section className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 lg:px-6 lg:py-14">
        {/* Header */}
        <header className="space-y-3">
          <Badge className="border-emerald-200 bg-emerald-50 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Facts &amp; figures
          </Badge>
          <div className="space-y-1">
            <h1 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              A snapshot of our academic community
            </h1>
            <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
              These figures offer a calm overview of the students and staff who
              shape everyday life at Hormuud University.
            </p>
          </div>
        </header>

        {/* Stats grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <StatCard key={item.label} stat={item} />
          ))}
        </div>

        {/* Small note */}
        <p className="pt-2 text-center text-xs text-muted-foreground md:text-sm">
          Figures are indicative and may be updated at the beginning of each academic year.
        </p>
      </section>
    </main>
  );
}
