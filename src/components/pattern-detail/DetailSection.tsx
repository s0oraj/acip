// src/components/pattern-detail/DetailSection.tsx
interface DetailSectionProps {
  title: string;
  content?: string;
  color: 'purple' | 'red' | 'green';
}

export const DetailSection = ({ title, content, color }: DetailSectionProps) => {
  if (!content) return null;

  const colorClasses = {
    purple: "text-purple-700 dark:text-purple-300",
    red: "text-red-700 dark:text-red-300",
    green: "text-green-700 dark:text-green-300"
  };

  return (
    <div>
      <h4 className={`font-semibold ${colorClasses[color]}`}>{title}</h4>
      <p className="text-gray-600 dark:text-gray-300">{content}</p>
    </div>
  );
};
