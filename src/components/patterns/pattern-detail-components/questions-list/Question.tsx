import { ChevronRight, Info } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Question } from "@/types";
import { QuestionDetails } from "./QuestionDetails";

interface QuestionProps {
  question: Question;
  index: number;
  prefix?: string;
  isCompleted: boolean;
  toggleQuestion: (questionId: number) => void;
}

export const QuestionComponent = ({ question, index, prefix = "", isCompleted, toggleQuestion }: QuestionProps) => {
  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      easy: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
      medium: "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300",
      hard: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
    };
    return colors[difficulty as keyof typeof colors] || colors.medium;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-purple-100 dark:border-purple-900 transition-all duration-300 hover:shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          {prefix}{index + 1}. {question.title}
        </h3>
        <div className="flex items-center gap-4">
          {question.details && <QuestionDetails question={question} />}
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(
              question.difficulty
            )}`}
          >
            {question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)}
          </span>
          <Checkbox
            id={`question-${question.id}`}
            checked={isCompleted}
            onCheckedChange={() => toggleQuestion(question.id)}
            className="h-5 w-5"
          />
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{question.description}</p>
      <div>
        <a
          href={question.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium transition-colors"
        >
          Solve on LeetCode
          <ChevronRight className="ml-1 w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

