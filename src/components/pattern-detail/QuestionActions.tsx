// src/components/pattern-detail/QuestionActions.tsx
import { Question } from "@/types";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Info } from "lucide-react";
import { QuestionDetails } from "./QuestionDetails";

interface QuestionActionsProps {
  question: Question;
  isCompleted: boolean;
  onToggle: (id: number) => void;
}

export const QuestionActions = ({
  question,
  isCompleted,
  onToggle
}: QuestionActionsProps) => {
  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      easy: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
      medium: "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300",
      hard: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
    };
    return colors[difficulty as keyof typeof colors] || colors.medium;
  };

  return (
    <div className="flex items-center gap-4">
      {question.details && (
        <QuestionDetails question={question} />
      )}
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
        onCheckedChange={() => onToggle(question.id)}
        className="h-5 w-5"
      />
    </div>
  );
};

