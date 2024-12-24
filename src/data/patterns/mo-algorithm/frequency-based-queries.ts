import { SubPattern } from '@/types';

export const frequencyBasedQueries: SubPattern = {
  title: "Frequency-Based Queries",
  questions: [
    {
      id: 5,
      title: "Number of Distinct Elements",
      difficulty: "medium",
      link: "https://leetcode.com/problems/count-number-of-distinct-integers-after-reverse-operations/",
      description: "Base Pattern: Window distinct counting",
      details: {
        keyDifference: "Window distinct counting",
        commonError: "Add/remove window updates",
        optimization: "Rolling hash"
      }
    },
    {
      id: 6,
      title: "Range Mode Query",
      difficulty: "medium",
      link: "https://practice.geeksforgeeks.org/problems/mode-in-range/1",
      description: "Builds on #5: Frequency tracking",
      details: {
        keyDifference: "Maximum frequency maintenance",
        commonError: "Multiple modes",
        optimization: "Frequency table reuse"
      }
    },
    {
      id: 7,
      title: "K-Frequent Elements Query",
      difficulty: "medium",
      link: "https://leetcode.com/problems/top-k-frequent-elements/",
      description: "Builds on #6: K-elements extension",
      details: {
        keyDifference: "Priority queue usage",
        commonError: "Frequency collisions",
        optimization: "Bucket sort approach"
      }
    },
    {
      id: 8,
      title: "Range Distinct Pairs",
      difficulty: "hard",
      link: "https://practice.geeksforgeeks.org/problems/count-distinct-pairs/1",
      description: "Builds on #7: Pair counting",
      details: {
        keyDifference: "Two-element combinations",
        commonError: "Double counting",
        optimization: "Hash table for pairs"
      }
    }
  ]
};

