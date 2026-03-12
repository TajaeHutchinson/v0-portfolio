import { HeroSection } from "@/components/hero-section"
import { HamburgerMenu } from "@/components/hamburger-menu"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HamburgerMenu />
      <HeroSection />
    </main>
  )
}
