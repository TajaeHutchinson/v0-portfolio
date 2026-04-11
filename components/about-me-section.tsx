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
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
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

// All images in a single flat list — col assignments drive the masonry stagger
const ALL_IMAGES = [
  // col-A (leftmost narrow col — starts low)
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20-Cy6STUJGKEzMQjmAwB4pEC3vQCSFjy.jpg",
    alt: "Lavender-toned portrait with glitter eyeshadow, tilted head",
    col: "A",
    aspect: "aspect-[3/4]",
    delay: 160,
    dir: "left" as const,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9958-NHTpZC3GM8FuPkKy0kyWKQtCqi1VNI.jpg",
    alt: "Side profile with blue and gray box braids, smiling outdoors",
    col: "A",
    aspect: "aspect-[4/3]",
    delay: 280,
    dir: "left" as const,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/16-NFAKt1B5ZpYulnorjdkl97BnodGmRV.jpg",
    alt: "Grayscale mirrored double portrait on white background",
    col: "A",
    aspect: "aspect-square",
    delay: 380,
    dir: "left" as const,
  },

  // col-B (hero portrait — anchors, tallest element)
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5765%202-VJrVQS7oR0mILXb5Sbzf7pMXCQEbQX.jpg",
    alt: "Tajae in theatrical masquerade costume against red backdrop",
    col: "B",
    aspect: "aspect-[2/3]",
    delay: 0,
    dir: "up" as const,
    isHero: true,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5913-s9T8uO6z0HOiX3gcDH9EzsYLBnuFQb.jpeg",
    alt: "Smiling portrait with teal background and red braids",
    col: "B",
    aspect: "aspect-[3/4]",
    delay: 180,
    dir: "up" as const,
  },

  // col-C (center-left — offset top)
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/19-Orsrqkqr9SvX3vDgQSNuQT18A6YwPn.jpg",
    alt: "Triple-exposure group portrait on cyan and purple grid-sky background",
    col: "C",
    aspect: "aspect-square",
    delay: 100,
    dir: "up" as const,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/22-gpFlZr363WH1bInX0vmq3uSpBVrLt1.jpg",
    alt: "Mars diptych: one pose upright and one inverted on sandy textured background",
    col: "C",
    aspect: "aspect-square",
    delay: 240,
    dir: "up" as const,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/25-fAK305GnmJogRslXajvtSfMa6xnAtt.jpg",
    alt: "Blurry motion portrait with diagonal light streaks in red and teal",
    col: "C",
    aspect: "aspect-square",
    delay: 340,
    dir: "up" as const,
  },

  // col-D (center-right)
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-EKAjpJg3jRw9AVvrwodJuQekbBx5Qf.jpg",
    alt: "Editorial portrait against vivid painted green and red background",
    col: "D",
    aspect: "aspect-[3/4]",
    delay: 80,
    dir: "up" as const,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21-hY1biTER6sbodlFmVyZdHTvPAq9DP3.jpg",
    alt: "Rippling multi-exposure cascading figure collage on blue and orange background",
    col: "D",
    aspect: "aspect-square",
    delay: 200,
    dir: "up" as const,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/17-UzO6HF1U4WvhLNRcp1VcWQaWVe1ATt.jpg",
    alt: "Grayscale double figure on vivid orange citrus background",
    col: "D",
    aspect: "aspect-square",
    delay: 320,
    dir: "up" as const,
  },

  // col-E (rightmost — bio text top, images below)
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9861-akHTkA0yKzuR9j6opqgQ8PHm9HpxTb.jpg",
    alt: "Full-body outdoor shot in red jacket and blue braids against vine wall",
    col: "E",
    aspect: "aspect-[3/4]",
    delay: 140,
    dir: "right" as const,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10-1NPkQIHXWNMlYlptiq1Ncf21NhCez2.jpg",
    alt: "Mirrored double portrait on yellow background with spider-web shadows",
    col: "E",
    aspect: "aspect-square",
    delay: 260,
    dir: "right" as const,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/18-eri4OGjSVXy5I15VJDd93cHPY1bOst.jpg",
    alt: "Four-clone figure on orange wood-grain background with butterfly",
    col: "E",
    aspect: "aspect-square",
    delay: 360,
    dir: "right" as const,
  },
]

const colImages = (col: string) => ALL_IMAGES.filter((img) => img.col === col)

export function AboutMeSection() {
  return (
    <section
      id="about"
      className="relative w-full bg-background overflow-hidden py-24 md:py-36 px-6 md:px-10 lg:px-16"
    >
      {/* Section label */}
      <ScrollReveal delay={0} direction="none">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground/40 mb-16 md:mb-20">
          About
        </p>
      </ScrollReveal>

      {/* ── Desktop: 5-column asymmetrical masonry grid ── */}
      <div className="hidden md:grid grid-cols-[1fr_1.5fr_1.4fr_1.4fr_1.5fr] gap-4 lg:gap-5 items-start max-w-[1440px] mx-auto">

        {/* Col A — starts with a top offset to break symmetry */}
        <div className="flex flex-col gap-4 mt-20">
          {colImages("A").map((img) => (
            <ScrollReveal key={img.src} delay={img.delay} direction={img.dir}>
              <div className={`relative w-full overflow-hidden rounded-sm ${img.aspect}`}>
                <Image src={img.src} alt={img.alt} fill sizes="14vw" className="object-cover" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Col B — hero portrait anchors from top, second image below */}
        <div className="flex flex-col gap-4">
          {colImages("B").map((img) => (
            <ScrollReveal key={img.src} delay={img.delay} direction={img.dir}>
              <div className={`relative w-full overflow-hidden rounded-sm ${img.aspect}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="20vw"
                  className="object-cover object-top"
                  priority={img.isHero}
                />
                {img.isHero && (
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Col C — offset down slightly */}
        <div className="flex flex-col gap-4 mt-10">
          {colImages("C").map((img) => (
            <ScrollReveal key={img.src} delay={img.delay} direction={img.dir}>
              <div className={`relative w-full overflow-hidden rounded-sm ${img.aspect}`}>
                <Image src={img.src} alt={img.alt} fill sizes="18vw" className="object-cover" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Col D — starts from top */}
        <div className="flex flex-col gap-4 mt-4">
          {colImages("D").map((img) => (
            <ScrollReveal key={img.src} delay={img.delay} direction={img.dir}>
              <div className={`relative w-full overflow-hidden rounded-sm ${img.aspect}`}>
                <Image src={img.src} alt={img.alt} fill sizes="18vw" className="object-cover" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Col E — bio text block on top, images below */}
        <div className="flex flex-col gap-4">
          {/* Bio text */}
          <ScrollReveal delay={60} direction="right">
            <div className="flex flex-col gap-5 pb-2">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground text-balance leading-tight">
                The person<br />behind the work.
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm max-w-[260px]">
                Tajae Y. Hutchinson is a multidisciplinary creative — an artist,
                producer, and solution-architect who moves between visual art,
                sound, and strategy. Her work lives at the intersection of
                identity, culture, and expression.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm max-w-[260px]">
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

          {/* Images in col E below the bio */}
          {colImages("E").map((img) => (
            <ScrollReveal key={img.src} delay={img.delay} direction={img.dir}>
              <div className={`relative w-full overflow-hidden rounded-sm ${img.aspect}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="20vw"
                  className="object-cover object-top"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* ── Mobile: hero + bio + 2-col stagger ── */}
      <div className="md:hidden flex flex-col gap-6">
        {/* Hero */}
        <ScrollReveal delay={0} direction="up">
          <div className="relative w-full overflow-hidden rounded-sm aspect-[3/4]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5765%202-VJrVQS7oR0mILXb5Sbzf7pMXCQEbQX.jpg"
              alt="Tajae in theatrical masquerade costume against red backdrop"
              fill
              sizes="90vw"
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>
        </ScrollReveal>

        {/* Bio */}
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

        {/* 2-col masonry strip — all images */}
        <div className="grid grid-cols-2 gap-3 mt-2">
          {ALL_IMAGES.filter((img) => !img.isHero).map((img, i) => (
            <ScrollReveal key={img.src + i} delay={i * 55} direction="up">
              <div className={`relative w-full overflow-hidden rounded-sm ${img.aspect}`}>
                <Image src={img.src} alt={img.alt} fill sizes="45vw" className="object-cover" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <div className="mt-24 md:mt-32 w-full h-px bg-border/30" />
    </section>
  )
}
