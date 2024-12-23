import { useState, useRef } from "react";
import { ChevronDown, ChevronUp, Play } from 'lucide-react';
import { Question } from "@/data/types";
import { QuestionComponent } from "./Question";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { countingAnimations } from "@/data/patterns/counting/animations";

interface Subpattern {
  title: string;
  questions: Question[];
}

interface SubpatternProps {
  subpattern: Subpattern;
  subpatternIndex: number;
  completedQuestions: number[];
  toggleQuestion: (questionId: number) => void;
}

export const SubpatternComponent = ({ subpattern, subpatternIndex, completedQuestions, toggleQuestion }: SubpatternProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const toggleSubpattern = (e: React.MouseEvent) => {
    // Don't toggle if clicking the animation button
    if ((e.target as HTMLElement).closest('.animation-button')) {
      return;
    }
    setIsExpanded(!isExpanded);
  };

  // Get the appropriate animation based on the subpattern title
  const getAnimation = () => {
    const key = subpattern.title.toLowerCase().replace(/\s+/g, '');
    return countingAnimations[key as keyof typeof countingAnimations];
  };

  const animation = getAnimation();

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
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="animation-button"
              onClick={(e) => {
                e.stopPropagation();
                setShowAnimation(true);
              }}
            >
              <Play className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <span className="sr-only">View Animation</span>
            </Button>
            <div className="transform transition-transform duration-300">
              {isExpanded ? (
                <ChevronUp className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              )}
            </div>
          </div>
        </div>
      </div>
      
      <Dialog open={showAnimation} onOpenChange={setShowAnimation}>
        <DialogContent className="max-w-4xl h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              {subpattern.title} Animation
            </DialogTitle>
          </DialogHeader>
          <div className="mt-6">
            {animation ? (
              <div className="space-y-8">
                {animation.steps.map((step, index) => (
                  <div key={index} className="space-y-4">
                    <h3 className="text-lg font-semibold">{step.description}</h3>
                    <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
                      <code>{step.code}</code>
                    </pre>
                    {/* Visualization placeholder - you can implement the actual visualization later */}
                    <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-8 text-center">
                      Visualization for step {index + 1}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-600 dark:text-gray-400">
                Animation not available for this subpattern yet.
              </p>
            )}
          </div>
        </DialogContent>
      </Dialog>
      
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
