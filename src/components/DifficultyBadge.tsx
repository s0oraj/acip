import { DifficultyLevel, getDifficultyColor } from "@/utils/difficultyUtils";

interface DifficultyBadgeProps {
  difficulty: DifficultyLevel;
}

export const DifficultyBadge = ({ difficulty }: DifficultyBadgeProps) => {
  return (
    <div className={`px-3 py-1.5 rounded-full text-sm font-medium border ${getDifficultyColor(difficulty)}`}>
      {difficulty}
    </div>
  );
};
