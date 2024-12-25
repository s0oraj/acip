import { Animation } from '@/types';
import { ArrowsUpDown, Group, Binary, Hash, LayersLinked } from 'lucide-react';

export const patterns = {
  pairs: {
    data: [1, 3, 2, 4, 3, 1, 5],
    icon: 'arrows-up-down',
    title: "Pair Counter",
    desc: "Difference Pairs",
    color: "#2563EB",
    k: 2 // For absolute difference
  },
  groups: {
    data: [1, 12, 23, 34, 45],
    icon: 'group',
    title: "Group Counter",
    desc: "Digit Sum Groups",
    color: "#7C3AED"
  },
  balance: {
    data: "abbacc",
    icon: 'binary',
    title: "Balance Counter",
    desc: "State Balance",
    color: "#DC2626"
  },
  subarray: {
    data: [2, 3, 4, 3, 6],
    icon: 'hash',
    title: "Pattern Counter",
    desc: "Subarray Patterns",
    color: "#059669",
    k: 2 // For divisible elements
  },
  complex: {
    data: [1, 4, 2, 3, 3],
    icon: 'layers-linked',
    title: "Complex Counter",
    desc: "Frequency Score",
    color: "#D97706"
  }
};

export const advancedCounterAnimation: Animation = {
  id: "advanced-counter",
  title: "Advanced Counting Operations",
  description: "Understanding complex counting patterns and operations",
  steps: [
    {
      title: "Pair-Based Counting",
      description: "Count pairs with absolute difference K",
      array: patterns.pairs.data,
      phases: patterns.pairs.data.map((val, index) => ({
        description: index === 0 
          ? "Initialize frequency map" 
          : `Check pairs for element ${val}`,
        activeIndex: index,
        highlightIndices: [index],
        counter: patterns.pairs.data
          .slice(0, index + 1)
          .reduce((acc, curr) => {
            acc[curr] = (acc[curr] || 0) + 1;
            return acc;
          }, {}),
        code: index === 0 
          ? "const freq = new Map();" 
          : `count += freq.get(${val} + k) + freq.get(${val} - k);`
      }))
    }
  ],
  counters: []
};
