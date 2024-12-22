import { SubPattern } from '@/types';

export const runningWindowsPattern: SubPattern = {
  title: "Running Windows Progression",
  questions: [
    {
      id: 4,
      title: "Number of Zero-Filled Subarrays",
      difficulty: "medium",
      link: "https://leetcode.com/problems/number-of-zero-filled-subarrays/",
      description: "New Concept: Running window count",
      details: {
        keyDifference: "Reset count on condition break",
        commonError: "Not handling streak breaks",
        optimization: "Mathematical formula for sequence sum"
      }
    },
    {
      id: 5,
      title: "Find the K-Beauty of a Number",
      difficulty: "easy",
      link: "https://leetcode.com/problems/find-the-k-beauty-of-a-number/",
      description: "Builds on #4: Fixed-size window counting",
      details: {
        keyDifference: "Sliding window technique",
        commonError: "Off-by-one in window bounds",
        optimization: "Rolling hash for window"
      }
    }
  ]
};
