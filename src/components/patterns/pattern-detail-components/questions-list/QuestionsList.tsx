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
  // Convert pattern title to kebab case for the pattern identifier
  const patternId = pattern.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  return (
    <div className="space-y-12">
      {pattern.subpatterns && pattern.subpatterns.length > 0 ? (
        pattern.subpatterns.map((subpattern, subpatternIndex) => (
          <ErrorBoundary key={subpatternIndex}>
            <SubpatternComponent
              subpattern={subpattern}
              subpatternIndex={subpatternIndex}
              pattern={patternId}
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
      <PatternSummary summary={pattern.summary} />
    </div>
  );
};

export default QuestionsList;
