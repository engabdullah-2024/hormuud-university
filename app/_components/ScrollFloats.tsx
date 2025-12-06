"use client";

import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export function ScrollFloats() {
  const [showTop, setShowTop] = useState(false);
  const [showBottom, setShowBottom] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.body.scrollHeight;

      setShowTop(scrollTop > 300);
      setShowBottom(scrollTop + windowHeight < docHeight - 300);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  const scrollBottom = () =>
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });

  return (
    <>
      {/* Scroll to TOP */}
      {showTop && (
        <div className="pointer-events-none fixed right-4 top-24 z-50 sm:right-6">
          <button
            aria-label="Scroll to top"
            onClick={scrollTop}
            className="pointer-events-auto group inline-flex items-center justify-center rounded-full p-1"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-emerald-500 to-emerald-400 shadow-xl shadow-emerald-900/40 transition-transform hover:scale-110">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500">
                  <ChevronUp className="h-4 w-4 text-white animate-bounce" />
                </span>
              </span>
            </span>
          </button>
        </div>
      )}

      {/* Scroll to BOTTOM */}
      {showBottom && (
        <div className="pointer-events-none fixed bottom-24 right-4 z-50 sm:bottom-28 sm:right-6">
          <button
            aria-label="Scroll to bottom"
            onClick={scrollBottom}
            className="pointer-events-auto group inline-flex items-center justify-center rounded-full p-1"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-emerald-500 to-emerald-400 shadow-xl shadow-emerald-900/40 transition-transform hover:scale-110">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500">
                  <ChevronDown className="h-4 w-4 text-white animate-bounce" />
                </span>
              </span>
            </span>
          </button>
        </div>
      )}
    </>
  );
}
