"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const titles = ["Systems", "Soundscapes", "Solutions"]

export function AnimatedTagline() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false)
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % titles.length)
        setIsVisible(true)
      }, 500)
    }, 3500)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <h2
      className={cn(
        "text-xl md:text-2xl font-medium text-primary transition-opacity duration-500",
        isVisible ? "opacity-100" : "opacity-0"
      )}
    >
      {titles[currentIndex]}
    </h2>
  )
}
