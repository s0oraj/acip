import { SubPattern } from '@/types';

export const basicTreeSerialization: SubPattern = {
  title: "Basic Tree Serialization",
  questions: [
    {
      id: 1,
      title: "Serialize and Deserialize Binary Tree",
      difficulty: "hard",
      link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
      description: "Base Pattern: DFS-based serialization",
      details: {
        keyDifference: "DFS-based serialization",
        commonError: "Not handling null nodes",
        optimization: "Use delimiter-based encoding"
      }
    },
    // Add 3-4 more questions related to basic tree serialization
  ]
};

