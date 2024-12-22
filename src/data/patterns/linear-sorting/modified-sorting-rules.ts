import { SubPattern } from '@/types';

export const modifiedSortingRulesPattern: SubPattern = {
  title: "Modified Sorting Rules",
  questions: [
    {
      id: 11,
      title: "Sort Array By Parity",
      difficulty: "easy",
      link: "https://leetcode.com/problems/sort-array-by-parity/",
      description: "Base Pattern: Two-way partition",
      details: {
        keyDifference: "Two-way partition",
        commonError: "Unnecessary swaps",
        optimization: "Two-pointer approach"
      }
    },
    {
      id: 12,
      title: "Sort Array by Parity II",
      difficulty: "easy",
      link: "https://leetcode.com/problems/sort-array-by-parity-ii/",
      description: "Builds on #11: Alternating placement",
      details: {
        keyDifference: "Fixed position constraints",
        commonError: "Index synchronization",
        optimization: "Two independent pointers"
      }
    },
    {
      id: 13,
      title: "Array With Elements Not Equal to Average of Neighbors",
      difficulty: "medium",
      link: "https://leetcode.com/problems/array-with-elements-not-equal-to-average-of-neighbors/",
      description: "Builds on #12: Three-element comparison",
      details: {
        keyDifference: "Wiggle sort principle",
        commonError: "Not handling duplicates",
        optimization: "Sort once, then interleave"
      }
    },
    {
      id: 14,
      title: "Custom Sort String",
      difficulty: "medium",
      link: "https://leetcode.com/problems/custom-sort-string/",
      description: "Builds on #13: Priority mapping",
      details: {
        keyDifference: "Character order dictionary",
        commonError: "Missing characters",
        optimization: "Count array vs sort"
      }
    },
    {
      id: 15,
      title: "Largest Number",
      difficulty: "medium",
      link: "https://leetcode.com/problems/largest-number/",
      description: "Builds on #14: String comparison",
      details: {
        keyDifference: "Custom concatenation comparison",
        commonError: "Leading zeros",
        optimization: "Cache string conversions"
      }
    }
  ]
};

