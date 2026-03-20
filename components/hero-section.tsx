"use client"

import Image from "next/image"
import { FloatingNavIcon } from "./floating-nav-icon"
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

      {/* Floating Navigation Icons */}
      <FloatingNavIcon href="/templates" label="Templates" position="top-left">
        <Image
          src="/images/brain-icon.png"
          alt="Templates"
          width={96}
          height={96}
          style={{ width: "auto", height: "auto" }}
          className="w-10 h-10 md:w-16 md:h-16 object-contain"
        />
      </FloatingNavIcon>

      <FloatingNavIcon href="/music" label="Music" position="top-right">
        <Image
          src="/images/eye-icon.png"
          alt="Music"
          width={96}
          height={96}
          style={{ width: "auto", height: "auto" }}
          className="w-10 h-10 md:w-16 md:h-16 object-contain"
        />
      </FloatingNavIcon>

      <FloatingNavIcon href="/contact" label="Contact" position="bottom-left">
        <Image
          src="/images/contact-icon.png"
          alt="Contact"
          width={96}
          height={96}
          style={{ width: "auto", height: "auto" }}
          className="w-10 h-10 md:w-16 md:h-16 object-contain"
        />
      </FloatingNavIcon>

      <FloatingNavIcon href="/services" label="Services" position="bottom-right">
        <Image
          src="/images/hand-icon.png"
          alt="Services"
          width={96}
          height={96}
          style={{ width: "auto", height: "auto" }}
          className="w-10 h-10 md:w-16 md:h-16 object-contain"
        />
      </FloatingNavIcon>

      {/* Center Headshot */}
      <div className="relative group w-fit">
        <div aria-hidden="true" className="absolute inset-0 -m-4 md:-m-6 rounded-full border border-primary/10 animate-pulse" />
        <div aria-hidden="true" className="absolute inset-0 -m-8 md:-m-12 rounded-full border border-primary/5" />
        <div aria-hidden="true" className="absolute inset-0 -m-1 rounded-full border-2 border-dashed border-primary/20 animate-spin-slow" />
        <div
          className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-primary/30 transition-all duration-500 group-hover:border-primary/60 group-hover:scale-105"
          style={{ isolation: "isolate" }}
        >
          <Image
            src="/images/headshot.jpg"
            alt="Portrait"
            fill
            sizes="(max-width: 768px) 192px, (max-width: 1024px) 256px, 320px"
            className="object-cover grayscale contrast-110 brightness-95 transition-all duration-500 group-hover:grayscale-0"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
        </div>
      </div>

      {/* About Section */}
      <div className="mt-4 md:mt-6">
        <AboutSection />
      </div>

      {/* Scroll indicator */}
      <div className="mt-6 md:mt-8 flex flex-col items-center gap-2 opacity-40 animate-bounce">
        <span className="text-xs tracking-widest uppercase text-muted-foreground">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent" />
      </div>
    </section>
  )
}
