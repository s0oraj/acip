import { Animation } from '@/types';

export const twoDOperationsAnimation: Animation = {
  id: "2d-operations",
  title: "2D Operations",
  description: "Visualizing 2D operations using Binary Indexed Trees (BIT)",
  steps: [
    {
      title: "2D Range Sum",
      description: "Compute the sum of elements in a 2D range",
      visualizationData: {
        matrix: [
          [1, 2, 3, 4],
          [5, 6, 7, 8],
          [9, 10, 11, 12],
          [13, 14, 15, 16]
        ],
        bit: [
          [0, 0, 0, 0, 0],
          [0, 1, 3, 6, 10],
          [0, 6, 14, 24, 36],
          [0, 15, 33, 54, 78],
          [0, 28, 60, 96, 136]
        ],
        query: { x1: 1, y1: 1, x2: 2, y2: 2 },
      },
    },
    {
      title: "Count Points in Rectangles",
      description: "Count the number of points within given rectangles",
      visualizationData: {
        points: [[1, 2], [3, 1], [2, 3], [4, 4]],
        rectangles: [
          { x1: 1, y1: 1, x2: 3, y2: 3 },
          { x1: 2, y1: 2, x2: 4, y2: 4 },
        ],
        bit: [
          [0, 0, 0, 0, 0],
          [0, 1, 1, 2, 2],
          [0, 1, 2, 3, 3],
          [0, 2, 3, 4, 4],
          [0, 2, 3, 4, 5]
        ],
      },
    },
    {
      title: "2D Range Updates",
      description: "Update values in a 2D range",
      visualizationData: {
        matrix: [
          [1, 1, 1, 1],
          [1, 1, 1, 1],
          [1, 1, 1, 1],
          [1, 1, 1, 1]
        ],
        bit: [
          [0, 0, 0, 0, 0],
          [0, 1, 1, 1, 1],
          [0, 1, 1, 1, 1],
          [0, 1, 1, 1, 1],
          [0, 1, 1, 1, 1]
        ],
        update: { x1: 1, y1: 1, x2: 2, y2: 2, value: 5 },
      },
    },
    {
      title: "2D Order Statistics",
      description: "Find the kth smallest element in a 2D range",
      visualizationData: {
        matrix: [
          [1, 3, 5, 7],
          [2, 4, 6, 8],
          [9, 11, 13, 15],
          [10, 12, 14, 16]
        ],
        bit: [
          [0, 0, 0, 0, 0],
          [0, 1, 2, 3, 4],
          [0, 2, 4, 6, 8],
          [0, 3, 6, 9, 12],
          [0, 4, 8, 12, 16]
        ],
        query: { x1: 0, y1: 0, x2: 2, y2: 2, k: 5 },
      },
    },
  ],
};


