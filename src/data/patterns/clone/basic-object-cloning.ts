import { SubPattern } from '@/types';

export const basicObjectCloning: SubPattern = {
  title: "Basic Object Cloning",
  questions: [
    {
      id: 1,
      title: "Copy List with Random Pointer",
      difficulty: "medium",
      link: "https://leetcode.com/problems/copy-list-with-random-pointer/",
      description: "Base Pattern: Hash map-based cloning",
      details: {
        keyDifference: "Hash map-based cloning",
        commonError: "Not handling random pointers correctly",
        optimization: "Two-pass algorithm"
      }
    },
    // Add 3-4 more questions related to basic object cloning
  ]
};

