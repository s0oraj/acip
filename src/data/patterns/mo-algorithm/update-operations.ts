import { SubPattern } from '@/types';

export const updateOperations: SubPattern = {
  title: "Update Operations",
  questions: [
    {
      id: 9,
      title: "Range Product Updates",
      difficulty: "medium",
      link: "https://practice.geeksforgeeks.org/problems/product-array-puzzle4525/1",
      description: "Base Pattern: Range multiplication",
      details: {
        keyDifference: "Range multiplication",
        commonError: "Overflow in products",
        optimization: "Logarithmic space"
      }
    },
    {
      id: 10,
      title: "Range XOR Updates",
      difficulty: "medium",
      link: "https://practice.geeksforgeeks.org/problems/xor-operation/1",
      description: "Builds on #9: XOR update rules",
      details: {
        keyDifference: "XOR properties",
        commonError: "Multiple XOR applications",
        optimization: "Bit manipulation"
      }
    },
    {
      id: 11,
      title: "Range AND Updates",
      difficulty: "hard",
      link: "https://www.hackerearth.com/practice/data-structures/advanced-data-structures/segment-trees/practice-problems/algorithm/and-queries-3/",
      description: "Builds on #10: AND operation rules",
      details: {
        keyDifference: "Bit masking",
        commonError: "Lazy propagation",
        optimization: "Bit-level updates"
      }
    },
    {
      id: 12,
      title: "Range OR Updates",
      difficulty: "hard",
      link: "https://www.hackerearth.com/practice/data-structures/advanced-data-structures/segment-trees/practice-problems/algorithm/or-queries/",
      description: "Builds on #11: OR operation rules",
      details: {
        keyDifference: "Bit merging",
        commonError: "Update order",
        optimization: "Segment merging"
      }
    }
  ]
};

