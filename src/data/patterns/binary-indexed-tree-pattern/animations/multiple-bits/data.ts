import { Animation } from '@/types';

export const multipleBITsAnimation: Animation = {
  id: "multiple-bits",
  title: "Multiple BITs",
  description: "Visualizing operations using multiple Binary Indexed Trees (BIT)",
  steps: [
    {
      title: "Multiple Range Sums",
      description: "Compute multiple range sums simultaneously",
      visualizationData: {
        arrays: [
          [1, 3, 5, 7, 9],
          [2, 4, 6, 8, 10]
        ],
        bits: [
          [0, 1, 4, 5, 16, 9],
          [0, 2, 6, 6, 20, 10]
        ],
        query: { start: 1, end: 3 },
      },
    },
    {
      title: "Range Color Queries",
      description: "Query the count of different colors in a range",
      visualizationData: {
        array: ['R', 'G', 'B', 'R', 'G', 'B', 'R'],
        bits: {
          R: [0, 1, 1, 1, 2, 2, 2, 3],
          G: [0, 0, 1, 1, 1, 2, 2, 2],
          B: [0, 0, 0, 1, 1, 1, 2, 2]
        },
        query: { start: 2, end: 5 },
      },
    },
    {
      title: "Multiple Statistics Tracking",
      description: "Track multiple statistics (e.g., sum and max) simultaneously",
      visualizationData: {
        array: [1, 3, 5, 2, 4, 6],
        bits: {
          sum: [0, 1, 4, 9, 2, 6, 21],
          max: [0, 1, 3, 5, 2, 4, 6]
        },
        query: { start: 1, end: 4 },
      },
    },
    {
      title: "Multiple Update Types",
      description: "Handle multiple types of updates (e.g., add and set) on the same array",
      visualizationData: {
        array: [1, 2, 3, 4, 5],
        bits: {
          add: [0, 1, 3, 3, 10, 5],
          set: [0, 1, 2, 3, 4, 5]
        },
        updates: [
          { type: 'add', index: 2, value: 3 },
          { type: 'set', index: 4, value: 10 }
        ],
      },
    },
  ],
};


