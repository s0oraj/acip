import { Animation } from '@/types';
import { Hash, GitBranch, GitMerge, Network, Boxes } from 'lucide-react';

export const patterns = {
  pairs: {
    data: [1, 5, 3, 4, 2],
    diffK: 2,
    icon: 'git-branch',
    title: "Pair Counter",
    desc: "Count pairs with difference K",
    color: "#2563EB"
  },
  groups: {
    data: [13, 22, 31, 40],
    icon: 'boxes',
    title: "Group Counter",
    desc: "Count by digit sums",
    color: "#7C3AED"
  },
  balance: {
    data: ['abbcca', 'aabbcc', 'abccba'],
    icon: 'git-merge',
    title: "Balance Counter",
    desc: "Track balanced states",
    color: "#059669"
  },
  subarray: {
    data: [2, 3, 3, 2, 2],
    k: 2,
    icon: 'network',
    title: "Pattern Counter",
    desc: "Count valid subarrays",
    color: "#DC2626"
  }
};

const digitSum = (num: number): number => {
  return String(num).split('').reduce((sum, digit) => sum + parseInt(digit), 0);
};

export const advancedCounterAnimation: Animation = {
  id: "advanced-counter",
  title: "Advanced Counting Operations",
  description: "Exploring complex counting patterns and techniques",
  steps: [
    {
      title: "Pair Difference Counter",
      description: "Count pairs with absolute difference K",
      array: patterns.pairs.data,
      phases: patterns.pairs.data.map((val, index) => ({
        description: index === 0 
          ? `Initialize counter for pairs with difference K=${patterns.pairs.diffK}` 
          : `Check pairs for element ${val}`,
        activeIndex: index,
        highlightIndices: [index],
        counter: patterns.pairs.data
          .slice(0, index + 1)
          .reduce((acc, curr, i, arr) => {
            arr.slice(0, i).forEach(prev => {
              if (Math.abs(curr - prev) === patterns.pairs.diffK) {
                acc.pairs = (acc.pairs || 0) + 1;
              }
            });
            return acc;
          }, { pairs: 0 }),
        code: index === 0 
          ? "const pairCounter = { pairs: 0 };" 
          : `if (Math.abs(curr - prev) === K) pairCounter.pairs++;`
      }))
    },
    {
      title: "Group Digit Sum Counter",
      description: "Count groups by digit sum",
      array: patterns.groups.data,
      phases: patterns.groups.data.map((val, index) => ({
        description: index === 0 
          ? "Initialize group counter" 
          : `Add ${val} to group ${digitSum(val)}`,
        activeIndex: index,
        highlightIndices: [index],
        counter: patterns.groups.data
          .slice(0, index + 1)
          .reduce((acc, curr) => {
            const sum = digitSum(curr);
            acc[sum] = (acc[sum] || 0) + 1;
            return acc;
          }, {}),
        code: index === 0 
          ? "const groupCounter = {};" 
          : `groupCounter[digitSum(${val})]++;`
      }))
    }
  ],
  counters: []
};
