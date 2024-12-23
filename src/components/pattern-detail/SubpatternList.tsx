// src/components/pattern-detail/SubpatternList.tsx
import { Subpattern } from "@/types";
import { SubpatternCard } from "./SubpatternCard";

interface SubpatternListProps {
  subpatterns: Subpattern[];
  expandedSubpatterns: number[];
  onToggleExpand: (index: number) => void;
  completedQuestions: number[];
  onToggleQuestion: (id: number) => void;
}

export const SubpatternList = ({
  subpatterns,
  expandedSubpatterns,
  onToggleExpand,
  completedQuestions,
  onToggleQuestion
}: SubpatternListProps) => {
  return (
    <div className="space-y-12">
      {subpatterns.map((subpattern, index) => (
        <SubpatternCard
          key={index}
          subpattern={subpattern}
          index={index}
          isExpanded={expandedSubpatterns.includes(index)}
          onToggleExpand={() => onToggleExpand(index)}
          completedQuestions={completedQuestions}
          onToggleQuestion={onToggleQuestion}
        />
      ))}
    </div>
  );
};
