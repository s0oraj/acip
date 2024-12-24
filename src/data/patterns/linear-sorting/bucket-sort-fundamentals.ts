import { SubPattern } from '@/types';

export const bucketSortFundamentalsPattern: SubPattern = {
  title: "Bucket Sort Fundamentals",
  questions: [
    {
      id: 6,
      title: "Contains Duplicate III",
      difficulty: "hard",
      link: "https://leetcode.com/problems/contains-duplicate-iii/",
      description: "Base Pattern: Value-based buckets",
      details: {
        keyDifference: "Value-based buckets",
        commonError: "Bucket size calculation",
        optimization: "Sliding window of buckets"
      }
    },
    {
      id: 7,
      title: "Top K Frequent Elements",
      difficulty: "medium",
      link: "https://leetcode.com/problems/top-k-frequent-elements/",
      description: "Builds on #6: Frequency bucketing",
      details: {
        keyDifference: "Reverse mapping counts",
        commonError: "Not handling equal frequencies",
        optimization: "No need to sort all frequencies"
      }
    },
    {
      id: 8,
      title: "Sort Characters By Frequency",
      difficulty: "medium",
      link: "https://leetcode.com/problems/sort-characters-by-frequency/",
      description: "Builds on #7: Character buckets",
      details: {
        keyDifference: "String reconstruction",
        commonError: "Character ordering within frequency",
        optimization: "Use StringBuilder"
      }
    },
    {
      id: 9,
      title: "Maximum Gap",
      difficulty: "hard",
      link: "https://leetcode.com/problems/maximum-gap/",
      description: "Builds on #8: Pigeonhole principle",
      details: {
        keyDifference: "Bucket size optimization",
        commonError: "Empty bucket handling",
        optimization: "Only track min/max per bucket"
      }
    },
    {
      id: 10,
      title: "Find Median from Data Stream",
      difficulty: "hard",
      link: "https://leetcode.com/problems/find-median-from-data-stream/",
      description: "Builds on #9: Dynamic bucket management",
      details: {
        keyDifference: "Continuous rebalancing",
        commonError: "Median position tracking",
        optimization: "Two heap approach"
      }
    }
  ]
};

