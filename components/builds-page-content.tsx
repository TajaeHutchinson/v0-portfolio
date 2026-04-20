"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Zap } from "lucide-react"
import { HamburgerMenu } from "./hamburger-menu"

const builds = [
  {
    slug: "music-metadata-agent",
    title: "Music Metadata Agent",
    date: "April 2026",
    synopsis:
      "A Notion AI agent that automates music metadata for independent musicians — the automation layer inside the Music Metadata Tracker system.",
    tags: ["Notion AI", "MCP Protocol", "TypeScript", "Web Scraping"],
    badge: "Hackathon",
    preview: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-16%20at%2011.24.20%E2%80%AFPM-qtJhf9RPwH5KHBaZEVmNw0seqNxCd9.png",
  },
  {
    slug: "ai-devops-tracker",
    title: "AI DevOps Evolution",
    date: "Sept – Nov 2025",
    synopsis:
      "A documentation archive mapping how AI DevOps practices evolved through versioned systems — from manual logging to tone architecture and intentionality mapping.",
    tags: ["Notion", "AI Documentation", "MCP", "Systems Design"],
    badge: "Ongoing",
    preview: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Copy%20of%20Time%20Signature%20Genre%20DAW%20Used%20Tone%20Tags%20Lyrics%20Stem%20Folder%20Link%20Final%20Audio%20Artwork%20Link%20Loudness%20%28LUFS%29%20Mixed%20%20Mastered%20Checkboxes%20Notes%20%288%29-ubgc1aE3P0xTZcRzWD5UeGslvZQ8nu.png",
  },
]

export function BuildsPageContent() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HamburgerMenu />

      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex-1 flex justify-start">
            <Link
              href="/"
              className="flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm tracking-wider uppercase">Back</span>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Zap className="w-5 h-5 text-primary/80" />
            <h1 className="text-xl md:text-2xl font-light tracking-wider uppercase">Builds</h1>
          </div>

          <div className="flex-1 flex justify-end" />
        </div>
      </header>

      {/* Page hero */}
      <section className="pt-36 pb-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground/40 mb-4">
            Experiments &amp; Prototypes
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-balance leading-[1.05] mb-6">
            Things I built<br className="hidden md:block" />
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl text-pretty">
            Prototypes and proof-of-concept experiments.
          </p>
        </div>
      </section>

      {/* Card grid */}
      <section className="px-6 pb-32">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {builds.map((build) => (
              <Link
                key={build.slug}
                href={`/builds/${build.slug}`}
                className="group relative flex flex-col rounded-2xl border border-border/50 bg-card overflow-hidden
                           transition-all duration-300 ease-out
                           hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-[0_0_32px_-4px_hsl(var(--primary)/0.2)]"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Image preview */}
                {build.preview && (
                  <div className="relative w-full h-44 overflow-hidden bg-muted/30">
                    <Image
                      src={build.preview}
                      alt={`${build.title} preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  </div>
                )}

                <div className="flex flex-col gap-5 p-7 flex-1">
                  {/* Meta row */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground/50 tracking-wide font-mono">
                      {build.date}
                    </span>
                    <span className="text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full border border-border/50 bg-muted/40 text-muted-foreground/60">
                      {build.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight leading-snug group-hover:text-primary transition-colors duration-300">
                    {build.title}
                  </h3>

                  {/* Synopsis */}
                  <p className="text-sm text-muted-foreground leading-relaxed text-pretty flex-1">
                    {build.synopsis}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {build.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2.5 py-1 rounded-md bg-muted/60 border border-border/40 text-xs text-muted-foreground tracking-wide font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom arrow indicator */}
                <div className="flex items-center justify-end px-7 py-4 border-t border-border/30">
                  <span className="text-xs tracking-widest uppercase text-muted-foreground/40 group-hover:text-primary transition-colors duration-300">
                    View project
                  </span>
                  <svg
                    className="ml-2 w-3.5 h-3.5 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-300"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
