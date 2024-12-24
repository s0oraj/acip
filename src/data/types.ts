// src/data/types.ts
export interface QuestionDetails {
  keyDifference: string;
  commonError: string;
  optimization: string;
}

export interface Question {
  id: number;
  title: string;
  difficulty: 'easy' | 'medium' | 'hard';
  link: string;
  description: string;
  details?: QuestionDetails;
}

export interface Subpattern {
  id: string;  // Added id field (e.g., "1.1")
  title: string;
  questions: Question[];
}

export interface PatternSummary {
  progressionElements: string[];
  coreTechniques: string[];
  implementationGuidelines?: {
    title: string;
    code: string;
  }[];
  testingStrategy: string[];
}

export interface Pattern {
  id: string;  // Changed to string to match our pattern mapping
  title: string;
  description: string;
  subpatterns: Subpattern[];
  questions: Question[];
  summary?: PatternSummary;
}

export interface AnimationPhase {
  description: string;
  activeIndex?: number;
  highlightIndices?: number[];
  counter?: Record<string, number>;
  code?: string;
}

export interface AnimationStep {
  title: string;
  description: string;
  code?: string;
  array: number[];
  phases: AnimationPhase[];
}

export interface Animation {
  id: string;
  title: string;
  description: string;
  steps: AnimationStep[];
  counters: Counter[];
}

export interface CounterStep {
  description: string;
  array: (string | number)[];
  activeIndex?: number;
  highlightIndices?: number[];
  counter: Record<string, number>;
  code: string;
}

export interface Counter {
  title: string;
  description: string;
  data: CounterStep[];
}
