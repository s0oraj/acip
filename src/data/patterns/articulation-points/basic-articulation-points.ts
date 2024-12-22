import { SubPattern } from '@/types';

export const basicArticulationPoints: SubPattern = {
  title: "Basic Articulation Points",
  questions: [
    {
      id: 1,
      title: "Critical Connections in a Network",
      difficulty: "hard",
      link: "https://leetcode.com/problems/critical-connections-in-a-network/",
      description: "Base Pattern: Tarjan's algorithm for bridges",
      details: {
        keyDifference: "Tarjan's algorithm for bridges",
        commonError: "Not updating low-link values correctly",
        optimization: "Use DFS with single pass"
      }
    },
    // Add 3-4 more questions related to basic articulation points
  ]
};

