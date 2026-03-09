"use client"

import Image from "next/image"
import { FloatingNavIcon } from "./floating-nav-icon"
import { Handshake } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
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
          backgroundSize: '50px 50px'
        }}
      />

      {/* Floating Navigation Icons */}
      <FloatingNavIcon href="#about" label="About" position="top-left">
        <Image 
          src="/images/brain-icon.png" 
          alt="About" 
          width={80} 
          height={80} 
          className="w-16 h-16 md:w-20 md:h-20 object-contain"
        />
      </FloatingNavIcon>
      
      <FloatingNavIcon href="#work" label="Work" position="top-right">
        <Image 
          src="/images/eye-icon.png" 
          alt="Work" 
          width={80} 
          height={80} 
          className="w-16 h-16 md:w-20 md:h-20 object-contain"
        />
      </FloatingNavIcon>
      
      <FloatingNavIcon href="#contact" label="Contact" position="bottom-left">
        <Handshake className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />
      </FloatingNavIcon>
      
      <FloatingNavIcon href="#services" label="Services" position="bottom-right">
        <Image 
          src="/images/hand-icon.png" 
          alt="Services" 
          width={80} 
          height={80} 
          className="w-16 h-16 md:w-20 md:h-20 object-contain"
        />
      </FloatingNavIcon>

      {/* Center Headshot */}
      <div className="relative group">
        {/* Decorative rings */}
        <div className="absolute inset-0 -m-4 md:-m-6 rounded-full border border-primary/10 animate-pulse" />
        <div className="absolute inset-0 -m-8 md:-m-12 rounded-full border border-primary/5" />
        <div className="absolute inset-0 -m-12 md:-m-20 rounded-full border border-primary/[0.03]" />
        
        {/* Hand-drawn style circle border */}
        <div className="absolute inset-0 -m-1 rounded-full border-2 border-dashed border-primary/20 animate-spin-slow" />
        
        {/* Main image container */}
        <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-primary/30 transition-all duration-500 group-hover:border-primary/60 group-hover:scale-105">
          <Image
            src="/images/headshot.jpg"
            alt="Portrait"
            fill
            className="object-cover grayscale contrast-110 brightness-95 transition-all duration-500 group-hover:grayscale-0"
            priority
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
        </div>

        {/* Name label (optional decorative) */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <span 
            className="text-lg text-muted-foreground tracking-widest"
            style={{ fontFamily: 'var(--font-handwritten)' }}
          >
            Creative
          </span>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-bounce">
        <span className="text-xs tracking-widest uppercase text-muted-foreground">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent" />
      </div>
    </section>
  )
}
