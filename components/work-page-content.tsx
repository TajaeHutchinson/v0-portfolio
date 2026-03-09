"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Play } from "lucide-react"
import { HamburgerMenu } from "./hamburger-menu"
import { cn } from "@/lib/utils"

const templateDesigns = [
  {
    id: 1,
    title: "Music Production Release/Metadata Tracker",
    description: "Manage song metadata, publishing splits & release timelines",
    image: "/images/templates/template-1.jpg",
    link: "https://www.notion.com/templates/music-production-release-metadata-tracker",
  },
  {
    id: 2,
    title: "Content Calendar",
    description: "Plan and schedule your content effortlessly",
    image: "/images/templates/template-2.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "Finance Tracker",
    description: "Keep your finances organized and clear",
    image: "/images/templates/template-3.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "Habit Tracker",
    description: "Build better habits with daily tracking",
    image: "/images/templates/template-4.jpg",
    link: "#",
  },
  {
    id: 5,
    title: "Reading List",
    description: "Track and organize your reading journey",
    image: "/images/templates/template-5.jpg",
    link: "#",
  },
  {
    id: 6,
    title: "Goal Planner",
    description: "Set and achieve your goals systematically",
    image: "/images/templates/template-6.jpg",
    link: "#",
  },
]

const albumCovers = [
  {
    id: 1,
    title: "Album One",
    image: "/images/albums/album-1.jpg",
    spotifyLink: "https://open.spotify.com/album/2Ea1wglFrVhGM17qiRgIWH",
  },
  {
    id: 2,
    title: "Album Two",
    image: "/images/albums/album-2.jpg",
    spotifyLink: "https://open.spotify.com/album/7mbmlH7tLfOoDqHU0WRaHO",
  },
  {
    id: 3,
    title: "Album Three",
    image: "/images/albums/album-3.jpg",
    spotifyLink: "https://open.spotify.com/album/23ovNUV0ar4u22GxL7MKPU",
  },
  {
    id: 4,
    title: "Album Four",
    image: "/images/albums/album-4.jpg",
    spotifyLink: "https://spotify.com",
  },
]

const youtubeVideos = [
  {
    id: 1,
    title: "Music Video 1",
    embedId: "kmwFGLN0tzc",
  },
  {
    id: 2,
    title: "Music Video 2",
    embedId: "u408ob85xDw",
  },
]

export function WorkPageContent() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-6">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-white/60 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm tracking-wide">Back</span>
        </Link>
        
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3">
          <h1 className="text-2xl md:text-3xl font-light tracking-[0.3em] uppercase">Work</h1>
          <Image 
            src="/images/eye-icon.png" 
            alt="" 
            width={40} 
            height={40} 
            className="w-8 h-8 md:w-10 md:h-10 object-contain"
          />
        </div>
        
        <HamburgerMenu />
      </header>

      {/* Main Content */}
      <div className="pt-24 pb-16 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Split Layout */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            
            {/* Left Column - Template Designs */}
            <section className="flex-1">
              <h2 className="text-xl md:text-2xl font-light tracking-[0.2em] uppercase mb-8 text-white/90">
                Template Designs
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {templateDesigns.map((template) => (
                  <TemplateCard key={template.id} template={template} />
                ))}
              </div>
            </section>

            {/* Divider for large screens */}
            <div className="hidden lg:block w-px bg-gradient-to-b from-transparent via-purple-500/30 to-transparent" />

            {/* Right Column - Music Projects */}
            <section className="flex-1">
              <h2 className="text-xl md:text-2xl font-light tracking-[0.2em] uppercase mb-8 text-white/90">
                Music Projects
              </h2>

              {/* Album Covers Grid */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                {albumCovers.map((album) => (
                  <AlbumCard key={album.id} album={album} />
                ))}
              </div>

              {/* YouTube Videos */}
              <div className="space-y-6 mb-10">
                {youtubeVideos.map((video) => (
                  <div 
                    key={video.id} 
                    className="relative aspect-video rounded-lg overflow-hidden bg-white/5 border border-white/10"
                  >
                    <iframe
                      src={`https://www.youtube.com/embed/${video.embedId}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                ))}
              </div>

              {/* View All Button */}
              <div className="flex justify-center">
                <Link
                  href="#"
                  className={cn(
                    "px-8 py-3 rounded-full border border-purple-500/50",
                    "text-purple-400 text-sm tracking-wider uppercase",
                    "hover:bg-purple-500/10 hover:border-purple-500",
                    "transition-all duration-300"
                  )}
                >
                  View All Music
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}

function TemplateCard({ template }: { template: typeof templateDesigns[0] }) {
  return (
    <Link 
      href={template.link}
      className="group relative block rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black/40" />
        <Image
          src={template.image}
          alt={template.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/20 transition-colors duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 py-2 bg-black/60 rounded-full text-sm text-white flex items-center gap-2">
            View Template <ExternalLink className="w-4 h-4" />
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4">
        <h3 className="text-white font-medium mb-1 group-hover:text-purple-400 transition-colors">
          {template.title}
        </h3>
        <p className="text-white/50 text-sm line-clamp-1">
          {template.description}
        </p>
      </div>

      {/* Purple glow on hover */}
      <div className="absolute inset-0 rounded-xl shadow-[0_0_30px_-5px_rgba(139,92,246,0)] group-hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)] transition-shadow duration-300 pointer-events-none" />
    </Link>
  )
}

function AlbumCard({ album }: { album: typeof albumCovers[0] }) {
  return (
    <a
      href={album.spotifyLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block aspect-square rounded-lg overflow-hidden bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
    >
      <Image
        src={album.image}
        alt={album.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
          <Play className="w-6 h-6 text-black fill-black ml-1" />
        </div>
      </div>
    </a>
  )
}
