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
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21-hY1biTER6sbodlFmVyZdHTvPAq9DP3.jpg",
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
  // New additions
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9958-NHTpZC3GM8FuPkKy0kyWKQtCqi1VNI.jpg",
    alt: "Side profile with blue and gray box braids, smiling outdoors next to a car",
    aspectClass: "aspect-[4/3]",
    delay: 140,
    direction: "left" as const,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20-Cy6STUJGKEzMQjmAwB4pEC3vQCSFjy.jpg",
    alt: "Lavender-toned portrait with glitter eye shadow, tilted head on white background",
    aspectClass: "aspect-[3/4]",
    delay: 200,
    direction: "up" as const,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21-hY1biTER6sbodlFmVyZdHTvPAq9DP3.jpg",
    alt: "Rippling multi-exposure figure collage on blue and orange background",
    aspectClass: "aspect-square",
    delay: 160,
    direction: "up" as const,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/22-gpFlZr363WH1bInX0vmq3uSpBVrLt1.jpg",
    alt: "Mars diptych: one pose upright and one inverted on sandy textured background",
    aspectClass: "aspect-square",
    delay: 260,
    direction: "right" as const,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/16-NFAKt1B5ZpYulnorjdkl97BnodGmRV.jpg",
    alt: "Grayscale mirrored double portrait on white background",
    aspectClass: "aspect-square",
    delay: 180,
    direction: "up" as const,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/17-UzO6HF1U4WvhLNRcp1VcWQaWVe1ATt.jpg",
    alt: "Grayscale double figure on orange citrus background",
    aspectClass: "aspect-square",
    delay: 320,
    direction: "left" as const,
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
          {GRID_IMAGES.map((img, i) => (
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

      {/* ── Second row: new image strip (desktop) ── */}
      <div className="hidden md:flex gap-5 lg:gap-6 mt-5 lg:mt-6 max-w-[1400px] mx-auto items-end">
        {/* landscape braid side-profile — wide */}
        <ScrollReveal delay={60} direction="up" className="flex-[2] min-w-0">
          <div className="relative w-full overflow-hidden rounded-sm aspect-[4/3]">
            <Image
              src={GRID_IMAGES[8].src}
              alt={GRID_IMAGES[8].alt}
              fill
              sizes="22vw"
              className="object-cover object-center"
            />
          </div>
        </ScrollReveal>
        {/* lavender portrait — tall */}
        <ScrollReveal delay={120} direction="up" className="flex-[1] min-w-0">
          <div className="relative w-full overflow-hidden rounded-sm aspect-[3/4]">
            <Image
              src={GRID_IMAGES[9].src}
              alt={GRID_IMAGES[9].alt}
              fill
              sizes="12vw"
              className="object-cover object-top"
            />
          </div>
        </ScrollReveal>
        {/* ripple collage blue+orange — square */}
        <ScrollReveal delay={160} direction="up" className="flex-[1.4] min-w-0">
          <div className="relative w-full overflow-hidden rounded-sm aspect-square">
            <Image
              src={GRID_IMAGES[10].src}
              alt={GRID_IMAGES[10].alt}
              fill
              sizes="16vw"
              className="object-cover"
            />
          </div>
        </ScrollReveal>
        {/* mars diptych — square */}
        <ScrollReveal delay={220} direction="up" className="flex-[1.4] min-w-0">
          <div className="relative w-full overflow-hidden rounded-sm aspect-square">
            <Image
              src={GRID_IMAGES[11].src}
              alt={GRID_IMAGES[11].alt}
              fill
              sizes="16vw"
              className="object-cover"
            />
          </div>
        </ScrollReveal>
        {/* grayscale double white — square */}
        <ScrollReveal delay={280} direction="up" className="flex-[1.4] min-w-0">
          <div className="relative w-full overflow-hidden rounded-sm aspect-square">
            <Image
              src={GRID_IMAGES[12].src}
              alt={GRID_IMAGES[12].alt}
              fill
              sizes="16vw"
              className="object-cover"
            />
          </div>
        </ScrollReveal>
        {/* orange citrus double — square */}
        <ScrollReveal delay={340} direction="up" className="flex-[1.4] min-w-0">
          <div className="relative w-full overflow-hidden rounded-sm aspect-square">
            <Image
              src={GRID_IMAGES[13].src}
              alt={GRID_IMAGES[13].alt}
              fill
              sizes="16vw"
              className="object-cover"
            />
          </div>
        </ScrollReveal>
      </div>

      {/* Bottom divider */}
      <div className="mt-24 md:mt-32 w-full h-px bg-border/30" />
    </section>
  )
}
