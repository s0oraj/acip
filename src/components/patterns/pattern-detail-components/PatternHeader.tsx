import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Binary, Network } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Pattern, Question } from "@/types";

interface PatternHeaderProps {
  pattern: Pattern;
  completedQuestions: number[];
  allQuestions: Question[];
}

export const PatternHeader = ({ pattern, completedQuestions, allQuestions }: PatternHeaderProps) => {
  const completionPercentage = allQuestions.length > 0
    ? (completedQuestions.length / allQuestions.length) * 100
    : 0;

  return (
    <div className="w-full bg-gradient-to-br from-black via-indigo-950 to-black mb-8">
      {/* Back Button - Outside main content for full-width padding */}
      <div className="max-w-5xl mx-auto px-4 pt-4">
        <Link to="/">
          <Button
            variant="ghost"
            className="text-gray-300 hover:text-blue-400 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Patterns
          </Button>
        </Link>
      </div>

      {/* Main Header Content */}
      <div className="w-full relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        
        {/* Content Container */}
        <div className="max-w-5xl mx-auto px-4 py-12">
          <div className="relative space-y-8">
            {/* Title Section */}
            <div className="flex items-start gap-6">
              <div className="flex gap-4">
                <div className="relative">
                  <BookOpen className="w-12 h-12 text-blue-400" />
                  <div className="absolute inset-0 bg-blue-400/20 blur-xl" />
                </div>
                <div className="relative">
                  <Binary className="w-12 h-12 text-purple-400" />
                  <div className="absolute inset-0 bg-purple-400/20 blur-xl" />
                </div>
              </div>
              
              <div className="flex-1 space-y-3">
                <h1 className="text-4xl font-bold text-white">
                  {pattern.title}
                </h1>
                <p className="text-lg text-gray-300/90">
                  {pattern.description}
                </p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="glass p-6 rounded-xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-300">
                  Progress: {completedQuestions.length}/{allQuestions.length} completed
                </span>
                <span className="text-sm font-medium text-gray-300">
                  {Math.round(completionPercentage)}%
                </span>
              </div>
              <div className="h-2.5 bg-black/30 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${completionPercentage}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatternHeader;
