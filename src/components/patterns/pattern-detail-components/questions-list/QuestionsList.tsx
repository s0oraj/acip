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
    <div className="space-y-12 animate-pattern-fade">
      {pattern.subpatterns && pattern.subpatterns.length > 0 ? (
        pattern.subpatterns.map((subpattern, subpatternIndex) => (
          <ErrorBoundary key={subpatternIndex}>
            <SubpatternComponent
              subpattern={subpattern}
              subpatternIndex={subpatternIndex}
              pattern={patternPath}
              completedQuestions={completedQuestions}
              toggleQuestion={toggleQuestion}
            />
          </ErrorBoundary>
        ))
      ) : (
        <div className="space-y-6">
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
      <div className="animate-pattern-slide">
        <PatternSummary summary={pattern.summary} />
      </div>
    </div>
  );
};
