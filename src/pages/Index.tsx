// pages/Index.tsx
import { patterns } from "@/data/patterns";
import { HeroSection } from "@/components/hero/HeroSection";
import { PatternGrid } from "@/components/patterns/PatternGrid";
import { MainLayout } from "@/components/layout/MainLayout";
import { useState, useEffect } from "react";

export default function Index() {
  const [patternProgress, setPatternProgress] = useState<Record<number, number[]>>({});

  useEffect(() => {
    const loadProgress = () => {
      const progress: Record<number, number[]> = {};
      patterns.forEach(pattern => {
        const stored = localStorage.getItem(`pattern-${pattern.id}-completed`);
        progress[pattern.id] = stored ? JSON.parse(stored) : [];
      });
      setPatternProgress(progress);
    };

    loadProgress();
    window.addEventListener('storage', loadProgress);
    return () => window.removeEventListener('storage', loadProgress);
  }, []);

  return (
    <MainLayout>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 py-12 relative">
            <HeroSection />
            <PatternGrid 
              patterns={patterns.map(pattern => ({
                ...pattern,
                completedQuestions: patternProgress[pattern.id] || []
              }))}
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
