import Link from "next/link"
import { Youtube, FileText } from "lucide-react"

export function ResourcesSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 tracking-tight">
          RESOURCES
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Link
            href="https://www.youtube.com/@trancestudy"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-6 rounded-lg border border-border/50 bg-card/30 hover:border-primary/50 hover:bg-card/50 transition-all duration-300"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Youtube className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                YouTube Tutorials
              </h3>
              <p className="text-sm text-muted-foreground">
                Music production & workflow tips
              </p>
            </div>
          </Link>

          <Link
            href="#templates"
            className="group flex items-center gap-4 p-6 rounded-lg border border-border/50 bg-card/30 hover:border-primary/50 hover:bg-card/50 transition-all duration-300"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                Notion Templates
              </h3>
              <p className="text-sm text-muted-foreground">
                Workflow systems for creators
              </p>
            </div>
          </Link>
        </div>

        <div id="templates" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="https://www.notion.com/templates/music-production-release-metadata-tracker"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-lg border border-border/30 bg-card/20 hover:border-primary/50 hover:bg-card/40 transition-all duration-300"
            >
              <h4 className="font-medium text-sm mb-1">Music Production Release Tracker</h4>
              <p className="text-xs text-muted-foreground">
                Manage song metadata & release timelines
              </p>
            </Link>

            <Link
              href="/work/creative-digital-release-tracker"
              className="p-4 rounded-lg border border-border/30 bg-card/20 hover:border-primary/50 hover:bg-card/40 transition-all duration-300"
            >
              <h4 className="font-medium text-sm mb-1">Creative Digital Release Tracker</h4>
              <p className="text-xs text-muted-foreground">
                Coordinate digital projects across platforms
              </p>
            </Link>

            <Link
              href="/work/ai-devops-tracker-lite"
              className="p-4 rounded-lg border border-border/30 bg-card/20 hover:border-primary/50 hover:bg-card/40 transition-all duration-300"
            >
              <h4 className="font-medium text-sm mb-1">AI DevOps Tracker: Lite</h4>
              <p className="text-xs text-muted-foreground">
                Structural framework for AI builders
              </p>
            </Link>
          </div>

          <div className="text-center pt-4">
            <Link
              href="https://www.notion.com/@tajae_hutchinson"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
            >
              Browse all templates on Notion Marketplace →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
