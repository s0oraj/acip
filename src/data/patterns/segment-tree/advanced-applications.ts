import { SubPattern } from '@/types';

export const advancedApplications: SubPattern = {
  title: "Advanced Applications",
  questions: [
    {
      id: 17,
      title: "Falling Squares",
      difficulty: "hard",
      link: "https://leetcode.com/problems/falling-squares/",
      description: "Base Pattern: Segment tree with coordinate compression",
      details: {
        keyDifference: "Segment tree with coordinate compression",
        commonError: "Not handling overlapping squares correctly",
        optimization: "Use lazy propagation for height updates"
      }
    },
    // Add 3-4 more questions related to advanced applications of segment trees
  ]
};

