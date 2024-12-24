import { SubPattern } from '@/types';

export const optimizationProblems: SubPattern = {
  title: "Optimization Problems",
  questions: [
    {
      id: 11,
      title: "Minimum Number of Coins for Fruits",
      difficulty: "hard",
      link: "https://leetcode.com/problems/minimum-number-of-coins-for-fruits/",
      description: "Base optimization pattern",
      details: {
        keyDifference: "Decreasing queue maintenance",
        commonError: "Wrong coin calculation",
        optimization: "Dynamic programming with queue"
      }
    },
    {
      id: 12,
      title: "Minimum Cost to Buy Sequential Items",
      difficulty: "medium",
      link: "https://practice.geeksforgeeks.org/problems/minimum-cost-of-buying-candies-with-discount/1",
      description: "Builds on #11: Sequential purchase",
      details: {
        keyDifference: "Discount rules",
        commonError: "Wrong order selection",
        optimization: "Greedy approach"
      }
    },
    {
      id: 13,
      title: "Optimal Purchase with Free Items",
      difficulty: "medium",
      link: "https://www.hackerrank.com/challenges/minimum-cost",
      description: "Builds on #12: Free item rules",
      details: {
        keyDifference: "Complex reward structure",
        commonError: "Missing free item combinations",
        optimization: "State compression"
      }
    },
    {
      id: 14,
      title: "Minimum Cost with Alternative Choices",
      difficulty: "hard",
      link: "https://practice.geeksforgeeks.org/problems/minimum-cost-path/1",
      description: "Builds on #13: Path choices",
      details: {
        keyDifference: "Multiple path options",
        commonError: "Suboptimal path selection",
        optimization: "Priority queue approach"
      }
    },
    {
      id: 15,
      title: "Sequential Purchase Optimization",
      difficulty: "hard",
      link: "https://www.hackerearth.com/practice/algorithms/greedy/basics-of-greedy-algorithms/practice-problems/algorithm/shopping-time-problem/",
      description: "Builds on #14: Complex rewards",
      details: {
        keyDifference: "Time constraints",
        commonError: "Invalid sequence selection",
        optimization: "State machine approach"
      }
    }
  ]
};

