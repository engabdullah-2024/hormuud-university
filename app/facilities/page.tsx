// app/facilities/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  FlaskConical,
  ShieldCheck,
  Users,
  Wifi,
  HandHeart,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const labs = [
  {
    title: "University Electrical & Electronics Lab",
    description:
      "Modern lab for teaching electrical and electronics engineering – supporting practical experiments, design projects and final-year work.",
    image: "/electronic-lab.jpg", // replace with your real path
  },
  {
    title: "Civil Engineering Labs",
    description:
      "Labs for civil engineering students with surveying, materials, hydraulics and structural testing facilities for real-world learning.",
    image: "/civil.jpg",
  },
  {
    title: "Geo-technical Engineering Laboratory",
    description:
      "Field-focused lab where students study soil mechanics, foundations and earthworks through site visits and hands-on investigations.",
    image: "/geo.png",
  },
];

const campusLife = [
  {
    title: "Career Guidance Centre",
    description:
      "Personalised career guidance, CV clinics, interview prep and employer events to support students from first year to graduation.",
    image: "/career-guiance.jpeg",
  },
  {
    title: "Sports & Recreation",
    description:
      "Facilities for football, basketball and other sports that keep students active, healthy and connected outside the classroom.",
    image: "/sports.jpeg",
  },
  {
    title: "Cutting-edge Computer Labs",
    description:
      "High-speed labs for programming, design, simulations and research – available for class sessions and independent study.",
    image: "/cutting-edge.jpg",
  },
  {
    title: "Library: Gateway to Knowledge",
    description:
      "Thousands of print and digital resources, quiet study spaces and research support from dedicated librarians.",
    image: "/ourlibrary.jpeg",
  },
  {
    title: "Prayer Rooms & Mosque",
    description:
      "Calm, dedicated spaces for daily prayers and spiritual reflection at the heart of our campus.",
    image: "/prayer_room.jpg",
  },
  {
    title: "Wireless Connectivity Everywhere",
    description:
      "Campus-wide Wi-Fi so students can access online resources, LMS platforms and collaboration tools wherever they are.",
    image: "/wirless.webp",
  },
  {
    title: "Safety and Security: Our Priority",
    description:
      "Your safety is our top priority. With comprehensive security measures and fire safety protocols, we ensure a secure and worry-free environment. Our dedicated security team is always on duty, making sure that you can focus on what matters most - your education and personal growth.",
    image: "/security.png",
  },
  {
    title: "Engineering Laboratories: Innovate and Create",
    description:
      "Experience hands-on learning in our advanced engineering laboratories. Designed to bridge theory and practice, these labs offer specialized equipment and tools for a wide range of engineering disciplines. From robotics to renewable energy, our facilities are a playground for innovation, where you can experiment, design, and create the technologies of tomorrow.",
    image: "/engineering_laboratories.jpeg",
  },
];

export default function FacilitiesPage() {
  return (
    <main className="min-h-screen bg-muted/30">
      <section className="relative w-full overflow-hidden border-b bg-background">
        {/* Hero background */}
        <div className="absolute inset-0">
          <Image
            src="/building.jpg" // replace with real hero image
            alt="Hormuud University campus facilities"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/85 via-slate-950/80 to-slate-900/70" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 md:flex-row md:items-center md:py-20 lg:px-6">
          <div className="max-w-xl space-y-6 text-white">
            <Badge
              variant="outline"
              className="border-emerald-300/70 bg-white/5 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-100 backdrop-blur"
            >
              Campus Facilities
            </Badge>

            <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl">
              A campus designed
              <span className="block font-bold text-emerald-200">
                for learning, research & wellbeing
              </span>
            </h1>

            <p className="max-w-lg text-sm text-emerald-50/90 md:text-base">
              From quiet libraries and advanced engineering labs to sports
              fields and prayer spaces, Hormuud University&apos;s facilities are
              built to support the whole student — academically, professionally
              and personally.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-emerald-500 px-6 text-sm font-semibold shadow-lg shadow-emerald-900/40 hover:bg-emerald-400"
              >
                <Link href="#labs">Explore our labs</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-emerald-200/70 bg-white/5 text-sm text-emerald-50 backdrop-blur hover:bg-white/10"
              >
                <Link href="#campus-life">See campus life spaces</Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4 text-xs md:text-sm">
              <div className="space-y-1">
                <p className="font-semibold text-emerald-200">24/7</p>
                <p className="text-emerald-50/80">Library & study zones</p>
              </div>
              <div className="space-y-1">
                <p className="font-semibold text-emerald-200">10+</p>
                <p className="text-emerald-50/80">Specialised engineering labs</p>
              </div>
              <div className="space-y-1">
                <p className="font-semibold text-emerald-200">Full campus</p>
                <p className="text-emerald-50/80">Wi-Fi & student support</p>
              </div>
            </div>
          </div>

          {/* Library highlight card */}
          <div className="mt-4 w-full max-w-sm md:ml-auto md:mt-0">
            <Card className="border-emerald-200/40 bg-white/90 shadow-lg backdrop-blur-md">
              <CardHeader className="flex flex-row items-center gap-3 pb-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <BookOpen className="h-5 w-5" />
                </span>
                <div>
                  <CardTitle className="text-sm font-semibold">
                    Library & Learning Commons
                  </CardTitle>
                  <p className="text-xs text-muted-foreground">
                    Quiet spaces, group rooms and online databases.
                  </p>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 pt-0 text-sm text-muted-foreground">
                <ul className="space-y-1 text-xs md:text-sm">
                  <li>• Thousands of books, journals and e-resources</li>
                  <li>• Individual and group study rooms</li>
                  <li>• Research support and referencing guidance</li>
                </ul>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href="/library">Visit library page</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Engineering labs */}
      <section
        id="labs"
        className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 lg:px-6 lg:py-14"
      >
        <header className="space-y-2">
          <Badge className="border-slate-200 bg-slate-50 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-700">
            Engineering laboratories
          </Badge>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Hands-on spaces for practical learning
          </h2>
          <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
            Our engineering labs allow students to connect theory with
            real-world practice — through experiments, fieldwork and project-
            based learning.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {labs.map((lab) => (
            <Card
              key={lab.title}
              className="flex h-full flex-col overflow-hidden border-slate-200 bg-background/90 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative w-full overflow-hidden">
                <div className="aspect-[4/3]">
                  <Image
                    src={lab.image}
                    alt={lab.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
              <CardHeader className="space-y-1">
                <CardTitle className="text-sm font-semibold md:text-base">
                  {lab.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-4 text-xs text-muted-foreground md:text-sm">
                {lab.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Campus life & student support */}
      <section
        id="campus-life"
        className="mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-12 lg:px-6 lg:pb-16"
      >
        <header className="space-y-2">
          <Badge className="border-emerald-200 bg-emerald-50 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Student support & campus life
          </Badge>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Spaces that support every part of student life
          </h2>
          <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
            Beyond classrooms, Hormuud University offers supportive spaces for
            careers, wellbeing, worship, security and student leadership.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {campusLife.map((item) => (
            <Card
              key={item.title}
              className="flex h-full flex-col overflow-hidden border-slate-200 bg-background/95 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative w-full overflow-hidden">
                <div className="aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
              <CardHeader className="space-y-1">
                <CardTitle className="text-sm font-semibold md:text-base">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-4 text-xs text-muted-foreground md:text-sm">
                {item.description}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Safety / union highlight row */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="flex h-full flex-col border-emerald-200 bg-emerald-50/70">
            <CardHeader className="flex flex-row items-start gap-3 space-y-0">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 text-white">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div>
                <CardTitle className="text-sm font-semibold md:text-base">
                  Safety & Security: Our Priority
                </CardTitle>
                <p className="text-xs text-emerald-900/80 md:text-sm">
                  A dedicated security team, clear safety protocols and a
                  monitored campus so students can focus on learning and growth.
                </p>
              </div>
            </CardHeader>
          </Card>

          <Card className="flex h-full flex-col border-slate-200 bg-white">
            <CardHeader className="flex flex-row items-start gap-3 space-y-0">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-600 text-white">
                <Users className="h-5 w-5" />
              </span>
              <div>
                <CardTitle className="text-sm font-semibold md:text-base">
                  Student Union & Council
                </CardTitle>
                <p className="text-xs text-muted-foreground md:text-sm">
                  A clear policy framework that empowers student voices,
                  supports leadership and encourages inclusive participation in
                  campus decision-making.
                </p>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="mt-3"
                >
                  <Link href="/union-policy">Read union policy</Link>
                </Button>
              </div>
            </CardHeader>
          </Card>
        </div>

        {/* Icons mini-row */}
        <div className="mt-4 flex flex-wrap items-center gap-6 text-xs text-muted-foreground md:text-sm">
          <div className="inline-flex items-center gap-2">
            <Wifi className="h-4 w-4 text-emerald-600" />
            <span>High-speed Wi-Fi across campus</span>
          </div>
          <div className="inline-flex items-center gap-2">
            <HandHeart className="h-4 w-4 text-emerald-600" />
            <span>Student-centred wellbeing & support</span>
          </div>
          <div className="inline-flex items-center gap-2">
            <FlaskConical className="h-4 w-4 text-emerald-600" />
            <span>Research-ready labs and equipment</span>
          </div>
        </div>
      </section>
    </main>
  );
}
