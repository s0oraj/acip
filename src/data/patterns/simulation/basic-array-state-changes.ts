import { SubPattern } from '@/types';

export const basicArrayStateChanges: SubPattern = {
  title: "Basic Array State Changes",
  questions: [
    {
      id: 1,
      title: "Array Transformation",
      difficulty: "easy",
      link: "https://leetcode.com/problems/array-transformation/",
      description: "Base Pattern: In-place array updates",
      details: {
        keyDifference: "In-place array updates",
        commonError: "Not handling boundaries",
        optimization: "Single pass modification"
      }
    },
    {
      id: 2,
      title: "Replace Elements with Greatest Right",
      difficulty: "easy",
      link: "https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/",
      description: "Builds on #1: Directional scanning",
      details: {
        keyDifference: "Running maximum tracking",
        commonError: "Wrong scan direction",
        optimization: "Reverse iteration eliminates extra space"
      }
    },
    {
      id: 3,
      title: "Apply Operations to Array",
      difficulty: "easy",
      link: "https://leetcode.com/problems/apply-operations-to-an-array/",
      description: "Builds on #2: Pairwise operations",
      details: {
        keyDifference: "Two-element state change",
        commonError: "Not handling duplicates",
        optimization: "In-place modification"
      }
    },
    {
      id: 4,
      title: "Minimum Operations to Make Array Alternating",
      difficulty: "medium",
      link: "https://leetcode.com/problems/minimum-operations-to-make-the-array-alternating/",
      description: "Builds on #3: Pattern-based validation",
      details: {
        keyDifference: "Frequency counting for decisions",
        commonError: "Not considering all valid patterns",
        optimization: "Use two frequency maps"
      }
    },
    {
      id: 5,
      title: "Beautiful Array",
      difficulty: "hard",
      link: "https://leetcode.com/problems/beautiful-array/",
      description: "Builds on #4: Complex pattern creation",
      details: {
        keyDifference: "Divide-and-conquer transformation",
        commonError: "Invalid subarray combinations",
        optimization: "Memoize subpatterns"
      }
    }
  ]
};

