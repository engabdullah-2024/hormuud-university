// app/development/page.tsx
"use client";

import Link from "next/link";
import { ArrowLeft, Hammer } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

export default function DevelopmentPage() {
  return (
    <main className="relative flex min-h-[70vh] items-center justify-center bg-gradient-to-b from-emerald-50 via-slate-50 to-white px-4 py-10 md:py-16">
      {/* background blur circle */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex justify-center">
        <div className="h-64 w-64 rounded-full bg-emerald-200/30 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-xl">
        <Card className="border-slate-200/80 bg-white/90 shadow-lg backdrop-blur-md">
          <CardHeader className="space-y-3 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
              <Hammer className="h-7 w-7" />
            </div>

            <Badge className="mx-auto border-emerald-200 bg-emerald-50 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Page in development
            </Badge>

            <CardTitle className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              We&apos;re still building this page
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4 text-center text-sm text-muted-foreground md:text-base">
            <p>
              The section you&apos;re trying to open is currently under active
              development as part of the new Hormuud University website.
            </p>
            <p>
              We&apos;re working on adding fresh content and improved layouts.
              Please check back soon — this page will be live in the coming
              days.
            </p>
          </CardContent>

          <CardFooter className="flex flex-col gap-3 border-t border-slate-100 pt-4 md:flex-row md:justify-between">
            <Button
              asChild
              variant="outline"
              className="w-full gap-2 md:w-auto"
            >
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
                Back to homepage
              </Link>
            </Button>

            <Button
              asChild
              className="w-full rounded-full bg-emerald-600 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 md:w-auto"
            >
              <Link href="/news">See latest HU updates</Link>
            </Button>
          </CardFooter>
        </Card>

        <p className="mt-4 text-center text-xs text-muted-foreground md:text-sm">
          If you reached this page by mistake, you can always navigate using the
          main menu at the top.
        </p>
      </div>
    </main>
  );
}
