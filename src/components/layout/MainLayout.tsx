// components/layout/MainLayout.tsx
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "react-router-dom";
import { Code2, BookOpen, GitFork, Home } from 'lucide-react';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const navigation = [
    { name: 'Overview', href: '/', icon: Home },
    { name: 'Patterns', href: '/patterns', icon: Code2 },
    { name: 'Documentation', href: '/docs', icon: BookOpen },
  ];

  return (
    <div className="flex min-h-screen">
      <div className="fixed inset-y-0 z-50 flex w-72 flex-col">
        <div className="flex flex-1 flex-col bg-gray-900">
          <div className="flex h-14 items-center px-4 border-b border-gray-800">
            <Link to="/" className="flex items-center gap-2">
              <Code2 className="h-6 w-6 text-blue-500" />
              <span className="font-semibold text-white">Coding Patterns</span>
            </Link>
          </div>
          <ScrollArea className="flex-1 py-4">
            <nav className="space-y-2 px-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-400 transition-colors hover:text-white",
                    "hover:bg-gray-800"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
              ))}
            </nav>
          </ScrollArea>
        </div>
      </div>
      <main className="pl-72 w-full">
        <div className="flex-1">{children}</div>
      </main>
    </div>
  );
}
