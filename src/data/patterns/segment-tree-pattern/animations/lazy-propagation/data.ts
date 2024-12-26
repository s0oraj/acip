import { Animation } from '@/types';

export const lazyPropagationAnimation: Animation = {
  id: "lazy-propagation",
  title: "Lazy Propagation",
  description: "Visualizing lazy propagation techniques in segment trees",
  steps: [
    {
      title: "Range Update Operation",
      description: "Perform a range update operation with lazy propagation",
      visualizationData: {
        array: [1, 3, 5, 7, 9, 11],
        tree: [36, 9, 27, 4, 5, 16, 11, 1, 3, 0, 0, 7, 9, 0, 0],
        lazy: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        update: { start: 1, end: 4, value: 2 },
      },
    },
    {
      title: "Range Addition Query",
      description: "Perform a range addition query with lazy propagation",
      visualizationData: {
        array: [2, 4, 6, 8, 10],
        tree: [30, 6, 24, 2, 4, 18, 6, 0, 0, 0, 0, 8, 10, 0, 0],
        lazy: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        update: { start: 1, end: 3, value: 3 },
      },
    },
    {
      title: "Range Multiplication Query",
      description: "Perform a range multiplication query with lazy propagation",
      visualizationData: {
        array: [1, 2, 3, 4, 5],
        tree: [120, 6, 20, 2, 4, 5, 15, 1, 2, 0, 0, 4, 5, 0, 0],
        lazy: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        update: { start: 2, end: 4, value: 2 },
      },
    },
    {
      title: "Range Set Query",
      description: "Perform a range set query with lazy propagation",
      visualizationData: {
        array: [1, 1, 1, 1, 1, 1, 1],
        tree: [7, 3, 4, 2, 1, 2, 2, 1, 1, 0, 0, 1, 1, 1, 1],
        lazy: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        update: { start: 2, end: 5, value: 3 },
      },
    },
  ],
};


