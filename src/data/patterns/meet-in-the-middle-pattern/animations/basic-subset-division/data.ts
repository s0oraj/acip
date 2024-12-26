import { Animation } from '@/types';
import { Split } from 'lucide-react';

export const patterns = {
  partitionEqualSubsetSum: {
    data: [1, 5, 11, 5],
    icon: 'split',
    title: "Partition Equal Subset Sum",
    desc: "Single split meet-in-middle",
    color: "#4F46E5"
  },
  splitArrayWithSameAverage: {
    data: [1, 2, 3, 4, 5, 6, 7, 8],
    icon: 'split',
    title: "Split Array With Same Average",
    desc: "Adding average constraint",
    color: "#7C3AED"
  },
  fairDistributionOfCookies: {
    data: [8, 15, 10, 20, 8],
    icon: 'split',
    title: "Fair Distribution of Cookies",
    desc: "K-way partitioning",
    color: "#2563EB"
  },
  tallestBillboard: {
    data: [1, 2, 3, 6],
    icon: 'split',
    title: "Tallest Billboard",
    desc: "Difference based splitting",
    color: "#DB2777"
  }
};

export const basicSubsetDivisionAnimation: Animation = {
  id: "basic-subset-division",
  title: "Basic Subset Division",
  description: "Understand different variations of subset division problems",
  steps: [
    {
      title: "Partition Equal Subset Sum",
      description: "Check if the array can be partitioned into two subsets with equal sum",
      array: patterns.partitionEqualSubsetSum.data,
      phases: [
        { description: "Initialize", subsets: [[], []] },
        { description: "Split array", left: [1, 5], right: [11, 5] },
        { description: "Generate left subsets", leftSubsets: [[],[1],[5],[1,5]] },
        { description: "Generate right subsets", rightSubsets: [[],[11],[5],[11,5]] },
        { description: "Check for equal partition", result: true }
      ]
    }
  ]
};


