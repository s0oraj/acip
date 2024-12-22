import { Pattern } from '../types';

export const linearSortingPattern: Pattern = {
  id: 4,
  title: "Linear Sorting Pattern",
  description: "Master linear-time sorting techniques and their applications in solving complex problems.",
  questions: [
    {
      id: 1,
      title: "Height Checker",
      difficulty: "easy",
      link: "https://leetcode.com/problems/height-checker/",
      description: "Base Pattern: Fixed-range counting. Key Operation: count[height] += 1",
      details: {
        keyDifference: "Fixed-range counting",
        commonError: "Not handling input range",
        optimization: "Use array vs map based on range"
      }
    },
    {
      id: 2,
      title: "Sort Colors",
      difficulty: "medium",
      link: "https://leetcode.com/problems/sort-colors/",
      description: "Builds on #1: Three-pointer technique. Key Difference: One-pass partitioning",
      details: {
        keyDifference: "One-pass partitioning",
        commonError: "Wrong pointer movement",
        optimization: "In-place swaps"
      }
    },
    {
      id: 3,
      title: "Relative Sort Array",
      difficulty: "easy",
      link: "https://leetcode.com/problems/relative-sort-array/",
      description: "Builds on #2: Custom order counting",
      details: {
        keyDifference: "Reference array ordering",
        commonError: "Missing elements handling",
        optimization: "Use map for large ranges"
      }
    },
    {
      id: 4,
      title: "Sort Array by Increasing Frequency",
      difficulty: "easy",
      link: "https://leetcode.com/problems/sort-array-by-increasing-frequency/",
      description: "Builds on #3: Two-level sorting",
      details: {
        keyDifference: "Frequency as primary key",
        commonError: "Tiebreaker handling",
        optimization: "Bucket sort frequencies"
      }
    },
    {
      id: 5,
      title: "H-Index",
      difficulty: "medium",
      link: "https://leetcode.com/problems/h-index/",
      description: "Builds on #4: Citation grouping",
      details: {
        keyDifference: "Cumulative counting",
        commonError: "Off-by-one in counting",
        optimization: "Binary search possible"
      }
    },
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
    },
    {
      id: 11,
      title: "Sort Array By Parity",
      difficulty: "easy",
      link: "https://leetcode.com/problems/sort-array-by-parity/",
      description: "Base Pattern: Two-way partition",
      details: {
        keyDifference: "Two-way partition",
        commonError: "Unnecessary swaps",
        optimization: "Two-pointer approach"
      }
    },
    {
      id: 12,
      title: "Sort Array by Parity II",
      difficulty: "easy",
      link: "https://leetcode.com/problems/sort-array-by-parity-ii/",
      description: "Builds on #11: Alternating placement",
      details: {
        keyDifference: "Fixed position constraints",
        commonError: "Index synchronization",
        optimization: "Two independent pointers"
      }
    },
    {
      id: 13,
      title: "Array With Elements Not Equal to Average of Neighbors",
      difficulty: "medium",
      link: "https://leetcode.com/problems/array-with-elements-not-equal-to-average-of-neighbors/",
      description: "Builds on #12: Three-element comparison",
      details: {
        keyDifference: "Wiggle sort principle",
        commonError: "Not handling duplicates",
        optimization: "Sort once, then interleave"
      }
    },
    {
      id: 14,
      title: "Custom Sort String",
      difficulty: "medium",
      link: "https://leetcode.com/problems/custom-sort-string/",
      description: "Builds on #13: Priority mapping",
      details: {
        keyDifference: "Character order dictionary",
        commonError: "Missing characters",
        optimization: "Count array vs sort"
      }
    },
    {
      id: 15,
      title: "Largest Number",
      difficulty: "medium",
      link: "https://leetcode.com/problems/largest-number/",
      description: "Builds on #14: String comparison",
      details: {
        keyDifference: "Custom concatenation comparison",
        commonError: "Leading zeros",
        optimization: "Cache string conversions"
      }
    },
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
    },
  ],
  summary: {
    progressionElements: [
      "Fixed-range counting → Variable-range bucketing",
      "Single-pass partitioning → Multi-criteria sorting",
      "In-place modifications → Auxiliary data structures",
      "Simple frequency counting → Complex ordering rules"
    ],
    coreTechniques: [
      "Counting sort",
      "Bucket sort",
      "Modified sorting rules",
      "Difference arrays",
      "Custom comparison functions"
    ],
    implementationGuidelines: [
      {
        title: "Basic Counting Sort Template",
        code: `
def counting_sort(arr, max_val):
    count = [0] * (max_val + 1)
    # Count frequencies
    for num in arr:
        count[num] += 1
    
    # Rebuild array
    idx = 0
    for i in range(max_val + 1):
        while count[i] > 0:
            arr[idx] = i
            idx += 1
            count[i] -= 1
    return arr
        `
      },
      {
        title: "Bucket Sort Template",
        code: `
def bucket_sort(arr, bucket_size=5):
    if not arr:
        return arr
    
    # Create buckets
    min_val, max_val = min(arr), max(arr)
    bucket_count = (max_val - min_val) // bucket_size + 1
    buckets = [[] for _ in range(bucket_count)]
    
    # Distribute elements
    for num in arr:
        bucket_idx = (num - min_val) // bucket_size
        buckets[bucket_idx].append(num)
    
    # Sort buckets and combine
    result = []
    for bucket in buckets:
        bucket.sort()  # Can use counting sort here
        result.extend(bucket)
    return result
        `
      }
    ],
    testingStrategy: [
      "Test with various input ranges and distributions",
      "Check edge cases (empty array, single element, all same elements)",
      "Verify stability requirements",
      "Test performance with large inputs",
      "Validate custom sorting rules and constraints"
    ]
  }
};
