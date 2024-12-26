import { Animation } from '@/types';

export const advancedRangeOperationsAnimation: Animation = {
  id: "advanced-range-operations",
  title: "Advanced Range Operations",
  description: "Visualizing advanced range operations using segment trees",
  steps: [
    {
      title: "Range GCD Query",
      description: "Compute the Greatest Common Divisor (GCD) of elements in a given range",
      visualizationData: {
        array: [2, 4, 6, 8, 10, 12],
        tree: [2, 2, 2, 2, 2, 2, 6, 2, 4, 0, 0, 8, 10, 0, 0],
        query: { start: 1, end: 4 },
      },
    },
    {
      title: "Range Frequency Query",
      description: "Count the frequency of a specific element in a given range",
      visualizationData: {
        array: [1, 2, 1, 3, 2, 1],
        tree: [6, 3, 3, 2, 1, 2, 1, 1, 1, 0, 0, 1, 1, 0, 0],
        query: { start: 0, end: 4, element: 1 },
      },
    },
    {
      title: "Range Mode Query",
      description: "Find the mode (most frequent element) in a given range",
      visualizationData: {
        array: [1, 2, 2, 3, 3, 3],
        tree: [6, 3, 3, 2, 1, 2, 1, 1, 1, 0, 0, 1, 1, 0, 0],
        query: { start: 1, end: 5 },
      },
    },
    {
      title: "Range Median Query",
      description: "Find the median element in a given range",
      visualizationData: {
        array: [5, 2, 8, 1, 9, 3, 7, 4],
        tree: [8, 4, 4, 2, 2, 2, 2, 1, 1, 0, 0, 1, 1, 1, 1],
        query: { start: 2, end: 6 },
      },
    },
  ],
};


