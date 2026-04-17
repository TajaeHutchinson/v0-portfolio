"use client"

import Link from "next/link"
import { ArrowLeft, ExternalLink, Clock } from "lucide-react"
import { HamburgerMenu } from "@/components/hamburger-menu"

export default function MusicMetadataAgentPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HamburgerMenu />

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

          {/* Badges */}
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs tracking-wider uppercase">
              <Clock className="w-3 h-3" />
              Built in 48 hours
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted border border-border/50 text-muted-foreground text-xs tracking-wider uppercase">
              Contra x Notion Hackathon
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-3 text-balance">
            Music Metadata Agent
          </h1>
          <p className="text-muted-foreground/60 text-sm tracking-wide mb-12">
            Notion AI Prototype — April 2026
          </p>

          {/* Description */}
          <div className="border-l-2 border-primary/30 pl-6 mb-12">
            <p className="text-foreground/80 leading-relaxed text-pretty text-base md:text-lg">
              A Notion AI-powered agent that automates music metadata management for
              independent musicians — from catalog organization to export-ready PRO metadata.
              Built in 48 hours for the Contra x Notion Hackathon.
            </p>
          </div>

          {/* Key findings */}
          <section className="mb-12">
            <h2 className="text-xs tracking-[0.3em] uppercase text-muted-foreground/40 mb-6">
              Key Findings
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

          {/* Tech stack */}
          <section className="mb-14">
            <h2 className="text-xs tracking-[0.3em] uppercase text-muted-foreground/40 mb-6">
              Tech Stack
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

          {/* CTA */}
          <a
            href="https://www.linkedin.com/posts/tajae-hutchinson_notioncustomagentbuildathon-ugcPost-7445005866770067456-ExHG?utm_source=share&utm_medium=member_desktop&rcm=ACoAABl5K8gBxSZ1w0NvnGlkGP0ICb4_9Ruw-m0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-primary/50 bg-primary/10 text-primary text-sm tracking-wider uppercase font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
          >
            Watch Prototype Demo
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </main>
    </div>
  )
}
