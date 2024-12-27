import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Pattern } from "@/types";
import { DifficultyBadge } from "@/components/DifficultyBadge";
import { calculatePatternDifficulty, getDifficultyLevel } from "@/utils/difficultyUtils";

interface PatternHeaderProps {
  pattern: Pattern;
  completedQuestions: number[];
  allQuestions: any[];
}

export const PatternHeader = ({ pattern, completedQuestions, allQuestions }: PatternHeaderProps) => {
  const difficultyValue = calculatePatternDifficulty(allQuestions.map(q => ({
    difficulty: q.difficulty as 'easy' | 'medium' | 'hard'
  })));
  const difficultyLevel = getDifficultyLevel(difficultyValue);

  return (
    <div className="mb-8">
      <Link 
        to="/" 
        className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Patterns
      </Link>
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
            {pattern.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
            {pattern.description}
          </p>
        </div>
        
        <div className="flex flex-col items-end gap-3">
          <DifficultyBadge difficulty={difficultyLevel} />
          <div className="text-gray-600 dark:text-gray-300">
            <span className="font-semibold">{completedQuestions.length}</span>
            <span className="mx-1">/</span>
            <span>{allQuestions.length} completed</span>
          </div>
        </div>
      </div>
    </div>
  );
};
