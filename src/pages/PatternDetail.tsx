import { useParams } from "react-router-dom";
import { patterns } from "@/data/patterns";
import { useEffect, useState } from "react";
import { PatternHeader } from "@/components/patterns/pattern-detail-components/PatternHeader";
import { QuestionsList } from "@/components/patterns/pattern-detail-components/questions-list/QuestionsList";
import { toast } from "@/components/ui/use-toast";

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
      
      toast({
        title: prev.includes(questionId) ? "Question unmarked" : "Question completed",
        description: prev.includes(questionId) 
          ? "Progress has been updated"
          : "Keep up the great work!",
        variant: prev.includes(questionId) ? "default" : "destructive",
      });
      
      return newCompleted;
    });
  };

  if (!pattern) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-pattern-50 dark:bg-gray-900">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-pattern-800 dark:text-pattern-200">
            Pattern Not Found
          </h2>
          <p className="text-pattern-600 dark:text-pattern-400">
            The pattern you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  const allQuestions = pattern.subpatterns
    ? pattern.subpatterns.flatMap(subpattern => subpattern.questions)
    : pattern.questions;

  return (
    <div className="min-h-screen bg-gradient-to-b from-pattern-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 py-8 animate-pattern-fade">
        <PatternHeader 
          pattern={pattern}
          completedQuestions={completedQuestions}
          allQuestions={allQuestions}
        />
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 animate-pattern-slide">
          <QuestionsList
            pattern={pattern}
            completedQuestions={completedQuestions}
            toggleQuestion={toggleQuestion}
          />
        </div>
      </div>
    </div>
  );
};

export default PatternDetail;
