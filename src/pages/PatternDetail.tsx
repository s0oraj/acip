// pages/PatternDetail.tsx
import { useParams } from "react-router-dom";
import { patterns } from "@/data/patterns";
import { useEffect, useState } from "react";
import { PatternHeader } from "@/components/patterns/pattern-detail-components/PatternHeader";
import { QuestionsList } from "@/components/patterns/pattern-detail-components/questions-list/QuestionsList";

const PatternDetail = () => {
  const { id } = useParams();
  const pattern = patterns.find((p) => p.id === Number(id));
  const [completedQuestions, setCompletedQuestions] = useState<number[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(`pattern-${id}-completed`);
    if (stored) {
      setCompletedQuestions(JSON.parse(stored));
    }
  }, [id]);

  const toggleQuestion = (questionId: number) => {
    setCompletedQuestions((prev) => {
      const newCompleted = prev.includes(questionId)
        ? prev.filter((id) => id !== questionId)
        : [...prev, questionId];
      
      localStorage.setItem(`pattern-${id}-completed`, JSON.stringify(newCompleted));
      return newCompleted;
    });
  };

  if (!pattern) {
    return <div>Pattern not found</div>;
  }

  const allQuestions = pattern.subpatterns
    ? pattern.subpatterns.flatMap(subpattern => subpattern.questions)
    : pattern.questions;

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <PatternHeader 
          pattern={pattern}
          completedQuestions={completedQuestions}
          allQuestions={allQuestions}
        />
        
        <QuestionsList
          pattern={pattern}
          completedQuestions={completedQuestions}
          toggleQuestion={toggleQuestion}
        />
      </div>
    </div>
  );
};

export default PatternDetail;
