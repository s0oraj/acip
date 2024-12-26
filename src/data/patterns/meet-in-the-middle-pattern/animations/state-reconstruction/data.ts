import { Animation } from '@/types';
import { Layers } from 'lucide-react';

export const patterns = {
  maximumScoreWordsFormedByLetters: {
    words: ["dog", "cat", "dad", "good"],
    letters: ["a","a","c","d","d","d","g","o","o"],
    score: [1,0,9,5,0,0,3,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0],
    icon: 'layers',
    title: "Maximum Score Words Formed by Letters",
    desc: "State reconstruction",
    color: "#4F46E5"
  },
  numberOfWaysToWearDifferentHatsToEachOther: {
    hats: [[3,4],[4,5],[5]],
    icon: 'layers',
    title: "Number of Ways to Wear Different Hats to Each Other",
    desc: "Assignment problem",
    color: "#7C3AED"
  },
  maximumNumberOfGroupsGettingFreshDonuts: {
    batchSize: 3,
    groups: [1,2,3,4,5,6],
    icon: 'layers',
    title: "Maximum Number of Groups Getting Fresh Donuts",
    desc: "Group optimization",
    color: "#2563EB"
  },
  minimumCostToChangeFinalValueOfExpression: {
    expression: "1&(0|1)",
    icon: 'layers',
    title: "Minimum Cost to Change Final Value of Expression",
    desc: "Expression evaluation",
    color: "#DB2777"
  }
};

export const stateReconstructionAnimation: Animation = {
  id: "state-reconstruction",
  title: "State Reconstruction",
  description: "Understand different variations of state reconstruction problems",
  steps: [
    {
      title: "Maximum Score Words Formed by Letters",
      description: "Find the maximum score of words that can be formed",
      words: patterns.maximumScoreWordsFormedByLetters.words,
      letters: patterns.maximumScoreWordsFormedByLetters.letters,
      score: patterns.maximumScoreWordsFormedByLetters.score,
      phases: [
        { description: "Initialize", maxScore: 0 },
        { description: "Count available letters", letterCount: {a: 2, c: 1, d: 3, g: 1, o: 2} },
        { description: "Calculate word scores", wordScores: {dog: 3, cat: 9, dad: 10, good: 5} },
        { description: "Find maximum score combination", result: 23 }
      ]
    }
  ]
};


