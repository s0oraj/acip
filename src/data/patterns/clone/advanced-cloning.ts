import { SubPattern } from '@/types';

export const advancedCloning: SubPattern = {
  title: "Advanced Cloning",
  questions: [
    {
      id: 17,
      title: "Clone N-ary Tree",
      difficulty: "medium",
      link: "https://leetcode.com/problems/clone-n-ary-tree/",
      description: "Base Pattern: Level-order traversal cloning",
      details: {
        keyDifference: "Level-order traversal cloning",
        commonError: "Not handling variable child count",
        optimization: "Use queue for level-order traversal"
      }
    },
    // Add 3-4 more questions related to advanced cloning techniques
  ]
};

