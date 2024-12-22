import { SubPattern } from '@/types';

export const populationTrackingPattern: SubPattern = {
  title: "Population Tracking",
  questions: [
    {
      id: 16,
      title: "Number of Recent Calls",
      difficulty: "medium",
      link: "https://leetcode.com/problems/number-of-recent-calls/",
      description: "Builds on #15: Uses queue for tracking",
      details: {
        keyDifference: "Using queue for recent calls",
        commonError: "Not handling edge cases for time",
        optimization: "Use deque for efficient pop"
      }
    },
    {
      id: 17,
      title: "Find All Anagrams in a String",
      difficulty: "medium",
      link: "https://leetcode.com/problems/find-all-anagrams-in-a-string/",
      description: "Builds on #16: Uses frequency map for anagrams",
      details: {
        keyDifference: "Using sliding window for anagrams",
        commonError: "Not handling character counts correctly",
        optimization: "Use hashmap for frequency count"
      }
    },
    {
      id: 18,
      title: "Minimum Window Substring",
      difficulty: "hard",
      link: "https://leetcode.com/problems/minimum-window-substring/",
      description: "Builds on #17: Uses sliding window for minimum",
      details: {
        keyDifference: "Using two pointers for minimum",
        commonError: "Not handling edge cases for empty strings",
        optimization: "Use hashmap for character count"
      }
    },
    {
      id: 19,
      title: "Longest Repeating Character Replacement",
      difficulty: "medium",
      link: "https://leetcode.com/problems/longest-repeating-character-replacement/",
      description: "Builds on #18: Uses sliding window for replacement",
      details: {
        keyDifference: "Using frequency map for replacement",
        commonError: "Not handling edge cases for k",
        optimization: "Use hashmap for frequency count"
      }
    },
    {
      id: 20,
      title: "Subarrays with K Different Integers",
      difficulty: "hard",
      link: "https://leetcode.com/problems/subarrays-with-k-different-integers/",
      description: "Builds on #19: Uses sliding window for counting",
      details: {
        keyDifference: "Using two pointers for counting",
        commonError: "Not handling edge cases for k",
        optimization: "Use hashmap for frequency count"
      }
    }
  ]
};
