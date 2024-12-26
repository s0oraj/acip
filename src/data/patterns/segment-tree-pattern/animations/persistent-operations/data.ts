import { Animation } from '@/types';

export const persistentOperationsAnimation: Animation = {
  id: "persistent-operations",
  title: "Persistent Operations",
  description: "Visualizing persistent operations using segment trees",
  steps: [
    {
      title: "Persistent Range Sum",
      description: "Perform range sum queries on different versions of the array",
      visualizationData: {
        versions: [
          { array: [1, 2, 3, 4, 5], tree: [15, 6, 9, 3, 3, 4, 5, 1, 2, 0, 0, 0, 0, 0, 0] },
          { array: [1, 2, 6, 4, 5], tree: [18, 9, 9, 3, 6, 4, 5, 1, 2, 0, 0, 0, 0, 0, 0] },
          { array: [1, 2, 6, 4, 8], tree: [21, 9, 12, 3, 6, 4, 8, 1, 2, 0, 0, 0, 0, 0, 0] },
        ],
        query: { version: 1, start: 1, end: 3 },
      },
    },
    {
      title: "Persistent Range Maximum",
      description: "Find the maximum value in a range for different versions of the array",
      visualizationData: {
        versions: [
          { array: [1, 3, 5, 7, 9], tree: [9, 5, 9, 3, 5, 7, 9, 1, 3, 0, 0, 0, 0, 0, 0] },
          { array: [1, 3, 8, 7, 9], tree: [9, 8, 9, 3, 8, 7, 9, 1, 3, 0, 0, 0, 0, 0, 0] },
          { array: [1, 3, 8, 7, 10], tree: [10, 8, 10, 3, 8, 7, 10, 1, 3, 0, 0, 0, 0, 0, 0] },
        ],
        query: { version: 2, start: 2, end: 4 },
      },
    },
    {
      title: "Persistent Range Updates",
      description: "Perform range updates on different versions of the array",
      visualizationData: {
        versions: [
          { array: [1, 1, 1, 1, 1], tree: [5, 2, 3, 1, 1, 1, 2, 1, 1, 0, 0, 0, 0, 0, 0] },
          { array: [1, 3, 3, 1, 1], tree: [9, 6, 3, 1, 3, 1, 2, 1, 3, 0, 0, 0, 0, 0, 0] },
          { array: [1, 3, 3, 4, 4], tree: [15, 6, 9, 1, 3, 4, 5, 1, 3, 0, 0, 0, 0, 0, 0] },
        ],
        update: { version: 1, start: 3, end: 4, value: 3 },
      },
    },
    {
      title: "Persistent Multiple Operations",
      description: "Perform multiple operations on different versions of the array",
      visualizationData: {
        versions: [
          { array: [1, 2, 3, 4, 5], tree: [15, 6, 9, 3, 3, 4, 5, 1, 2, 0, 0, 0, 0, 0, 0] },
          { array: [1, 2, 6, 4, 5], tree: [18, 9, 9, 3, 6, 4, 5, 1, 2, 0, 0, 0, 0, 0, 0] },
          { array: [1, 2, 6, 7, 8], tree: [24, 9, 15, 3, 6, 7, 8, 1, 2, 0, 0, 0, 0, 0, 0] },
        ],
        operations: [
          { type: 'update', version: 0, index: 2, value: 6 },
          { type: 'query', version: 1, start: 1, end: 3 },
          { type: 'update', version: 1, index: 3, value: 7 },
          { type: 'update', version: 2, index: 4, value: 8 },
        ],
      },
    },
  ],
};


