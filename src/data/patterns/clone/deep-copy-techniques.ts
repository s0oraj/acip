import { SubPattern } from '@/types';

export const deepCopyTechniques: SubPattern = {
  title: "Deep Copy Techniques",
  questions: [
    {
      id: 13,
      title: "Implement deepCopy Function",
      difficulty: "hard",
      link: "https://leetcode.com/problems/implement-deepcopy-function/",
      description: "Base Pattern: Recursive deep copy",
      details: {
        keyDifference: "Recursive deep copy",
        commonError: "Not handling all data types",
        optimization: "Iterative approach for large structures"
      }
    },
    // Add 3-4 more questions related to deep copy techniques
  ]
};

