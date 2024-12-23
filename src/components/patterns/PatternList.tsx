// components/patterns/PatternList.tsx
import { Pattern } from '@/data/types';
import { PatternCard } from './PatternCard';
import { PatternArrow } from './PatternArrow';

interface PatternListProps {
  patterns: Pattern[];
}

export const PatternList = ({ patterns }: PatternListProps) => {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16">
      {patterns.map((pattern, index) => (
        <div key={pattern.id} className="relative group">
          <PatternCard pattern={pattern} />
          <PatternArrow index={index} total={patterns.length} />
        </div>
      ))}
    </div>
  );
};
