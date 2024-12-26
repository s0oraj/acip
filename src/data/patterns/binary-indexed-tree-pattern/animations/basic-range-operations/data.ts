import { Animation } from '@/types';

export const basicRangeOperationsAnimation: Animation = {
  id: "basic-range-operations",
  title: "Basic Range Operations",
  description: "Visualizing fundamental range operations with Binary Indexed Trees",
  steps: [
    {
      title: "Range Sum Query",
      description: "Computing sum of elements in a given range",
      visualizationData: {
        array: [1, 3, 5, 7, 9, 11],
        bit: [0, 1, 4, 5, 16, 9, 20, 7, 36],
        query: { start: 1, end: 4 },
        highlightIndices: [],
        phase: "initial",
        stepDescription: "Initial array and BIT structure"
      }
    },
    {
      title: "Count of Smaller Numbers",
      description: "Count elements smaller than current element",
      visualizationData: {
        array: [5, 2, 6, 1],
        bit: [0, 0, 1, 1, 2],
        sortedArray: [1, 2, 5, 6],
        highlightIndices: [],
        phase: "initial",
        stepDescription: "Processing elements in order"
      }
    },
    {
      title: "Create Sorted Array",
      description: "Building sorted array through instructions",
      visualizationData: {
        instructions: [1, 5, 6, 2],
        bit: [0, 1, 1, 1, 1, 2, 3],
        sortedArray: [1, 2, 5, 6],
        highlightIndices: [],
        phase: "initial",
        stepDescription: "Following insertion instructions"
      }
    },
    {
      title: "Range Frequency Query",
      description: "Query frequency of elements in range",
      visualizationData: {
        array: [1, 1, 2, 3, 2],
        bit: [0, 2, 2, 3, 3, 5],
        query: { start: 1, end: 3, element: 2 },
        highlightIndices: [],
        phase: "initial",
        stepDescription: "Counting element occurrences in range"
      }
    }
  ]
};
