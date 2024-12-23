// src/components/stats/StatCard.tsx
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
}

export const StatCard = ({ icon: Icon, label, value }: StatCardProps) => {
  return (
    <div className="group relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:bg-gray-800/90 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-blue-100 dark:border-gray-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl" />
      <Icon className="w-10 h-10 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
      <div className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-1">{value}</div>
      <div className="text-sm text-gray-600 dark:text-gray-400">{label}</div>
    </div>
  );
};
