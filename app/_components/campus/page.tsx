// app/campus/page.tsx
"use client";

import Image from "next/image";
import { MapPinned, Navigation2 } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Campus = {
  id: string;
  name: string;
  label: string;
  description: string;
  address: string;
  mapUrl: string;
  image: string; // preview image of the map
};

const campuses: Campus[] = [
  {
    id: "bulo-hubay",
    label: "Bulo-Hubay Campus",
    name: "Hormuud University – Bulo-Hubay Campus",
    description:
      "Main campus with core undergraduate programmes, student services and key administrative offices.",
    address: "BNZ04, Mogadishu, Somalia",
    // Replace with your real Google Maps embed URL
    mapUrl: "https://www.google.com/maps/embed?pb=YOUR_BULO_HUBAY_MAP_EMBED",
    image: "/images/campus/bulo-hubay-map.png",
  },
  {
    id: "postgraduate",
    label: "Postgraduate Campus",
    name: "Hormuud University – Postgraduate Center",
    description:
      "Dedicated space for postgraduate studies, research seminars and professional training.",
    address: "ZB4J+29G, Mogadishu, Somalia",
    mapUrl: "https://www.google.com/maps/embed?pb=YOUR_POSTGRAD_MAP_EMBED",
    image: "/images/campus/postgraduate-map.png",
  },
  {
    id: "banadir",
    label: "Banadir Campus",
    name: "Hormuud University – Banadir Campus",
    description:
      "Located near major hospitals and institutions, ideal for health and community-related programmes.",
    address: "27PX+FPR, Jidka Afgooye, Mogadishu, Somalia",
    mapUrl: "https://www.google.com/maps/embed?pb=YOUR_BANADIR_MAP_EMBED",
    image: "/images/campus/banadir-map.png",
  },
  {
    id: "km13",
    label: "KM-13 (Tredisha) Campus",
    name: "Hormuud University – KM-13 Campus",
    description:
      "Growing campus serving students living around KM-13 and the surrounding districts.",
    address: "KM-13, Mogadishu, Somalia",
    mapUrl: "https://www.google.com/maps/embed?pb=YOUR_KM13_MAP_EMBED",
    image: "/images/campus/km13-map.png",
  },
];

export default function CampusMapsPage() {
  return (
    <main className="min-h-screen bg-muted/30">
      <section className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 lg:px-6 lg:py-14">
        {/* Header */}
        <header className="space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
            <MapPinned className="h-4 w-4" />
            Campus Maps
          </div>
          <div className="space-y-1">
            <h1 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Find your way around Hormuud University
            </h1>
            <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
              Explore the locations of our different campuses in Mogadishu.
              Use the tabs to switch between campuses and view the map, address
              and quick directions.
            </p>
          </div>
        </header>

        {/* Tabs + map */}
        <Card className="border-slate-200 bg-background/90 shadow-sm">
          <CardHeader className="border-b bg-slate-50/80 px-4 py-3 md:px-6">
            <Tabs defaultValue={campuses[0]?.id} className="w-full">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <TabsList className="w-full justify-start gap-1 overflow-x-auto rounded-full bg-white p-1 md:w-auto">
                  {campuses.map((campus) => (
                    <TabsTrigger
                      key={campus.id}
                      value={campus.id}
                      className="rounded-full px-3 py-1.5 text-xs md:px-4 md:text-sm"
                    >
                      {campus.label}
                    </TabsTrigger>
                  ))}
                </TabsList>

                <Badge className="hidden border-emerald-200 bg-emerald-50 text-[11px] font-medium text-emerald-700 md:inline-flex">
                  Use the tabs to switch campuses
                </Badge>
              </div>

              {/* Map content */}
              {campuses.map((campus) => (
                <TabsContent key={campus.id} value={campus.id} className="pt-4">
                  <CardContent className="space-y-4 px-0 pb-4 md:px-2 md:pb-6">
                    {/* Top info row */}
                    <div className="flex flex-col items-start justify-between gap-4 px-4 md:flex-row md:items-center md:px-4 lg:px-6">
                      <div className="space-y-1">
                        <CardTitle className="text-base font-semibold text-slate-900 md:text-lg">
                          {campus.name}
                        </CardTitle>
                        <p className="max-w-xl text-xs text-muted-foreground md:text-sm">
                          {campus.description}
                        </p>
                        <p className="mt-1 text-xs font-medium text-slate-700 md:text-sm">
                          Address:{" "}
                          <span className="font-normal text-slate-600">
                            {campus.address}
                          </span>
                        </p>
                      </div>

                      <div className="flex flex-col items-end gap-2">
                        <div className="relative h-20 w-36 overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-sm md:h-24 md:w-44">
                          <Image
                            src={campus.image}
                            alt={campus.label + " map preview"}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="rounded-full border-emerald-300 text-xs font-medium text-emerald-700 hover:bg-emerald-50"
                        >
                          {/* This just opens the map in a new tab; set to your Google Maps share link */}
                          <a
                            href={campus.mapUrl.replace(
                              "/maps/embed?",
                              "/maps?"
                            )}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Open in Google Maps
                            <Navigation2 className="ml-1.5 h-3.5 w-3.5" />
                          </a>
                        </Button>
                      </div>
                    </div>

                    {/* Map iframe */}
                    <div className="px-4 md:px-4 lg:px-6">
                      <div className="relative w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm">
                        <div className="aspect-[16/9] md:aspect-[21/9]">
                          <iframe
                            src={campus.mapUrl}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="h-full w-full border-0"
                            allowFullScreen
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </TabsContent>
              ))}
            </Tabs>
          </CardHeader>
        </Card>

        {/* Footnote */}
        <p className="pt-2 text-center text-xs text-muted-foreground md:text-sm">
          Map locations are provided via Google Maps. Please confirm directions
          before travelling, especially during busy hours in Mogadishu.
        </p>
      </section>
    </main>
  );
}
