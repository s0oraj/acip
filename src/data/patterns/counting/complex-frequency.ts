import { SubPattern } from '@/types';

export const complexFrequencyPattern: SubPattern = {
  title: "Complex Frequency Patterns",
  questions: [
    {
      id: 14,
      title: "Group Anagrams",
      difficulty: "medium",
      link: "https://leetcode.com/problems/group-anagrams/",
      description: "Builds on #13: Uses frequency map for grouping",
      details: {
        keyDifference: "Sorting or counting characters",
        commonError: "Not handling empty strings",
        optimization: "Use hashmap for grouping"
      }
    },
    {
      id: 15,
      title: "Top K Frequent Elements",
      difficulty: "medium",
      link: "https://leetcode.com/problems/top-k-frequent-elements/",
      description: "Builds on #14: Uses frequency map for top k",
      details: {
        keyDifference: "Using heap for top k",
        commonError: "Not handling ties correctly",
        optimization: "Use bucket sort for efficiency"
      }
    }
  ]
};
