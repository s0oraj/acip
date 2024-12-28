// src/components/patterns/index-page-components/StatisticsSection.tsx
import { Brain, Code2, BookOpen } from 'lucide-react';

interface StatisticProps {
  icon: any;
  label: string;
  value: string;
  color: string;
}

const StatisticCard = ({ icon: Icon, label, value, color }: StatisticProps) => (
  <div className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl p-6 
    shadow-[0_0_15px_rgba(0,0,0,0.05)] dark:shadow-[0_0_15px_rgba(0,0,0,0.2)]
    border border-gray-100 dark:border-gray-700
    transform transition-all duration-300 ease-in-out
    hover:shadow-[0_0_25px_rgba(59,130,246,0.1)] dark:hover:shadow-[0_0_25px_rgba(59,130,246,0.05)]
    hover:-translate-y-1">
    <div className={`absolute top-0 left-0 w-full h-1 ${color} opacity-75`} />
    <div className="flex flex-col items-center">
      <Icon className={`w-12 h-12 mb-4 ${color.split(' ')[0].replace('from', 'text')}`} />
      <div className="flex flex-col items-center gap-1">
        <div className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
          {value}
        </div>
        <div className="text-sm font-medium text-gray-600 dark:text-gray-400 text-center">
          {label}
        </div>
      </div>
    </div>
  </div>
);

export const StatisticsSection = () => {
  const stats = [
    { 
      icon: Code2, 
      label: "Algorithm Patterns", 
      value: "11", 
      color: "from-blue-500 to-blue-600" 
    },
    { 
      icon: BookOpen, 
      label: "Curated Problems", 
      value: "220+", 
      color: "from-indigo-500 to-indigo-600" 
    },
    { 
      icon: Brain, 
      label: "Interactive Visualizations", 
      value: "51+", 
      color: "from-purple-500 to-purple-600" 
    },
  ];

  return (
    <section className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
        {stats.map((stat, index) => (
          <StatisticCard key={index} {...stat} />
        ))}
      </div>
    </section>
  );
};
