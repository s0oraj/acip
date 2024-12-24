import { SubPattern } from '@/types';

export const treeCloning: SubPattern = {
  title: "Tree Cloning",
  questions: [
    {
      id: 5,
      title: "Clone Binary Tree",
      difficulty: "medium",
      link: "https://leetcode.com/problems/clone-binary-tree/",
      description: "Base Pattern: Recursive tree traversal",
      details: {
        keyDifference: "Recursive tree traversal",
        commonError: "Not handling null nodes",
        optimization: "Iterative approach with stack"
      }
    },
    // Add 3-4 more questions related to tree cloning
  ]
};

