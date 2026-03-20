"use client"

import Image from "next/image"
import Link from "next/link"
import { AboutSection } from "./about-section"

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden py-20">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Icon layout — same structure on all screen sizes: 4 absolute corners + centered headshot */}
      <div className="relative w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] md:w-[560px] md:h-[560px] lg:w-[700px] lg:h-[700px]">

        {/* Top-left — Templates */}
        <Link href="/templates" className="absolute top-0 left-0 z-10 group flex flex-col items-center gap-1">
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 transition-transform duration-500 group-hover:rotate-[360deg]" style={{ transitionDuration: "0.5s" }}>
            <Image src="/images/brain-icon.png" alt="Templates" width={96} height={96} className="w-full h-full object-contain" />
          </div>
          <span className="text-[10px] sm:text-xs tracking-widest uppercase text-muted-foreground group-hover:text-primary transition-colors">Templates</span>
        </Link>

        {/* Top-right — Music */}
        <Link href="/music" className="absolute top-0 right-0 z-10 group flex flex-col items-center gap-1">
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 transition-transform duration-500 group-hover:rotate-[360deg]" style={{ transitionDuration: "0.5s" }}>
            <Image src="/images/eye-icon.png" alt="Music" width={96} height={96} className="w-full h-full object-contain" />
          </div>
          <span className="text-[10px] sm:text-xs tracking-widest uppercase text-muted-foreground group-hover:text-primary transition-colors">Music</span>
        </Link>

        {/* Bottom-left — Contact */}
        <Link href="/contact" className="absolute bottom-0 left-0 z-10 group flex flex-col items-center gap-1">
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 transition-transform duration-500 group-hover:rotate-[360deg]" style={{ transitionDuration: "0.5s" }}>
            <Image src="/images/contact-icon.png" alt="Contact" width={96} height={96} className="w-full h-full object-contain" />
          </div>
          <span className="text-[10px] sm:text-xs tracking-widest uppercase text-muted-foreground group-hover:text-primary transition-colors">Contact</span>
        </Link>

        {/* Bottom-right — Services */}
        <Link href="/services" className="absolute bottom-0 right-0 z-10 group flex flex-col items-center gap-1">
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 transition-transform duration-500 group-hover:rotate-[360deg]" style={{ transitionDuration: "0.5s" }}>
            <Image src="/images/hand-icon.png" alt="Services" width={96} height={96} className="w-full h-full object-contain" />
          </div>
          <span className="text-[10px] sm:text-xs tracking-widest uppercase text-muted-foreground group-hover:text-primary transition-colors">Services</span>
        </Link>

        {/* Center — Headshot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative group">
            <div className="absolute inset-0 -m-4 rounded-full border border-primary/10 animate-pulse" />
            <div className="absolute inset-0 -m-8 rounded-full border border-primary/5" />
            <div className="absolute inset-0 -m-1 rounded-full border-2 border-dashed border-primary/20 animate-spin-slow" />
            <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-primary/30 transition-all duration-500 group-hover:border-primary/60 group-hover:scale-105">
              <Image
                src="/images/headshot.jpg"
                alt="Portrait"
                fill
                className="object-cover grayscale contrast-110 brightness-95 transition-all duration-500 group-hover:grayscale-0"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
            </div>
          </div>
        </div>

      </div>

      {/* About Section */}
      <div className="mt-10 md:mt-16">
        <AboutSection />
      </div>

      {/* Scroll indicator */}
      <div className="mt-10 md:mt-16 flex flex-col items-center gap-2 opacity-40 animate-bounce">
        <span className="text-xs tracking-widest uppercase text-muted-foreground">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent" />
      </div>
    </section>
  )
}
