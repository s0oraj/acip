import { SubPattern } from '@/types';

export const graphConnectivity: SubPattern = {
  title: "Graph Connectivity",
  questions: [
    {
      id: 9,
      title: "Strongly Connected Components",
      difficulty: "hard",
      link: "https://leetcode.com/problems/strongly-connected-components-tarjans-algorithm/",
      description: "Base Pattern: Tarjan's algorithm for SCCs",
      details: {
        keyDifference: "Tarjan's algorithm for SCCs",
        commonError: "Incorrect stack management",
        optimization: "Use single DFS pass"
      }
    },
    // Add 3-4 more questions related to graph connectivity
  ]
};

