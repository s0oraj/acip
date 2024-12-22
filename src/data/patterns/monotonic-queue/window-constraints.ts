import { SubPattern } from '@/types';

export const windowConstraints: SubPattern = {
  title: "Window Constraints",
  questions: [
    {
      id: 6,
      title: "Longest Continuous Subarray with Absolute Diff ≤ Limit",
      difficulty: "hard",
      link: "https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/",
      description: "Base window constraint pattern",
      details: {
        keyDifference: "Dual queue for min/max",
        commonError: "Wrong queue updates",
        optimization: "Early constraint check"
      }
    },
    {
      id: 7,
      title: "Maximum Subarray Length with Max-Min ≤ K",
      difficulty: "hard",
      link: "https://practice.geeksforgeeks.org/problems/maximum-subarray-size-with-difference/1",
      description: "Builds on #6: Different constraint type",
      details: {
        keyDifference: "Modified difference calculation",
        commonError: "Incorrect bound checking",
        optimization: "Binary search on answer"
      }
    },
    {
      id: 8,
      title: "Longest Nice Subarray with Range K",
      difficulty: "medium",
      link: "https://leetcode.com/problems/longest-nice-subarray/",
      description: "Builds on #7: Bitwise constraints",
      details: {
        keyDifference: "AND operation checking",
        commonError: "Missing bit positions",
        optimization: "Bit manipulation tricks"
      }
    },
    {
      id: 9,
      title: "Find Subarrays with Equal Elements",
      difficulty: "medium",
      link: "https://leetcode.com/problems/number-of-subarrays-having-even-product/",
      description: "Builds on #8: Equality constraints",
      details: {
        keyDifference: "Product property check",
        commonError: "Overflow in product",
        optimization: "Use parity instead of product"
      }
    },
    {
      id: 10,
      title: "Maximum Window Size with Single Unique Element",
      difficulty: "medium",
      link: "https://practice.geeksforgeeks.org/problems/length-of-the-longest-substring-with-distinct-characters/1",
      description: "Builds on #9: Uniqueness constraint",
      details: {
        keyDifference: "Set-based checking",
        commonError: "Set update timing",
        optimization: "Two-pointer technique"
      }
    }
  ]
};

