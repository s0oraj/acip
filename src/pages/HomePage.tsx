import { useEffect, useState } from "react";
import { patterns } from "@/data/patterns";
import { Header } from "@/components/layout/Header";
import { BackgroundGradient } from "@/components/layout/BackgroundGradient";
import { StatsSection } from "@/components/stats/StatsSection";
import { PatternGrid } from "@/components/pattern/PatternGrid";

const Index = () => {
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

export default Index;import { patterns } from "@/data/patterns";
import { Link } from "react-router-dom";
import { Brain, ChevronRight, Code2, BookOpen, Trophy } from 'lucide-react';
import { useEffect, useState } from "react";
import { DifficultyBadge } from "@/components/DifficultyBadge";
import { calculatePatternDifficulty, getDifficultyLevel } from "@/utils/difficultyUtils";

const Index = () => {
  const [patternProgress, setPatternProgress] = useState<Record<number, number[]>>({});

  useEffect(() => {
    const progress: Record<number, number[]> = {};
    patterns.forEach(pattern => {
      const stored = localStorage.getItem(`pattern-${pattern.id}-completed`);
      progress[pattern.id] = stored ? JSON.parse(stored) : [];
    });
    setPatternProgress(progress);
  }, []);

  const calculateProgress = (patternId: number) => {
    const pattern = patterns.find(p => p.id === patternId);
    if (!pattern) return 0;

    const completed = patternProgress[patternId]?.length || 0;
    let total = 0;

    if (pattern.subpatterns && pattern.subpatterns.length > 0) {
      total = pattern.subpatterns.reduce((sum, subpattern) => sum + subpattern.questions.length, 0);
    } else {
      total = pattern.questions.length;
    }

    return total > 0 ? (completed / total) * 100 : 0;
  };

  const getTotalQuestions = (pattern: any) => {
    if (pattern.subpatterns && pattern.subpatterns.length > 0) {
      return pattern.subpatterns.reduce((sum: number, subpattern: any) => sum + subpattern.questions.length, 0);
    }
    return pattern.questions.length;
  };

  const isEndOfRow = (index: number) => (index + 1) % 3 === 0;
  const isLastPattern = (index: number) => index === patterns.length - 1;

  const renderArrow = (index: number) => {
    if (isLastPattern(index)) return null;

    if (isEndOfRow(index)) {
      return (
        <div className="absolute right-0 top-1/2 w-32 h-48 overflow-visible">
          <svg 
            className="curved-arrow absolute -right-16 -top-8 w-32 h-48 text-blue-400/50 dark:text-blue-600/50"
            viewBox="0 0 128 192"
          >
            <path
              d="M 0,24 
                 C 32,24 96,24 96,96 
                 C 96,168 32,168 0,168"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="curved-arrow-path"
            />
            <path
              d="M 8,160 L 0,168 L 8,176"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </div>
      );
    }

    return (
      <div className="absolute top-1/2 -right-8 w-8 h-8">
        <svg 
          className="straight-arrow w-8 h-8 text-blue-400/50 dark:text-blue-600/50"
          viewBox="0 0 32 32"
        >
          <path
            d="M 0,16 L 24,16 M 16,8 L 24,16 L 16,24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="straight-arrow-path"
          />
        </svg>
      </div>
    );
  };

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
          
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
              {[
                { icon: Code2, label: "Patterns", value: "11", color: "from-blue-500 to-blue-600" },
                { icon: BookOpen, label: "Questions", value: "220+", color: "from-indigo-500 to-indigo-600" },
                { icon: Trophy, label: "Success Rate", value: "89%", color: "from-purple-500 to-purple-600" },
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="group relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:bg-gray-800/90 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-blue-100 dark:border-gray-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl" />
                  <stat.icon className="w-10 h-10 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16">
            {patterns.map((pattern, index) => {
              const questions = pattern.subpatterns
                ? pattern.subpatterns.flatMap(sp => sp.questions)
                : pattern.questions;
              const difficultyValue = calculatePatternDifficulty(questions.map(q => ({
                difficulty: q.difficulty as 'easy' | 'medium' | 'hard'
              })));
              const difficultyLevel = getDifficultyLevel(difficultyValue);
              const totalQuestions = getTotalQuestions(pattern);
              
              return (
                <div key={pattern.id} className="relative group">
                  <Link to={`/pattern/${pattern.id}`}>
                    <div className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:bg-gray-800 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-blue-100 dark:border-gray-600 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-indigo-100/20 dark:from-blue-500/10 dark:to-indigo-500/10" />
                      
                      <div className="absolute top-4 right-4">
                        <DifficultyBadge difficulty={difficultyLevel} />
                      </div>
                      
                      <div className="flex justify-between items-start mb-4 pt-6 relative">
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {pattern.title}
                        </h2>
                        <ChevronRight className="w-6 h-6 text-blue-500 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-6 relative">{pattern.description}</p>
                      
                      <div className="flex items-center justify-between relative">
                        <span className="px-3 py-1 bg-blue-100/80 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                          {patternProgress[pattern.id]?.length || 0}/{totalQuestions} Questions
                        </span>
                        <div className="h-2 w-24 bg-blue-100/80 dark:bg-blue-900/50 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-300"
                            style={{ width: `${calculateProgress(pattern.id)}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                  {renderArrow(index)}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
