// components/patterns/StatisticsSection.tsx
import { Brain, Code2, BookOpen, Trophy } from 'lucide-react';

interface StatisticProps {
  icon: any;
  label: string;
  value: string;
  color: string;
}

const StatisticCard = ({ icon: Icon, label, value, color }: StatisticProps) => (
  <div className="group relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:bg-gray-800/90 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-blue-100 dark:border-gray-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
    <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl" />
    <Icon className="w-10 h-10 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
    <div className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-1">{value}</div>
    <div className="text-sm text-gray-600 dark:text-gray-400">{label}</div>
  </div>
);

export const StatisticsSection = () => {
  const stats = [
    { icon: Code2, label: "Patterns", value: "11", color: "from-blue-500 to-blue-600" },
    { icon: BookOpen, label: "Questions", value: "220+", color: "from-indigo-500 to-indigo-600" },
    { icon: Trophy, label: "Success Rate", value: "89%", color: "from-purple-500 to-purple-600" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
      {stats.map((stat, index) => (
        <StatisticCard key={index} {...stat} />
      ))}
    </div>
  );
};
