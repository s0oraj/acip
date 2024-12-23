// pages/Index.tsx
import { Brain } from 'lucide-react';
import { patterns } from "@/data/patterns";
import { StatisticsSection } from "@/components/patterns/index-page-components/StatisticsSection";
import { PatternGrid } from "@/components/patterns/index-page-components/PatternGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-full blur-3xl opacity-80" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-full blur-3xl opacity-80" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 py-12 relative">
          <div className="text-center mb-20">
            <div className="inline-block mb-6 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 blur-xl opacity-30 animate-pulse" />
              <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-2xl shadow-lg">
                <Brain className="w-14 h-14 text-white animate-bounce-slow" />
              </div>
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 dark:from-blue-400 dark:via-indigo-400 dark:to-blue-400">
              Advanced Coding Interview Patterns
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Master 220 coding interview questions organized in 11 essential patterns
            </p>
            
            <StatisticsSection />
          </div>

          <PatternGrid patterns={patterns} />
        </div>
      </div>
    </div>
  );
};

export default Index;
