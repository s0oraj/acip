import { SubPattern } from '@/types';

export const graphSerialization: SubPattern = {
  title: "Graph Serialization",
  questions: [
    {
      id: 5,
      title: "Clone Graph",
      difficulty: "medium",
      link: "https://leetcode.com/problems/clone-graph/",
      description: "Base Pattern: Graph traversal and reconstruction",
      details: {
        keyDifference: "Graph traversal and reconstruction",
        commonError: "Not handling cycles",
        optimization: "Use hash map for node mapping"
      }
    },
    // Add 3-4 more questions related to graph serialization
  ]
};

