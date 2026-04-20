import { HeroSection } from "@/components/hero-section"
import { HamburgerMenu } from "@/components/hamburger-menu"
import { AboutMeSection } from "@/components/about-me-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HamburgerMenu />
      <HeroSection />
      <AboutMeSection />
    </main>
  )
}
