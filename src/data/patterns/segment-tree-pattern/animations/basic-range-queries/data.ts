import { Animation } from '@/types';

export const basicRangeQueriesAnimation: Animation = {
  id: "basic-range-queries",
  title: "Basic Range Queries",
  description: "Visualizing basic range query operations using segment trees",
  steps: [
    {
      title: "Range Sum Query - Mutable",
      description: "Perform range sum queries on a mutable array",
      visualizationData: {
        array: [1, 3, 5, 7, 9, 11],
        tree: [36, 9, 27, 4, 5, 16, 11, 1, 3, 0, 0, 7, 9, 0, 0],
        query: { start: 1, end: 4 },
      },
    },
    {
      title: "Range Maximum Query",
      description: "Find the maximum value in a given range",
      visualizationData: {
        array: [3, 1, 4, 1, 5, 9, 2, 6],
        tree: [9, 4, 9, 3, 4, 9, 6, 3, 1, 0, 0, 5, 9, 2, 6],
        query: { start: 2, end: 5 },
      },
    },
    {
      title: "Range Minimum Query",
      description: "Find the minimum value in a given range",
      visualizationData: {
        array: [5, 2, 8, 1, 9, 3, 7, 4],
        tree: [1, 1, 3, 2, 1, 3, 4, 5, 2, 0, 0, 1, 9, 7, 4],
        query: { start: 1, end: 6 },
      },
    },
    {
      title: "Range XOR Query",
      description: "Compute the XOR of elements in a given range",
      visualizationData: {
        array: [1, 3, 5, 7, 9, 11],
        tree: [13, 2, 15, 1, 3, 5, 11, 1, 3, 0, 0, 7, 9, 0, 0],
        query: { start: 2, end: 5 },
      },
    },
  ],
};
