// src/components/stats/StatsSection.tsx
import { Code2, BookOpen, Trophy } from 'lucide-react';
import { StatCard } from './StatCard';

export const StatsSection = () => {
  const stats = [
    { icon: Code2, label: "Patterns", value: "11" },
    { icon: BookOpen, label: "Questions", value: "220+" },
    { icon: Trophy, label: "Success Rate", value: "89%" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};
