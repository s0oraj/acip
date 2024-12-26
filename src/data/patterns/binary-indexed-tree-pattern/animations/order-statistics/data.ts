import { Animation } from '@/types';

export const orderStatisticsAnimation: Animation = {
  id: "order-statistics",
  title: "Order Statistics",
  description: "Visualizing order statistics operations using Binary Indexed Trees (BIT)",
  steps: [
    {
      title: "Kth Smallest Element",
      description: "Find the kth smallest element in a dynamic set",
      visualizationData: {
        array: [3, 1, 4, 1, 5, 9, 2, 6],
        bit: [0, 1, 2, 4, 5, 6, 7, 8, 8],
        k: 3,
      },
    },
    {
      title: "Counting Inversions",
      description: "Count the number of inversions in an array",
      visualizationData: {
        array: [5, 2, 8, 1, 3],
        bit: [0, 0, 1, 1, 2, 3],
        inversions: 6,
      },
    },
    {
      title: "Previous Smaller Element",
      description: "Find the previous smaller element for each element",
      visualizationData: {
        array: [3, 1, 4, 1, 5, 9, 2, 6],
        bit: [0, 1, 2, 2, 3, 3, 3, 4, 5],
        result: [-1, -1, 1, -1, 4, 5, 1, 5],
      },
    },
    {
      title: "Next Greater Element",
      description: "Find the next greater element for each element",
      visualizationData: {
        array: [4, 5, 2, 10, 8],
        bit: [0, 0, 1, 1, 2, 3],
        result: [5, 10, 10, -1, -1],
      },
    },
  ],
};


