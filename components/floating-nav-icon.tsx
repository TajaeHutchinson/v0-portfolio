"use client"

import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface FloatingNavIconProps {
  href: string
  label: string
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right"
  children: React.ReactNode
}

export function FloatingNavIcon({ href, label, position, children }: FloatingNavIconProps) {
  const [isHovered, setIsHovered] = useState(false)

  const positionClasses = {
    "top-left": "top-[15%] left-[15%] md:top-[20%] md:left-[20%]",
    "top-right": "top-[15%] right-[15%] md:top-[20%] md:right-[20%]",
    "bottom-left": "bottom-[15%] left-[15%] md:bottom-[20%] md:left-[20%]",
    "bottom-right": "bottom-[15%] right-[15%] md:bottom-[20%] md:right-[20%]",
  }

  const labelPositionClasses = {
    "top-left": "top-full left-1/2 -translate-x-1/2 mt-3",
    "top-right": "top-full left-1/2 -translate-x-1/2 mt-3",
    "bottom-left": "bottom-full left-1/2 -translate-x-1/2 mb-3",
    "bottom-right": "bottom-full left-1/2 -translate-x-1/2 mb-3",
  }

  return (
    <Link
      href={href}
      className={cn(
        "absolute z-10 group",
        positionClasses[position]
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated ring */}
      <div className="relative">
        <div
          className={cn(
            "absolute inset-0 rounded-full border border-primary/30 transition-all duration-500",
            isHovered ? "scale-150 opacity-0" : "scale-100 opacity-100"
          )}
        />
        <div
          className={cn(
            "absolute inset-0 rounded-full border border-primary/20 transition-all duration-700 delay-100",
            isHovered ? "scale-[1.8] opacity-0" : "scale-100 opacity-0"
          )}
        />
        
        {/* Main icon circle */}
        <div
          className={cn(
            "relative w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center",
            "border-2 border-primary/40 bg-card/50 backdrop-blur-sm",
            "transition-all duration-300 ease-out",
            "hover:border-primary hover:bg-primary/10 hover:scale-110",
            "cursor-pointer"
          )}
        >
          <div className="text-foreground/70 group-hover:text-primary transition-colors duration-300">
            {children}
          </div>
        </div>

        {/* Label */}
        <span
          className={cn(
            "absolute whitespace-nowrap text-sm md:text-base font-medium tracking-wide",
            "transition-all duration-300 ease-out",
            labelPositionClasses[position],
            isHovered 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-2"
          )}
          style={{ fontFamily: 'var(--font-handwritten)' }}
        >
          {label}
        </span>
      </div>
    </Link>
  )
}
