// QuestionsList.tsx
import { Pattern } from "@/types";
import { QuestionComponent } from "./Question";
import { SubpatternComponent } from "./Subpattern";
import { PatternSummary } from "./PatternSummary";
import ErrorBoundary from "@/components/ErrorBoundary";

interface QuestionsListProps {
  pattern: Pattern;
  completedQuestions: number[];
  toggleQuestion: (questionId: number) => void;
}

export const QuestionsList = ({ pattern, completedQuestions, toggleQuestion }: QuestionsListProps) => {
  const patternPath = pattern.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  return (
    <div className="space-y-12">
      {pattern.subpatterns && pattern.subpatterns.length > 0 ? (
        <div className="grid gap-8">
          {pattern.subpatterns.map((subpattern, subpatternIndex) => (
            <ErrorBoundary key={subpatternIndex}>
              <div className="bg-white dark:bg-gray-800/50 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden">
                <SubpatternComponent
                  subpattern={subpattern}
                  subpatternIndex={subpatternIndex}
                  pattern={patternPath}
                  completedQuestions={completedQuestions}
                  toggleQuestion={toggleQuestion}
                />
              </div>
            </ErrorBoundary>
          ))}
        </div>
      ) : (
        <div className="space-y-4 w-full">
          {pattern.questions.map((question, index) => (
            <QuestionComponent
              key={question.id}
              question={question}
              index={index}
              isCompleted={completedQuestions.includes(question.id)}
              toggleQuestion={toggleQuestion}
            />
          ))}
        </div>
      )}
      <div className="mt-12">
        <PatternSummary summary={pattern.summary} />
      </div>
    </div>
  );
};
