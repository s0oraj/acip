import { Animation } from '@/types';

export const basicRangeOperationsAnimation: Animation = {
  id: "basic-range-operations",
  title: "Basic Range Operations",
  description: "Visualizing basic range operations using Binary Indexed Trees (BIT)",
  steps: [
    {
      title: "Range Sum Query",
      description: "Perform range sum queries on a mutable array",
      visualizationData: {
        array: [1, 3, 5, 7, 9, 11],
        bit: [0, 1, 4, 5, 16, 9, 20, 7, 36],
        query: { start: 1, end: 4 },
      },
    },
    {
      title: "Count of Smaller Numbers",
      description: "Count smaller numbers after self",
      visualizationData: {
        array: [5, 2, 6, 1],
        bit: [0, 0, 1, 1, 2],
        result: [2, 1, 1, 0],
      },
    },
    {
      title: "Create Sorted Array",
      description: "Create a sorted array through instructions",
      visualizationData: {
        instructions: [1, 5, 6, 2],
        bit: [0, 1, 1, 1, 1, 2, 3],
        sortedArray: [1, 2, 5, 6],
      },
    },
    {
      title: "Range Frequency Query",
      description: "Query the frequency of elements in a range",
      visualizationData: {
        array: [1, 1, 2, 3, 2],
        bit: [0, 2, 2, 3, 3, 5],
        query: { start: 1, end: 3, element: 2 },
      },
    },
  ],
};


