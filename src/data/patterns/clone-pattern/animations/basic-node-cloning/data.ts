import { Animation } from '@/types';

export const basicNodeCloningAnimation: Animation = {
  id: "basic-node-cloning",
  title: "Basic Node Cloning",
  description: "Visualizing different types of node cloning operations",
  steps: [
    {
      title: "Single Node Clone",
      description: "Cloning a single node",
      visualizationData: {
        originalNode: { value: 5 },
        clonedNode: { value: 5 },
      },
    },
    {
      title: "Linear Node Chain Clone",
      description: "Cloning a linear chain of nodes",
      visualizationData: {
        originalChain: [1, 2, 3, 4, 5],
        clonedChain: [1, 2, 3, 4, 5],
      },
    },
    {
      title: "Node with Random Clone",
      description: "Cloning nodes with random pointers",
      visualizationData: {
        originalNodes: [
          { value: 1, random: 3 },
          { value: 2, random: 1 },
          { value: 3, random: 2 },
          { value: 4, random: 0 },
        ],
        clonedNodes: [
          { value: 1, random: 3 },
          { value: 2, random: 1 },
          { value: 3, random: 2 },
          { value: 4, random: 0 },
        ],
      },
    },
    {
      title: "Circular Node Chain Clone",
      description: "Cloning a circular chain of nodes",
      visualizationData: {
        originalChain: [1, 2, 3, 4, 5],
        clonedChain: [1, 2, 3, 4, 5],
        isCircular: true,
      },
    },
  ],
};


