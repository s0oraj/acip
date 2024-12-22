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
  id: number;
  title: string;
  description: string;
  questions: Question[];
  summary?: PatternSummary;
}
