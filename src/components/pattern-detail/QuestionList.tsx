import React from 'react';
import { Question } from '@/types';
import { QuestionCard } from './QuestionCard';

interface QuestionListProps {
  questions: Question[];
  subpatternIndex?: number;
  completedQuestions: number[];
  onToggleQuestion: (questionId: number) => void;
}

export const QuestionList: React.FC<QuestionListProps> = ({
  questions,
  subpatternIndex,
  completedQuestions,
  onToggleQuestion,
}) => {
  return (
    <div className="space-y-6">
      {questions.map((question, index) => (
        <QuestionCard
          key={question.id}
          question={question}
          index={index}
          subpatternIndex={subpatternIndex}
          isCompleted={completedQuestions.includes(question.id)}
          onToggle={() => onToggleQuestion(question.id)}
        />
      ))}
    </div>
  );
};
