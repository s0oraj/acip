// components/questions/QuestionList.tsx
import { Question } from '@/data/types';
import { QuestionCard } from './QuestionCard';

interface QuestionListProps {
  questions: Question[];
  onToggleComplete: (id: number) => void;
  completedQuestions: number[];
}

export const QuestionList = ({ questions, onToggleComplete, completedQuestions }: QuestionListProps) => {
  return (
    <div className="space-y-6">
      {questions.map((question, index) => (
        <QuestionCard
          key={question.id}
          question={question}
          index={index}
          isCompleted={completedQuestions.includes(question.id)}
          onToggleComplete={() => onToggleComplete(question.id)}
        />
      ))}
    </div>
  );
};
