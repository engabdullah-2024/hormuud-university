// app/hero/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

// Shared easing curve (modern cubic-bezier style)
const easing = [0.19, 0.76, 0.32, 1] as const;

// Strongly-typed animation variants to keep TS/ESLint happy
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easing,
      when: "beforeChildren",
      staggerChildren: 0.18,
    },
  },
};

const leftSlideVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: easing,
    },
  },
};

const rightSlideVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: easing,
      delay: 0.05,
    },
  },
};

// Default export required by Next.js for a page
export default function HeroPage() {
  return <HeroSection />;
}

// You can keep this as a separate component if you want to reuse later
function HeroSection() {
  return (
    <motion.section
      className="relative w-full overflow-hidden border-b bg-background"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/lib.jpg"
          alt="Hormuud University Library"
          fill
          priority
          className="object-cover"
        />
        {/* Softer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/75 via-slate-950/75 to-slate-950/80" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center md:py-24 lg:px-6">
        {/* Left side: text + actions */}
        <motion.div
          className="max-w-xl space-y-7 text-white"
          variants={leftSlideVariants}
        >
          <Badge
            variant="outline"
            className="border-emerald-300/70 bg-white/5 text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-50 backdrop-blur"
          >
            <BookOpen className="mr-2 h-3 w-3" />
            Library · A calm space for learning
          </Badge>

          <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl">
            A peaceful place
            <span className="block font-bold text-emerald-200">
              to read, think &amp; grow
            </span>
          </h1>

          <p className="max-w-lg text-sm text-emerald-50/90 md:text-base">
            At Hormuud University Library, students discover knowledge in a calm,
            quiet environment — with access to books, journals and digital
            resources that support deep, focused study.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1.5">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-emerald-500 px-6 text-sm font-semibold shadow-lg shadow-emerald-900/40 hover:bg-emerald-400"
            >
              <Link href="/library">
                Explore the Library
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-emerald-200/70 bg-white/5 text-sm text-emerald-50 backdrop-blur hover:bg-white/10"
            >
              <Link href="/apply">Apply to HU</Link>
            </Button>
          </div>

          {/* Small “stats” row */}
          <div className="flex flex-wrap gap-8 pt-5 text-xs md:text-sm">
            <div className="space-y-1">
              <p className="text-sm font-semibold text-emerald-200">
                25,000+
              </p>
              <p className="text-emerald-50/80">Books &amp; references</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-emerald-200">7 days</p>
              <p className="text-emerald-50/80">Open each week</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-emerald-200">Quiet</p>
              <p className="text-emerald-50/80">Dedicated study zones</p>
            </div>
          </div>
        </motion.div>

        {/* Right side: info card */}
        <motion.div
          className="mt-4 w-full max-w-sm md:ml-auto md:mt-0"
          variants={rightSlideVariants}
        >
          <Card className="border-emerald-200/40 bg-white/85 shadow-lg backdrop-blur-lg dark:bg-slate-950/85">
            <CardContent className="space-y-4 p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700 dark:text-emerald-300">
                Library Highlights
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Silent reading rooms for focused study</li>
                <li>• Course textbooks, journals &amp; reference materials</li>
                <li>• Digital databases for research projects</li>
                <li>• Supportive librarians ready to guide you</li>
              </ul>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="mt-2 w-full border-emerald-500 text-emerald-700 hover:bg-emerald-50 dark:text-emerald-300 dark:hover:bg-emerald-900/20"
              >
                <Link href="/library/hours">View opening hours</Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
}
