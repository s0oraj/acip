// src/components/pattern-detail/PatternHeader.tsx
import { Pattern } from "@/types";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface PatternHeaderProps {
  pattern: Pattern;
}

export const PatternHeader = ({ pattern }: PatternHeaderProps) => {
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
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">
            {pattern.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
            {pattern.description}
          </p>
        </div>
      </div>
    </>
  );
};
