import { SubPattern } from '@/types';

export const networkReliability: SubPattern = {
  title: "Network Reliability",
  questions: [
    {
      id: 13,
      title: "Minimize Malware Spread",
      difficulty: "hard",
      link: "https://leetcode.com/problems/minimize-malware-spread/",
      description: "Base Pattern: Component analysis with articulation points",
      details: {
        keyDifference: "Component analysis with articulation points",
        commonError: "Not considering all infection scenarios",
        optimization: "Use Union-Find data structure"
      }
    },
    // Add 3-4 more questions related to network reliability
  ]
};

