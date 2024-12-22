import { SubPattern } from '@/types';

export const rangeUpdateQueries: SubPattern = {
  title: "Range Update Queries",
  questions: [
    {
      id: 5,
      title: "Range Addition",
      difficulty: "medium",
      link: "https://leetcode.com/problems/range-addition/",
      description: "Base Pattern: BIT with difference array",
      details: {
        keyDifference: "BIT with difference array",
        commonError: "Incorrect handling of range boundaries",
        optimization: "Use two BITs for efficient range operations"
      }
    },
    // Add 3-4 more questions related to range update queries with BIT
  ]
};

