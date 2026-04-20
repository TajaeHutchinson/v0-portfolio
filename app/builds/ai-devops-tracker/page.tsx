"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ArrowLeft, ExternalLink, ChevronDown } from "lucide-react"
import { HamburgerMenu } from "@/components/hamburger-menu"

const versions = [
  {
    version: "v1.0",
    date: "Sept 2025",
    era: "Manual Logging Era",
    context: "Pre-MCP, basic API call tracking",
    description:
      "The first iteration was purely reactive — a place to log what happened after each AI session. No automation, no structure. Just a record.",
    bullets: ["API call logging", "Model version tracking", "Cost tracking"],
    paradigm: "Documentation as afterthought",
    free: true,
    docHref: "https://www.notion.so/VERSION-1-0-EXPERIMENTAL-RELEASE-2be390d5ccca8024a692c64b932ecbcc",
    docLabel: "View v1.0 Documentation",
    templateHref: null,
    templateLabel: null,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-01-01%20at%206.56.19%E2%80%AFPM-REjble1eFDoblUvkDK4Hp90CPP2dR9.png",
  },
  {
    version: "v2.0",
    date: "October 2025",
    era: "Version Control Awareness",
    context: "Prompt engineering becomes systematic",
    description:
      "Prompt iteration started demanding its own version control. v2.0 introduced history tracking and performance scoring — treating prompts like code.",
    bullets: ["Prompt iteration history", "Performance scoring", "Version diffs"],
    paradigm: "Documentation as development practice",
    free: true,
    docHref: "https://www.notion.so/VERSION-2-0-PROMPT-HEALTH-RELEASE-2bf390d5ccca811294d8d23e4e6ebfbf",
    docLabel: "View v2.0 Documentation",
    templateHref: null,
    templateLabel: null,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-12-23%20at%204.35.59%E2%80%AFPM-ijy9xzBJK2zkNrngZYhXk9aWSLpxLb.png",
  },
  {
    version: "v2.1",
    date: "November 2025",
    era: "MCP Protocol Adoption",
    context: "Model Context Protocol standardizes tool integration",
    description:
      "MCP changed how tools talked to models. v2.1 adapted the system to track server connections, automated logging, and the new tool-use paradigm.",
    bullets: ["MCP server tracking", "Automated logging", "Tool integration mapping"],
    paradigm: "Documentation as infrastructure",
    free: true,
    docHref: "https://www.notion.so/VERSION-2-1-DEEPER-RELATIONAL-HEALTH-LITE-RELEASE-2bf390d5ccca81cc9db6c9a61aaeeb24",
    docLabel: "View v2.1 Documentation",
    templateHref: "https://www.notion.so/marketplace/templates/ai-dev-ops-tracker-lite",
    templateLabel: "Get v2.1 Free Template",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-12-23%20at%203.57.39%E2%80%AFPM-450nIrDe9Vnbd3qimZaIR66OrFbSgL.png",
  },
  {
    version: "v3.0",
    date: "November 2025",
    era: "Tone Architecture + Intentionality Mapping",
    context: "Intentionality becomes a first-class system concern",
    description:
      "The biggest leap. v3.0 introduced the 3-layer Define → Attune → Deploy architecture. Archetypes, tone scoring, and intentionality mapping turned the tracker into a full AI DevOps system.",
    bullets: [
      "3-layer pipeline (Define / Attune / Deploy)",
      "Archetype + persona management",
      "Tone Architecture scoring",
      "Intentionality mapping",
      "Deployment packaging",
    ],
    paradigm: "Documentation as identity infrastructure",
    free: false,
    docHref: "https://www.notion.so/VERSION-3-0-TONE-ARCHITECTURE-PRO-RELEASE-2c4390d5ccca81689c60d39c1b376a3c",
    docLabel: "View v3.0 PRO Documentation",
    templateHref: "https://www.notion.so/marketplace/templates/ai-archetype-devops-system-pro?cr=pro%3Atajae_hutchinson",
    templateLabel: "Get v3.0 PRO Template",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Copy%20of%20Time%20Signature%20Genre%20DAW%20Used%20Tone%20Tags%20Lyrics%20Stem%20Folder%20Link%20Final%20Audio%20Artwork%20Link%20Loudness%20%28LUFS%29%20Mixed%20%20Mastered%20Checkboxes%20Notes%20%288%29-ubgc1aE3P0xTZcRzWD5UeGslvZQ8nu.png",
  },
]

function VersionBlock({ v }: { v: typeof versions[number] }) {
  const [open, setOpen] = useState(v.version === "v3.0")

  return (
    <div
      className={`relative rounded-xl border transition-all duration-300 overflow-hidden ${
        open
          ? v.free
            ? "border-border/70 bg-card"
            : "border-primary/40 bg-primary/5 shadow-[0_0_24px_-8px_hsl(var(--primary)/0.3)]"
          : "border-border/40 bg-muted/20 hover:border-border/60"
      }`}
    >
      {/* Header — always visible */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left group"
        aria-expanded={open}
      >
        <div className="flex items-center gap-4">
          <span
            className={`font-mono text-sm tracking-widest uppercase font-bold ${
              v.free ? "text-primary/80" : "text-primary"
            }`}
          >
            {v.version}
          </span>
          <div className="flex flex-col">
            <span className="font-semibold text-foreground/95 leading-snug">{v.era}</span>
            <span className="text-xs text-muted-foreground/60 mt-0.5">{v.date} &middot; {v.context}</span>
          </div>
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          {v.free ? (
            <span className="hidden sm:inline px-2 py-0.5 rounded text-[10px] tracking-widest uppercase bg-muted border border-border/50 text-muted-foreground">
              Free
            </span>
          ) : (
            <span className="hidden sm:inline px-2 py-0.5 rounded text-[10px] tracking-widest uppercase bg-primary/15 border border-primary/40 text-primary font-semibold">
              PRO
            </span>
          )}
          <ChevronDown
            className={`w-4 h-4 text-muted-foreground/50 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </div>
      </button>

      {/* Expandable body */}
      {open && (
        <div className="px-6 pb-7 flex flex-col gap-6 border-t border-border/30 pt-6">
          <p className="text-foreground/80 leading-relaxed text-pretty">{v.description}</p>

          {/* Bullets */}
          <ul className="flex flex-col gap-2">
            {v.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <span className="text-sm text-foreground/80 leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>

          {/* Paradigm label */}
          <p className="text-xs text-muted-foreground/50 italic tracking-wide">
            Paradigm shift: <span className="text-muted-foreground/70 not-italic">{v.paradigm}</span>
          </p>

          {/* Version screenshot */}
          {v.image && (
            <div className="relative w-full rounded-lg overflow-hidden border border-border/40 aspect-[16/9]">
              <Image
                src={v.image}
                alt={`${v.version} — ${v.era}`}
                fill
                sizes="(max-width: 768px) 100vw, 720px"
                className="object-cover object-top"
              />
            </div>
          )}

          {/* Links */}
          <div className="flex flex-wrap gap-5 pt-1">
            <a
              href={v.docHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-primary/80 hover:text-primary border-b border-primary/25 hover:border-primary pb-0.5 transition-colors duration-200"
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
                    : "text-primary border-primary/40 hover:border-primary font-semibold"
                }`}
              >
                {v.templateLabel}
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

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

          {/* Badges */}
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted border border-border/50 text-muted-foreground text-xs tracking-wider uppercase">
              Evolution Archive
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted border border-border/50 text-muted-foreground text-xs tracking-wider uppercase">
              Ongoing
            </span>
          </div>

          {/* Hero */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-3 text-balance">
            AI DevOps Evolution
          </h1>
          <p className="text-muted-foreground text-sm tracking-wide mb-4">
            Versioned Notion Systems — Sept to Nov 2025
          </p>

          {/* Framing statement */}
          <div className="border-l-2 border-primary/50 pl-6 mb-16 flex flex-col gap-4">
            <p className="text-foreground/90 leading-relaxed text-pretty text-base md:text-lg font-medium">
              This is a system evolution archive, not just a tool.
            </p>
            <p className="text-foreground/75 leading-relaxed text-pretty">
              AI development moved faster than any field in history. In 6 months we went from
              manually logging API calls to running multi-agent orchestration with tone
              architecture and intentionality mapping.
            </p>
            <p className="text-foreground/75 leading-relaxed text-pretty">
              Most people updated their tools. I documented <em>why</em> each version had to change.
            </p>
          </div>

          {/* Timeline section */}
          <section className="mb-16">
            <h2 className="text-sm font-semibold tracking-[0.25em] uppercase text-foreground/70 mb-6">
              System Evolution — Version History
            </h2>

            {/* Axis label strip */}
            <div className="flex items-center gap-3 mb-6 text-xs text-muted-foreground/40 tracking-widest uppercase">
              <span>Sept 2025</span>
              <div className="flex-1 h-px bg-border/30" />
              <span>Nov 2025</span>
            </div>

            <div className="flex flex-col gap-3">
              {versions.map((v) => (
                <VersionBlock key={v.version} v={v} />
              ))}
            </div>
          </section>

          {/* Why This Matters */}
          <section className="rounded-xl border border-border/40 bg-muted/30 p-6 md:p-8">
            <h2 className="text-sm font-semibold tracking-[0.25em] uppercase text-foreground/70 mb-5">
              Why This Matters
            </h2>
            <p className="text-foreground/85 leading-relaxed mb-6 text-pretty">
              This archive shows <em>how</em> the field evolved — not just what exists today.
              You can pinpoint:
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              {[
                "When MCP became the standard for tool integration (v2.1)",
                "When agents replaced single API calls as the primary unit of work",
                "How AI documentation practices matured from reactive logging to infrastructure",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                  <span className="text-sm text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
            <div className="border-t border-border/30 pt-6">
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground/50 mb-4">
                Using the Archive
              </p>
              <ul className="flex flex-col gap-2">
                {[
                  "Download the latest version to use in your own projects",
                  "Study the evolution to understand where the industry is heading",
                  "Reference historical versions to see how practices changed in real time",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 w-1 h-1 rounded-full bg-muted-foreground/30 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

        </div>
      </main>
    </div>
  )
}
