import { SubPattern } from '@/types';

export const sumBasedDivision: SubPattern = {
  title: "Sum-based Division",
  questions: [
    {
      id: 5,
      title: "Closest Subsequence Sum",
      difficulty: "hard",
      link: "https://leetcode.com/problems/closest-subsequence-sum/",
      description: "Base Pattern: Two-way subset sums",
      details: {
        keyDifference: "Two-way subset sums",
        commonError: "Not handling duplicates",
        optimization: "Sort and binary search"
      }
    },
    {
      id: 6,
      title: "Find Minimum Time to Finish All Jobs",
      difficulty: "hard",
      link: "https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs/",
      description: "Builds on #5: Worker assignment",
      details: {
        keyDifference: "Load balancing",
        commonError: "Inefficient pruning",
        optimization: "State compression"
      }
    },
    {
      id: 7,
      title: "Ways to Split Array Into Three Subarrays",
      difficulty: "hard",
      link: "https://leetcode.com/problems/ways-to-split-array-into-three-subarrays/",
      description: "Builds on #6: Three-way splitting",
      details: {
        keyDifference: "Prefix sum usage",
        commonError: "Boundary conditions",
        optimization: "Two pointers approach"
      }
    },
    {
      id: 8,
      title: "Find Array Given Subset Sums",
      difficulty: "hard",
      link: "https://leetcode.com/problems/find-array-given-subset-sums/",
      description: "Builds on #7: Reconstruction problem",
      details: {
        keyDifference: "Backward building",
        commonError: "Wrong subset ordering",
        optimization: "Sort and deduce"
      }
    }
  ]
};

