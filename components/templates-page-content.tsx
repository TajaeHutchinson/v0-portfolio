"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { HamburgerMenu } from "./hamburger-menu"

const templates = [
  {
    id: 1,
    title: "Music Production Release/Metadata Tracker",
    description: "Manage song metadata, publishing splits, release timelines, distributor logs, and PRO/MLC reporting in one place",
    image: "/images/templates/template-1.jpg",
    link: "https://www.notion.com/templates/music-production-release-metadata-tracker"
  },
  {
    id: 2,
    title: "Creative Digital Release Tracker",
    description: "Coordinate digital releases, social media campaigns, and multi-platform distribution workflows",
    image: "/images/templates/template-2.jpg",
    link: "https://www.notion.com/templates/creative-digital-release-tracker"
  },
  {
    id: 3,
    title: "AI DevOps Tracker: Lite",
    description: "Structural framework for AI development operations and project tracking",
    image: "/images/templates/template-3.jpg",
    link: "https://www.notion.com/templates/ai-devops-tracker-lite"
  }
]

export function TemplatesPageContent() {
  return (
    <div className="min-h-screen bg-background">
      <HamburgerMenu />

      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link 
            href="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm tracking-wider uppercase">Back</span>
          </Link>
          
          <div className="flex items-center gap-3">
            <Image 
              src="/images/brain-icon.png" 
              alt="Templates" 
              width={40} 
              height={40}
              className="w-8 h-8 md:w-10 md:h-10 object-contain"
            />
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">TEMPLATES</h1>
          </div>
          
          <div className="w-20" /> {/* Spacer for centering */}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          
          {/* Intro Text */}
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Battle-tested Notion templates designed for creators, musicians, and digital builders. 
              Download and customize to fit your workflow.
            </p>
          </div>

          {/* Templates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {templates.map((template, index) => (
              <div
                key={template.id}
                className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500"
              >
                {/* Template Image */}
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <Image
                    src={template.image}
                    alt={template.title}
                    fill
                    loading={index === 0 ? "eager" : "lazy"}
                    priority={index === 0}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold leading-tight group-hover:text-primary transition-colors">
                    {template.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {template.description}
                  </p>

                  {/* Download Button */}
                  <a
                    href={template.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 hover:bg-primary text-muted-foreground hover:text-primary-foreground rounded-full text-sm font-medium tracking-wide transition-all duration-300 group-hover:scale-105"
                  >
                    Download Template
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center py-12 border-t border-border/50">
            <h2 className="text-2xl font-bold mb-4">Looking for more?</h2>
            <p className="text-muted-foreground mb-6">
              Explore my complete collection on the Notion Marketplace
            </p>
            <a
              href="https://www.notion.com/@tajae_hutchinson"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium tracking-wide hover:bg-primary/90 transition-all duration-300 hover:scale-105"
            >
              Browse All Templates
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}
