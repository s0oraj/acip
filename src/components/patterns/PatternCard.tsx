// components/patterns/PatternCard.tsx
import { Link } from "react-router-dom";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { DifficultyBadge } from "@/components/DifficultyBadge";
import { ChevronRight } from "lucide-react";

interface PatternCardProps {
  id: number;
  title: string;
  description: string;
  difficulty: string;
  totalQuestions: number;
  completedQuestions: number[];
}

export function PatternCard({ 
  id, 
  title, 
  description, 
  difficulty,
  totalQuestions,
  completedQuestions 
}: PatternCardProps) {
  const progress = (completedQuestions.length / totalQuestions) * 100;

  return (
    <Link to={`/pattern/${id}`}>
      <Card className="relative group hover:shadow-lg transition-all duration-300">
        <CardHeader>
          <div className="flex justify-between items-start">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              {title}
            </h3>
            <DifficultyBadge difficulty={difficulty} />
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm">
              {completedQuestions.length}/{totalQuestions} Complete
            </span>
            <div className="flex items-center text-blue-600 dark:text-blue-400">
              View Pattern
              <ChevronRight className="ml-1 w-4 h-4" />
            </div>
          </div>
          <div className="mt-4 h-2 bg-blue-100 dark:bg-blue-900 rounded-full">
            <div
              className="h-full bg-blue-600 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
