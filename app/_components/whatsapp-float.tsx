"use client";

import Link from "next/link";

export function WhatsAppFloat() {
  const whatsAppUrl = "https://wa.me/252610818839";

  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      <Link
        href={whatsAppUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="pointer-events-auto group inline-flex items-center justify-center rounded-full p-1"
      >
        {/* Outer green glow ring */}
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-emerald-500 to-emerald-400 shadow-xl shadow-emerald-900/40 transition-transform group-hover:scale-110 sm:h-16 sm:w-16">
          
          {/* Middle white circle */}
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white sm:h-13 sm:w-13">
            
            {/* Inner WhatsApp Icon */}
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 sm:h-10 sm:w-10">
              <svg
                viewBox="0 0 32 32"
                className="h-5 w-5 fill-white sm:h-6 sm:w-6"
              >
                <path d="M16.01 3C9.39 3 4 8.39 4 15.01c0 2.64.86 5.08 2.33 7.06L4 29l7.21-2.3A11.97 11.97 0 0 0 16.01 27C22.63 27 28 21.61 28 14.99S22.63 3 16.01 3zm5.6 17.14c-.23.65-1.35 1.26-1.89 1.35-.48.07-1.1.1-1.78-.11-.41-.13-.94-.31-1.62-.61-2.85-1.23-4.7-4.12-4.85-4.32-.14-.19-1.16-1.54-1.16-2.94 0-1.39.73-2.07.99-2.35.26-.28.57-.35.76-.35h.55c.18 0 .41-.07.64.49.23.56.78 1.94.85 2.08.07.14.12.3.02.49-.09.19-.14.3-.28.46-.14.16-.3.36-.43.48-.14.14-.29.29-.13.56.16.28.71 1.17 1.53 1.89 1.06.94 1.96 1.24 2.25 1.38.29.14.46.12.63-.07.17-.19.73-.85.93-1.14.19-.28.39-.24.64-.14.26.09 1.65.78 1.93.92.28.14.47.21.54.33.07.11.07.66-.16 1.31z" />
              </svg>
            </span>

          </span>

        </span>
      </Link>
    </div>
  );
}
