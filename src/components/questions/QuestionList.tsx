// components/questions/QuestionList.tsx
import { Question } from '@/data/types';
import { QuestionCard } from './QuestionCard';
import { useState } from 'react';

interface QuestionListProps {
  questions: Question[];
  onToggleComplete: (id: number) => void;
  completedQuestions: number[];
}

export function QuestionList({ 
  questions, 
  onToggleComplete, 
  completedQuestions 
}: QuestionListProps) {
  const [filter, setFilter] = useState<'all' | 'completed' | 'pending'>('all');

  const filteredQuestions = questions.filter(question => {
    if (filter === 'completed') return completedQuestions.includes(question.id);
    if (filter === 'pending') return !completedQuestions.includes(question.id);
    return true;
  });

  return (
    <div>
      <div className="flex gap-4 mb-6">
        {(['all', 'completed', 'pending'] as const).map(filterType => (
          <button
            key={filterType}
            onClick={() => setFilter(filterType)}
            className={`px-4 py-2 rounded-lg ${
              filter === filterType 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'
            }`}
          >
            {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
          </button>
        ))}
      </div>
      <div className="space-y-6">
        {filteredQuestions.map((question, index) => (
          <QuestionCard
            key={question.id}
            question={question}
            index={index + 1}
            isCompleted={completedQuestions.includes(question.id)}
            onToggleComplete={() => onToggleComplete(question.id)}
          />
        ))}
      </div>
    </div>
  );
}
