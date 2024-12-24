import { SubPattern } from '@/types';

export const resourceAllocationSimulation: SubPattern = {
  title: "Resource Allocation Simulation",
  questions: [
    {
      id: 6,
      title: "Water Bottles",
      difficulty: "easy",
      link: "https://leetcode.com/problems/water-bottles/",
      description: "Base Pattern: Resource exchange cycle",
      details: {
        keyDifference: "Resource exchange cycle",
        commonError: "Incorrect remainder handling",
        optimization: "Mathematical formula exists"
      }
    },
    {
      id: 7,
      title: "Cells in Range on Excel Sheet",
      difficulty: "easy",
      link: "https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/",
      description: "Builds on #6: 2D coordinate simulation",
      details: {
        keyDifference: "Character-based increments",
        commonError: "Wrong range boundaries",
        optimization: "Direct formula for cell count"
      }
    },
    {
      id: 8,
      title: "Maximum Number of Eaten Apples",
      difficulty: "medium",
      link: "https://leetcode.com/problems/maximum-number-of-eaten-apples/",
      description: "Builds on #7: Time-based expiration",
      details: {
        keyDifference: "Priority queue for freshness",
        commonError: "Not removing expired items",
        optimization: "Lazy deletion of expired"
      }
    },
    {
      id: 9,
      title: "Distribute Cookies",
      difficulty: "medium",
      link: "https://leetcode.com/problems/fair-distribution-of-cookies/",
      description: "Builds on #8: Resource distribution",
      details: {
        keyDifference: "Backtracking allocation",
        commonError: "Missing distribution combinations",
        optimization: "Branch pruning"
      }
    },
    {
      id: 10,
      title: "Construct Target Array With Multiple Sums",
      difficulty: "hard",
      link: "https://leetcode.com/problems/construct-target-array-with-multiple-sums/",
      description: "Builds on #9: Reverse simulation",
      details: {
        keyDifference: "Work backwards from target",
        commonError: "Integer overflow",
        optimization: "Use modulo for large numbers"
      }
    }
  ]
};

