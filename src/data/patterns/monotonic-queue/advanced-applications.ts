import { SubPattern } from '@/types';

export const advancedApplications: SubPattern = {
  title: "Advanced Applications",
  questions: [
    {
      id: 16,
      title: "Maximum Rectangle in Histogram",
      difficulty: "hard",
      link: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
      description: "Base histogram pattern",
      details: {
        keyDifference: "Stack-based approach",
        commonError: "Missing edge rectangles",
        optimization: "Sentinel values"
      }
    },
    {
      id: 17,
      title: "Largest Rectangle with Height Limit",
      difficulty: "hard",
      link: "https://practice.geeksforgeeks.org/problems/maximum-rectangular-area-in-a-histogram-1587115620/1",
      description: "Builds on #16: Height constraints",
      details: {
        keyDifference: "Limited height expansion",
        commonError: "Constraint violations",
        optimization: "Early pruning"
      }
    },
    {
      id: 18,
      title: "Maximum Area Rectangle with Condition",
      difficulty: "hard",
      link: "https://www.hackerrank.com/challenges/largest-rectangle",
      description: "Builds on #17: Area conditions",
      details: {
        keyDifference: "Additional constraints",
        commonError: "Missing valid areas",
        optimization: "Two-ended scan"
      }
    },
    {
      id: 19,
      title: "Optimal Rectangle Selection",
      difficulty: "hard",
      link: "https://practice.geeksforgeeks.org/problems/maximum-size-rectangle/1",
      description: "Builds on #18: 2D extension",
      details: {
        keyDifference: "Matrix handling",
        commonError: "Row processing order",
        optimization: "Row-by-row histogram"
      }
    },
    {
      id: 20,
      title: "Maximum Volume Container",
      difficulty: "medium",
      link: "https://leetcode.com/problems/container-with-most-water/",
      description: "Builds on #19: Volume calculation",
      details: {
        keyDifference: "Two-pointer technique",
        commonError: "Wrong pointer movement",
        optimization: "Skip similar heights"
      }
    }
  ]
};

