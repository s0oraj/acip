import { SubPattern } from '@/types';

export const advancedFrequencyPattern: SubPattern = {
  title: "Advanced Frequency Applications",
  questions: [
    {
      id: 6,
      title: "Count Number of Pairs With Absolute Difference K",
      difficulty: "easy",
      link: "https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/",
      description: "Builds on #1: Uses frequency map for pair finding",
      details: {
        keyDifference: "Check num±k in frequency map",
        commonError: "Double counting pairs",
        optimization: "Single pass O(n) vs naive O(n²)"
      }
    },
    {
      id: 7,
      title: "Count Largest Group",
      difficulty: "easy",
      link: "https://leetcode.com/problems/count-largest-group/",
      description: "Builds on #6: Groups by computed property",
      details: {
        keyDifference: "Digit sum grouping",
        commonError: "Recalculating group properties",
        optimization: "Memoize digit sums"
      }
    }
  ]
};
