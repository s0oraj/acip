import { SubPattern } from '@/types';import { SubPattern } from '@/types';

export const bridgeIdentification: SubPattern = {
  title: "Bridge Identification",
  questions: [
    {
      id: 5,
      title: "Bridges in a Graph",
      difficulty: "hard",
      link: "https://leetcode.com/problems/critical-connections-in-a-network/",
      description: "Base Pattern: DFS with low-link values",
      details: {
        keyDifference: "DFS with low-link values",
        commonError: "Not handling back edges correctly",
        optimization: "Use Tarjan's algorithm"
      }
    },
    // Add 3-4 more questions related to bridge identification
  ]
};

