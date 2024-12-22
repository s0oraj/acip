import { SubPattern } from '@/types';

export const advancedApplicationsPattern: SubPattern = {
  title: "Advanced Applications",
  questions: [
    {
      id: 16,
      title: "Range Addition",
      difficulty: "medium",
      link: "https://leetcode.com/problems/range-addition/",
      description: "Base Pattern: Difference array",
      details: {
        keyDifference: "Boundary marking",
        commonError: "Range boundary updates",
        optimization: "Update endpoints only"
      }
    },
    {
      id: 17,
      title: "Car Fleet",
      difficulty: "medium",
      link: "https://leetcode.com/problems/car-fleet/",
      description: "Builds on #16: Time-based sorting",
      details: {
        keyDifference: "Collision detection",
        commonError: "Float comparison",
        optimization: "Stack-based approach"
      }
    },
    {
      id: 18,
      title: "Maximum Height by Stacking Cuboids",
      difficulty: "hard",
      link: "https://leetcode.com/problems/maximum-height-by-stacking-cuboids/",
      description: "Builds on #17: Multi-criteria sorting",
      details: {
        keyDifference: "3D constraints",
        commonError: "Invalid rotation checks",
        optimization: "Pre-sort dimensions"
      }
    },
    {
      id: 19,
      title: "Count of Range Sum",
      difficulty: "hard",
      link: "https://leetcode.com/problems/count-of-range-sum/",
      description: "Builds on #18: Prefix sum ordering",
      details: {
        keyDifference: "Range counting",
        commonError: "Sum overflow",
        optimization: "Merge sort approach"
      }
    },
    {
      id: 20,
      title: "Longest Consecutive Sequence",
      difficulty: "medium",
      link: "https://leetcode.com/problems/longest-consecutive-sequence/",
      description: "Builds on #19: Set-based sorting",
      details: {
        keyDifference: "Sequence detection",
        commonError: "Duplicate handling",
        optimization: "Skip checked numbers"
      }
    }
  ]
};

