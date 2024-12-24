import { SubPattern } from '@/types';

export const advancedSerialization: SubPattern = {
  title: "Advanced Serialization",
  questions: [
    {
      id: 17,
      title: "Serialize and Deserialize N-ary Tree",
      difficulty: "hard",
      link: "https://leetcode.com/problems/serialize-and-deserialize-n-ary-tree/",
      description: "Base Pattern: Level-order traversal encoding",
      details: {
        keyDifference: "Level-order traversal encoding",
        commonError: "Not handling variable child count",
        optimization: "Use null markers for level separation"
      }
    },
    // Add 3-4 more questions related to advanced serialization techniques
  ]
};

