// components/patterns/PatternGrid.tsx
import { Pattern } from '@/data/types';
import { PatternCard } from './PatternCard';
import { PatternArrow } from './PatternArrow';

interface PatternGridProps {
  patterns: Pattern[];
}

export function PatternGrid({ patterns }: PatternGridProps) {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16">
      {patterns.map((pattern, index) => (
        <div key={pattern.id} className="relative group">
          <PatternCard 
            id={pattern.id}
            title={pattern.title}
            description={pattern.description}
            difficulty={pattern.difficulty}
            totalQuestions={pattern.questions.length}
            completedQuestions={[]} // Pass from parent
          />
          <PatternArrow 
            index={index} 
            isLast={index === patterns.length - 1} 
          />
        </div>
      ))}
    </div>
  );
}
