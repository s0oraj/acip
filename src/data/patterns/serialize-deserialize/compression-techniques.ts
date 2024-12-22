import { SubPattern } from '@/types';

export const compressionTechniques: SubPattern = {
  title: "Compression Techniques",
  questions: [
    {
      id: 13,
      title: "String Compression",
      difficulty: "medium",
      link: "https://leetcode.com/problems/string-compression/",
      description: "Base Pattern: Run-length encoding",
      details: {
        keyDifference: "Run-length encoding",
        commonError: "Not handling single character runs",
        optimization: "In-place compression"
      }
    },
    // Add 3-4 more questions related to compression techniques
  ]
};

