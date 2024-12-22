import { SubPattern } from '@/types';

export const twoDimensionalSegmentTree: SubPattern = {
  title: "Two-Dimensional Segment Tree",
  questions: [
    {
      id: 9,
      title: "Range Sum Query 2D - Mutable",
      difficulty: "hard",
      link: "https://leetcode.com/problems/range-sum-query-2d-mutable/",
      description: "Base Pattern: 2D segment tree construction",
      details: {
        keyDifference: "2D segment tree construction",
        commonError: "Incorrect 2D range calculations",
        optimization: "Use 1D segment trees for rows/columns"
      }
    },
    // Add 3-4 more questions related to 2D segment trees
  ]
};

