"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "left" | "right" | "none"
}

function ScrollReveal({ children, className = "", delay = 0, direction = "up" }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const translateMap = {
    up: "translateY(48px)",
    left: "translateX(-40px)",
    right: "translateX(40px)",
    none: "none",
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : translateMap[direction],
        transition: `opacity 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

// Curated image list — primary hero + supporting grid
const HERO_IMAGE = {
  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5765%202-VJrVQS7oR0mILXb5Sbzf7pMXCQEbQX.jpg",
  alt: "Tajae in theatrical masquerade costume against red backdrop",
}

const GRID_IMAGES = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5913-s9T8uO6z0HOiX3gcDH9EzsYLBnuFQb.jpeg",
    alt: "Smiling portrait with teal background and red braids",
    aspectClass: "aspect-[3/4]",
    delay: 100,
    direction: "up" as const,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-EKAjpJg3jRw9AVvrwodJuQekbBx5Qf.jpg",
    alt: "Editorial portrait against vivid painted background",
    aspectClass: "aspect-square",
    delay: 180,
    direction: "up" as const,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9861-akHTkA0yKzuR9j6opqgQ8PHm9HpxTb.jpg",
    alt: "Full-body outdoor shot in red jacket against vine wall",
    aspectClass: "aspect-[3/4]",
    delay: 80,
    direction: "left" as const,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/19-Orsrqkqr9SvX3vDgQSNuQT18A6YwPn.jpg",
    alt: "Triple-exposure group portrait on cyan and purple background",
    aspectClass: "aspect-square",
    delay: 220,
    direction: "up" as const,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10-1NPkQIHXWNMlYlptiq1Ncf21NhCez2.jpg",
    alt: "Mirrored double portrait on yellow background with web shadows",
    aspectClass: "aspect-square",
    delay: 300,
    direction: "right" as const,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21-UC1x6Kr1jI50PppSWHetXZRTO6SSTN.jpg",
    alt: "Rippling repeated figure collage on blue and orange background",
    aspectClass: "aspect-square",
    delay: 160,
    direction: "up" as const,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/25-fAK305GnmJogRslXajvtSfMa6xnAtt.jpg",
    alt: "Blurry motion portrait with diagonal light streaks",
    aspectClass: "aspect-square",
    delay: 240,
    direction: "up" as const,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/18-eri4OGjSVXy5I15VJDd93cHPY1bOst.jpg",
    alt: "Four-clone figure on orange wood-grain background with butterfly",
    aspectClass: "aspect-square",
    delay: 120,
    direction: "right" as const,
  },
]

export function AboutMeSection() {
  return (
    <section
      id="about"
      className="relative w-full bg-background overflow-hidden py-24 md:py-36 px-6 md:px-12 lg:px-20"
    >
      {/* Faint section label */}
      <ScrollReveal delay={0} direction="none">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground/40 mb-16 md:mb-24">
          About
        </p>
      </ScrollReveal>

      {/* ── Desktop layout ── */}
      <div className="hidden md:grid grid-cols-12 gap-5 lg:gap-6 items-start max-w-[1400px] mx-auto">

        {/* Col 1-2: Left narrow column — stacked small images */}
        <div className="col-span-2 flex flex-col gap-5 mt-24">
          <ScrollReveal delay={80} direction="left">
            <div className="relative w-full overflow-hidden rounded-sm aspect-[3/4]">
              <Image
                src={GRID_IMAGES[0].src}
                alt={GRID_IMAGES[0].alt}
                fill
                sizes="15vw"
                className="object-cover"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={220} direction="left">
            <div className="relative w-full overflow-hidden rounded-sm aspect-square">
              <Image
                src={GRID_IMAGES[6].src}
                alt={GRID_IMAGES[6].alt}
                fill
                sizes="15vw"
                className="object-cover"
              />
            </div>
          </ScrollReveal>
        </div>

        {/* Col 3-5: Primary hero portrait — anchors the section */}
        <ScrollReveal delay={0} direction="up" className="col-span-3">
          <div className="relative w-full overflow-hidden rounded-sm aspect-[2/3]">
            <Image
              src={HERO_IMAGE.src}
              alt={HERO_IMAGE.alt}
              fill
              sizes="25vw"
              className="object-cover object-top"
              priority
            />
            {/* Subtle vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>
        </ScrollReveal>

        {/* Col 6-8: Center stagger — tall + short */}
        <div className="col-span-3 flex flex-col gap-5">
          <ScrollReveal delay={140} direction="up">
            <div className="relative w-full overflow-hidden rounded-sm aspect-square">
              <Image
                src={GRID_IMAGES[1].src}
                alt={GRID_IMAGES[1].alt}
                fill
                sizes="22vw"
                className="object-cover"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={260} direction="up">
            <div className="relative w-full overflow-hidden rounded-sm aspect-[4/3]">
              <Image
                src={GRID_IMAGES[3].src}
                alt={GRID_IMAGES[3].alt}
                fill
                sizes="22vw"
                className="object-cover"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={320} direction="up">
            <div className="relative w-full overflow-hidden rounded-sm aspect-square">
              <Image
                src={GRID_IMAGES[7].src}
                alt={GRID_IMAGES[7].alt}
                fill
                sizes="22vw"
                className="object-cover"
              />
            </div>
          </ScrollReveal>
        </div>

        {/* Col 9-12: Bio text block + two more images */}
        <div className="col-span-4 flex flex-col gap-8 pt-8">
          {/* Text block floats alongside/overlapping grid */}
          <ScrollReveal delay={60} direction="right">
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance leading-tight">
                The person<br />behind the work.
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm lg:text-base max-w-xs">
                Tajae Y. Hutchinson is a multidisciplinary creative — an artist, 
                producer, and solution-architect who moves between visual art, 
                sound, and strategy. Her work lives at the intersection of 
                identity, culture, and expression.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm lg:text-base max-w-xs">
                Rooted in bold aesthetics and intentional storytelling, every 
                project is a conversation — one that asks hard questions and 
                refuses easy answers.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-primary text-sm tracking-widest uppercase border-b border-primary/40 pb-1 w-fit hover:border-primary transition-colors duration-300"
              >
                Work with me
                <span aria-hidden="true" className="text-xs">→</span>
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={180} direction="right">
            <div className="relative w-full overflow-hidden rounded-sm aspect-[3/4]">
              <Image
                src={GRID_IMAGES[2].src}
                alt={GRID_IMAGES[2].alt}
                fill
                sizes="30vw"
                className="object-cover object-top"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={280} direction="right">
            <div className="relative w-full overflow-hidden rounded-sm aspect-square">
              <Image
                src={GRID_IMAGES[4].src}
                alt={GRID_IMAGES[4].alt}
                fill
                sizes="28vw"
                className="object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* ── Mobile layout ── */}
      <div className="md:hidden flex flex-col gap-6">
        {/* Hero image — large anchor */}
        <ScrollReveal delay={0} direction="up">
          <div className="relative w-full overflow-hidden rounded-sm aspect-[3/4]">
            <Image
              src={HERO_IMAGE.src}
              alt={HERO_IMAGE.alt}
              fill
              sizes="90vw"
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>
        </ScrollReveal>

        {/* Bio text */}
        <ScrollReveal delay={80} direction="up">
          <div className="flex flex-col gap-4 px-1">
            <h2 className="text-3xl font-bold tracking-tight text-foreground text-balance leading-tight">
              The person behind the work.
            </h2>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Tajae Y. Hutchinson is a multidisciplinary creative — an artist, 
              producer, and solution-architect who moves between visual art, 
              sound, and strategy. Her work lives at the intersection of 
              identity, culture, and expression.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Rooted in bold aesthetics and intentional storytelling, every 
              project is a conversation — one that asks hard questions and 
              refuses easy answers.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-primary text-sm tracking-widest uppercase border-b border-primary/40 pb-1 w-fit hover:border-primary transition-colors duration-300"
            >
              Work with me
              <span aria-hidden="true" className="text-xs">→</span>
            </Link>
          </div>
        </ScrollReveal>

        {/* Staggered 2-col masonry strip */}
        <div className="grid grid-cols-2 gap-3 mt-2">
          {GRID_IMAGES.slice(0, 6).map((img, i) => (
            <ScrollReveal key={img.src} delay={i * 60} direction="up">
              <div className={`relative w-full overflow-hidden rounded-sm ${img.aspectClass}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="45vw"
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="mt-24 md:mt-32 w-full h-px bg-border/30" />
    </section>
  )
}
