"use client"

import Image from "next/image"
import Link from "next/link"
import { AboutSection } from "./about-section"

const navItems = [
  { href: "/templates", src: "/images/brain-icon.png", alt: "Templates", label: "Templates" },
  { href: "/music", src: "/images/eye-icon.png", alt: "Music", label: "Music" },
  { href: "/contact", src: "/images/contact-icon.png", alt: "Contact", label: "Contact" },
  { href: "/services", src: "/images/hand-icon.png", alt: "Services", label: "Services" },
]

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

      {/* ── Mobile layout: icons in a 2×2 grid above headshot ── */}
      <div className="md:hidden relative z-10 w-full flex flex-col items-center gap-10 px-8 pt-16">
        <div className="grid grid-cols-2 gap-8 w-full max-w-xs">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center gap-2 group"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={72}
                height={72}
                className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-xs tracking-widest uppercase text-muted-foreground group-hover:text-primary transition-colors">
                {item.label}
              </span>
            </Link>
          ))}
        </div>

        {/* Headshot */}
        <div className="relative group">
          <div className="absolute inset-0 -m-4 rounded-full border border-primary/10 animate-pulse" />
          <div className="absolute inset-0 -m-8 rounded-full border border-primary/5" />
          <div className="absolute inset-0 -m-1 rounded-full border-2 border-dashed border-primary/20 animate-spin-slow" />
          <div className="relative w-44 h-44 rounded-full overflow-hidden border-2 border-primary/30 transition-all duration-500 group-hover:border-primary/60 group-hover:scale-105">
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

      {/* ── Desktop layout: floating icons in corners ── */}
      <div className="hidden md:block">
        {/* Top-left */}
        <Link href="/templates" className="absolute top-[20%] left-[20%] z-10 group">
          <div className="relative flex flex-col items-center">
            <Image src="/images/brain-icon.png" alt="Templates" width={104} height={104} className="w-24 h-24 object-contain transition-transform duration-500 group-hover:rotate-[360deg]" style={{ transitionDuration: "0.5s" }} />
          </div>
        </Link>
        {/* Top-right */}
        <Link href="/music" className="absolute top-[20%] right-[20%] z-10 group">
          <div className="relative flex flex-col items-center">
            <Image src="/images/eye-icon.png" alt="Music" width={104} height={104} className="w-24 h-24 object-contain transition-transform duration-500 group-hover:rotate-[360deg]" style={{ transitionDuration: "0.5s" }} />
          </div>
        </Link>
        {/* Bottom-left */}
        <Link href="/contact" className="absolute bottom-[20%] left-[20%] z-10 group">
          <div className="relative flex flex-col items-center">
            <Image src="/images/contact-icon.png" alt="Contact" width={104} height={104} className="w-24 h-24 object-contain transition-transform duration-500 group-hover:rotate-[360deg]" style={{ transitionDuration: "0.5s" }} />
          </div>
        </Link>
        {/* Bottom-right */}
        <Link href="/services" className="absolute bottom-[20%] right-[20%] z-10 group">
          <div className="relative flex flex-col items-center">
            <Image src="/images/hand-icon.png" alt="Services" width={104} height={104} className="w-24 h-24 object-contain transition-transform duration-500 group-hover:rotate-[360deg]" style={{ transitionDuration: "0.5s" }} />
          </div>
        </Link>

        {/* Center Headshot — desktop only */}
        <div className="relative group">
          <div className="absolute inset-0 -m-4 md:-m-6 rounded-full border border-primary/10 animate-pulse" />
          <div className="absolute inset-0 -m-8 md:-m-12 rounded-full border border-primary/5" />
          <div className="absolute inset-0 -m-12 md:-m-20 rounded-full border border-primary/[0.03]" />
          <div className="absolute inset-0 -m-1 rounded-full border-2 border-dashed border-primary/20 animate-spin-slow" />
          <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-primary/30 transition-all duration-500 group-hover:border-primary/60 group-hover:scale-105">
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
