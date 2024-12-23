// src/pages/Index.tsx
import { useEffect, useState } from "react";
import { patterns } from "@/data/patterns";
import { Header } from "@/components/layout/Header";
import { BackgroundGradient } from "@/components/layout/BackgroundGradient";
import { StatsSection } from "@/components/stats/StatsSection";
import { PatternGrid } from "@/components/pattern/PatternGrid";

const HomePage = () => {
  const [patternProgress, setPatternProgress] = useState<Record<number, number[]>>({});

  useEffect(() => {
    const progress: Record<number, number[]> = {};
    patterns.forEach(pattern => {
      const stored = localStorage.getItem(`pattern-${pattern.id}-completed`);
      progress[pattern.id] = stored ? JSON.parse(stored) : [];
    });
    setPatternProgress(progress);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="relative">
        <BackgroundGradient />
        <div className="max-w-7xl mx-auto px-4 py-12 relative">
          <Header />
          <StatsSection />
          <PatternGrid patterns={patterns} progress={patternProgress} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
