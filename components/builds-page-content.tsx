"use client"

import Link from "next/link"
import { ArrowLeft, ExternalLink, Clock, Zap, Music } from "lucide-react"
import { HamburgerMenu } from "./hamburger-menu"

const builds = [
  {
    id: 1,
    title: "Music Metadata Agent",
    subtitle: "Notion AI Prototype (April 2026)",
    badge: "Built in 48 hours",
    context: "Contra x Notion Hackathon",
    description:
      "A Notion AI-powered agent that automates music metadata management for independent musicians — from catalog organization to export-ready PRO metadata.",
    bullets: [
      "Proved musicians can benefit from automated metadata management",
      '"Automated Metadata" PRO export concept resonates',
      "Auto-import + AI generation works",
    ],
    stack: [
      { label: "Notion AI", icon: "N" },
      { label: "MCP Protocol", icon: "M" },
      { label: "Web Scraping", icon: "W" },
      { label: "TypeScript", icon: "TS" },
    ],
    cta: {
      label: "Watch Prototype Demo",
      href: "https://www.linkedin.com/posts/tajae-hutchinson_notioncustomagentbuildathon-ugcPost-7445005866770067456-ExHG?utm_source=share&utm_medium=member_desktop&rcm=ACoAABl5K8gBxSZ1w0NvnGlkGP0ICb4_9Ruw-m0",
    },
    accent: "from-primary/20 via-primary/5 to-transparent",
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

      {/* Hero */}
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

      {/* Builds */}
      <section className="py-8 px-6 pb-32">
        <div className="container mx-auto max-w-4xl flex flex-col gap-12">
          {builds.map((build) => (
            <article
              key={build.id}
              className="relative group rounded-2xl border border-border/50 bg-card overflow-hidden hover:border-primary/40 transition-all duration-500"
            >
              {/* Top gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${build.accent}`} />

              <div className="p-8 md:p-12">
                {/* Header row */}
                <div className="flex flex-wrap items-start gap-3 mb-2">
                  {/* Hackathon badge */}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs tracking-wider uppercase">
                    <Clock className="w-3 h-3" />
                    {build.badge}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted border border-border/50 text-muted-foreground text-xs tracking-wider uppercase">
                    {build.context}
                  </span>
                </div>

                <h3 className="text-2xl md:text-4xl font-bold tracking-tight mt-4 mb-1 group-hover:text-primary transition-colors duration-300">
                  {build.title}
                </h3>
                <p className="text-muted-foreground/60 text-sm tracking-wide mb-6">
                  {build.subtitle}
                </p>

                <p className="text-foreground/80 leading-relaxed mb-8 max-w-2xl text-pretty">
                  {build.description}
                </p>

                {/* Bullet points */}
                <div className="flex flex-col gap-3 mb-10">
                  {build.bullets.map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <p className="text-sm text-foreground/75 leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {build.stack.map((tech) => (
                    <span
                      key={tech.label}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-muted/60 border border-border/40 text-xs text-muted-foreground tracking-wide font-mono"
                    >
                      <span className="text-primary/70 font-bold text-[10px]">{tech.icon}</span>
                      {tech.label}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={build.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-primary/50 bg-primary/10 text-primary text-sm tracking-wider uppercase font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                >
                  {build.cta.label}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-primary/0 via-primary/60 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
