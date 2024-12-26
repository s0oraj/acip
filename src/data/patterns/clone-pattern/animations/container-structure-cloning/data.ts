import { Animation } from '@/types';

export const containerStructureCloningAnimation: Animation = {
  id: "container-structure-cloning",
  title: "Container Structure Cloning",
  description: "Visualizing cloning operations on container structures",
  steps: [
    {
      title: "Stack Clone",
      description: "Cloning a stack data structure",
      visualizationData: {
        stack: [1, 2, 3, 4, 5],
      },
    },
    {
      title: "Queue Clone",
      description: "Cloning a queue data structure",
      visualizationData: {
        queue: [1, 2, 3, 4, 5],
      },
    },
    {
      title: "Priority Queue Clone",
      description: "Cloning a priority queue data structure",
      visualizationData: {
        priorityQueue: [
          { value: 5, priority: 1 },
          { value: 3, priority: 2 },
          { value: 7, priority: 1 },
          { value: 1, priority: 3 },
          { value: 9, priority: 2 },
        ],
      },
    },
    {
      title: "HashMap Clone",
      description: "Cloning a hashmap data structure",
      visualizationData: {
        hashMap: [
          { key: "apple", value: 5 },
          { key: "banana", value: 3 },
          { key: "cherry", value: 7 },
          { key: "date", value: 1 },
          { key: "elderberry", value: 9 },
        ],
      },
    },
  ],
};


