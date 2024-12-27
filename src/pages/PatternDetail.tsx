import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Pattern } from '@/types';
import { patterns } from '@/data/patterns';
import { PatternHeader } from '@/components/patterns/pattern-detail-components/PatternHeader';
import { QuestionsList } from '@/components/patterns/pattern-detail-components/questions-list/QuestionsList';

const PatternDetail = () => {
  const { patternId } = useParams();
  const [pattern, setPattern] = useState<Pattern | null>(null);
  const [completedQuestions, setCompletedQuestions] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load pattern data
    const currentPattern = patterns.find(p => p.id === patternId);
    if (currentPattern) {
      setPattern(currentPattern);
      // Load completed questions from localStorage
      const stored = localStorage.getItem(`pattern-${patternId}-completed`);
      setCompletedQuestions(stored ? JSON.parse(stored) : []);
    }
    setLoading(false);
  }, [patternId]);

  const toggleQuestion = (questionId: number) => {
    setCompletedQuestions(prev => {
      const newCompleted = prev.includes(questionId)
        ? prev.filter(id => id !== questionId)
        : [...prev, questionId];
      
      // Save to localStorage
      localStorage.setItem(
        `pattern-${patternId}-completed`,
        JSON.stringify(newCompleted)
      );
      
      return newCompleted;
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 p-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-4" />
          <div className="h-16 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-8" />
          <div className="space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-32 bg-gray-200 dark:bg-gray-700 rounded" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!pattern) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 p-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            Pattern not found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            The pattern you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  const allQuestions = pattern.subpatterns
    ? pattern.subpatterns.flatMap(sp => sp.questions)
    : pattern.questions;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 right-0 w-80 h-80 bg-gradient-to-br from-purple-50 via-white to-indigo-50 rounded-full blur-3xl opacity-80" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-50 via-white to-indigo-50 rounded-full blur-3xl opacity-80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12 relative">
          <PatternHeader 
            pattern={pattern}
            completedQuestions={completedQuestions}
            allQuestions={allQuestions}
          />

          <div className="mt-12">
            <QuestionsList
              pattern={pattern}
              completedQuestions={completedQuestions}
              toggleQuestion={toggleQuestion}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatternDetail;
