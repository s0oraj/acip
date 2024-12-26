
import { Animation } from '@/types';
import { ArrowUpDown } from 'lucide-react';

export const patterns = {
  closestSubsequenceSum: {
    data: [5, -7, 3, 5],
    target: 6,
    icon: 'arrow-up-down',
    title: "Closest Subsequence Sum",
    desc: "Two-way subset generation",
    color: "#4F46E5"
  },
  sumOfMutatedArrayClosestToTarget: {
    data: [4, 9, 3],
    target: 10,
    icon: 'arrow-up-down',
    title: "Sum of Mutated Array Closest to Target",
    desc: "Value modification",
    color: "#7C3AED"
  },
  countSubarraysWithScoreLessThanK: {
    data: [2, 1, 4, 3, 5],
    k: 10,
    icon: 'arrow-up-down',
    title: "Count Subarrays With Score Less Than K",
    desc: "Score-based splitting",
    color: "#2563EB"
  },
  waysToSplitArrayIntoThreeSubarrays: {
    data: [1, 2, 2, 2, 5, 0],
    icon: 'arrow-up-down',
    title: "Ways to Split Array Into Three Subarrays",
    desc: "Three-way splitting",
    color: "#DB2777"
  }
};

export const sumBasedDivisionAnimation: Animation = {
  id: "sum-based-division",
  title: "Sum-based Division",
  description: "Understand different variations of sum-based division problems",
  steps: [
    {
      title: "Closest Subsequence Sum",
      description: "Find the closest subsequence sum to the target",
      array: patterns.closestSubsequenceSum.data,
      target: patterns.closestSubsequenceSum.target,
      phases: [
        { description: "Initialize", leftSums: [0], rightSums: [0] },
        { description: "Generate left sums", leftSums: [0, 5, -2, 3, 8] },
        { description: "Generate right sums", rightSums: [0, 5, 3, 8] },
        { description: "Sort right sums", sortedRightSums: [0, 3, 5, 8] },
        { description: "Find closest sum to target", result: 5 }
      ]
    }
  ]
};

