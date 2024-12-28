// PatternDetail.tsx
import { useParams } from "react-router-dom";
import { patterns } from "@/data/patterns";
import { useEffect, useState } from "react";
import { PatternHeader } from "@/components/patterns/pattern-detail-components/PatternHeader";
import { QuestionsList } from "@/components/patterns/pattern-detail-components/questions-list/QuestionsList";
import { toast } from "@/components/ui/use-toast";
import { Footer} from "@/components/footer";

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
          variant: prev.includes(questionId) ? "default",
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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pattern-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="animate-pulse text-pattern-600 dark:text-pattern-400">Loading...</div>
      </div>
    );
  }

  if (!pattern) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pattern-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="text-center space-y-4 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-pattern-800 dark:text-pattern-200">
            Pattern Not Found
          </h2>
          <p className="text-pattern-600 dark:text-pattern-400">
            The pattern you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  const allQuestions = pattern.subpatterns
    ? pattern.subpatterns.flatMap(subpattern => subpattern.questions)
    : pattern.questions;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header outside the main content container */}
      <PatternHeader 
        pattern={pattern}
        completedQuestions={completedQuestions}
        allQuestions={allQuestions}
      />
      
      {/* Main content with max-width container */}
      <div className="flex-1 bg-gradient-to-b from-pattern-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-5xl mx-auto px-4 py-8 animate-pattern-fade">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 animate-pattern-slide">
            <QuestionsList
              pattern={pattern}
              completedQuestions={completedQuestions}
              toggleQuestion={toggleQuestion}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PatternDetail;
