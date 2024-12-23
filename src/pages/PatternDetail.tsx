// src/pages/PatternDetail.tsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { patterns } from "@/data/patterns";
import { PatternHeader } from "@/components/pattern-detail/PatternHeader";
import { PatternProgress } from "@/components/pattern-detail/PatternProgress";
import { SubpatternList } from "@/components/pattern-detail/SubpatternList";
import { QuestionList } from "@/components/pattern-detail/QuestionList";
import { PatternSummary } from "@/components/pattern-detail/PatternSummary";
import { Question } from "@/types";

const PatternDetail = () => {
  const { id } = useParams();
  const pattern = patterns.find((p) => p.id === Number(id));
  const [completedQuestions, setCompletedQuestions] = useState<number[]>([]);
  const [expandedSubpatterns, setExpandedSubpatterns] = useState<number[]>([]);

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

  const toggleSubpattern = (subpatternIndex: number) => {
    setExpandedSubpatterns((prev) =>
      prev.includes(subpatternIndex)
        ? prev.filter((index) => index !== subpatternIndex)
        : [...prev, subpatternIndex]
    );
  };

  if (!pattern) {
    return <div>Pattern not found</div>;
  }

  const allQuestions: Question[] = pattern.subpatterns
    ? pattern.subpatterns.flatMap(subpattern => subpattern.questions)
    : pattern.questions;

  const completionPercentage = allQuestions.length > 0
    ? (completedQuestions.length / allQuestions.length) * 100
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <PatternHeader pattern={pattern} />
        <PatternProgress
          completed={completedQuestions.length}
          total={allQuestions.length}
          percentage={completionPercentage}
        />
        
        {pattern.subpatterns ? (
          <SubpatternList
            subpatterns={pattern.subpatterns}
            expandedSubpatterns={expandedSubpatterns}
            onToggleExpand={toggleSubpattern}
            completedQuestions={completedQuestions}
            onToggleQuestion={toggleQuestion}
          />
        ) : (
          <QuestionList
            questions={pattern.questions}
            completedQuestions={completedQuestions}
            onToggleQuestion={toggleQuestion}
          />
        )}

        {pattern.summary && <PatternSummary summary={pattern.summary} />}
      </div>
    </div>
  );
};

export default PatternDetail;
