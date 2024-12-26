import { Animation } from '@/types';
import { Grid } from 'lucide-react';
export const patterns = {
  rangeSumQueryMutable: {
    data: [1, 3, 5, 7, 9, 11],
    icon: 'grid',
    title: "Range Sum Query - Mutable",
    desc: "Square root decomposition with offline queries",
    color: "#4F46E5"
  },
  xorQueriesOfSubarray: {
    data: [1, 3, 4, 8],
    icon: 'grid',
    title: "XOR Queries of a Subarray",
    desc: "Adding/removing elements while moving pointers",
    color: "#7C3AED"
  },
  countOfUniqueElementsInSubarray: {
    data: [1, 2, 1, 3, 2, 3],
    icon: 'grid',
    title: "Count of Unique Elements in Subarray",
    desc: "Frequency array for tracking",
    color: "#2563EB"
  },
  countNicePairsInArray: {
    data: [42, 11, 1, 97],
    icon: 'grid',
    title: "Count Nice Pairs in Array",
    desc: "Two-pointer with frequency",
    color: "#DB2777"
  }
};

export const basicRangeQueryOperationsAnimation: Animation = {
  id: "basic-range-query-operations",
  title: "Basic Range Query Operations",
  description: "Fundamental range query techniques using Mo's Algorithm",
  steps: [
    {
      title: "Range Sum Query - Mutable",
      description: "Calculate sum of elements in a given range",
      array: patterns.rangeSumQueryMutable.data,
      blockSize: 2,
      phases: [
        { description: "Initialize", blocks: [[1, 3], [5, 7], [9, 11]] },
        { description: "Query: [1, 4]", currentSum: 15 },
        { description: "Update: index 2 to 6", updatedArray: [1, 3, 6, 7, 9, 11] },
        { description: "Query: [0, 5]", currentSum: 37 }
      ]
    }
  ]
};
