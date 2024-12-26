import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen } from 'lucide-react';
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
    <div className="space-y-6 mb-8">
      <Link to="/">
        <Button
          variant="ghost"
          className="hover:bg-pattern-100 hover:text-pattern-700 dark:hover:bg-pattern-900/50 dark:hover:text-pattern-300 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Patterns
        </Button>
      </Link>

      <div className="space-y-4">
        <div className="flex items-start space-x-4">
          <div className="bg-pattern-100 dark:bg-pattern-900/50 p-3 rounded-xl">
            <BookOpen className="h-6 w-6 text-pattern-600 dark:text-pattern-400" />
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-2">
              {pattern.title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {pattern.description}
            </p>
          </div>
        </div>

        <div className="bg-pattern-50 dark:bg-pattern-900/30 rounded-xl p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-pattern-700 dark:text-pattern-300">
              Progress: {completedQuestions.length}/{allQuestions.length} completed
            </span>
            <span className="text-sm font-medium text-pattern-700 dark:text-pattern-300">
              {Math.round(completionPercentage)}%
            </span>
          </div>
          <div className="h-2.5 bg-pattern-100 dark:bg-pattern-900/50 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-pattern-500 to-pattern-600 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
