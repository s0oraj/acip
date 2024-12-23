// components/patterns/PatternProgress.tsx
interface PatternProgressProps {
  completed: number;
  total: number;
}

export const PatternProgress = ({ completed, total }: PatternProgressProps) => {
  const percentage = total > 0 ? (completed / total) * 100 : 0;
  
  return (
    <div className="flex items-center justify-between relative">
      <span className="px-3 py-1 bg-blue-100/80 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
        {completed}/{total} Questions
      </span>
      <div className="h-2 w-24 bg-blue-100/80 dark:bg-blue-900/50 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
