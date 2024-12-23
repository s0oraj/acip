// components/patterns/QuestionsList.tsx
import { useState } from "react";
import { ChevronRight, Info, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Pattern, Question, Subpattern } from "@/types";

interface QuestionsListProps {
  pattern: Pattern;
  completedQuestions: number[];
  toggleQuestion: (questionId: number) => void;
}

export const QuestionsList = ({ pattern, completedQuestions, toggleQuestion }: QuestionsListProps) => {
  const [expandedSubpatterns, setExpandedSubpatterns] = useState<number[]>([]);

  const toggleSubpattern = (subpatternIndex: number) => {
    setExpandedSubpatterns((prev) =>
      prev.includes(subpatternIndex)
        ? prev.filter((index) => index !== subpatternIndex)
        : [...prev, subpatternIndex]
    );
  };

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      easy: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
      medium: "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300",
      hard: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
    };
    return colors[difficulty as keyof typeof colors] || colors.medium;
  };

  const renderQuestionDetails = (question: Question) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Info className="w-4 h-4" />
          Details
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{question.title}</DialogTitle>
          <DialogDescription>{question.description}</DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-purple-700 dark:text-purple-300">Key Difference</h4>
            <p className="text-gray-600 dark:text-gray-300">{question.details?.keyDifference}</p>
          </div>
          <div>
            <h4 className="font-semibold text-red-700 dark:text-red-300">Common Error</h4>
            <p className="text-gray-600 dark:text-gray-300">{question.details?.commonError}</p>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 dark:text-green-300">Optimization</h4>
            <p className="text-gray-600 dark:text-gray-300">{question.details?.optimization}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

  const renderQuestion = (question: Question, index: number, prefix = "") => (
    <div
      key={question.id}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-purple-100 dark:border-purple-900 transition-all duration-300 hover:shadow-xl"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          {prefix}{index + 1}. {question.title}
        </h3>
        <div className="flex items-center gap-4">
          {question.details && renderQuestionDetails(question)}
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(
              question.difficulty
            )}`}
          >
            {question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)}
          </span>
          <Checkbox
            id={`question-${question.id}`}
            checked={completedQuestions.includes(question.id)}
            onCheckedChange={() => toggleQuestion(question.id)}
            className="h-5 w-5"
          />
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{question.description}</p>
      <div>
        <a
          href={question.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium transition-colors"
        >
          Solve on LeetCode
          <ChevronRight className="ml-1 w-4 h-4" />
        </a>
      </div>
    </div>
  );

  return (
    <div className="space-y-12">
      {pattern.subpatterns && pattern.subpatterns.length > 0 ? (
        pattern.subpatterns.map((subpattern: Subpattern, subpatternIndex: number) => (
          <div key={subpatternIndex} className="space-y-6">
            <div
              className="subpattern-header bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-purple-100 dark:border-purple-900 transition-all duration-300 hover:shadow-xl cursor-pointer"
              onClick={() => toggleSubpattern(subpatternIndex)}
            >
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                  {subpattern.title}
                </h2>
                {expandedSubpatterns.includes(subpatternIndex) ? (
                  <ChevronUp className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                )}
              </div>
            </div>
            
            {expandedSubpatterns.includes(subpatternIndex) && (
              <div className="expand-animation space-y-6">
                {subpattern.questions.map((question, index) => 
                  renderQuestion(question, index, `${subpatternIndex + 1}.`)
                )}
              </div>
            )}
          </div>
        ))
      ) : (
        <div className="space-y-6">
          {pattern.questions.map((question, index) => renderQuestion(question, index))}
        </div>
      )}

      {pattern.summary && (
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">Pattern Analysis Summary</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-300 mb-4">Progression Elements</h3>
              <ul className="list-decimal pl-5 space-y-2">
                {pattern.summary.progressionElements.map((element, index) => (
                  <li key={index} className="text-gray-700 dark:text-gray-300">{element}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-300 mb-4">Core Techniques</h3>
              <ul className="list-decimal pl-5 space-y-2">
                {pattern.summary.coreTechniques.map((technique, index) => (
                  <li key={index} className="text-gray-700 dark:text-gray-300">{technique}</li>
                ))}
              </ul>
            </div>

            {pattern.summary.implementationGuidelines && (
              <div>
                <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-300 mb-4">Implementation Guidelines</h3>
                <div className="space-y-6">
                  {pattern.summary.implementationGuidelines.map((guide, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">{guide.title}</h4>
                      <pre className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto">
                        <code className="text-sm">{guide.code}</code>
                      </pre>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-300 mb-4">Testing Strategy</h3>
              <ul className="list-decimal pl-5 space-y-2">
                {pattern.summary.testingStrategy.map((strategy, index) => (
                  <li key={index} className="text-gray-700 dark:text-gray-300">{strategy}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
