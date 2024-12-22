import { Pattern } from '../types';

export const countingPattern: Pattern = {
  id: 1,
  title: "Counting Pattern",
  description: "Master frequency counting and statistical patterns",
  questions: [
    {
      id: 1,
      title: "Count Elements with Maximum Frequency",
      difficulty: "easy",
      link: "https://leetcode.com/problems/count-elements-with-maximum-frequency/",
      description: "Base Pattern: Basic frequency map",
      details: {
        keyDifference: "Base Pattern: Basic frequency map",
        commonError: "Not initializing with dict.get()",
        optimization: "Single pass through array"
      }
    },
    {
      id: 2,
      title: "Most Frequent Even Element",
      difficulty: "easy",
      link: "https://leetcode.com/problems/most-frequent-even-element/",
      description: "Builds on #1: Adds filtering condition before counting",
      details: {
        keyDifference: "Filtering condition before counting",
        commonError: "Not handling case when no even elements exist",
        optimization: "Combine filtering and counting in one pass"
      }
    },
    {
      id: 3,
      title: "Maximum Equal Frequency",
      difficulty: "hard",
      link: "https://leetcode.com/problems/maximum-equal-frequency/",
      description: "Builds on #2: Tracks frequency of frequencies",
      details: {
        keyDifference: "Tracks frequency of frequencies",
        commonError: "Mishandling edge cases (e.g., all elements with frequency 1)",
        optimization: "Use running statistics to avoid recalculating frequencies"
      }
    },
    {
      id: 4,
      title: "Number of Zero-Filled Subarrays",
      difficulty: "medium",
      link: "https://leetcode.com/problems/number-of-zero-filled-subarrays/",
      description: "New Concept: Running window count",
      details: {
        keyDifference: "Running window count for subarrays",
        commonError: "Incorrect calculation of subarray count",
        optimization: "Use mathematical formula instead of nested loops"
      }
    },
    {
      id: 5,
      title: "Find the K-Beauty of a Number",
      difficulty: "easy",
      link: "https://leetcode.com/problems/find-the-k-beauty-of-a-number/",
      description: "Builds on #4: Fixed-size window counting",
      details: {
        keyDifference: "Fixed-size window counting",
        commonError: "Not handling leading zeros correctly",
        optimization: "Use sliding window technique"
      }
    },
    {
      id: 6,
      title: "Count Number of Pairs With Absolute Difference K",
      difficulty: "easy",
      link: "https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/",
      description: "Builds on #1: Uses frequency map for pair finding",
      details: {
        keyDifference: "Uses frequency map for pair finding",
        commonError: "Double counting pairs",
        optimization: "Single pass with frequency map"
      }
    },
    {
      id: 7,
      title: "Count Largest Group",
      difficulty: "easy",
      link: "https://leetcode.com/problems/count-largest-group/",
      description: "Builds on #6: Groups by computed property",
      details: {
        keyDifference: "Groups by computed property",
        commonError: "Inefficient computation of digit sum",
        optimization: "Precompute digit sums or use running sum"
      }
    },
    {
      id: 8,
      title: "Find Players With Zero or One Losses",
      difficulty: "medium",
      link: "https://leetcode.com/problems/find-players-with-zero-or-one-losses/",
      description: "Builds on #7: Multiple frequency maps",
      details: {
        keyDifference: "Multiple frequency maps",
        commonError: "Not considering players who only won",
        optimization: "Use a single map with custom data structure"
      }
    },
    {
      id: 9,
      title: "Maximum Number of Pairs in Array",
      difficulty: "easy",
      link: "https://leetcode.com/problems/maximum-number-of-pairs-in-array/",
      description: "Builds on #8: Frequency-based pairing",
      details: {
        keyDifference: "Frequency-based pairing",
        commonError: "Incorrect handling of odd frequencies",
        optimization: "Use bitwise operations for counting"
      }
    },
    {
      id: 10,
      title: "Count Good Triplets",
      difficulty: "easy",
      link: "https://leetcode.com/problems/count-good-triplets/",
      description: "Builds on #9: Triple condition checking",
      details: {
        keyDifference: "Triple condition checking",
        commonError: "Inefficient nested loops",
        optimization: "Use sorting and binary search for range conditions"
      }
    },
    {
      id: 11,
      title: "Next Greater Numerically Balanced Number",
      difficulty: "medium",
      link: "https://leetcode.com/problems/next-greater-numerically-balanced-number/",
      description: "Builds on #10: Complex frequency validation",
      details: {
        keyDifference: "Complex frequency validation",
        commonError: "Inefficient checking of balanced property",
        optimization: "Precompute balanced numbers or use bit manipulation"
      }
    },
    {
      id: 12,
      title: "Partition Array Such That Maximum Difference Is K",
      difficulty: "medium",
      link: "https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k/",
      description: "Builds on #11: Range-based grouping",
      details: {
        keyDifference: "Range-based grouping",
        commonError: "Incorrect handling of edge cases",
        optimization: "Use sorting and greedy approach"
      }
    },
    {
      id: 13,
      title: "Maximize Number of Subsequences in a String",
      difficulty: "medium",
      link: "https://leetcode.com/problems/maximize-number-of-subsequences-in-a-string/",
      description: "Builds on #12: State-based counting",
      details: {
        keyDifference: "State-based counting for subsequences",
        commonError: "Not considering optimal insertion positions",
        optimization: "Use dynamic programming or greedy approach"
      }
    },
    {
      id: 14,
      title: "Minimum Number of Frogs Croaking",
      difficulty: "medium",
      link: "https://leetcode.com/problems/minimum-number-of-frogs-croaking/",
      description: "Builds on #13: Multiple state tracking",
      details: {
        keyDifference: "Multiple state tracking",
        commonError: "Not handling invalid sequences",
        optimization: "Use a single pass with state counters"
      }
    },
    {
      id: 15,
      title: "Find Longest Awesome Substring",
      difficulty: "hard",
      link: "https://leetcode.com/problems/find-longest-awesome-substring/",
      description: "Builds on #14: Balanced frequency checking",
      details: {
        keyDifference: "Balanced frequency checking for palindromes",
        commonError: "Inefficient substring generation",
        optimization: "Use bit manipulation and prefix XOR"
      }
    },
    {
      id: 16,
      title: "K Divisible Elements Subarrays",
      difficulty: "medium",
      link: "https://leetcode.com/problems/k-divisible-elements-subarrays/",
      description: "Builds on #15: Pattern matching with frequencies",
      details: {
        keyDifference: "Pattern matching with frequencies",
        commonError: "Duplicate counting of subarrays",
        optimization: "Use rolling hash or trie for efficient comparison"
      }
    },
    {
      id: 17,
      title: "Maximum Population Year",
      difficulty: "easy",
      link: "https://leetcode.com/problems/maximum-population-year/",
      description: "Builds on #16: Time-based frequency counting",
      details: {
        keyDifference: "Time-based frequency counting",
        commonError: "Year boundary mishandling",
        optimization: "Use line sweep algorithm or difference array"
      }
    },
    {
      id: 18,
      title: "Population Range Query",
      difficulty: "hard",
      link: "https://leetcode.com/problems/population-range-query/",
      description: "Builds on #17: Range-based population tracking",
      details: {
        keyDifference: "Range-based population tracking",
        commonError: "Range overlap errors",
        optimization: "Use prefix sum array for efficient queries"
      }
    },
    {
      id: 19,
      title: "Number of Zero-Filled Subarrays",
      difficulty: "medium",
      link: "https://leetcode.com/problems/number-of-zero-filled-subarrays/",
      description: "Builds on #18: Statistical threshold counting",
      details: {
        keyDifference: "Statistical threshold counting",
        commonError: "Incorrect subarray count calculation",
        optimization: "Use mathematical formula for consecutive zeros"
      }
    },
    {
      id: 20,
      title: "Number of Smooth Descent Periods",
      difficulty: "medium",
      link: "https://leetcode.com/problems/number-of-smooth-descent-periods/",
      description: "Builds on #19: Track growth patterns",
      details: {
        keyDifference: "Track growth patterns",
        commonError: "Incorrect handling of non-consecutive descents",
        optimization: "Use sliding window technique"
      }
    },
  ],
  summary: {
    progressionElements: [
      "Time-based counting → Range queries",
      "Single point → Range operations",
      "Static counting → Dynamic tracking",
      "Basic counting → Statistical measures"
    ],
    coreTechniques: [
      "Line sweep algorithm",
      "Prefix & difference arrays",
      "Running statistics",
      "Binary search for ranges",
      "Sliding window for trends"
    ],
    implementationGuidelines: [
      {
        title: "Range Operations",
        code: `# Use difference array for efficient updates
def update_range(start, end, value):
    diff[start] += value
    diff[end + 1] -= value`,
      },
      {
        title: "Population Queries",
        code: `# Efficient range sum using prefix array
def query_range(start, end):
    return prefix_sum[end] - prefix_sum[start - 1]`,
      }
    ],
    testingStrategy: [
      "Test boundaries (year ranges)",
      "Test overlapping periods",
      "Test pattern sequences",
      "Test large datasets",
      "Test update consistency"
    ]
  }
};

