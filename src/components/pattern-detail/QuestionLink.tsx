// src/components/pattern-detail/QuestionLink.tsx
import { ChevronRight } from "lucide-react";

interface QuestionLinkProps {
  link: string;
}

export const QuestionLink = ({ link }: QuestionLinkProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium transition-colors"
    >
      Solve on LeetCode
      <ChevronRight className="ml-1 w-4 h-4" />
    </a>
  );
};

