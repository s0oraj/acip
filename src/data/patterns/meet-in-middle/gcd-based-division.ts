import { SubPattern } from '@/types';

export const gcdBasedDivision: SubPattern = {
  title: "GCD-based Division",
  questions: [
    {
      id: 13,
      title: "Find XOR Sum of All Pairs Bitwise AND",
      difficulty: "hard",
      link: "https://leetcode.com/problems/find-xor-sum-of-all-pairs-bitwise-and/",
      description: "Base Pattern: Bit manipulation splitting",
      details: {
        keyDifference: "Bit manipulation splitting",
        commonError: "Order of operations",
        optimization: "Bit-by-bit processing"
      }
    },
    {
      id: 14,
      title: "Count of Sub-Multisets With Bounded Sum",
      difficulty: "hard",
      link: "https://leetcode.com/problems/count-of-sub-multisets-with-bounded-sum/",
      description: "Builds on #13: Multi-occurrence elements",
      details: {
        keyDifference: "Frequency handling",
        commonError: "Modulo arithmetic",
        optimization: "Rolling DP array"
      }
    },
    {
      id: 15,
      title: "Minimum Cost to Change Final Value of Expression",
      difficulty: "hard",
      link: "https://leetcode.com/problems/minimum-cost-to-change-final-value-of-expression/",
      description: "Builds on #14: Expression evaluation",
      details: {
        keyDifference: "Cost calculation",
        commonError: "Parentheses matching",
        optimization: "Stack-based parsing"
      }
    },
    {
      id: 16,
      title: "Count Array Pairs Divisible by K",
      difficulty: "hard",
      link: "https://leetcode.com/problems/count-array-pairs-divisible-by-k/",
      description: "Builds on #15: GCD properties",
      details: {
        keyDifference: "Divisibility check",
        commonError: "GCD calculation",
        optimization: "Factor map"
      }
    }
  ]
};

