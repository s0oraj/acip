import { SubPattern } from '@/types';

export const advancedReconstruction: SubPattern = {
  title: "Advanced Reconstruction",
  questions: [
    {
      id: 17,
      title: "Check if String Can Break Another String",
      difficulty: "medium",
      link: "https://leetcode.com/problems/check-if-string-can-break-another-string/",
      description: "Base Pattern: Character rearrangement",
      details: {
        keyDifference: "Character rearrangement",
        commonError: "Wrong comparison order",
        optimization: "Count sort"
      }
    },
    {
      id: 18,
      title: "Maximum Number of Eaten Apples",
      difficulty: "medium",
      link: "https://leetcode.com/problems/maximum-number-of-eaten-apples/",
      description: "Builds on #17: Timeline reconstruction",
      details: {
        keyDifference: "Expiration tracking",
        commonError: "Priority management",
        optimization: "Heap cleanup"
      }
    },
    {
      id: 19,
      title: "Maximum Value After Insertion",
      difficulty: "medium",
      link: "https://leetcode.com/problems/maximum-value-after-insertion/",
      description: "Builds on #18: Optimal insertion",
      details: {
        keyDifference: "Sign handling",
        commonError: "Leading zeros",
        optimization: "Early termination"
      }
    },
    {
      id: 20,
      title: "Maximum Number of Groups Getting Fresh Donuts",
      difficulty: "hard",
      link: "https://leetcode.com/problems/maximum-number-of-groups-getting-fresh-donuts/",
      description: "Builds on #19: Group optimization",
      details: {
        keyDifference: "Modulo grouping",
        commonError: "State encoding",
        optimization: "State compression"
      }
    }
  ]
};

