import { SubPattern } from '@/types';

export const basicSegmentTree: SubPattern = {
  title: "Basic Segment Tree",
  questions: [
    {
      id: 1,
      title: "Range Sum Query - Mutable",
      difficulty: "medium",
      link: "https://leetcode.com/problems/range-sum-query-mutable/",
      description: "Base Pattern: Segment tree for sum queries",
      details: {
        keyDifference: "Segment tree for sum queries",
        commonError: "Incorrect range calculations",
        optimization: "Use array representation instead of nodes"
      }
    },
    // Add 3-4 more questions related to basic segment tree operations
  ]
};

