import { SubPattern } from '@/types';

export const systemDesignSimulation: SubPattern = {
  title: "System Design Simulation",
  questions: [
    {
      id: 16,
      title: "Design Parking System",
      difficulty: "easy",
      link: "https://leetcode.com/problems/design-parking-system/",
      description: "Base Pattern: Counter management",
      details: {
        keyDifference: "Counter management",
        commonError: "Not checking capacity",
        optimization: "Use array instead of map"
      }
    },
    {
      id: 17,
      title: "Design Hit Counter",
      difficulty: "medium",
      link: "https://leetcode.com/problems/design-hit-counter/",
      description: "Builds on #16: Time window tracking",
      details: {
        keyDifference: "Circular buffer concept",
        commonError: "Stale data retention",
        optimization: "Fixed size array reuse"
      }
    },
    {
      id: 18,
      title: "Design File System",
      difficulty: "medium",
      link: "https://leetcode.com/problems/design-file-system/",
      description: "Builds on #17: Path-based operations",
      details: {
        keyDifference: "Trie-like structure",
        commonError: "Missing parent validation",
        optimization: "Path component caching"
      }
    },
    {
      id: 19,
      title: "Design a Food Rating System",
      difficulty: "medium",
      link: "https://leetcode.com/problems/design-a-food-rating-system/",
      description: "Builds on #18: Multi-index lookup",
      details: {
        keyDifference: "Sorted maintenance",
        commonError: "Inconsistent state updates",
        optimization: "Use TreeMap/SortedSet"
      }
    },
    {
      id: 20,
      title: "Design Movie Rental System",
      difficulty: "hard",
      link: "https://leetcode.com/problems/design-movie-rental-system/",
      description: "Builds on #19: Complex state machine",
      details: {
        keyDifference: "Multiple sorted views",
        commonError: "Search optimization missing",
        optimization: "Maintain multiple indices"
      }
    }
  ]
};

