// pages/PatternDetail.tsx
import { useParams, Link } from "react-router-dom";
import { patterns } from "@/data/patterns";
import { useState, useEffect } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { QuestionList } from "@/components/questions/QuestionList";
import { PatternSummary } from "@/components/patterns/PatternSummary";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function PatternDetail() {
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

  if (!pattern) return <div>Pattern not found</div>;

  const allQuestions = pattern.subpatterns
    ? pattern.subpatterns.flatMap(subpattern => subpattern.questions)
    : pattern.questions;

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Link to="/">
            <Button
              variant="ghost"
              className="mb-6 hover:bg-purple-100 hover:text-purple-700"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Patterns
            </Button>
          </Link>

          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">
              {pattern.title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
              {pattern.description}
            </p>
          </div>

          <QuestionList
            questions={allQuestions}
            completedQuestions={completedQuestions}
            onToggleComplete={toggleQuestion}
          />

          {pattern.summary && (
            <PatternSummary 
              summary={pattern.summary}
              className="mt-12" 
            />
          )}
        </div>
      </div>
    </MainLayout>
  );
}
