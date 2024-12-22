import { SubPattern } from '@/types';

export const basicSubsetDivision: SubPattern = {
  title: "Basic Subset Division",
  questions: [
    {
      id: 1,
      title: "Partition Equal Subset Sum",
      difficulty: "medium",
      link: "https://leetcode.com/problems/partition-equal-subset-sum/",
      description: "Base Pattern: Single split meet-in-middle",
      details: {
        keyDifference: "Single split meet-in-middle",
        commonError: "Not handling empty subset",
        optimization: "Early termination checks"
      }
    },
    {
      id: 2,
      title: "Partition Array Into Two Arrays",
      difficulty: "hard",
      link: "https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference/",
      description: "Builds on #1: Size-constrained splits",
      details: {
        keyDifference: "Equal size requirement",
        commonError: "Missing size validation",
        optimization: "Binary search on sorted halves"
      }
    },
    {
      id: 3,
      title: "Partition to K Equal Sum Subsets",
      difficulty: "medium",
      link: "https://leetcode.com/problems/partition-to-k-equal-sum-subsets/",
      description: "Builds on #2: Multi-way partitioning",
      details: {
        keyDifference: "K-way split tracking",
        commonError: "Wrong backtracking state",
        optimization: "Sort elements descending"
      }
    },
    {
      id: 4,
      title: "Split Array With Same Average",
      difficulty: "hard",
      link: "https://leetcode.com/problems/split-array-with-same-average/",
      description: "Builds on #3: Average-based splitting",
      details: {
        keyDifference: "Floating point comparison",
        commonError: "Precision errors",
        optimization: "Use scaled integers"
      }
    }
  ]
};

