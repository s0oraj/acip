import { SubPattern } from '@/types';

export const lazyPropagation: SubPattern = {
  title: "Lazy Propagation",
  questions: [
    {
      id: 5,
      title: "Range Update and Sum Query",
      difficulty: "hard",
      link: "https://leetcode.com/problems/range-sum-query-mutable/",
      description: "Base Pattern: Lazy propagation for range updates",
      details: {
        keyDifference: "Lazy propagation for range updates",
        commonError: "Forgetting to propagate lazy values",
        optimization: "Combine multiple lazy updates"
      }
    },
    // Add 3-4 more questions related to lazy propagation in segment trees
  ]
};

