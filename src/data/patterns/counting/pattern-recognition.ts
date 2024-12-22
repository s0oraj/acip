import { SubPattern } from '@/types';

export const patternRecognitionPattern: SubPattern = {
  title: "Advanced Pattern Recognition",
  questions: [
    {
      id: 10,
      title: "Count Good Triplets",
      difficulty: "easy",
      link: "https://leetcode.com/problems/count-good-triplets/",
      description: "Builds on #9: Triple condition checking",
      details: {
        keyDifference: "Three-level validation",
        commonError: "Unnecessary nested loops",
        optimization: "Early pruning of invalid cases"
      }
    },
    {
      id: 11,
      title: "Next Greater Numerically Balanced Number",
      difficulty: "medium",
      link: "https://leetcode.com/problems/next-greater-numerically-balanced-number/",
      description: "Builds on #10: Complex frequency validation",
      details: {
        keyDifference: "Digit frequency matching value",
        commonError: "Not handling leading zeros",
        optimization: "Pre-compute valid numbers"
      }
    }
  ]
};
