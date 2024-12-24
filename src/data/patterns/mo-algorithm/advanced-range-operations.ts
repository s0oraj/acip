import { SubPattern } from '@/types';

export const advancedRangeOperations: SubPattern = {
  title: "Advanced Range Operations",
  questions: [
    {
      id: 13,
      title: "Count of Range Sum",
      difficulty: "hard",
      link: "https://leetcode.com/problems/count-of-range-sum/",
      description: "Base Pattern: Prefix sum ranges",
      details: {
        keyDifference: "Prefix sum ranges",
        commonError: "Overflow in sums",
        optimization: "Merge sort approach"
      }
    },
    {
      id: 14,
      title: "Range Sum Frequency",
      difficulty: "easy",
      link: "https://practice.geeksforgeeks.org/problems/frequency-of-array-elements-1587115620/1",
      description: "Builds on #13: Frequency counting",
      details: {
        keyDifference: "Range-based frequency",
        commonError: "Index mapping",
        optimization: "Block compression"
      }
    },
    {
      id: 15,
      title: "Range Product Count",
      difficulty: "hard",
      link: "https://www.hackerearth.com/practice/data-structures/advanced-data-structures/segment-trees/practice-problems/algorithm/product-in-range-7/",
      description: "Builds on #14: Product tracking",
      details: {
        keyDifference: "Modular arithmetic",
        commonError: "Zero handling",
        optimization: "Prime factorization"
      }
    },
    {
      id: 16,
      title: "Range GCD Count",
      difficulty: "hard",
      link: "https://practice.geeksforgeeks.org/problems/gcd-in-range/1",
      description: "Builds on #15: GCD frequency",
      details: {
        keyDifference: "Factor counting",
        commonError: "Prime factorization",
        optimization: "Sieve preprocessing"
      }
    }
  ]
};

