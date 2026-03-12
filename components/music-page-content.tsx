"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Play } from "lucide-react"
import { HamburgerMenu } from "./hamburger-menu"

const tranceStudyAlbums = [
  {
    id: 1,
    title: "Trance & Study: Sync Experience (Vol.1)",
    image: "/images/albums/album-4.jpg",
    spotifyLink: "https://open.spotify.com/album/23ovNUV0ar4u22GxL7MKPU",
    comingSoon: false,
  },
  {
    id: 2,
    title: "Don't Tap The Glass",
    image: "/images/albums/album-1.jpg",
    spotifyLink: "https://open.spotify.com/album/2Ea1wglFrVhGM17qiRgIWH",
    comingSoon: false,
  },
  {
    id: 3,
    title: "Trance & Study: Sync Experience (Vol.2)",
    image: "/images/albums/album-2.jpg",
    spotifyLink: "https://open.spotify.com/album/7mbmlH7tLfOoDqHU0WRaHO",
    comingSoon: false,
  },
  {
    id: 4,
    title: "Trance & Study: Sync Experience (Vol.3)",
    image: "/images/albums/album-3.jpg",
    spotifyLink: "",
    comingSoon: true,
  },
]

const youtubeVideos = [
  {
    id: 2,
    title: "Music Video 2",
    embedId: "u408ob85xDw",
  },
]

function AlbumCard({ album }: { album: typeof tranceStudyAlbums[0] }) {
  if (album.comingSoon) {
    return (
      <div className="group relative block aspect-square rounded-lg overflow-hidden bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-300 cursor-default">
        <Image
          src={album.image}
          alt={album.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-5 py-2.5 bg-purple-600/80 rounded-full text-sm font-medium text-white tracking-wider uppercase">
            Coming Soon
          </span>
        </div>
      </div>
    )
  }

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
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
          <Play className="w-6 h-6 text-black fill-black ml-1" />
        </div>
      </div>
    </a>
  )
}

export function MusicPageContent() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HamburgerMenu />
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-6 bg-black/80 backdrop-blur-sm border-b border-white/5">
        <Link
          href="/"
          className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-medium">Back</span>
        </Link>
        
        <div className="flex items-center gap-3">
          <Image
            src="/images/eye-icon.png"
            alt="Music"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <h1 className="text-2xl font-bold tracking-tight">MUSIC</h1>
        </div>
        
        <div className="w-16" />
      </header>

      {/* Section 1: Trance & Study */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 py-24 overflow-hidden pt-32">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/trancestudy/background.jpg"
            alt="Background"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#0A0E27]/60 to-[#1a1f3a]/80" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto w-full text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trance & Study
          </h2>
          <p className="text-xl text-white/70 mb-12">
            Experimental soundscapes and visual storytelling
          </p>
          
          {/* Album Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 max-w-4xl mx-auto">
            {tranceStudyAlbums.map((album) => (
              <AlbumCard key={album.id} album={album} />
            ))}
          </div>

          {/* Spotify Embed */}
          <div className="max-w-2xl mx-auto mb-8">
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/artist/52VlRvKcwWWeH8kX4A10ko?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>

          {/* YouTube Embed */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="rounded-lg overflow-hidden border border-white/20 shadow-lg">
              <iframe
                style={{ borderRadius: "12px" }}
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/${youtubeVideos[0].embedId}`}
                title={youtubeVideos[0].title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: TheGlassEyeFill */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/glasseyefill/background.jpg"
            alt="Background"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-purple-900/40 to-black/80" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto w-full text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            TheGlassEyeFill
          </h2>
          
          {/* Album Covers Row */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12 max-w-4xl mx-auto">
            <div className="aspect-square rounded-lg overflow-hidden border border-white/20 shadow-2xl">
              <Image
                src="/images/glasseyefill/cover-1.jpg"
                alt="Album Cover 1"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden border border-white/20 shadow-2xl">
              <Image
                src="/images/glasseyefill/cover-2.jpg"
                alt="Album Cover 2"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden border border-white/20 shadow-2xl hidden md:block">
              <Image
                src="/images/glasseyefill/cover-3.jpg"
                alt="Album Cover 3"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Spotify Embed */}
          <div className="max-w-2xl mx-auto mb-8">
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/artist/2bU38jZ09FflRQ37LL5ROa?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>

          {/* CTA */}
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-full transition-colors"
          >
            Explore More
          </a>
        </div>
      </section>
    </div>
  )
}
