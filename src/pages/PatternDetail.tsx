import { useParams, Link } from "react-router-dom";
import { patterns } from "@/data/patterns";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { DifficultyBadge } from "@/components/DifficultyBadge";
import { calculatePatternDifficulty, getDifficultyLevel } from "@/utils/difficultyUtils";
import { QuestionsList } from "@/components/patterns/pattern-detail-components/questions-list/QuestionsList";

const PatternDetail = () => {
  const { id } = useParams();
  const pattern = patterns.find((p) => p.id === Number(id));
  const [completedQuestions, setCompletedQuestions] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProgress = async () => {
      try {
        const stored = localStorage.getItem(`pattern-${id}-completed`);
        if (stored) {
          setCompletedQuestions(JSON.parse(stored));
        }
      } catch (error) {
        toast({
          title: "Error loading progress",
          description: "Your progress couldn't be loaded",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    loadProgress();
  }, [id]);

  const toggleQuestion = (questionId: number) => {
    setCompletedQuestions((prev) => {
      const newCompleted = prev.includes(questionId)
        ? prev.filter((id) => id !== questionId)
        : [...prev, questionId];
      
      try {
        localStorage.setItem(`pattern-${id}-completed`, JSON.stringify(newCompleted));
        toast({
          title: prev.includes(questionId) ? "Question unmarked" : "Question completed",
          description: prev.includes(questionId) 
            ? "Progress has been updated"
            : "Keep up the great work!",
          variant: prev.includes(questionId) ? "default" : "destructive",
        });
      } catch (error) {
        toast({
          title: "Error saving progress",
          description: "Your progress couldn't be saved",
          variant: "destructive",
        });
      }
      
      return newCompleted;
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-indigo-950 to-black">
        <div className="animate-pulse text-gray-300">Loading...</div>
      </div>
    );
  }

  if (!pattern) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-indigo-950 to-black">
        <div className="text-center space-y-4 bg-gray-900/50 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-gray-800">
          <h2 className="text-2xl font-bold text-gray-200">
            Pattern Not Found
          </h2>
          <p className="text-gray-400">
            The pattern you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  const allQuestions = pattern.subpatterns
    ? pattern.subpatterns.flatMap(subpattern => subpattern.questions)
    : pattern.questions;

  const difficultyValue = calculatePatternDifficulty(allQuestions.map(q => ({
    difficulty: q.difficulty as 'easy' | 'medium' | 'hard'
  })));
  const difficultyLevel = getDifficultyLevel(difficultyValue);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-indigo-950 to-black">
      <div className="max-w-5xl mx-auto px-4 py-8 animate-pattern-fade">
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-gray-200 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors backdrop-blur-sm border border-gray-700"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Patterns
          </Link>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                {pattern.title}
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl">
                {pattern.description}
              </p>
            </div>
            
            <div className="flex flex-col items-end gap-3">
              <DifficultyBadge difficulty={difficultyLevel} />
              <div className="text-gray-300">
                <span className="font-semibold">{completedQuestions.length}</span>
                <span className="mx-1">/</span>
                <span>{allQuestions.length} completed</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl shadow-xl p-8 animate-pattern-slide border border-gray-800">
          <QuestionsList
            pattern={pattern}
            completedQuestions={completedQuestions}
            toggleQuestion={toggleQuestion}
          />
        </div>
      </div>
    </div>
  );
};

export default PatternDetail;
