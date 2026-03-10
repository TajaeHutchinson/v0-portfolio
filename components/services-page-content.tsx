"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { HamburgerMenu } from "./hamburger-menu"

const services = [
  {
    id: 1,
    title: "Notion Template Design",
    description: "Custom Notion templates and database architectures tailored to your creative workflow. Perfect for content creators, musicians, and digital entrepreneurs.",
    features: [
      "Custom database schemas",
      "Workflow automation",
      "Multi-platform integration",
      "Ongoing support & updates"
    ],
    price: "Starting at $500",
    image: "/images/templates/template-1.jpg"
  },
  {
    id: 2,
    title: "Systems Design Consulting",
    description: "Strategic planning and implementation of creative systems that scale. Transform chaotic processes into streamlined, repeatable workflows.",
    features: [
      "Workflow audit & analysis",
      "Custom system architecture",
      "Team training & onboarding",
      "3-month implementation support"
    ],
    price: "Starting at $2,000",
    image: "/images/templates/carousel-1.png"
  },
  {
    id: 3,
    title: "Music Release Management",
    description: "End-to-end release coordination for independent artists. From metadata tracking to multi-platform distribution strategy.",
    features: [
      "Release timeline planning",
      "Metadata management",
      "Distribution coordination",
      "Campaign tracking"
    ],
    price: "Custom pricing",
    image: "/images/albums/album-2.jpg"
  },
  {
    id: 4,
    title: "Creative Project Management",
    description: "Hands-on project management for creative teams. Keep your projects on track with tailored PM solutions for artists and creators.",
    features: [
      "Sprint planning & execution",
      "Stakeholder communication",
      "Deliverable tracking",
      "Post-project optimization"
    ],
    price: "Starting at $1,500/month",
    image: "/images/templates/carousel-2.png"
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
            className="flex items-center gap-3 text-foreground/60 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm tracking-wider uppercase">Back</span>
          </Link>

          <div className="flex items-center gap-4">
            <Image 
              src="/images/hand-icon.png" 
              alt="Services" 
              width={40} 
              height={40} 
              className="w-10 h-10 object-contain opacity-80"
            />
            <h1 className="text-2xl md:text-3xl font-light tracking-wider">SERVICES</h1>
          </div>

          <HamburgerMenu />
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
            href="#contact"
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

        {/* Price */}
        <div className="flex items-center justify-between pt-6 border-t border-border/50">
          <span className="text-lg font-medium text-primary">{service.price}</span>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-sm tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors"
          >
            Learn More →
          </button>
        </div>
      </div>

      {/* Purple accent line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  )
}
