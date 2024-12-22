import { SubPattern } from '@/types';

export const stateManagementPattern: SubPattern = {
  title: "State Management Problems",
  questions: [
    {
      id: 12,
      title: "Count Subarrays with K Different Integers",
      difficulty: "hard",
      link: "https://leetcode.com/problems/count-subarrays-with-k-different-integers/",
      description: "Builds on #11: Uses sliding window for counting",
      details: {
        keyDifference: "Sliding window with two pointers",
        commonError: "Not handling edge cases for k",
        optimization: "Use hashmap for frequency count"
      }
    },
    {
      id: 13,
      title: "Longest Substring with At Most K Distinct Characters",
      difficulty: "medium",
      link: "https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/",
      description: "Builds on #12: Sliding window with frequency map",
      details: {
        keyDifference: "Maintaining frequency count",
        commonError: "Not resetting pointers correctly",
        optimization: "Use hashmap for character count"
      }
    }
  ]
};
