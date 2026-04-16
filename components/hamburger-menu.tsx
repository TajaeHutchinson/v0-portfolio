"use client"

import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const menuItems = [
  { label: "Music", href: "/music" },
  { label: "Builds", href: "/builds" },
  { label: "Services", href: "/services" },
  { label: "Templates", href: "/templates" },
  { label: "Contact", href: "/contact" },
]

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed top-6 right-6 z-50 w-12 h-12 flex flex-col items-center justify-center gap-1.5",
          "rounded-full border border-border/50 bg-card/80 backdrop-blur-md",
          "transition-all duration-300 hover:border-primary/50 hover:bg-card",
          isOpen && "border-primary/50"
        )}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <span
          className={cn(
            "w-5 h-0.5 bg-foreground transition-all duration-300 origin-center",
            isOpen && "rotate-45 translate-y-2"
          )}
        />
        <span
          className={cn(
            "w-5 h-0.5 bg-foreground transition-all duration-300",
            isOpen && "opacity-0 scale-0"
          )}
        />
        <span
          className={cn(
            "w-5 h-0.5 bg-foreground transition-all duration-300 origin-center",
            isOpen && "-rotate-45 -translate-y-2"
          )}
        />
      </button>

      {/* Fullscreen Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/95 backdrop-blur-xl",
          "transition-all duration-500 ease-out",
          isOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="h-full flex items-center justify-center">
          <ul className="flex flex-col items-center gap-8">
            {menuItems.map((item, index) => (
              <li
                key={item.label}
                className={cn(
                  "transition-all duration-500",
                  isOpen 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-8"
                )}
                style={{ 
                  transitionDelay: isOpen ? `${index * 100 + 200}ms` : "0ms" 
                }}
              >
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-4xl md:text-6xl font-light tracking-wider",
                    "text-foreground/60 hover:text-primary transition-colors duration-300",
                    "relative group"
                  )}
                >
                  {item.label}
                  <span className="absolute -bottom-2 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}
