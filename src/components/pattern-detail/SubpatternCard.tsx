import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { Subpattern } from '@/types';
import { QuestionCard } from './QuestionCard';

interface SubpatternCardProps {
  subpattern: Subpattern;
  index: number;
  isExpanded: boolean;
  onToggleExpand: () => void;
  completedQuestions: number[];
  onToggleQuestion: (id: number) => void;
}

export const SubpatternCard = ({ 
  subpattern, 
  index, 
  isExpanded, 
  onToggleExpand,
  completedQuestions,
  onToggleQuestion 
}: SubpatternCardProps) => {
  return (
    <div className="space-y-6">
      <div 
        className="subpattern-header bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-purple-100 dark:border-purple-900 transition-all duration-300 hover:shadow-xl cursor-pointer"
        onClick={onToggleExpand}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            {subpattern.title}
          </h2>
          {isExpanded ? (
            <ChevronUp className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          ) : (
            <ChevronDown className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          )}
        </div>
      </div>
      
      {isExpanded && (
        <div className="expand-animation space-y-6">
          {subpattern.questions.map((question, questionIndex) => (
            <QuestionCard
              key={question.id}
              question={question}
              index={questionIndex}
              subpatternIndex={index}
              isCompleted={completedQuestions.includes(question.id)}
              onToggle={onToggleQuestion}
            />
          ))}
        </div>
      )}
    </div>
  );
};
