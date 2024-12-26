import { Animation } from '@/types';

export const treeStructureCloningAnimation: Animation = {
  id: "tree-structure-cloning",
  title: "Tree Structure Cloning",
  description: "Visualizing cloning operations on tree structures",
  steps: [
    {
      title: "Binary Tree Node Clone",
      description: "Cloning a binary tree structure",
      visualizationData: {
        originalTree: {
          value: 1,
          left: { value: 2, left: { value: 4 }, right: { value: 5 } },
          right: { value: 3, left: { value: 6 }, right: { value: 7 } },
        },
      },
    },
    {
      title: "Tree with Random Clone",
      description: "Cloning a tree with random pointers",
      visualizationData: {
        originalTree: {
          value: 1,
          left: { value: 2, random: 7 },
          right: { value: 3, random: 2 },
          random: 3,
        },
      },
    },
    {
      title: "Multi-child Tree Clone",
      description: "Cloning a tree with multiple children",
      visualizationData: {
        originalTree: {
          value: 1,
          children: [
            { value: 2, children: [{ value: 5 }, { value: 6 }] },
            { value: 3 },
            { value: 4, children: [{ value: 7 }] },
          ],
        },
      },
    },
    {
      title:"Thread-Safe Tree Clone",
      description: "Cloning a tree structure with thread-safety considerations",
      visualizationData: {
        originalTree: {
          value: 1,
          left: { value: 2, locked: false },
          right: { value: 3, locked: true },
        },
      },
    },
  ],
};


