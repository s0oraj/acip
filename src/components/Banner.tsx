import { Brain } from 'lucide-react';

export const Banner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 dark:from-blue-950 dark:via-indigo-950 dark:to-purple-950">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-24">
        <div className="text-center">
          {/* Brain Icon */}
          <div className="inline-block mb-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 blur-xl opacity-30 animate-pulse" />
            <div className="relative bg-gradient-to-r from-blue-500 to-indigo-500 p-4 rounded-2xl shadow-lg">
              <Brain className="w-14 h-14 text-white animate-bounce-slow" />
            </div>
          </div>

          {/* Title and Description */}
          <h1 className="text-6xl font-bold mb-6 text-white animate-fade-in">
            Advanced Coding Interview Patterns
          </h1>

          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-12 animate-fade-in">
            Master 220 coding interview questions organized in 11 essential patterns
          </p>

          {/* Statistics Section */}
          <StatisticsSection />
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};
