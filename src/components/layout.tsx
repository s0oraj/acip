import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import Link from "next/link"
import { Code2, BookOpen, GitFork, Home } from 'lucide-react'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="hidden lg:block w-64 border-r bg-muted/40">
        <div className="flex h-16 items-center border-b px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Code2 className="h-6 w-6" />
            <span>Coding Patterns</span>
          </Link>
        </div>
        <ScrollArea className="h-[calc(100vh-4rem)] px-6 py-4">
          <nav className="space-y-2">
            <Button variant="ghost" className="w-full justify-start gap-2" asChild>
              <Link href="/">
                <Home className="h-4 w-4" />
                Overview
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2" asChild>
              <Link href="/patterns">
                <GitFork className="h-4 w-4" />
                Patterns
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2" asChild>
              <Link href="/docs">
                <BookOpen className="h-4 w-4" />
                Documentation
              </Link>
            </Button>
          </nav>
        </ScrollArea>
      </div>

      {/* Main content */}
      <div className="flex-1">
        <header className="flex h-16 items-center border-b px-6">
          <h1 className="text-lg font-semibold">Advanced Coding Patterns</h1>
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}

