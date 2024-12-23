// src/components/pattern/PatternGrid.tsx
import { Pattern } from "@/types";
import { PatternCard } from "./PatternCard";
import { ArrowConnector } from "./ArrowConnector";

interface PatternGridProps {
  patterns: Pattern[];
  progress: Record<number, number[]>;
}

export const PatternGrid = ({ patterns, progress }: PatternGridProps) => {
  const isEndOfRow = (index: number) => (index + 1) % 3 === 0;
  const isLastPattern = (index: number) => index === patterns.length - 1;

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16">
      {patterns.map((pattern, index) => (
        <div key={pattern.id} className="relative group">
          <PatternCard
            id={pattern.id}
            title={pattern.title}
            description={pattern.description}
          />
          {!isLastPattern(index) && (
            <ArrowConnector isEndOfRow={isEndOfRow(index)} />
          )}
        </div>
      ))}
    </div>
  );
};

