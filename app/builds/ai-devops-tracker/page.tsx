"use client"

import Link from "next/link"
import { ArrowLeft, ExternalLink, Database } from "lucide-react"
import { HamburgerMenu } from "@/components/hamburger-menu"

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

export default function AIDevOpsTrackerPage() {
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

          {/* Badge */}
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted border border-border/50 text-muted-foreground text-xs tracking-wider uppercase">
              <Database className="w-3 h-3" />
              Evolution Archive
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted border border-border/50 text-muted-foreground text-xs tracking-wider uppercase">
              Ongoing
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-3 text-balance">
            AI DevOps Evolution Tracker
          </h1>
          <p className="text-muted-foreground/60 text-sm tracking-wide mb-12">
            Sept – Nov 2025
          </p>

          {/* Philosophy */}
          <div className="border-l-2 border-primary/30 pl-6 mb-14 flex flex-col gap-4">
            <p className="text-foreground/80 leading-relaxed text-pretty text-base md:text-lg">
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
          <section className="mb-14">
            <h2 className="text-xs tracking-[0.3em] uppercase text-muted-foreground/40 mb-8">
              Version History
            </h2>

            <div className="relative flex flex-col">
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border/40" aria-hidden="true" />

              {versions.map((v) => (
                <div key={v.version} className="relative pl-10 pb-10 last:pb-0 group">
                  <div
                    className={`absolute left-0 top-1 w-4 h-4 rounded-full border-2 flex-shrink-0 transition-colors duration-300 ${
                      v.free
                        ? "border-primary/60 bg-background group-hover:bg-primary/20"
                        : "border-foreground/40 bg-background group-hover:border-primary/60"
                    }`}
                  />

                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-primary/80 tracking-widest uppercase">
                      {v.version}
                    </span>
                    <span className="text-xs text-muted-foreground/50">{v.date}</span>
                    {v.free ? (
                      <span className="px-2 py-0.5 rounded text-[10px] tracking-wider uppercase bg-muted/80 border border-border/40 text-muted-foreground">
                        Free
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded text-[10px] tracking-wider uppercase bg-primary/10 border border-primary/30 text-primary font-medium">
                        PRO
                      </span>
                    )}
                  </div>

                  <h3 className="text-base md:text-lg font-semibold tracking-tight mb-0.5">
                    {v.era}
                  </h3>
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

                  <div className="flex flex-wrap gap-4">
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
                        className={`inline-flex items-center gap-1.5 text-xs border-b pb-0.5 transition-colors duration-200 ${
                          v.free
                            ? "text-muted-foreground hover:text-primary border-border/30 hover:border-primary/30"
                            : "text-primary hover:text-primary border-primary/40 hover:border-primary font-medium"
                        }`}
                      >
                        {v.templateLabel}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Why This Matters */}
          <div className="rounded-xl border border-border/40 bg-muted/30 p-6 md:p-8">
            <h2 className="text-xs tracking-[0.3em] uppercase text-muted-foreground/50 mb-4">
              Why This Matters
            </h2>
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
      </main>
    </div>
  )
}
