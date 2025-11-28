import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Newspaper,
  Tag,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type NewsItem = {
  id: number;
  title: string;
  category: "NEWS" | "EVENT";
  date: string;
  summary: string;
  image: string;
  href: string;
  highlight?: boolean;
  meta?: string;
};

const newsItems: NewsItem[] = [
  {
    id: 1,
    title:
      "Imtixaanka Aqbalaadda Jaamacadda ee Sannad-waxbarasheedka 2025–2026",
    category: "NEWS",
    date: "Nov 08, 2025",
    summary: "Fursad Deeq-waxbarasho iyo gelitaanka Hormuud University.",
    image: "/imt-hu.jpg",
    href: "/news/imtixaanka-aqbalka-2025",
    highlight: true,
    meta: "Fursad Deeq-waxbarasho",
  },
  {
    id: 2,
    title: "University Announces Appointment of New Vice-Chancellor",
    category: "NEWS",
    date: "Oct 08, 2025",
    summary:
      "Hormuud University is pleased to announce the appointment of Prof. Dr. Abdi Omar Shuriye as the new Vice-Chancellor.",
    image: "/sabriye.png",
    href: "/news/new-vice-chancellor-2025",
    highlight: true,
    meta: "Leadership & Governance",
  },
  {
    id: 3,
    title:
      "Hambalyo ardayda ku guuleysatay Deeqda Waxbarasho ee Jaamacadda Hormuud",
    category: "EVENT",
    date: "Nov 07, 2025",
    summary:
      "Waxaan hambalyo u diraynaa ardayda ku guuleysatay deeqaha waxbarasho ee sanadkan.",
    image: "/images/news-scholarship.jpg",
    href: "/news/deeq-waxbarasho-arday-2025",
    meta: "Scholarships",
  },
  {
    id: 4,
    title:
      "Xaflad wareejin ah oo Guddoomiyaha Cusub ee Jaamacadda Hormuud",
    category: "EVENT",
    date: "Nov 06, 2025",
    summary:
      "Xaflad si rasmi ah loogu wareejinayo xilka Guddoomiyaha Cusub Prof. Dr. Abdi Omar Shuriye.",
    image: "/images/news-handover.jpg",
    href: "/news/handover-ceremony-2025",
    meta: "Ceremony",
  },
  {
    id: 5,
    title: "Taqasusyada ay Jaamacaddu u Qaadanyso",
    category: "NEWS",
    date: "Aug 14, 2025",
    summary:
      "Warbixin kooban oo ku saabsan takhasusyada kala duwan ee lagu barto Hormuud University.",
    image: "/images/news-programs.jpg",
    href: "/news/programmes-overview-2025",
    meta: "Academic Programmes",
  },
];

export default function NewsPage() {
  const featured = newsItems.filter((n) => n.highlight);
  const others = newsItems.filter((n) => !n.highlight);

  return (
    <main className="min-h-screen bg-muted/30">
      <section className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 lg:px-6 lg:py-14">
        {/* Page header */}
        <header className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div className="space-y-2">
            <Badge className="border-emerald-200 bg-emerald-50 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700">
              News & Updates
            </Badge>
            <h1 className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              <Newspaper className="h-6 w-6 text-emerald-600" />
              <span>Stories from Hormuud University</span>
            </h1>
            <p className="max-w-xl text-sm text-muted-foreground md:text-base">
              Stay updated with the latest announcements, events, and success
              stories from our students, staff and leadership.
            </p>
          </div>

          <Button
            asChild
            variant="outline"
            className="rounded-full border-emerald-300 text-xs font-medium text-emerald-700 hover:bg-emerald-50 md:text-sm"
          >
            <Link href="/news/archive">
              View all news archive
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </header>

        {/* Layout: featured on left, list on right */}
        <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.1fr)]">
          {/* Featured news (two big cards) */}
          <div className="space-y-6">
            {featured.map((item) => (
              <Card
                key={item.id}
                className="overflow-hidden border-slate-200 bg-background shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative h-60 w-full overflow-hidden md:h-64">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <CardHeader className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-5 text-white">
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <Badge className="border-white/30 bg-white/15 text-[10px] uppercase tracking-[0.18em]">
                        {item.category}
                      </Badge>
                      {item.meta && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-black/35 px-2 py-0.5 text-[10px]">
                          <Tag className="h-3 w-3" />
                          {item.meta}
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1 text-[11px] text-emerald-100">
                        <CalendarDays className="h-3.5 w-3.5" />
                        {item.date}
                      </span>
                    </div>

                    <CardTitle className="text-base font-semibold md:text-lg">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                </div>

                <CardContent className="space-y-3 p-5 md:p-6">
                  <p className="text-sm text-muted-foreground">
                    {item.summary}
                  </p>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="rounded-full border-emerald-300 text-xs font-medium text-emerald-700 hover:bg-emerald-50"
                  >
                    <Link href={item.href}>
                      Read full story
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Side list of other news */}
          <aside className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
              Latest highlights
            </p>

            <div className="space-y-3">
              {others.map((item) => (
                <Card
                  key={item.id}
                  className="border-slate-200 bg-background/90 shadow-sm transition-colors hover:border-emerald-200"
                >
                  <CardContent className="flex flex-col gap-2 p-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500">
                      <span className="inline-flex items-center gap-1">
                        <Badge
                          variant="outline"
                          className="border-slate-300 bg-slate-50 text-[10px] tracking-[0.16em] text-slate-700"
                        >
                          {item.category}
                        </Badge>
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <CalendarDays className="h-3.5 w-3.5 text-emerald-600" />
                        {item.date}
                      </span>
                    </div>

                    <Link
                      href={item.href}
                      className="text-sm font-semibold text-slate-900 hover:text-emerald-700"
                    >
                      {item.title}
                    </Link>

                    <p className="text-xs text-muted-foreground line-clamp-3">
                      {item.summary}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
