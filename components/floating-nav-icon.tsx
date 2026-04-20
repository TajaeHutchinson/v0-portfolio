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
  "top-left": "top-12 left-12 md:top-[20%] md:left-[20%]",
  "top-right": "top-12 right-12 md:top-[20%] md:right-[20%]",
  "bottom-left": "bottom-12 left-12 md:bottom-[20%] md:left-[20%]",
  "bottom-right": "bottom-12 right-12 md:bottom-[20%] md:right-[20%]",
}

  const labelPositionClasses = {
    "top-left": "top-full left-1/2 -translate-x-1/2 mt-2",
    "top-right": "top-full left-1/2 -translate-x-1/2 mt-2",
    "bottom-left": "bottom-full left-1/2 -translate-x-1/2 mb-2",
    "bottom-right": "bottom-full left-1/2 -translate-x-1/2 mb-2",
  }

  return (
    <Link
      href={href}
      className={cn("absolute z-10", positionClasses[position])}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative flex flex-col items-center">
        {/* Icon — no border, just rotate on hover */}
        <div
          className="transition-transform ease-in-out"
          style={{
            transform: isHovered ? "rotate(360deg)" : "rotate(0deg)",
            transitionDuration: "0.5s",
          }}
        >
          {children}
        </div>

        {/* Label */}
        <span
          className={cn(
            "absolute whitespace-nowrap text-sm md:text-base font-medium tracking-wide text-primary",
            "transition-all duration-300 ease-out pointer-events-none",
            labelPositionClasses[position],
            isHovered
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2"
          )}
          style={{ fontFamily: "var(--font-handwritten)" }}
        >
          {label}
        </span>
      </div>
    </Link>
  )
}
