import { useState, useRef } from "react";
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Subpattern } from "@/types";
import { QuestionComponent } from "./Question";

interface SubpatternProps {
  subpattern: Subpattern;
  subpatternIndex: number;
  completedQuestions: number[];
  toggleQuestion: (questionId: number) => void;
}

export const SubpatternComponent = ({ subpattern, subpatternIndex, completedQuestions, toggleQuestion }: SubpatternProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const toggleSubpattern = () => setIsExpanded(!isExpanded);

  return (
    <div className="space-y-6">
      <div
        className="subpattern-header bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-purple-100 dark:border-purple-900 transition-all duration-300 hover:shadow-xl cursor-pointer"
        onClick={toggleSubpattern}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            {subpattern.title}
          </h2>
          <div className="transform transition-transform duration-300">
            {isExpanded ? (
              <ChevronUp className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            ) : (
              <ChevronDown className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            )}
          </div>
        </div>
      </div>
      
      <div 
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isExpanded ? `${contentRef.current?.scrollHeight}px` : '0',
          opacity: isExpanded ? 1 : 0,
        }}
      >
        <div className="space-y-6">
          {subpattern.questions.map((question, index) => 
            <QuestionComponent
              key={question.id}
              question={question}
              index={index}
              prefix={`${subpatternIndex + 1}.`}
              isCompleted={completedQuestions.includes(question.id)}
              toggleQuestion={toggleQuestion}
            />
          )}
        </div>
      </div>
    </div>
  );
};

