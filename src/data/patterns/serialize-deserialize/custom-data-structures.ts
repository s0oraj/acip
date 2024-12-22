import { SubPattern } from '@/types';

export const customDataStructures: SubPattern = {
  title: "Custom Data Structures",
  questions: [
    {
      id: 9,
      title: "Encode and Decode TinyURL",
      difficulty: "medium",
      link: "https://leetcode.com/problems/encode-and-decode-tinyurl/",
      description: "Base Pattern: Custom encoding scheme",
      details: {
        keyDifference: "Custom encoding scheme",
        commonError: "Collision in short URLs",
        optimization: "Use base62 encoding"
      }
    },
    // Add 3-4 more questions related to custom data structure serialization
  ]
};

