"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

const mainNav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Admission", href: "/admission" },
  { label: "Academic", href: "/academic" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Facilities", href: "/facilities" },
  { label: "University Centers", href: "/university-centers" },
  { label: "Research", href: "/research" },
  { label: "FAQ", href: "/faq" },
];

const secondaryNav = [
  { label: "News", href: "/news" },
  { label: "HEMSI No.", href: "/hemsi" },
  { label: "HU Student Portal", href: "/portal" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 supports-[backdrop-filter]:backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:h-20 md:gap-6 md:px-6">
        {/* Left: logo only */}
        <Link href="/" className="flex flex-shrink-0 items-center">
          <div className="relative h-10 w-10 overflow-hidden rounded-md border bg-white shadow-sm md:h-12 md:w-12">
            <Image
              src="/hu.png"
              alt="Hormuud University"
              fill
              className="object-contain p-1.5"
              priority
            />
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden flex-1 items-center justify-center lg:flex">
          <div className="flex max-w-full flex-nowrap items-center gap-3 overflow-x-auto text-[13px] font-medium lg:gap-5 xl:gap-6">
            {mainNav.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === item.href
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative inline-flex h-10 items-center whitespace-nowrap px-1 text-xs md:text-[13px] transition-colors ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span className="relative leading-none">
                    {item.label}
                    <span
                      className={`pointer-events-none absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-emerald-600 transition-opacity ${
                        isActive
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                      }`}
                    />
                  </span>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Desktop right side: secondary links + Apply button */}
        <div className="hidden flex-shrink-0 items-center gap-3 md:flex">
          <div className="hidden items-center gap-3 text-[11px] text-muted-foreground xl:flex">
            {secondaryNav.map((item, index) => (
              <div key={item.href} className="flex items-center gap-3">
                {index > 0 && (
                  <Separator orientation="vertical" className="h-4" />
                )}
                <Link
                  href={item.href}
                  className="transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
          <Button
            asChild
            className="rounded-full bg-[#0b7a3b] px-4 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-[#0a6a35] md:px-5 md:text-sm"
          >
            <Link href="/apply">Apply now</Link>
          </Button>
        </div>

        {/* Mobile / tablet: Apply + menu */}
        <div className="flex flex-shrink-0 items-center gap-2 md:hidden">
          <Button
            asChild
            size="sm"
            className="rounded-full bg-[#0b7a3b] px-4 text-[11px] font-semibold text-white hover:bg-[#0a6a35]"
          >
            <Link href="/apply">Apply</Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="h-9 w-9 rounded-full"
              >
                <Menu className="h-4 w-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col gap-6">
              <div className="mt-4 flex items-center gap-3">
                <div className="relative h-9 w-9 overflow-hidden rounded-md border bg-white">
                  <Image
                    src="/hu.png"
                    alt="Hormuud University"
                    fill
                    className="object-contain p-1.5"
                  />
                </div>
              </div>

              <nav className="flex flex-col gap-2 text-sm font-medium">
                {mainNav.map((item) => {
                  const isActive =
                    item.href === "/"
                      ? pathname === item.href
                      : pathname.startsWith(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`rounded-md px-2 py-2 transition-colors ${
                        isActive
                          ? "bg-muted text-foreground"
                          : "text-foreground hover:bg-muted"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              <Separator />

              <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                {secondaryNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-md px-2 py-1.5 transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
