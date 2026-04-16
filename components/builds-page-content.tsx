"use client"

import Link from "next/link"
import { ArrowLeft, ExternalLink, Clock, Zap, Database } from "lucide-react"
import { HamburgerMenu } from "./hamburger-menu"

const versions = [
  {
    version: "v1.0",
    date: "Sept 2025",
    era: "Manual Logging Era",
    context: "Pre-MCP, basic API call tracking",
    bullets: ["API calls", "Model versions", "Costs"],
    paradigm: "Documentation as afterthought",
    free: true,
    docLabel: "View v1.0 Documentation",
    docHref: "https://www.notion.so/VERSION-1-0-EXPERIMENTAL-RELEASE-2be390d5ccca8024a692c64b932ecbcc",
    templateHref: null,
    templateLabel: null,
  },
  {
    version: "v2.0",
    date: "October 2025",
    era: "Version Control Awareness",
    context: "Prompt engineering becomes systematic",
    bullets: ["Prompt iteration history", "Performance tracking"],
    paradigm: "Documentation as development practice",
    free: true,
    docLabel: "View v2.0 Documentation",
    docHref: "https://www.notion.so/VERSION-2-0-PROMPT-HEALTH-RELEASE-2bf390d5ccca811294d8d23e4e6ebfbf",
    templateHref: null,
    templateLabel: null,
  },
  {
    version: "v2.1",
    date: "November 2025",
    era: "MCP Protocol Adoption",
    context: "Model Context Protocol standardizes tool integration",
    bullets: ["MCP server tracking", "Automated logging"],
    paradigm: "Documentation as infrastructure",
    free: true,
    docLabel: "View v2.1 Documentation",
    docHref: "https://www.notion.so/VERSION-2-1-DEEPER-RELATIONAL-HEALTH-LITE-RELEASE-2bf390d5ccca81cc9db6c9a61aaeeb24",
    templateHref: "https://www.notion.so/marketplace/templates/ai-dev-ops-tracker-lite",
    templateLabel: "Get v2.1 Free Template",
  },
  {
    version: "v3.0",
    date: "November 2025",
    era: "MCP Protocol Adoption + Deployment / Intentionality Mapping",
    context: "Model Context Protocol standardizes intentionality",
    bullets: ["MCP server tracking", "Automated logging", "Tone Architecture", "Intentionality mapping"],
    paradigm: "Documentation as infrastructure",
    free: false,
    docLabel: "View v3.0 PRO Documentation",
    docHref: "https://www.notion.so/VERSION-3-0-TONE-ARCHITECTURE-PRO-RELEASE-2c4390d5ccca81689c60d39c1b376a3c",
    templateHref: "https://www.notion.so/marketplace/templates/ai-archetype-devops-system-pro?cr=pro%3Atajae_hutchinson",
    templateLabel: "Get v3.0 PRO Template",
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
        <div className="container mx-auto max-w-4xl">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground/40 mb-4">
            Experiments &amp; Prototypes
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-balance leading-[1.05] mb-6">
            Things I built<br className="hidden md:block" /> to prove a point.
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl text-pretty">
            Fast prototypes, hackathon submissions, and proof-of-concept experiments. These
            are ideas in motion — built quickly, built intentionally.
          </p>
        </div>
      </section>

      {/* ── BUILD 1: Music Metadata Agent ─────────────────────────── */}
      <section className="py-8 px-6">
        <div className="container mx-auto max-w-4xl">
          <article className="relative group rounded-2xl border border-border/50 bg-card overflow-hidden hover:border-primary/40 transition-all duration-500">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-primary/20 via-primary/5 to-transparent" />

            <div className="p-8 md:p-12">
              <div className="flex flex-wrap items-start gap-3 mb-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs tracking-wider uppercase">
                  <Clock className="w-3 h-3" />
                  Built in 48 hours
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted border border-border/50 text-muted-foreground text-xs tracking-wider uppercase">
                  Contra x Notion Hackathon
                </span>
              </div>

              <h3 className="text-2xl md:text-4xl font-bold tracking-tight mt-4 mb-1 group-hover:text-primary transition-colors duration-300">
                Music Metadata Agent
              </h3>
              <p className="text-muted-foreground/60 text-sm tracking-wide mb-6">
                Notion AI Prototype (April 2026)
              </p>

              <p className="text-foreground/80 leading-relaxed mb-8 max-w-2xl text-pretty">
                A Notion AI-powered agent that automates music metadata management for
                independent musicians — from catalog organization to export-ready PRO metadata.
              </p>

              <div className="flex flex-col gap-3 mb-10">
                {[
                  "Proved musicians can benefit from automated metadata management",
                  '"Automated Metadata" PRO export concept resonates',
                  "Auto-import + AI generation works",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <p className="text-sm text-foreground/75 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-10">
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

            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-primary/0 via-primary/60 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </article>
        </div>
      </section>

      {/* ── BUILD 2: AI DevOps Tracker ────────────────────────────── */}
      <section className="py-12 px-6 pb-32">
        <div className="container mx-auto max-w-4xl">
          <article className="relative rounded-2xl border border-border/50 bg-card overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

            <div className="p-8 md:p-12">
              {/* Title */}
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted border border-border/50 text-muted-foreground text-xs tracking-wider uppercase">
                  <Database className="w-3 h-3" />
                  Evolution Archive
                </span>
              </div>

              <h3 className="text-2xl md:text-4xl font-bold tracking-tight mt-4 mb-2">
                AI DevOps Tracker
              </h3>
              <p className="text-muted-foreground/60 text-sm tracking-wide mb-8">
                Documenting how AI development practices evolved in real-time
              </p>

              {/* Philosophy */}
              <div className="border-l-2 border-primary/30 pl-6 mb-12 flex flex-col gap-5">
                <p className="text-foreground/75 leading-relaxed text-pretty">
                  AI development is moving faster than any field in history. In 6 months, we went
                  from manual API logging to multi-agent orchestration.
                </p>
                <p className="text-foreground/75 leading-relaxed text-pretty">
                  Most people just update their tools. I document <em>WHY</em> each version changed.
                </p>
                <p className="text-foreground/75 leading-relaxed text-pretty">
                  This isn&apos;t just a tracker. It&apos;s a historical record of how the field evolved.
                </p>
              </div>

              {/* Version timeline */}
              <div className="relative flex flex-col gap-0 mb-14">
                {/* Vertical line */}
                <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border/40" aria-hidden="true" />

                {versions.map((v, i) => (
                  <div key={v.version} className="relative pl-10 pb-10 last:pb-0 group/ver">
                    {/* Dot */}
                    <div className={`absolute left-0 top-1 w-4 h-4 rounded-full border-2 flex-shrink-0 transition-colors duration-300 ${v.free ? "border-primary/60 bg-background group-hover/ver:bg-primary/20" : "border-foreground/40 bg-background group-hover/ver:border-primary/60"}`} />

                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-xs font-mono text-primary/80 tracking-widest uppercase">
                        {v.version}
                      </span>
                      <span className="text-xs text-muted-foreground/50">{v.date}</span>
                      {!v.free && (
                        <span className="px-2 py-0.5 rounded text-[10px] tracking-wider uppercase bg-primary/10 border border-primary/30 text-primary font-medium">
                          PRO
                        </span>
                      )}
                      {v.free && (
                        <span className="px-2 py-0.5 rounded text-[10px] tracking-wider uppercase bg-muted/80 border border-border/40 text-muted-foreground">
                          Free
                        </span>
                      )}
                    </div>

                    <h4 className="text-base md:text-lg font-semibold tracking-tight mb-0.5">
                      {v.era}
                    </h4>
                    <p className="text-xs text-muted-foreground/60 mb-3 italic">{v.context}</p>

                    <ul className="flex flex-col gap-1.5 mb-3">
                      {v.bullets.map((b, bi) => (
                        <li key={bi} className="flex items-start gap-2">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-primary/50 flex-shrink-0" />
                          <span className="text-sm text-foreground/65">{b}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="text-xs text-muted-foreground/40 tracking-wide italic mb-4">
                      Paradigm: {v.paradigm}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      <a
                        href={v.docHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-primary/80 hover:text-primary border-b border-primary/20 hover:border-primary pb-0.5 transition-colors duration-200"
                      >
                        {v.docLabel}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      {v.templateHref && (
                        <a
                          href={v.templateHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-1.5 text-xs border-b pb-0.5 transition-colors duration-200 ${v.free ? "text-muted-foreground hover:text-primary border-border/30 hover:border-primary/30" : "text-primary hover:text-primary border-primary/40 hover:border-primary font-medium"}`}
                        >
                          {v.templateLabel}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Why This Matters */}
              <div className="rounded-xl border border-border/40 bg-muted/30 p-6 md:p-8">
                <h4 className="text-xs tracking-[0.3em] uppercase text-muted-foreground/50 mb-4">
                  Why This Matters
                </h4>
                <p className="text-foreground/80 leading-relaxed mb-6 text-pretty">
                  This archive shows you <em>HOW</em> the field evolved. You can see:
                </p>

                <ul className="flex flex-col gap-3 mb-8">
                  {[
                    "When MCP became standard (v2.1)",
                    "When agents replaced single API calls (v2.2)",
                    "How AI documentation practices matured over 6 months",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                      <span className="text-sm text-foreground/70">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-border/30 pt-6">
                  <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground/40 mb-4">
                    Using the Archive
                  </p>
                  <ul className="flex flex-col gap-2">
                    {[
                      "Download latest version → Use in your projects",
                      "Study evolution → Understand industry trends",
                      "Reference historical versions → See how practices changed",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-muted-foreground/30 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground/60">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}
