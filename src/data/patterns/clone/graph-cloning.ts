import { SubPattern } from '@/types';

export const graphCloning: SubPattern = {
  title: "Graph Cloning",
  questions: [
    {
      id: 9,
      title: "Clone Graph",
      difficulty: "medium",
      link: "https://leetcode.com/problems/clone-graph/",
      description: "Base Pattern: DFS/BFS with hash map",
      details: {
        keyDifference: "DFS/BFS with hash map",
        commonError: "Not handling cycles",
        optimization: "Iterative BFS for better space complexity"
      }
    },
    // Add 3-4 more questions related to graph cloning
  ]
};

