"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import { HamburgerMenu } from "./hamburger-menu"
import { useState } from "react"
import { cn } from "@/lib/utils"

const carouselImages = [
  {
    id: 1,
    src: "/images/templates/devops-1.png",
    alt: "AI DevOps Tracker Build Master View",
  },
  {
    id: 2,
    src: "/images/templates/devops-2.png",
    alt: "DevOps Tracker Master Table",
  },
  {
    id: 3,
    src: "/images/templates/devops-3.png",
    alt: "Creator and Hero Archetypes",
  },
  {
    id: 4,
    src: "/images/templates/devops-4.png",
    alt: "Packages Deployment View",
  },
  {
    id: 5,
    src: "/images/templates/devops-5.png",
    alt: "Prompts and Build Interface",
  },
]

export function AIDevOpsDetailPage() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-6 bg-black/80 backdrop-blur-sm">
        <Link 
          href="/work" 
          className="flex items-center gap-2 text-white/60 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm tracking-wide">Back to Work</span>
        </Link>
        
        <h1 className="absolute left-1/2 -translate-x-1/2 text-lg md:text-xl font-light tracking-[0.2em] uppercase">
          AI DevOps Tracker: Lite
        </h1>
        
        <HamburgerMenu />
      </header>

      {/* Main Content */}
      <div className="pt-28 pb-16 px-6 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto">
          
          {/* Carousel */}
          <div className="relative mb-12">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-white/5 border border-white/10">
              <Image
                src={carouselImages[currentIndex].src}
                alt={carouselImages[currentIndex].alt}
                fill
                className="object-contain"
                priority
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 border border-white/20 flex items-center justify-center transition-all group"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 border border-white/20 flex items-center justify-center transition-all group"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </button>
            </div>

            {/* Carousel Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    currentIndex === index 
                      ? "bg-purple-500 w-8" 
                      : "bg-white/30 hover:bg-white/50"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Description Content */}
          <div className="prose prose-invert max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-light tracking-wide mb-4 text-purple-400">About this template</h2>
              <h3 className="text-xl font-medium mb-3 text-white">⚙️ AI DevOps Tracker: Lite (v2.1) — Structural Framework for AI Builders</h3>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-light tracking-wide mb-4 text-purple-400">🪶 What's Changed from v2.0 → v2.1</h2>
              <ul className="space-y-2 text-white/80 leading-relaxed">
                <li>✅ Introduced hierarchical structure across databases.</li>
                <li>✅ Added Archive Board grouped by Build Type.</li>
                <li>✅ Upgraded Deployment Board with subgrouping + status-based color logic.</li>
                <li>✅ Updated Prompt View to nest archetype-based hierarchy.</li>
                <li>✅ Updated Archetype View to group prompts with relational Role/Persona Archetype.</li>
                <li>❌ Removed Tone Logic and Prompt Health Formulas (now exclusive to Pro).</li>
              </ul>
              <p className="text-white/80 leading-relaxed mt-4">
                This 3rd version introduces an upgraded parent/sub-item framework across every database to emphasize clarity + structure. Designed for AI builders who want DevOps structure without my prompt-tone logic formula.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light tracking-wide mb-6 text-purple-400">⚙️ Core Databases (v2.1)</h2>
              
              <div className="space-y-6">
                <div className="border-l-2 border-purple-500/50 pl-6">
                  <h3 className="text-xl font-medium mb-2 text-white">Build Database</h3>
                  <p className="text-white/70 leading-relaxed">
                    The central hub for every development and creative task — tracking build type, deployment status, infrastructure, model, version, tags, repository links, and test cadence.
                  </p>
                </div>

                <div className="border-l-2 border-purple-500/50 pl-6">
                  <h3 className="text-xl font-medium mb-2 text-white">Prompts Database</h3>
                  <p className="text-white/70 leading-relaxed">
                    Each prompt is now displayed as a sub-item beneath its Archetype parent. A more visual, relationship-driven view replaces the former tone logic formulas.
                  </p>
                </div>

                <div className="border-l-2 border-purple-500/50 pl-6">
                  <h3 className="text-xl font-medium mb-2 text-white">Archetypes Database</h3>
                  <p className="text-white/70 leading-relaxed">
                    Parent Archetypes are grouped by Role/Persona. This board highlights visibility across archetype library and displays grouped prompt to tone/persona relationships.
                  </p>
                </div>

                <div className="border-l-2 border-purple-500/50 pl-6">
                  <h3 className="text-xl font-medium mb-2 text-white">Packages Database</h3>
                  <p className="text-white/70 leading-relaxed">
                    Tracks inputs marked as Packages by infrastructure types, dependencies, and/or integrations across projects. Includes fields for Deployment Status, Version, Infra Type, and Repository Links.
                  </p>
                </div>

                <div className="border-l-2 border-purple-500/50 pl-6">
                  <h3 className="text-xl font-medium mb-2 text-white">Deployment Board</h3>
                  <p className="text-white/70 leading-relaxed">
                    Formerly the "GitHub Tasks" view — with updated grouping + sub-grouping context for build category and deployment status. Additional color-conditioned indicators reflect current stage readiness.
                  </p>
                </div>

                <div className="border-l-2 border-purple-500/50 pl-6">
                  <h3 className="text-xl font-medium mb-2 text-white">Archives Database</h3>
                  <p className="text-white/70 leading-relaxed">
                    New addition to v2.1 — an archive view grouped by Build Type and filtered by archived items
                  </p>
                </div>

                <div className="border-l-2 border-purple-500/50 pl-6">
                  <h3 className="text-xl font-medium mb-2 text-white">Calendar View</h3>
                  <p className="text-white/70 leading-relaxed">
                    Displays deployment history and test cadences. More visibility for your iteration rhythm.
                  </p>
                </div>
              </div>
            </section>

            <section className="mt-10">
              <h2 className="text-2xl font-light tracking-wide mb-4 text-purple-400">🪴 What's Different from v3.0 (PRO)</h2>
              <p className="text-white/80 leading-relaxed">
                v2.1 is your organizational foundation — focused on clarity, structure, and simplified DevOps mapping.
              </p>
              <p className="text-white/80 leading-relaxed mt-2">
                v3.0 evolves into AI Archetype DevOps, where tone engineering and archetype linking meet prompt driven health analytics.
              </p>
            </section>

            {/* CTA Button */}
            <div className="mt-12 flex justify-center">
              <a
                href="https://www.notion.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "px-10 py-4 rounded-full bg-purple-600 hover:bg-purple-500",
                  "text-white text-base tracking-wider uppercase font-medium",
                  "transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.6)]"
                )}
              >
                Get Template
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
