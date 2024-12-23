// src/components/pattern-detail/QuestionCard.tsx
import { Question } from "@/types";
import { QuestionActions } from "./QuestionActions";
import { QuestionLink } from "./QuestionLink";

interface QuestionCardProps {
  question: Question;
  index: number;
  subpatternIndex?: number;
  isCompleted: boolean;
  onToggle: (id: number) => void;
}

export const QuestionCard = ({
  question,
  index,
  subpatternIndex,
  isCompleted,
  onToggle
}: QuestionCardProps) => {
  const questionNumber = subpatternIndex !== undefined
    ? `${subpatternIndex + 1}.${index + 1}`
    : `${index + 1}`;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-purple-100 dark:border-purple-900 transition-all duration-300 hover:shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          {questionNumber}. {question.title}
        </h3>
        <QuestionActions
          question={question}
          isCompleted={isCompleted}
          onToggle={onToggle}
        />
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {question.description}
      </p>
      <QuestionLink link={question.link} />
    </div>
  );
};
