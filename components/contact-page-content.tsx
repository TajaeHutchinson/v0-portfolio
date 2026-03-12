"use client"

import Link from "next/link"
import { ArrowLeft, Mail, Calendar, FileText, Linkedin, Music, Youtube, Github } from "lucide-react"
import { HamburgerMenu } from "./hamburger-menu"
import Image from "next/image"

export function ContactPageContent() {
  const directContacts = [
    {
      icon: Mail,
      label: "Email",
      text: "tajae.hut@gmail.com",
      href: "mailto:tajae.hut@gmail.com",
      description: "Drop me a line"
    },
    {
      icon: Calendar,
      label: "Calendly",
      text: "Book a free 15-min consultation",
      href: "https://calendly.com/tajae-hut/30-minute-meeting-clone",
      description: "Let's chat"
    },
    {
      icon: FileText,
      label: "Services",
      text: "View services & pricing",
      href: "/services",
      description: "See what I offer"
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/tajae-hutchinson/",
      color: "text-blue-500"
    },
    {
      icon: Music,
      label: "Spotify (Trance & Study)",
      href: "https://open.spotify.com/album/7mbmlH7tLfOoDqHU0WRaHO",
      color: "text-green-500"
    },
    {
      icon: Youtube,
      label: "YouTube (Trance & Study)",
      href: "https://www.youtube.com/@TranceAndStudy/videos",
      color: "text-red-500"
    },
    {
      icon: Youtube,
      label: "YouTube (TheGlassEyeFrill)",
      href: "https://www.youtube.com/channel/UCjNuwxFtfUGqoeeSt1Z4E_A",
      color: "text-red-500"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/TajaeHutchinson",
      color: "text-foreground"
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-white/5">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm tracking-wider uppercase">Back</span>
          </Link>

          <div className="flex items-center gap-4">
            <Image 
              src="/images/eye-icon.png" 
              alt="Contact" 
              width={32} 
              height={32} 
              className="w-8 h-8 object-contain"
            />
            <h1 className="text-2xl font-bold tracking-wider uppercase">Contact</h1>
          </div>

          <HamburgerMenu />
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Let's work together
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground text-balance">
              Building systems that help you focus on what matters
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Direct Contact */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-6 text-primary uppercase tracking-wider">
                Direct Contact
              </h3>
              
              <div className="space-y-4">
                {directContacts.map((contact, index) => {
                  const Icon = contact.icon
                  const isExternal = contact.href.startsWith("http")
                  
                  return (
                    <a
                      key={index}
                      href={contact.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="group block p-6 bg-card border border-border/50 rounded-lg hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-muted-foreground mb-1">{contact.description}</p>
                          <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                            {contact.text}
                          </p>
                        </div>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Right Column - Social Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-6 text-primary uppercase tracking-wider">
                Connect
              </h3>
              
              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 p-6 bg-card border border-border/50 rounded-lg hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]"
                    >
                      <div className={`p-3 rounded-full bg-primary/10 group-hover:bg-primary transition-colors ${social.color} group-hover:text-primary-foreground`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {social.label}
                      </span>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
