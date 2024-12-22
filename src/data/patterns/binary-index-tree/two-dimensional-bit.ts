import { SubPattern } from '@/types';

export const twoDimensionalBIT: SubPattern = {
  title: "Two-Dimensional Binary Indexed Tree",
  questions: [
    {
      id: 9,
      title: "Range Sum Query 2D - Mutable",
      difficulty: "hard",
      link: "https://leetcode.com/problems/range-sum-query-2d-mutable/",
      description: "Base Pattern: 2D BIT construction",
      details: {
        keyDifference: "2D BIT construction",
        commonError: "Incorrect 2D range calculations",
        optimization: "Use row-wise BITs for better cache performance"
      }
    },
    // Add 3-4 more questions related to 2D BIT
  ]
};

