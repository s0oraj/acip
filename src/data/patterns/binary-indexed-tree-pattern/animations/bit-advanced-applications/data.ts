import { Animation } from '@/types';

export const bitAdvancedApplicationsAnimation: Animation = {
  id: "advanced-applications",
  title: "Advanced Applications",
  description: "Visualizing advanced applications of Binary Indexed Trees (BIT)",
  steps: [
    {
      title: "Dynamic Median Finding",
      description: "Find the median in a dynamic array",
      visualizationData: {
        array: [1, 3, 5, 2, 4, 6],
        bits: {
          smaller: [0, 1, 2, 3, 1, 2, 3],
          larger: [0, 0, 0, 0, 2, 1, 3]
        },
        median: 3.5,
      },
    },
    {
      title: "Range LIS",
      description: "Find the Longest Increasing Subsequence (LIS) in a range",
      visualizationData: {
        array: [3, 1, 4, 1, 5, 9, 2, 6],
        bit: [0, 1, 1, 2, 1, 3, 3, 2, 4],
        query: { start: 2, end: 6 },
        lis: 3,
      },
    },
    {
      title: "Dynamic Convex Hull",
      description: "Maintain a dynamic convex hull",
      visualizationData: {
        points: [[1, 1], [2, 3], [3, 2], [4, 4], [5, 1]],
        hull: [[1, 1], [2, 3], [4, 4], [5, 1]],
        bit: [0, 1, 2, 2, 3, 4],
      },
    },
    {
      title: "Range Optimization",
      description: "Optimize a value over a range",
      visualizationData: {
        array: [3, 1, 4, 1, 5, 9, 2, 6],
        bit: [0, 3, 3, 4, 1, 5, 9, 2, 9],
        query: { start: 2, end: 6 },
        optimizedValue: 9,
      },
    },
  ],
};


