import { SubPattern } from '@/types';

export const specialRangeOperations: SubPattern = {
  title: "Special Range Operations",
  questions: [
    {
      id: 17,
      title: "Range Median Query",
      difficulty: "medium",
      link: "https://practice.geeksforgeeks.org/problems/find-the-median0527/1",
      description: "Base Pattern: Order statistics",
      details: {
        keyDifference: "Order statistics",
        commonError: "Partition strategy",
        optimization: "Weighted medians"
      }
    },
    {
      id: 18,
      title: "Range OR Queries",
      difficulty: "medium",
      link: "https://practice.geeksforgeeks.org/problems/range-or-queries/1",
      description: "Builds on #17: Bitwise operations",
      details: {
        keyDifference: "OR optimizations",
        commonError: "Bit propagation",
        optimization: "Bit parallelism"
      }
    },
    {
      id: 19,
      title: "Range AND Queries",
      difficulty: "medium",
      link: "https://practice.geeksforgeeks.org/problems/range-and-queries/1",
      description: "Builds on #18: AND properties",
      details: {
        keyDifference: "AND optimizations",
        commonError: "Neutral elements",
        optimization: "Sparse table"
      }
    },
    {
      id: 20,
      title: "Range LCM Count",
      difficulty: "hard",
      link: "https://practice.geeksforgeeks.org/problems/lcm-in-range/1",
      description: "Builds on #19: LCM properties",
      details: {
        keyDifference: "Prime power counting",
        commonError: "GCD relationship",
        optimization: "Factor memoization"
      }
    }
  ]
};

