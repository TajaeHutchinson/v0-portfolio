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
    src: "/images/templates/carousel-1.png",
    alt: "Master View and New Project Form",
  },
  {
    id: 2,
    src: "/images/templates/carousel-2.png",
    alt: "Digital Release Tracker Status Board",
  },
  {
    id: 3,
    src: "/images/templates/carousel-3.png",
    alt: "Published & Archived Projects",
  },
  {
    id: 4,
    src: "/images/templates/carousel-4.png",
    alt: "Presence & Priority Management",
  },
]

export function TemplateDetailPage() {
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
          Creative Digital Release Tracker
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
              <p className="text-white/80 leading-relaxed text-lg">
                The Creative Digital Release Tracker is centralized release operations system that helps creators and builders coordinate digital projects across platforms, managing the full lifecycle from idea to publication and archive.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-light tracking-wide mb-4 text-purple-400">💡 Who Is This For?</h2>
              <ul className="space-y-2 text-white/80 leading-relaxed">
                <li>Content Creators managing multiple releases</li>
                <li>Artists coordinating launches</li>
                <li>Indie builders or writers who need content or product rollout support</li>
                <li>Anyone who wants structure between idea and execution</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light tracking-wide mb-6 text-purple-400">⚙️ Core Databases</h2>
              
              <div className="space-y-6">
                <div className="border-l-2 border-purple-500/50 pl-6">
                  <h3 className="text-xl font-medium mb-2 text-white">Status Board</h3>
                  <p className="text-white/70 leading-relaxed">
                    Displays all projects grouped by status and priority across platforms, making it easy to see what needs attention and when.
                  </p>
                </div>

                <div className="border-l-2 border-purple-500/50 pl-6">
                  <h3 className="text-xl font-medium mb-2 text-white">Campaign Timeline</h3>
                  <p className="text-white/70 leading-relaxed">
                    Visualizes projects by date and reflects dependencies, allowing you to manage sequencing and release windows.
                  </p>
                </div>

                <div className="border-l-2 border-purple-500/50 pl-6">
                  <h3 className="text-xl font-medium mb-2 text-white">Master View</h3>
                  <p className="text-white/70 leading-relaxed">
                    Single source of truth. Centralized database for all projects, sorted by status, where release types, dates, and campaign windows are defined.
                  </p>
                </div>

                <div className="border-l-2 border-purple-500/50 pl-6">
                  <h3 className="text-xl font-medium mb-2 text-white">New Project Form</h3>
                  <p className="text-white/70 leading-relaxed">
                    Intake form that acts as a multi-database intake point. All inputs automatically propagate to their relevant views, eliminating duplicate entry + reducing cognitive load.
                  </p>
                </div>

                <div className="border-l-2 border-purple-500/50 pl-6">
                  <h3 className="text-xl font-medium mb-2 text-white">Presence & Priority</h3>
                  <p className="text-white/70 leading-relaxed">
                    Workload and visibility management that organizes projects by creation status for platform presence and priority level to support strategic sequencing and capacity awareness.
                  </p>
                </div>

                <div className="border-l-2 border-purple-500/50 pl-6">
                  <h3 className="text-xl font-medium mb-2 text-white">Published & Archived</h3>
                  <p className="text-white/70 leading-relaxed">
                    Historical record that holds completed and archived projects, grouped by status, providing clarity on what has shipped and what is no longer active.
                  </p>
                </div>
              </div>
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
