import { SubPattern } from '@/types';

export const productBasedDivision: SubPattern = {
  title: "Product-based Division",
  questions: [
    {
      id: 9,
      title: "Maximum Product of the Length of Two Palindromic Subsequences",
      difficulty: "medium",
      link: "https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-subsequences/",
      description: "Base Pattern: Product optimization",
      details: {
        keyDifference: "Product optimization",
        commonError: "Overlapping elements",
        optimization: "Precompute palindromes"
      }
    },
    {
      id: 10,
      title: "Maximum Score Words Formed by Letters",
      difficulty: "hard",
      link: "https://leetcode.com/problems/maximum-score-words-formed-by-letters/",
      description: "Builds on #9: Resource constrained",
      details: {
        keyDifference: "Letter frequency limit",
        commonError: "Resource counting",
        optimization: "Precompute word scores"
      }
    },
    {
      id: 11,
      title: "Find the K-Sum of an Array",
      difficulty: "hard",
      link: "https://leetcode.com/problems/find-the-k-sum-of-an-array/",
      description: "Builds on #10: K-based optimization",
      details: {
        keyDifference: "Heap-based tracking",
        commonError: "Sum overflow",
        optimization: "Priority queue"
      }
    },
    {
      id: 12,
      title: "Maximize Score After N Operations",
      difficulty: "hard",
      link: "https://leetcode.com/problems/maximize-score-after-n-operations/",
      description: "Builds on #11: Pair-based operations",
      details: {
        keyDifference: "GCD calculations",
        commonError: "State representation",
        optimization: "Precompute GCD"
      }
    }
  ]
};

