"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Mail, Calendar, Linkedin, Music, Youtube, Github, Send } from "lucide-react"
import { HamburgerMenu } from "./hamburger-menu"
import Image from "next/image"

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tajae-hutchinson/",
    color: "text-blue-400"
  },
  {
    icon: Music,
    label: "Spotify — Trance & Study",
    href: "https://open.spotify.com/artist/52VlRvKcwWWeH8kX4A10ko",
    color: "text-green-400"
  },
  {
    icon: Music,
    label: "Spotify — TheGlassEyeFill",
    href: "https://open.spotify.com/artist/2bU38jZ09FflRQ37LL5ROa",
    color: "text-green-400"
  },
  {
    icon: Youtube,
    label: "YouTube — Trance & Study",
    href: "https://www.youtube.com/@TranceAndStudy/videos",
    color: "text-red-400"
  },
  {
    icon: Youtube,
    label: "YouTube — TheGlassEyeFill",
    href: "https://www.youtube.com/channel/UCjNuwxFtfUGqoeeSt1Z4E_A",
    color: "text-red-400"
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/TajaeHutchinson",
    color: "text-foreground"
  }
]

export function ContactPageContent() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    // Mailto fallback — opens default email client with pre-filled fields
    const mailto = `mailto:tajae.hut@gmail.com?subject=${encodeURIComponent(form.subject || "Portfolio Inquiry")}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
    window.location.href = mailto
    setStatus("sent")
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hamburger — outside header so its fixed overlay is never clipped */}
      <HamburgerMenu />

      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm border-b border-white/5">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors shrink-0"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm tracking-wider uppercase">Back</span>
          </Link>

          <div className="flex items-center gap-3">
            <Image
              src="/images/contact-icon.png"
              alt="Contact"
              width={32}
              height={32}
              className="w-7 h-7 md:w-8 md:h-8 object-contain shrink-0"
            />
            <h1 className="text-xl md:text-2xl font-bold tracking-wider uppercase">Contact</h1>
          </div>

          {/* Spacer balances the Back link so the title stays centered */}
          <div className="w-16 shrink-0" />
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">

          {/* Hero */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Let's work together
            </h2>
            <p className="text-lg text-muted-foreground text-balance">
              Building systems that help you focus on what matters
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Left — Contact Form */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-primary uppercase tracking-wider">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm text-muted-foreground tracking-wide">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-lg bg-card border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm text-muted-foreground tracking-wide">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-lg bg-card border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm text-muted-foreground tracking-wide">Subject</label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                    placeholder="What's this about?"
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm text-muted-foreground tracking-wide">Message</label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground rounded-lg font-medium tracking-wide hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                  {status === "sending" ? "Opening mail client..." : status === "sent" ? "Email client opened" : "Send Message"}
                </button>

                <p className="text-xs text-muted-foreground/60 text-center">
                  Or email directly:{" "}
                  <a href="mailto:tajae.hut@gmail.com" className="text-primary hover:underline">
                    tajae.hut@gmail.com
                  </a>
                </p>
              </form>
            </div>

            {/* Right — Social Links */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-primary uppercase tracking-wider">
                Connect
              </h3>

              <div className="space-y-3">
                {/* Calendly CTA */}
                <a
                  href="https://calendly.com/tajae-hut/30-minute-meeting-clone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-5 bg-card border border-border/50 rounded-lg hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="p-2.5 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">Book a call</p>
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                      Free 15-min Consultation
                    </span>
                  </div>
                </a>

                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 p-5 bg-card border border-border/50 rounded-lg hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]"
                    >
                      <div className={`p-2.5 rounded-full bg-primary/10 ${social.color} group-hover:bg-primary group-hover:text-primary-foreground transition-colors`}>
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
