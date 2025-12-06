// app/page.tsx
"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

import Hero from "./hero/page";
import ProgressiveEducationSection from "./progressive-education/page";
import EventsPage from "./events/page";
import NewsPage from "./news/page";
import GraduatorsPage from "./graduators/page";
import FactsFiguresPage from "./facts_figures/page";
import CampusMapsPage from "./_components/campus/page";

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 0.61, 0.36, 1], // modern, smooth
    },
  },
} as const;

export default function HomePage() {
  const [sectionsVisible, setSectionsVisible] = useState(false);

  // Reveal sections on: scroll wheel OR arrow keys OR PageUp/Down OR Space
  useEffect(() => {
    if (sectionsVisible) return;

    const handleWheel = () => {
      setSectionsVisible(true);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      const code = event.code;
      const key = event.key;

      const arrowKeys = ["ArrowDown", "ArrowUp"];
      const pageKeys = ["PageDown", "PageUp"];
      const spaceKeys = ["Space", " "];

      if (
        arrowKeys.includes(code) ||
        pageKeys.includes(code) ||
        spaceKeys.includes(code) ||
        arrowKeys.includes(key) ||
        pageKeys.includes(key) ||
        spaceKeys.includes(key)
      ) {
        setSectionsVisible(true);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [sectionsVisible]);

  const handleRevealClick = () => {
    setSectionsVisible(true);
  };

  return (
    <main className="relative min-h-screen bg-background">
      {/* Hero always visible */}
      <div className="relative">
        <Hero />

        {/* Floating arrow – only visible while other sections are hidden */}
        {!sectionsVisible && (
          <button
            type="button"
            onClick={handleRevealClick}
            className="group absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full border border-emerald-400/70 bg-slate-950/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-emerald-50 shadow-xl backdrop-blur transition hover:bg-emerald-500/90"
          >
            <span className="hidden text-[11px] sm:inline">
              Continue to campus overview
            </span>
            <ChevronDown className="h-4 w-4 animate-bounce transition-transform group-hover:translate-y-0.5" />
          </button>
        )}
      </div>

      {/* Rest of the site – mounted ONLY after mouse/arrow interaction */}
      {sectionsVisible && (
        <div className="border-t border-slate-200/60 bg-muted/20">
          {/* Each section: animates when it ENTERS the viewport */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={sectionVariants}
          >
            <ProgressiveEducationSection />
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={sectionVariants}
          >
            <EventsPage />
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={sectionVariants}
          >
            <NewsPage />
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={sectionVariants}
          >
            <GraduatorsPage />
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={sectionVariants}
          >
            <FactsFiguresPage />
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={sectionVariants}
          >
            <CampusMapsPage />
          </motion.section>
        </div>
      )}
    </main>
  );
}
