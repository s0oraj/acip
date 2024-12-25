import { Pattern } from '../types'

export const linearSortingPattern: Pattern = {
  id: 4,
  title: "Linear Sorting Pattern",
  description: "Master linear sorting techniques including counting sort, bucket sort, and radix sort across multiple complexity levels",
  subpatterns: [
    {
      title: "Counting Sort with Modified Rules",
      questions: [
        {
          id: 1,
          title: "Basic Counting Sort",
          difficulty: "easy",
          link: "https://leetcode.com/problems/sort-an-array/",
          description: "Base Pattern: Pure counting sort",
          details: {
            keyDifference: "Array counting",
            commonError: "Range estimation",
            optimization: "In-place counting"
          }
        },
        {
          id: 2,
          title: "Sort Array By Parity (Counting Approach)",
          difficulty: "easy",
          link: "https://leetcode.com/problems/sort-array-by-parity/",
          description: "Builds on #1: Two-bucket counting",
          details: {
            keyDifference: "Even/odd partitioning",
            commonError: "Order preservation",
            optimization: "Single pass counting"
          }
        },
        {
          id: 3,
          title: "Sort Array by Parity II",
          difficulty: "easy",
          link: "https://leetcode.com/problems/sort-array-by-parity-ii/",
          description: "Builds on #2: Alternating placement",
          details: {
            keyDifference: "Index alternation",
            commonError: "Array indexing",
            optimization: "Two-pointer traversal"
          }
        },
        {
          id: 4,
          title: "Wiggle Sort",
          difficulty: "medium",
          link: "https://leetcode.com/problems/wiggle-sort/",
          description: "Builds on #3: Wave pattern sorting",
          details: {
            keyDifference: "Adjacent comparison",
            commonError: "Pattern violation",
            optimization: "In-place swapping"
          }
        },
        {
          id: 5,
          title: "Custom Sort String",
          difficulty: "medium",
          link: "https://leetcode.com/problems/custom-sort-string/",
          description: "Builds on #4: Custom ordering",
          details: {
            keyDifference: "Order mapping",
            commonError: "Missing characters",
            optimization: "Frequency table"
          }
        }
      ]
    },
    {
      title: "Advanced Counting Sort Applications",
      questions: [
        {
          id: 6,
          title: "Range Addition",
          difficulty: "medium",
          link: "https://leetcode.com/problems/range-addition/",
          description: "Builds on #5: Range updates",
          details: {
            keyDifference: "Boundary marking",
            commonError: "End point handling",
            optimization: "Prefix sum array"
          }
        },
        {
          id: 7,
          title: "Car Fleet (Counting Approach)",
          difficulty: "medium",
          link: "https://leetcode.com/problems/car-fleet/",
          description: "Builds on #6: Position tracking",
          details: {
            keyDifference: "Speed comparison",
            commonError: "Float precision",
            optimization: "Reverse iteration"
          }
        },
        {
          id: 8,
          title: "Maximum Height Cuboids",
          difficulty: "hard",
          link: "https://leetcode.com/problems/maximum-height-by-stacking-cuboids/",
          description: "Builds on #7: Multi-criteria sorting",
          details: {
            keyDifference: "3D constraints",
            commonError: "Invalid rotation checks",
            optimization: "Pre-sort dimensions"
          }
        }
      ]
    },
    {
      title: "Bucket Sort Foundations",
      questions: [
        {
          id: 9,
          title: "Basic Bucket Sort",
          difficulty: "easy",
          link: "https://leetcode.com/problems/sort-an-array/",
          description: "Base Pattern: Range partitioning",
          details: {
            keyDifference: "Bucket distribution",
            commonError: "Bucket sizing",
            optimization: "Dynamic ranges"
          }
        },
        {
          id: 10,
          title: "Sort Array By Parity (Bucket Approach)",
          difficulty: "easy",
          link: "https://leetcode.com/problems/sort-array-by-parity/",
          description: "Builds on #9: Two-bucket system",
          details: {
            keyDifference: "Parity buckets",
            commonError: "Memory allocation",
            optimization: "Direct placement"
          }
        },
        {
          id: 11,
          title: "Frequency Sort",
          difficulty: "easy",
          link: "https://leetcode.com/problems/sort-array-by-increasing-frequency/",
          description: "Builds on #10: Frequency buckets",
          details: {
            keyDifference: "Count sorting",
            commonError: "Equal frequencies",
            optimization: "Map reuse"
          }
        }
      ]
    },
    {
      title: "Advanced Bucket Applications",
      questions: [
        {
          id: 12,
          title: "Maximum Gap",
          difficulty: "hard",
          link: "https://leetcode.com/problems/maximum-gap/",
          description: "Builds on #11: Gap analysis",
          details: {
            keyDifference: "Bucket gaps",
            commonError: "Empty buckets",
            optimization: "Pigeonhole principle"
          }
        },
        {
          id: 13,
          title: "Contains Duplicate III",
          difficulty: "medium",
          link: "https://leetcode.com/problems/contains-duplicate-iii/",
          description: "Builds on #12: Sliding window buckets",
          details: {
            keyDifference: "Value range checks",
            commonError: "Bucket overflow",
            optimization: "Rolling window updates"
          }
        },
        {
          id: 14,
          title: "Find Median from Data Stream",
          difficulty: "hard",
          link: "https://leetcode.com/problems/find-median-from-data-stream/",
          description: "Builds on #13: Dynamic medians",
          details: {
            keyDifference: "Heap balancing",
            commonError: "Size tracking",
            optimization: "Lazy deletion"
          }
        }
      ]
    },
    {
      title: "Radix Sort Implementations",
      questions: [
        {
          id: 15,
          title: "Basic Radix Sort",
          difficulty: "easy",
          link: "https://leetcode.com/problems/sort-an-array/",
          description: "Base Pattern: Digit sorting",
          details: {
            keyDifference: "Place values",
            commonError: "Negative handling",
            optimization: "Bit operations"
          }
        },
        {
          id: 16,
          title: "Largest Number",
          difficulty: "medium",
          link: "https://leetcode.com/problems/largest-number/",
          description: "Builds on #15: String comparison",
          details: {
            keyDifference: "Custom ordering",
            commonError: "Leading zeros",
            optimization: "String concatenation"
          }
        },
        {
          id: 17,
          title: "IP Address Sorting",
          difficulty: "medium",
          link: "https://www.spoj.com/problems/IPADDR/",
          description: "Builds on #16: Octet parsing",
          details: {
            keyDifference: "Multi-segment",
            commonError: "Format validation",
            optimization: "Byte comparison"
          }
        }
      ]
    },
    {
      title: "Advanced Radix Applications",
      questions: [
        {
          id: 18,
          title: "Sort Array by Power Value",
          difficulty: "medium",
          link: "https://leetcode.com/problems/sort-integers-by-the-power-value/",
          description: "Builds on #17: Custom key sorting",
          details: {
            keyDifference: "Power calculation",
            commonError: "Recursion depth",
            optimization: "Memoization table"
          }
        },
        {
          id: 19,
          title: "Numbers With Same Consecutive Differences",
          difficulty: "medium",
          link: "https://leetcode.com/problems/numbers-with-same-consecutive-differences/",
          description: "Builds on #18: Digit construction",
          details: {
            keyDifference: "Difference check",
            commonError: "Leading zeros",
            optimization: "BFS traversal"
          }
        },
        {
          id: 20,
          title: "Maximum Binary String",
          difficulty: "medium",
          link: "https://leetcode.com/problems/maximum-binary-string-after-change/",
          description: "Builds on #19: Binary operations",
          details: {
            keyDifference: "Pattern matching",
            commonError: "Zero handling",
            optimization: "Greedy tracking"
          }
        }
      ]
    }
  ],
  summary: {
    progressionElements: [
      "Basic counting → Advanced counting applications",
      "Simple bucket sort → Complex bucket strategies",
      "Digit-based sorting → Custom radix applications",
      "Single-criteria sorting → Multi-dimensional sorting"
    ],
    coreTechniques: [
      "Counting sort algorithm",
      "Bucket sort variations",
      "Radix sort implementations",
      "Custom comparison functions",
      "Range and prefix sum techniques"
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
      },
      {
        title: "Modified Rules Template",
        code: `
def custom_sort(arr, rule_func):
    n = len(arr)
    for i in range(n):
        for j in range(n-1):
            if not rule_func(arr[j], arr[j+1]):
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

# Example rule function
def compare_by_parity(a, b):
    return a % 2 <= b % 2  # Even numbers before odd
        `
      }
    ],
    testingStrategy: [
      "Test with various input sizes",
      "Include edge cases (empty arrays, single elements)",
      "Test with different value ranges",
      "Verify stability in relevant cases",
      "Check performance with large inputs"
    ],
    commonPitfalls: [
      "Integer overflow in bucket calculations",
      "Not handling duplicate elements correctly",
      "Wrong bucket size leading to O(n²) behavior",
      "Memory leaks in dynamic bucket allocation",
      "Unstable sorting when order matters"
    ]
  }
}

