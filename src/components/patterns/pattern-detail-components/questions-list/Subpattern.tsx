// src/components/patterns/pattern-detail-components/questions-list/Subpattern.tsx
import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Subpattern } from "@/types";
import { QuestionComponent } from "./Question";
import AnimationDialog from "./AnimationDialog";

interface SubpatternProps {
  subpattern: Subpattern;
  subpatternIndex: number;
  pattern: string;
  completedQuestions: number[];
  toggleQuestion: (questionId: number) => void;
}

export const SubpatternComponent = ({ 
  subpattern, 
  subpatternIndex, 
  pattern,
  completedQuestions, 
  toggleQuestion 
}: SubpatternProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const subpatternPath = subpattern.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  
  const contentHeight = contentRef.current?.scrollHeight || 'auto';

  return (
    <div className="space-y-6">
      <div className="subpattern-header bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-purple-100 dark:border-purple-900 transition-all duration-300 hover:shadow-xl">
        <div className="flex items-center justify-between">
          <h2 
            className="text-2xl font-bold text-gray-800 dark:text-gray-100 cursor-pointer"
            onClick={toggleSubpattern}
          >
            {subpattern.title}
          </h2>
          
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsDialogOpen(true)}
              className="flex items-center gap-2"
            >
              View Animation
            </Button>
            
            <div
              className="transform transition-transform duration-300 cursor-pointer"
              onClick={toggleSubpattern}
            >
              {isExpanded ? (
                <ChevronUp className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isExpanded ? contentHeight : 0,
          opacity: isExpanded ? 1 : 0,
        }}
      >
        <div className="space-y-6">
          {subpattern.questions.map((question, index) => (
            <QuestionComponent
              key={question.id}
              question={question}
              index={index}
              prefix={`${subpatternIndex + 1}.`}
              isCompleted={completedQuestions.includes(question.id)}
              toggleQuestion={toggleQuestion}
            />
          ))}
        </div>
      </div>

      <AnimationDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        patternPath={pattern}
        subpatternPath={subpatternPath}
      />
    </div>
  );
};
