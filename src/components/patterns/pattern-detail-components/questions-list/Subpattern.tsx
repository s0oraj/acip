import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Subpattern } from "@/types";
import { QuestionComponent } from "./Question";
import AnimationDialog from "./AnimationDialog";
import { countingAnimations } from "@/data/patterns/counting/animations";

interface SubpatternProps {
  subpattern: Subpattern;
  subpatternIndex: number;
  completedQuestions: number[];
  toggleQuestion: (questionId: number) => void;
}

export const SubpatternComponent = ({ subpattern, subpatternIndex, completedQuestions, toggleQuestion }: SubpatternProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const contentRef = useRef(null);
  
  useEffect(() => {
    console.log('Subpattern rendered:', subpattern.title);
  }, [subpattern]);

  const toggleSubpattern = () => {
    console.log('Toggling subpattern:', subpattern.title);
    setIsExpanded(!isExpanded);
  };

  const animationKey = subpattern.title.toLowerCase().replace(/[^a-z0-9]/g, '');
  const animation = countingAnimations[animationKey];

  const contentHeight = contentRef.current?.scrollHeight || 'auto';

  return (
    <div className="border rounded-lg mb-4">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h3 className="text-lg font-semibold">
              {subpattern.title}
            </h3>
            
            {animation && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsDialogOpen(true)}
              >
                View Animation
              </Button>
            )}
            
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleSubpattern}
              className="ml-2"
            >
              {isExpanded ? <ChevronUp /> : <ChevronDown />}
            </Button>
          </div>
        </div>
      </div>

      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-300 ${
          isExpanded ? 'max-h-[1000px]' : 'max-h-0'
        }`}
      >
        <div className="p-4 pt-0">
          {subpattern.questions.map((question, index) => (
            <QuestionComponent
              key={question.id}
              question={question}
              isCompleted={completedQuestions.includes(question.id)}
              onToggle={() => toggleQuestion(question.id)}
            />
          ))}
        </div>
      </div>

      {animation && (
        <AnimationDialog
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          animation={animation}
        />
      )}
    </div>
  );
};
