import { SubPattern } from '@/types';

export const advancedApplications: SubPattern = {
  title: "Advanced Applications",
  questions: [
    {
      id: 17,
      title: "Redundant Connection II",
      difficulty: "hard",
      link: "https://leetcode.com/problems/redundant-connection-ii/",
      description: "Base Pattern: Cycle detection in directed graphs",
      details: {
        keyDifference: "Cycle detection in directed graphs",
        commonError: "Not handling multiple parent cases",
        optimization: "Combine Union-Find with DFS"
      }
    },
    // Add 3-4 more questions related to advanced applications
  ]
};

