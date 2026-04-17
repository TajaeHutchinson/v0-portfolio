"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink, Clock, ArrowRight, ArrowDown } from "lucide-react"
import { HamburgerMenu } from "@/components/hamburger-menu"

const slides = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-16%20at%2011.20.41%E2%80%AFPM-fwAqbP2btb1zYuYmp7wih5HMCXASHa.png",
    caption: "Agent UI — Notion AI interface running metadata generation",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-16%20at%2011.24.04%E2%80%AFPM-BTOHHyXuyv1aHhLifHnEf5gUUm8ETl.png",
    caption: "PRO export concept — automated metadata ready for PRO submission",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-16%20at%2011.25.36%E2%80%AFPM-CfOEcu0hvjh7arhWVDxvi8gxSSFOYz.png",
    caption: "Auto-import flow — web scraping feeding directly into Notion",
  },
]

export default function MusicMetadataAgentPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HamburgerMenu />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex-1 flex justify-start">
            <Link
              href="/builds"
              className="flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm tracking-wider uppercase">Builds</span>
            </Link>
          </div>
          <div className="flex-1 flex justify-end" />
        </div>
      </header>

      <main className="pt-32 pb-32 px-6">
        <div className="container mx-auto max-w-3xl">

          {/* ── 1. HERO ───────────────────────────────────────── */}
          <section className="mb-20">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs tracking-wider uppercase">
                <Clock className="w-3 h-3" />
                Built in 48 hours
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted border border-border/50 text-muted-foreground text-xs tracking-wider uppercase">
                Contra x Notion Hackathon
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-3 text-balance">
              Music Metadata Agent
            </h1>
            <p className="text-muted-foreground/60 text-sm tracking-wide mb-8">
              Notion AI Prototype — April 2026
            </p>

            <div className="border-l-2 border-primary/30 pl-6 mb-6">
              <p className="text-foreground/80 leading-relaxed text-pretty text-base md:text-lg">
                A Notion AI-powered agent that automates music metadata management for
                independent musicians — built as the automation layer inside a larger{" "}
                <strong className="text-foreground">Music Metadata Tracker system</strong>.
              </p>
            </div>

            {/* System callout */}
            <div className="rounded-xl bg-primary/5 border border-primary/20 px-6 py-5">
              <p className="text-xs tracking-[0.25em] uppercase text-primary/60 mb-2">
                Important context
              </p>
              <p className="text-sm text-foreground/75 leading-relaxed">
                This agent is not a standalone tool. It supports a larger{" "}
                <strong className="text-foreground">Music Metadata Tracker</strong> system —
                handling the repetitive, error-prone parts of metadata work so musicians can
                focus on the creative work.
              </p>
            </div>
          </section>

          {/* ── 2. SYSTEM DIAGRAM ────────────────────────────── */}
          <section className="mb-20">
            <h2 className="text-xs tracking-[0.3em] uppercase text-muted-foreground/40 mb-8">
              How the system works
            </h2>

            <div className="flex flex-col items-center gap-0">
              {/* Node: Web */}
              <div className="w-full max-w-sm rounded-xl border border-border/50 bg-muted/30 px-6 py-4 text-center">
                <p className="text-xs tracking-widest uppercase text-muted-foreground/50 mb-1">Input</p>
                <p className="font-semibold text-foreground/80">Web + Streaming Data</p>
                <p className="text-xs text-muted-foreground/50 mt-1">Song info scraped automatically</p>
              </div>

              {/* Arrow down */}
              <div className="flex flex-col items-center py-3 gap-1">
                <ArrowDown className="w-4 h-4 text-primary/50" />
              </div>

              {/* Node: Agent */}
              <div className="w-full max-w-sm rounded-xl border border-primary/40 bg-primary/10 px-6 py-5 text-center relative">
                <div className="absolute -top-px left-4 right-4 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                <p className="text-xs tracking-widest uppercase text-primary/70 mb-1">Agent</p>
                <p className="font-bold text-foreground text-lg">Music Metadata Agent</p>
                <p className="text-xs text-muted-foreground/60 mt-1">
                  Notion AI + MCP + TypeScript
                </p>
                <div className="flex flex-wrap justify-center gap-2 mt-3">
                  {["Auto-import", "AI generation", "PRO formatting"].map((label) => (
                    <span
                      key={label}
                      className="text-[10px] tracking-wide px-2 py-0.5 rounded bg-primary/20 border border-primary/30 text-primary/80"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow down */}
              <div className="flex flex-col items-center py-3 gap-1">
                <ArrowDown className="w-4 h-4 text-primary/50" />
              </div>

              {/* Node: Tracker */}
              <div className="w-full max-w-sm rounded-xl border border-border/50 bg-muted/30 px-6 py-5 text-center">
                <p className="text-xs tracking-widest uppercase text-muted-foreground/50 mb-1">System</p>
                <p className="font-bold text-foreground text-lg">Music Metadata Tracker</p>
                <p className="text-xs text-muted-foreground/50 mt-1">
                  Organized catalog, export-ready PRO metadata
                </p>
              </div>

              {/* Arrow down */}
              <div className="flex flex-col items-center py-3">
                <ArrowDown className="w-4 h-4 text-primary/50" />
              </div>

              {/* Node: Output */}
              <div className="w-full max-w-sm rounded-xl border border-border/50 bg-muted/30 px-6 py-4 text-center">
                <p className="text-xs tracking-widest uppercase text-muted-foreground/50 mb-1">Output</p>
                <p className="font-semibold text-foreground/80">Musician gets clean metadata</p>
                <p className="text-xs text-muted-foreground/50 mt-1">
                  Ready for PRO registration, distribution, licensing
                </p>
              </div>
            </div>
          </section>

          {/* ── 3. VISUAL SECTION ────────────────────────────── */}
          <section className="mb-20">
            <h2 className="text-xs tracking-[0.3em] uppercase text-muted-foreground/40 mb-8">
              Prototype visuals
            </h2>

            <div className="flex flex-col gap-6">
              {slides.map((slide, i) => (
                <div
                  key={i}
                  className="group relative rounded-xl border border-border/40 overflow-hidden bg-muted/20"
                >
                  <div className="relative w-full aspect-[16/9]">
                    <Image
                      src={slide.src}
                      alt={slide.caption}
                      fill
                      sizes="(max-width: 768px) 100vw, 768px"
                      className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 px-5 py-4">
                    <p className="text-xs text-muted-foreground/70 leading-relaxed">
                      <span className="font-mono text-primary/60 mr-2">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {slide.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── 4. KEY FINDINGS ──────────────────────────────── */}
          <section className="mb-20">
            <h2 className="text-xs tracking-[0.3em] uppercase text-muted-foreground/40 mb-6">
              Key findings
            </h2>
            <div className="flex flex-col gap-4">
              {[
                "Proved musicians can benefit from automated metadata management",
                '"Automated Metadata" PRO export concept resonates with independent artists',
                "Auto-import + AI generation works end-to-end within Notion",
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <p className="text-foreground/75 leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── 5. TECH STACK ────────────────────────────────── */}
          <section className="mb-16">
            <h2 className="text-xs tracking-[0.3em] uppercase text-muted-foreground/40 mb-6">
              Tech stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "Notion AI", icon: "N" },
                { label: "MCP Protocol", icon: "M" },
                { label: "Web Scraping", icon: "W" },
                { label: "TypeScript", icon: "TS" },
              ].map((tech) => (
                <span
                  key={tech.label}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-muted/60 border border-border/40 text-xs text-muted-foreground tracking-wide font-mono"
                >
                  <span className="text-primary/70 font-bold text-[10px]">{tech.icon}</span>
                  {tech.label}
                </span>
              ))}
            </div>
          </section>

          {/* ── 6. PRIMARY CTA ───────────────────────────────── */}
          <a
            href="https://www.linkedin.com/posts/tajae-hutchinson_notioncustomagentbuildathon-ugcPost-7445005866770067456-ExHG?utm_source=share&utm_medium=member_desktop&rcm=ACoAABl5K8gBxSZ1w0NvnGlkGP0ICb4_9Ruw-m0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full border border-primary/50 bg-primary/10 text-primary text-sm tracking-wider uppercase font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
          >
            Watch Prototype Demo
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </main>
    </div>
  )
}
