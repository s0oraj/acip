import { SubPattern } from '@/types';

export const basicRangeQueryOperations: SubPattern = {
  title: "Basic Range Query Operations",
  questions: [
    {
      id: 1,
      title: "Range Sum Query - Mutable",
      difficulty: "medium",
      link: "https://leetcode.com/problems/range-sum-query-mutable/",
      description: "Base Pattern: Square root decomposition",
      details: {
        keyDifference: "Square root decomposition",
        commonError: "Block size calculation",
        optimization: "Lazy propagation"
      }
    },
    // Add the remaining questions (2-4) from the Basic Range Query Operations section
  ]
};

