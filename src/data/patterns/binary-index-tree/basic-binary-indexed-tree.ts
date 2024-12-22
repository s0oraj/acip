import { SubPattern } from '@/types';

export const basicBinaryIndexedTree: SubPattern = {
  title: "Basic Binary Indexed Tree",
  questions: [
    {
      id: 1,
      title: "Range Sum Query - Mutable",
      difficulty: "medium",
      link: "https://leetcode.com/problems/range-sum-query-mutable/",
      description: "Base Pattern: BIT for sum queries",
      details: {
        keyDifference: "BIT for sum queries",
        commonError: "Using 0-based indexing instead of 1-based",
        optimization: "Use difference array for range updates"
      }
    },
    // Add 3-4 more questions related to basic BIT operations
  ]
};

