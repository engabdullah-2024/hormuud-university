import { CalendarDays, Clock, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const events = [
  {
    id: 1,
    title: "Graduation Ceremony 2025",
    dateLabel: "29 December 2025",
    day: "29",
    month: "Dec",
    time: "8:00 AM – 5:00 PM",
    location: "Hormuud University Main Campus",
    status: "Tentative",
    description:
      "We are excited to announce the upcoming Graduation Ceremony, celebrating our graduating students and their journey at HU.",
    href: "/events/graduation-2025",
    featured: true,
  },
  {
    id: 2,
    title: "New Student Orientation",
    dateLabel: "10 January 2026",
    day: "10",
    month: "Jan",
    time: "9:00 AM – 1:00 PM",
    location: "Main Auditorium",
    status: "Confirmed",
    description:
      "Welcome session for new students to discover campus life, services and academic support at HU.",
    href: "/events/orientation-2026",
    featured: false,
  },
  {
    id: 3,
    title: "Research & Innovation Day",
    dateLabel: "25 February 2026",
    day: "25",
    month: "Feb",
    time: "10:00 AM – 4:00 PM",
    location: "Innovation Hub",
    status: "Coming Soon",
    description:
      "A day dedicated to showcasing student and faculty research, projects and start-up ideas.",
    href: "/events/research-day-2026",
    featured: false,
  },
];

export default function EventsPage() {
  const featuredEvent = events.find((e) => e.featured);
  const otherEvents = events.filter((e) => !e.featured);

  return (
    <main className="min-h-screen bg-muted/30">
      <section className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 lg:px-6 lg:py-14">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div className="space-y-2">
            <Badge className="border-emerald-200 bg-emerald-50 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Upcoming events
            </Badge>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Stay close to what&apos;s happening at HU
            </h1>
            <p className="max-w-xl text-sm text-muted-foreground md:text-base">
              From graduation ceremonies to orientation and research days, keep
              track of key moments in the Hormuud University calendar.
            </p>
          </div>

          <Button
            asChild
            variant="outline"
            className="rounded-full border-emerald-300 text-xs font-medium text-emerald-700 hover:bg-emerald-50 md:text-sm"
          >
            <Link href="/events/all">
              Explore all upcoming events
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Layout: featured + list */}
        <div className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)]">
          {/* Featured event */}
          {featuredEvent && (
            <Card className="border-emerald-200/60 bg-background shadow-sm">
              <CardHeader className="flex flex-row items-start gap-4 border-b bg-gradient-to-r from-emerald-600 to-emerald-500 px-5 py-4 text-white">
                <div className="flex flex-col items-center justify-center rounded-lg bg-white/10 px-3 py-2 text-center">
                  <span className="text-2xl font-bold leading-none">
                    {featuredEvent.day}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.18em] text-emerald-100">
                    {featuredEvent.month}
                  </span>
                </div>
                <div className="space-y-1">
                  <CardTitle className="text-base font-semibold md:text-lg">
                    {featuredEvent.title}
                  </CardTitle>
                  <p className="text-xs text-emerald-50/90 md:text-sm">
                    {featuredEvent.description}
                  </p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 p-5 md:p-6">
                <div className="flex flex-wrap gap-4 text-xs text-muted-foreground md:text-sm">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-emerald-600" />
                    <span>{featuredEvent.dateLabel}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-emerald-600" />
                    <span>{featuredEvent.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-emerald-600" />
                    <span>{featuredEvent.location}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <Badge
                    variant="outline"
                    className="border-amber-300 bg-amber-50 text-[11px] font-medium text-amber-700"
                  >
                    {featuredEvent.status}
                  </Badge>
                  <Button
                    asChild
                    size="sm"
                    className="rounded-full bg-emerald-600 text-xs font-semibold text-white hover:bg-emerald-500"
                  >
                    <Link href={featuredEvent.href}>
                      Read more
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Other events */}
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
              More events
            </p>

            {otherEvents.length === 0 && (
              <Card className="border-dashed">
                <CardContent className="p-4 text-sm text-muted-foreground">
                  No other events have been announced yet. Please check back
                  soon.
                </CardContent>
              </Card>
            )}

            {otherEvents.map((event) => (
              <Card
                key={event.id}
                className="flex items-stretch border-slate-200 bg-background/80 shadow-sm transition-colors hover:border-emerald-200"
              >
                <div className="flex w-20 flex-col items-center justify-center border-r bg-slate-50 py-3 text-center">
                  <span className="text-lg font-semibold text-emerald-700">
                    {event.day}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                    {event.month}
                  </span>
                </div>

                <CardContent className="flex flex-1 flex-col justify-between gap-2 p-4">
                  <div className="space-y-1">
                    <h3 className="text-sm font-semibold text-slate-900">
                      {event.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {event.description}
                    </p>
                  </div>

                  <div className="mt-1 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-600">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-1">
                        <CalendarDays className="h-3.5 w-3.5 text-emerald-600" />
                        {event.dateLabel}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5 text-emerald-600" />
                        {event.time}
                      </span>
                    </div>

                    <Link
                      href={event.href}
                      className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 hover:underline"
                    >
                      Read more
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
