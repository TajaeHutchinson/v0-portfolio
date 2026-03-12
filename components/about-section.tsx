import { AnimatedTagline } from "./animated-tagline"

export function AboutSection() {
  return (
    <div className="flex flex-col items-center gap-4 text-center max-w-2xl mx-auto px-6">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground">
        Tajae Y. Hutchinson
      </h1>
      
      <AnimatedTagline />
      
      
    </div>
  )
}
