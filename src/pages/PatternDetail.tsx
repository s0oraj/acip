import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { patterns } from '@/data/patterns';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PatternHeader } from '@/components/pattern-detail/PatternHeader';
import { PatternProgress } from '@/components/pattern-detail/PatternProgress';
import { SubpatternList } from '@/components/pattern-detail/SubpatternList';
import { QuestionList } from '@/components/pattern-detail/QuestionList';
import { DetailSection } from '@/components/pattern-detail/DetailSection';
import { BackgroundGradient } from '@/components/layout/BackgroundGradient';

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

  const allQuestions = pattern.subpatterns
    ? pattern.subpatterns.flatMap(subpattern => subpattern.questions)
    : pattern.questions || [];

  const completionPercentage = allQuestions.length > 0
    ? (completedQuestions.length / allQuestions.length) * 100
    : 0;

  return (
    <BackgroundGradient>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link to="/">
          <Button
            variant="ghost"
            className="mb-6 hover:bg-purple-100 hover:text-purple-700 dark:hover:bg-purple-900 dark:hover:text-purple-300"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Patterns
          </Button>
        </Link>

        <PatternHeader pattern={pattern} />
        <PatternProgress
          completedCount={completedQuestions.length}
          totalCount={allQuestions.length}
          percentage={completionPercentage}
        />

        {pattern.subpatterns && pattern.subpatterns.length > 0 ? (
          <SubpatternList
            subpatterns={pattern.subpatterns}
            expandedSubpatterns={expandedSubpatterns}
            completedQuestions={completedQuestions}
            onToggleSubpattern={toggleSubpattern}
            onToggleQuestion={toggleQuestion}
          />
        ) : (
          pattern.questions && (
            <QuestionList
              questions={pattern.questions}
              completedQuestions={completedQuestions}
              onToggleQuestion={toggleQuestion}
            />
          )
        )}

        {pattern.summary && (
          <DetailSection summary={pattern.summary} />
        )}
      </div>
    </BackgroundGradient>
  );
};

export default PatternDetail;
