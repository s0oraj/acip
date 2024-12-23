import { Pattern } from "@/types";
import { QuestionComponent } from "./Question";
import { SubpatternComponent } from "./Subpattern";
import { PatternSummary } from "./PatternSummary";

interface QuestionsListProps {
  pattern: Pattern;
  completedQuestions: number[];
  toggleQuestion: (questionId: number) => void;
}

export const QuestionsList = ({ pattern, completedQuestions, toggleQuestion }: QuestionsListProps) => {
  return (
    <div className="space-y-12">
      {pattern.subpatterns && pattern.subpatterns.length > 0 ? (
        pattern.subpatterns.map((subpattern, subpatternIndex) => (
          <SubpatternComponent
            key={subpatternIndex}
            subpattern={subpattern}
            subpatternIndex={subpatternIndex}
            completedQuestions={completedQuestions}
            toggleQuestion={toggleQuestion}
          />
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
