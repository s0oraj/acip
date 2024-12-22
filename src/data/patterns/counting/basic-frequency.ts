import { SubPattern } from '@/types';

export const basicFrequencyPattern: SubPattern = {
  title: "Basic Frequency Building Blocks",
  questions: [
    {
      id: 1,
      title: "Count Elements with Maximum Frequency",
      difficulty: "easy",
      link: "https://leetcode.com/problems/count-elements-with-maximum-frequency/",
      description: "Base Pattern: Basic frequency map",
      details: {
        keyDifference: "Base Pattern: Basic frequency map",
        commonError: "Not initializing with dict.get()",
        optimization: "Single pass through array"
      }
    },
    {
      id: 2,
      title: "Most Frequent Even Element",
      difficulty: "easy",
      link: "https://leetcode.com/problems/most-frequent-even-element/",
      description: "Builds on #1: Adds filtering condition before counting",
      details: {
        keyDifference: "Filtering condition before counting",
        commonError: "Not handling case when no even elements exist",
        optimization: "Combine filtering and counting in one pass"
      }
    },
    {
      id: 3,
      title: "Maximum Equal Frequency",
      difficulty: "hard",
      link: "https://leetcode.com/problems/maximum-equal-frequency/",
      description: "Builds on #2: Tracks frequency of frequencies",
      details: {
        keyDifference: "Tracks frequency of frequencies",
        commonError: "Mishandling edge cases (e.g., all elements with frequency 1)",
        optimization: "Use running statistics to avoid recalculating frequencies"
      }
    }
  ]
};
