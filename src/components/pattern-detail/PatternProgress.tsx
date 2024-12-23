// src/components/pattern-detail/PatternProgress.tsx
interface PatternProgressProps {
  completed: number;
  total: number;
  percentage: number;
}

export const PatternProgress = ({ 
  completed, 
  total, 
  percentage 
}: PatternProgressProps) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
          Progress: {completed}/{total} completed
        </span>
        <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
          {Math.round(percentage)}%
        </span>
      </div>
      <div className="h-2 bg-purple-100 dark:bg-purple-900 rounded-full">
        <div
          className="h-full bg-purple-600 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
