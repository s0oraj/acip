// components/patterns/PatternHeader.tsx
import { Link } from "react-router-dom";
import { ArrowLeft } from 'lucide-react';
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
    <>
      <Link to="/">
        <Button
          variant="ghost"
          className="mb-6 hover:bg-purple-100 hover:text-purple-700 dark:hover:bg-purple-900 dark:hover:text-purple-300"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Patterns
        </Button>
      </Link>

      <div className="flex items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">{pattern.title}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">{pattern.description}</p>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
            Progress: {completedQuestions.length}/{allQuestions.length} completed
          </span>
          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
            {Math.round(completionPercentage)}%
          </span>
        </div>
        <div className="h-2 bg-purple-100 dark:bg-purple-900 rounded-full">
          <div
            className="h-full bg-purple-600 rounded-full transition-all duration-300"
            style={{ width: `${completionPercentage}%` }}
          />
        </div>
      </div>
    </>
  );
};
