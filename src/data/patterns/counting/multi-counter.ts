import { SubPattern } from '@/types';

export const multiCounterPattern: SubPattern = {
  title: "Multi-Counter Problems",
  questions: [
    {
      id: 8,
      title: "Find Players With Zero or One Losses",
      difficulty: "medium",
      link: "https://leetcode.com/problems/find-players-with-zero-or-one-losses/",
      description: "Builds on #7: Multiple frequency maps",
      details: {
        keyDifference: "Winner/loser separate tracking",
        commonError: "Using single map for both stats",
        optimization: "Use sets for winners"
      }
    },
    {
      id: 9,
      title: "Maximum Number of Pairs in Array",
      difficulty: "easy",
      link: "https://leetcode.com/problems/maximum-number-of-pairs-in-array/",
      description: "Builds on #8: Frequency-based pairing",
      details: {
        keyDifference: "Count pairs from frequencies",
        commonError: "Modifying array while counting",
        optimization: "Use frequency division by 2"
      }
    },
      {
      id: 10,
      title: "Count Good Triplets",
      difficulty: "easy",
      link: "https://leetcode.com/problems/count-good-triplets/",
      description: "Builds on #9: Triple condition checking",
      details: {
        keyDifference: "Three-level validation",
        commonError: "Unnecessary nested loops",
        optimization: "Early pruning of invalid cases"
      }
    }
  ]
};
