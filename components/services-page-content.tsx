"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { HamburgerMenu } from "./hamburger-menu"

const services = [
  {
    id: 1,
    title: "Done-for-You Template Customization",
    description: "I'll set up and customize one of my existing Notion templates for your exact workflow. Includes data migration (up to 100 rows), personalization, and 48-hour support.",
    features: [
      "Template setup & customization",
      "Data migration (up to 100 rows)",
      "Personalization & branding",
      "48-hour email support"
    ],
    price: "Starting at $225",
    link: "https://www.notion.so/DONE-FOR-YOU-TEMPLATE-CUSTOMIZATION-306390d5ccca8076a4fcdb9b0207e8b5?source=copy_link",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-zk4ApnzrUe8CEPWeIldMtvECvDHoKL.png"
  },
  {
    id: 2,
    title: "Custom Workflow Design (Simple)",
    description: "Custom-built Notion workflow designed for your specific needs. Perfect for solopreneurs and small teams who need a tailored system.",
    features: [
      "1 custom database",
      "3 views per database",
      "Basic automations",
      "Data migration (up to 200 rows)",
      "Training session"
    ],
    price: "Starting at $375",
    link: "https://www.notion.so/CUSTOM-TEMPLATE-BUILD-SIMPLE-303390d5ccca80e09b89c3ccb4e488d8?source=copy_link",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-I1rY94vynJ8ISSUixF5Og9lW93NXrz.png"
  },
  {
    id: 3,
    title: "Custom Workflow Design (Advanced)",
    description: "Complex custom systems with integrations and advanced automation. For teams scaling their operations.",
    features: [
      "3 custom databases",
      "5 views per database",
      "1 external integration",
      "Advanced automations",
      "Data migration (up to 300 rows)",
      "Training + documentation"
    ],
    price: "Starting at $750",
    link: "https://www.notion.so/CUSTOM-TEMPLATE-BUILD-ADVANCED-305390d5ccca8099a15ce49533242a7d?source=copy_link",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-bdXiZ5UGA9nxtJyftJfoMe8WZUE6UI.png"
  },
  {
    id: 4,
    title: "Workflow Audit",
    description: "I'll analyze your current systems, identify bottlenecks, and provide a detailed optimization plan with actionable recommendations.",
    features: [
      "Current workflow analysis",
      "Bottleneck identification",
      "Optimization recommendations",
      "Implementation roadmap"
    ],
    price: "$550",
    link: "https://www.notion.so/WORKFLOW-AUDIT-OPTIMIZATION-ROADMAP-305390d5ccca80e2a7f9c4ad495f00ee?source=copy_link",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-BjwbbJP8jBoegenYxQ6QS3Pll5kM6R.png"
  },
  {
    id: 5,
    title: "Fractional Operations Consulting",
    description: "Ongoing support for growing teams. Monthly strategy sessions, continuous optimization, and dedicated Slack/email support.",
    features: [
      "2 strategy sessions per month",
      "Continuous workflow optimization",
      "Priority Slack/email support",
      "Monthly performance reviews"
    ],
    price: "Starting at $1,250/month",
    link: "https://www.notion.so/RETAINER-WORKFLOW-CONSULTING-303390d5ccca801e9ef9ee0281642fd8?source=copy_link",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-PiKZs6BQptY1YHXbBiEBFnq7JgHK67.png"
  },
  {
    id: 6,
    title: "Presentation Design",
    description: "Custom-designed presentations for pitches, reports, and client deliverables. Transform your ideas into polished, professional decks.",
    features: [
      "Custom slide design (10-30 slides)",
      "Brand-aligned templates",
      "Visual data storytelling",
      "Editable source files",
      "One round of revisions"
    ],
    price: "$375-650",
    link: "https://www.notion.so/PRESENTATION-DESIGN-STORYTELLING-305390d5ccca803b8a23cdeaed96b374?source=copy_link",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-VgKIVYvmJUspMBsLaFYIPmji0K3sWb.png"
  }
]

export function ServicesPageContent() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 text-foreground/60 hover:text-primary transition-colors shrink-0"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm tracking-wider uppercase hidden sm:inline">Back</span>
          </Link>

          {/* Title — padded right on mobile so fixed hamburger doesn't cover it */}
          <div className="flex items-center gap-4 pr-16 sm:pr-0">
            <Image
              src="/images/hand-icon.png"
              alt="Services"
              width={40}
              height={40}
              className="w-8 h-8 md:w-10 md:h-10 object-contain opacity-80 shrink-0"
            />
            <h1 className="text-xl md:text-3xl font-light tracking-wider">SERVICES</h1>
          </div>

          {/* Hamburger — renders its own fixed button; this keeps it in the component tree */}
          <div className="shrink-0">
            <HamburgerMenu />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-6xl font-light tracking-wide mb-6 text-balance">
            System Design for Creators
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty">
            Building sustainable creative systems that help artists, musicians, and digital creators 
            manage their work, grow their craft, and scale their impact.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent to-primary/5">
        <div className="container mx-auto max-w-3xl text-center">
          <h3 className="text-3xl md:text-4xl font-light tracking-wide mb-6">
            Ready to build your system?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            Let's talk about your creative workflow and how we can design a system 
            that works for you.
          </p>
          <a
            href="https://calendly.com/tajae-hut/30-minute-meeting-clone?month=2026-03"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium tracking-wide hover:bg-primary/90 transition-all duration-300 hover:scale-105"
          >
            Get in Touch
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Footer spacing */}
      <div className="h-24" />
    </div>
  )
}

function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      className="group relative bg-card border border-border/50 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
      style={{
        animationDelay: `${index * 100}ms`
      }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-muted">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="text-2xl font-light tracking-wide mb-3 group-hover:text-primary transition-colors">
          {service.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">
          {service.description}
        </p>

        {/* Features */}
        <div className="space-y-2 mb-6">
          {service.features.map((feature, i) => (
            <div key={i} className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span className="text-sm text-foreground/80">{feature}</span>
            </div>
          ))}
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-6 border-t border-border/50">
          <span className="text-lg font-medium text-primary">{service.price}</span>
          <a
            href={service.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors"
          >
            Learn More →
          </a>
        </div>
      </div>

      {/* Purple accent line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  )
}
