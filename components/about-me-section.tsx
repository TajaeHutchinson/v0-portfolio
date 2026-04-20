"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"

// ── Scroll-reveal wrapper ──────────────────────────────────────────────────
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
      { threshold: 0.06, rootMargin: "0px 0px -30px 0px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const translateMap = {
    up: "translateY(52px)",
    left: "translateX(-44px)",
    right: "translateX(44px)",
    none: "none",
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : translateMap[direction],
        transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

// ── Parallax hook — returns a subtle Y offset tied to scroll ──────────────
function useParallax(strength = 0.06) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let rafId: number

    const onScroll = () => {
      rafId = requestAnimationFrame(() => {
        if (!el) return
        const rect = el.getBoundingClientRect()
        const centerY = rect.top + rect.height / 2 - window.innerHeight / 2
        setOffset(centerY * strength)
      })
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      cancelAnimationFrame(rafId)
    }
  }, [strength])

  return { ref, offset }
}

// ── Image tile with hover + parallax ─────────────────────────────────────
interface ImageTileProps {
  src: string
  alt: string
  aspect: string
  sizes: string
  priority?: boolean
  showOverlay?: boolean
  parallaxStrength?: number
}

function ImageTile({ src, alt, aspect, sizes, priority, showOverlay, parallaxStrength = 0.05 }: ImageTileProps) {
  const { ref, offset } = useParallax(parallaxStrength)

  return (
    <div
      ref={ref}
      className={`relative w-full overflow-hidden rounded-sm group cursor-pointer ${aspect}`}
      style={{ transform: `translateY(${offset}px)`, transition: "transform 0.1s linear" }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover object-top transition-all duration-700 ease-out group-hover:scale-[1.06] group-hover:brightness-110"
      />
      {showOverlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
      )}
      {/* Hover shimmer */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ring-1 ring-inset ring-white/10 rounded-sm" />
    </div>
  )
}

// ── Image data ────────────────────────────────────────────────────────────
const ALL_IMAGES = [
  // Col A — narrow, starts offset
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20-Cy6STUJGKEzMQjmAwB4pEC3vQCSFjy.jpg",
    alt: "Lavender-toned portrait with glitter eyeshadow, tilted head",
    col: "A", aspect: "aspect-[3/4]", delay: 160, dir: "left" as const,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9958-NHTpZC3GM8FuPkKy0kyWKQtCqi1VNI.jpg",
    alt: "Side profile with blue and gray box braids, smiling outdoors",
    col: "A", aspect: "aspect-[4/3]", delay: 280, dir: "left" as const,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/16-NFAKt1B5ZpYulnorjdkl97BnodGmRV.jpg",
    alt: "Grayscale mirrored double portrait on white background",
    col: "A", aspect: "aspect-square", delay: 380, dir: "left" as const,
  },

  // Col B — hero portrait anchors from top
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5765%202-VJrVQS7oR0mILXb5Sbzf7pMXCQEbQX.jpg",
    alt: "Tajae in theatrical masquerade costume against red backdrop",
    col: "B", aspect: "aspect-[2/3]", delay: 0, dir: "up" as const, isHero: true,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5913-s9T8uO6z0HOiX3gcDH9EzsYLBnuFQb.jpeg",
    alt: "Smiling portrait with teal background and red braids",
    col: "B", aspect: "aspect-[3/4]", delay: 180, dir: "up" as const,
  },

  // Col C — offset down slightly, square-heavy
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/19-Orsrqkqr9SvX3vDgQSNuQT18A6YwPn.jpg",
    alt: "Triple-exposure group portrait on cyan and purple grid-sky background",
    col: "C", aspect: "aspect-square", delay: 100, dir: "up" as const,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/22-gpFlZr363WH1bInX0vmq3uSpBVrLt1.jpg",
    alt: "Mars diptych: one pose upright and one inverted on sandy textured background",
    col: "C", aspect: "aspect-square", delay: 240, dir: "up" as const,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/25-fAK305GnmJogRslXajvtSfMa6xnAtt.jpg",
    alt: "Blurry motion portrait with diagonal light streaks in red and teal",
    col: "C", aspect: "aspect-square", delay: 340, dir: "up" as const,
  },

  // Col D — slight top offset
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-EKAjpJg3jRw9AVvrwodJuQekbBx5Qf.jpg",
    alt: "Editorial portrait against vivid painted green and red background",
    col: "D", aspect: "aspect-[3/4]", delay: 80, dir: "up" as const,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21-hY1biTER6sbodlFmVyZdHTvPAq9DP3.jpg",
    alt: "Rippling multi-exposure cascading figure collage on blue and orange background",
    col: "D", aspect: "aspect-square", delay: 200, dir: "up" as const,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/17-UzO6HF1U4WvhLNRcp1VcWQaWVe1ATt.jpg",
    alt: "Grayscale double figure on vivid orange citrus background",
    col: "D", aspect: "aspect-square", delay: 320, dir: "up" as const,
  },

  // Col E — images only (bio moved above grid)
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9861-akHTkA0yKzuR9j6opqgQ8PHm9HpxTb.jpg",
    alt: "Full-body outdoor shot in red jacket and blue braids against vine wall",
    col: "E", aspect: "aspect-[3/4]", delay: 140, dir: "right" as const,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10-1NPkQIHXWNMlYlptiq1Ncf21NhCez2.jpg",
    alt: "Mirrored double portrait on yellow background with spider-web shadows",
    col: "E", aspect: "aspect-square", delay: 260, dir: "right" as const,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/18-eri4OGjSVXy5I15VJDd93cHPY1bOst.jpg",
    alt: "Four-clone figure on orange wood-grain background with butterfly",
    col: "E", aspect: "aspect-square", delay: 360, dir: "right" as const,
  },
]

const colImages = (col: string) => ALL_IMAGES.filter((img) => img.col === col)

// ── Section ───────────────────────────────────────────────────────────────
export function AboutMeSection() {
  return (
    <>
      {/* ── Divider between hero and about ── */}
      <div className="relative w-full h-[100px] md:h-[120px] pointer-events-none select-none" aria-hidden="true">
        {/* Gradient fade from background to section top */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />
        {/* Thin accent line */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-12 bg-gradient-to-b from-border/0 to-border/50" />
      </div>

      <section
        id="about"
        className="relative w-full bg-background overflow-hidden pb-24 md:pb-36 px-6 md:px-10 lg:px-16"
      >
        {/* ── Section label + bio text — full width header above the grid ── */}
        <div className="hidden md:flex max-w-[1440px] mx-auto mb-12 md:mb-16 flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-16">
          <ScrollReveal delay={0} direction="none">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground/40">About</p>
          </ScrollReveal>

          {/* Bio block — sits close to the left, spanning roughly 3 cols worth */}
          <ScrollReveal delay={80} direction="up" className="md:max-w-[680px] md:mr-auto md:ml-0">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-balance leading-[1.05] mb-6">
              The person<br className="hidden md:block" /> behind the work.
            </h2>
            <div className="flex flex-col md:flex-row gap-5 md:gap-10 text-muted-foreground text-sm md:text-[15px] leading-relaxed max-w-[600px]">
              <p>
                Tajae Y. Hutchinson is a multidisciplinary creative — an artist,
                producer, and solution-architect who moves between visual art,
                sound, and strategy. Her work lives at the intersection of
                identity, culture, and expression.
              </p>
              <p>
                Rooted in bold aesthetics and intentional storytelling, every
                project is a conversation — one that asks hard questions and
                refuses easy answers.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-7">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-primary text-sm tracking-widest uppercase border-b border-primary/40 pb-1 w-fit hover:border-primary transition-colors duration-300"
              >
                Work with me
                <span aria-hidden="true" className="text-xs">→</span>
              </Link>
              <Link
                href="/builds"
                className="inline-flex items-center gap-2 text-muted-foreground text-sm tracking-widest uppercase border-b border-border/40 pb-1 w-fit hover:text-primary hover:border-primary/40 transition-colors duration-300"
              >
                Builds
                <span aria-hidden="true" className="text-xs">→</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* ── Desktop: 5-column asymmetrical masonry grid ── */}
        <div className="hidden md:grid grid-cols-[1fr_1.5fr_1.4fr_1.4fr_1.5fr] gap-3 lg:gap-4 items-start max-w-[1440px] mx-auto">

          {/* Col A — starts offset to break symmetry */}
          <div className="flex flex-col gap-3 mt-8">
            {colImages("A").map((img) => (
              <ScrollReveal key={img.src} delay={img.delay} direction={img.dir}>
                <ImageTile src={img.src} alt={img.alt} aspect={img.aspect} sizes="14vw" parallaxStrength={0.04} />
              </ScrollReveal>
            ))}
          </div>

          {/* Col B — hero portrait anchors from top */}
          <div className="flex flex-col gap-3">
            {colImages("B").map((img) => (
              <ScrollReveal key={img.src} delay={img.delay} direction={img.dir}>
                <ImageTile
                  src={img.src}
                  alt={img.alt}
                  aspect={img.aspect}
                  sizes="20vw"
                  priority={img.isHero}
                  showOverlay={img.isHero}
                  parallaxStrength={img.isHero ? 0.03 : 0.05}
                />
              </ScrollReveal>
            ))}
          </div>

          {/* Col C — offset down slightly */}
          <div className="flex flex-col gap-3 mt-12">
            {colImages("C").map((img) => (
              <ScrollReveal key={img.src} delay={img.delay} direction={img.dir}>
                <ImageTile src={img.src} alt={img.alt} aspect={img.aspect} sizes="18vw" parallaxStrength={0.055} />
              </ScrollReveal>
            ))}
          </div>

          {/* Col D — slight offset */}
          <div className="flex flex-col gap-3 mt-4">
            {colImages("D").map((img) => (
              <ScrollReveal key={img.src} delay={img.delay} direction={img.dir}>
                <ImageTile src={img.src} alt={img.alt} aspect={img.aspect} sizes="18vw" parallaxStrength={0.045} />
              </ScrollReveal>
            ))}
          </div>

          {/* Col E — images only (bio is above the grid now) */}
          <div className="flex flex-col gap-3 mt-16">
            {colImages("E").map((img) => (
              <ScrollReveal key={img.src} delay={img.delay} direction={img.dir}>
                <ImageTile src={img.src} alt={img.alt} aspect={img.aspect} sizes="20vw" parallaxStrength={0.06} />
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* ── Mobile: hero + bio + 2-col stagger ── */}
        <div className="md:hidden flex flex-col gap-6">
          <ScrollReveal delay={0} direction="up">
            <ImageTile
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5765%202-VJrVQS7oR0mILXb5Sbzf7pMXCQEbQX.jpg"
              alt="Tajae in theatrical masquerade costume against red backdrop"
              aspect="aspect-[3/4]"
              sizes="90vw"
              priority
              showOverlay
            />
          </ScrollReveal>

          <ScrollReveal delay={80} direction="up">
            <div className="flex flex-col gap-4 px-1">
              <h2 className="text-3xl font-bold tracking-tight text-foreground text-balance leading-tight">
                The person behind the work.
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Tajae Y. Hutchinson is a multidisciplinary creative — an artist,
                producer, and solution-architect who moves between visual art,
                sound, and strategy. Her work lives at the intersection of identity, culture, and expression.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Rooted in bold aesthetics and intentional storytelling, every
                project is a conversation — one that asks hard questions and
                refuses easy answers.
              </p>
              <div className="flex flex-wrap items-center gap-5">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-primary text-sm tracking-widest uppercase border-b border-primary/40 pb-1 w-fit hover:border-primary transition-colors duration-300"
                >
                  Work with me
                  <span aria-hidden="true" className="text-xs">→</span>
                </Link>
                <Link
                  href="/builds"
                  className="inline-flex items-center gap-2 text-muted-foreground text-sm tracking-widest uppercase border-b border-border/40 pb-1 w-fit hover:text-primary hover:border-primary/40 transition-colors duration-300"
                >
                  Builds
                  <span aria-hidden="true" className="text-xs">→</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 gap-3 mt-2">
            {ALL_IMAGES.filter((img) => !img.isHero).map((img, i) => (
              <ScrollReveal key={img.src + i} delay={i * 55} direction="up">
                <ImageTile src={img.src} alt={img.alt} aspect={img.aspect} sizes="45vw" />
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div className="mt-24 md:mt-32 w-full h-px bg-border/30" />
      </section>
    </>
  )
}
