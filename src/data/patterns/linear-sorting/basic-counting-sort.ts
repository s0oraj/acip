import { SubPattern } from '@/types';

export const basicCountingSortPattern: SubPattern = {
  title: "Basic Counting Sort",
  questions: [
    {
      id: 1,
      title: "Height Checker",
      difficulty: "easy",
      link: "https://leetcode.com/problems/height-checker/",
      description: "Base Pattern: Fixed-range counting. Key Operation: count[height] += 1",
      details: {
        keyDifference: "Fixed-range counting",
        commonError: "Not handling input range",
        optimization: "Use array vs map based on range"
      }
    },
    {
      id: 2,
      title: "Sort Colors",
      difficulty: "medium",
      link: "https://leetcode.com/problems/sort-colors/",
      description: "Builds on #1: Three-pointer technique",
      details: {
        keyDifference: "One-pass partitioning",
        commonError: "Wrong pointer movement",
        optimization: "In-place swaps"
      }
    },
    {
      id: 3,
      title: "Relative Sort Array",
      difficulty: "easy",
      link: "https://leetcode.com/problems/relative-sort-array/",
      description: "Builds on #2: Custom order counting",
      details: {
        keyDifference: "Reference array ordering",
        commonError: "Missing elements handling",
        optimization: "Use map for large ranges"
      }
    },
    {
      id: 4,
      title: "Sort Array by Increasing Frequency",
      difficulty: "easy",
      link: "https://leetcode.com/problems/sort-array-by-increasing-frequency/",
      description: "Builds on #3: Two-level sorting",
      details: {
        keyDifference: "Frequency as primary key",
        commonError: "Tiebreaker handling",
        optimization: "Bucket sort frequencies"
      }
    },
    {
      id: 5,
      title: "H-Index",
      difficulty: "medium",
      link: "https://leetcode.com/problems/h-index/",
      description: "Builds on #4: Citation grouping",
      details: {
        keyDifference: "Cumulative counting",
        commonError: "Off-by-one in counting",
        optimization: "Binary search possible"
      }
    }
  ]
};

