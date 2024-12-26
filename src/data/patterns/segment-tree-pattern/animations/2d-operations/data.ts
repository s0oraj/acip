import { Animation } from '@/types';

export const twoDOperationsAnimation: Animation = {
  id: "2d-operations",
  title: "2D Operations",
  description: "Visualizing 2D range operations using segment trees",
  steps: [
    {
      title: "2D Range Sum Query",
      description: "Compute the sum of elements in a 2D range",
      visualizationData: {
        matrix: [
          [1, 2, 3, 4],
          [5, 6, 7, 8],
          [9, 10, 11, 12],
          [13, 14, 15, 16]
        ],
        query: { x1: 1, y1: 1, x2: 2, y2: 2 },
      },
    },
    {
      title: "2D Range Update Query",
      description: "Update values in a 2D range",
      visualizationData: {
        matrix: [
          [1, 1, 1, 1],
          [1, 1, 1, 1],
          [1, 1, 1, 1],
          [1, 1, 1, 1]
        ],
        update: { x1: 1, y1: 1, x2: 2, y2: 2, value: 5 },
      },
    },
    {
      title: "2D Range Maximum Query",
      description: "Find the maximum value in a 2D range",
      visualizationData: {
        matrix: [
          [1, 3, 5, 7],
          [9, 11, 13, 15],
          [2, 4, 6, 8],
          [10, 12, 14, 16]
        ],
        query: { x1: 0, y1: 0, x2: 2, y2: 2 },
      },
    },
    {
      title: "2D Range GCD Query",
      description: "Compute the Greatest Common Divisor (GCD) of elements in a 2D range",
      visualizationData: {
        matrix: [
          [2, 4, 6, 8],
          [3, 6, 9, 12],
          [4, 8, 12, 16],
          [5, 10, 15, 20]
        ],
        query: { x1: 1, y1: 1, x2: 3, y2: 3 },
      },
    },
  ],
};
