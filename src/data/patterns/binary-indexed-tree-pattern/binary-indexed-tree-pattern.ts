import { Pattern } from '../types'

export const binaryIndexedTreePattern: Pattern = {
  id: 11,
  title: "Binary Indexed Tree Pattern",
  description: "Master techniques for efficient range queries and updates using Binary Indexed Trees across multiple complexity levels",
  subpatterns: [
    {
      title: "Basic Range Operations",
      questions: [
        {
          id: 1,
          title: "Range Sum Query",
          difficulty: "medium",
          link: "https://leetcode.com/problems/range-sum-query-mutable/",
          description: "Base Pattern: Basic BIT",
          details: {
            keyDifference: "update() - Foundation for BIT operations",
            commonError: "Index offset",
            optimization: "Path compression"
          }
        },
        {
          id: 2,
          title: "Count of Smaller Numbers",
          difficulty: "hard",
          link: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/",
          description: "Builds on #1: Order statistics",
          details: {
            keyDifference: "count_smaller() - Relative ordering",
            commonError: "Coordinate compression",
            optimization: "Value mapping"
          }
        },
        {
          id: 3,
          title: "Create Sorted Array",
          difficulty: "hard",
          link: "https://leetcode.com/problems/create-sorted-array-through-instructions/",
          description: "Builds on #2: Dynamic ordering",
          details: {
            keyDifference: "insert() - Cost calculation for dynamic insertion",
            commonError: "Modulo arithmetic",
            optimization: "Value compression"
          }
        },
        {
          id: 4,
          title: "Range Frequency Query",
          difficulty: "medium",
          link: "https://leetcode.com/problems/range-frequency-queries/",
          description: "Builds on #3: Frequency counting",
          details: {
            keyDifference: "query() - Element counting in ranges",
            commonError: "Range boundaries",
            optimization: "Multiple BITs"
          }
        }
      ]
    },
    {
      title: "Order Statistics",
      questions: [
        {
          id: 5,
          title: "Kth Smallest Element",
          difficulty: "hard",
          link: "https://codeforces.com/problemset/problem/1354/D",
          description: "Base Pattern: Order tracking",
          details: {
            keyDifference: "find_kth() - Selection using BIT",
            commonError: "Empty sets",
            optimization: "Binary search"
          }
        },
        {
          id: 6,
          title: "Counting Inversions",
          difficulty: "hard",
          link: "https://leetcode.com/problems/reverse-pairs/",
          description: "Builds on #5: Inversion pairs",
          details: {
            keyDifference: "reversePairs() - Pair condition checking",
            commonError: "Count update timing",
            optimization: "Merge sort approach"
          }
        },
        {
          id: 7,
          title: "Previous Smaller Element",
          difficulty: "hard",
          link: "https://leetcode.com/problems/count-good-triplets-in-an-array/",
          description: "Builds on #6: Element relations",
          details: {
            keyDifference: "prev_smaller() - Position tracking for smaller elements",
            commonError: "Boundary elements",
            optimization: "Stack combination"
          }
        },
        {
          id: 8,
          title: "Next Greater Element",
          difficulty: "hard",
          link: "https://codeforces.com/problemset/problem/61/E",
          description: "Builds on #7: Forward relations",
          details: {
            keyDifference: "next_greater() - Direction change for greater elements",
            commonError: "Update order",
            optimization: "Queue combination"
          }
        }
      ]
    },
    {
      title: "2D Operations",
      questions: [
        {
          id: 9,
          title: "2D Range Sum",
          difficulty: "hard",
          link: "https://leetcode.com/problems/range-sum-query-2d-mutable/",
          description: "Base Pattern: 2D BIT",
          details: {
            keyDifference: "update_2d() - Area handling in 2D",
            commonError: "Corner updates",
            optimization: "Block updates"
          }
        },
        {
          id: 10,
          title: "Count Points in Rectangles",
          difficulty: "medium",
          link: "https://leetcode.com/problems/count-number-of-rectangles-containing-each-point/",
          description: "Builds on #9: Point counting",
          details: {
            keyDifference: "count_points() - Containment check for points",
            commonError: "Rectangle boundaries",
            optimization: "Line sweep"
          }
        },
        {
          id: 11,
          title: "2D Range Updates",
          difficulty: "hard",
          link: "https://leetcode.com/problems/range-sum-query-2d-mutable/",
          description: "Builds on #10: Area updates",
          details: {
            keyDifference: "update(), sumRegion() - 2D handling for updates and queries",
            commonError: "Index management",
            optimization: "Caching partial sums"
          }
        },
        {
          id: 12,
          title: "2D Order Statistics",
          difficulty: "hard",
          link: "https://codeforces.com/problemset/problem/785/E",
          description: "Builds on #11: 2D ordering",
          details: {
            keyDifference: "kth_2d() - Area ordering in 2D",
            commonError: "Coordinate mapping",
            optimization: "Tree compression"
          }
        }
      ]
    },
    {
      title: "Multiple BITs",
      questions: [
        {
          id: 13,
          title: "Multiple Range Sums",
          difficulty: "hard",
          link: "https://leetcode.com/problems/widest-pair-of-indices-with-equal-range-sum/",
          description: "Base Pattern: Multiple trees",
          details: {
            keyDifference: "multi_sum() - Tree coordination for multiple sums",
            commonError: "Tree sync",
            optimization: "Tree sharing"
          }
        },
        {
          id: 14,
          title: "Range Color Queries",
          difficulty: "hard",
          link: "https://codeforces.com/problemset/problem/707/D",
          description: "Builds on #13: Color tracking",
          details: {
            keyDifference: "color_query() - Color counts management",
            commonError: "Color updates",
            optimization: "Color compression"
          }
        },
        {
          id: 15,
          title: "Multiple Statistics Tracking",
          difficulty: "medium",
          link: "https://leetcode.com/problems/number-of-longest-increasing-subsequence/",
          description: "Builds on #14: Multi-stat",
          details: {
            keyDifference: "findNumberOfLIS() - Length and count tracking",
            commonError: "Update order",
            optimization: "Dynamic programming approach"
          }
        },
        {
          id: 16,
          title: "Multiple Update Types",
          difficulty: "hard",
          link: "https://leetcode.com/problems/stamping-the-grid/",
          description: "Builds on #15: Update types",
          details: {
            keyDifference: "multi_update() - Type handling for updates",
            commonError: "Type conflicts",
            optimization: "Type batching"
          }
        }
      ]
    },
    {
      title: "Advanced Applications",
      questions: [
        {
          id: 17,
          title: "Dynamic Median Finding",
          difficulty: "hard",
          link: "https://leetcode.com/problems/sliding-window-median/",
          description: "Base Pattern: Order maintenance",
          details: {
            keyDifference: "find_median() - Middle element tracking",
            commonError: "Window slides",
            optimization: "Dual BIT"
          }
        },
        {
          id: 18,
          title: "Range LIS",
          difficulty: "medium",
          link: "https://leetcode.com/problems/number-of-longest-increasing-subsequence/",
          description: "Builds on #17: Sequence tracking",
          details: {
            keyDifference: "find_lis() - Length tracking for LIS",
            commonError: "Count update",
            optimization: "Length compression"
          }
        },
        {
          id: 19,
          title: "Dynamic Convex Hull",
          difficulty: "hard",
          link: "https://codeforces.com/problemset/problem/319/C",
          description: "Builds on #18: Hull maintenance",
          details: {
            keyDifference: "update_hull() - Point tracking for convex hull",
            commonError: "Hull updates",
            optimization: "Point filtering"
          }
        },
        {
          id: 20,
          title: "Range Optimization",
          difficulty: "hard",
          link: "https://leetcode.com/problems/longest-increasing-subsequence-ii/",
          description: "Builds on #19: Multi-parameter",
          details: {
            keyDifference: "optimize_range() - Parameter balance for optimization",
            commonError: "Constraint handling",
            optimization: "Parameter pruning"
          }
        }
      ]
    }
  ],
  summary: {
    progressionElements: [
      "Basic range operations → Advanced multi-parameter optimizations",
      "1D operations → 2D and higher-dimensional operations",
      "Single BIT → Multiple coordinated BITs",
      "Static structures → Dynamic and persistent structures"
    ],
    coreTechniques: [
      "Binary Indexed Tree construction and querying",
      "Coordinate compression",
      "2D Binary Indexed Trees",
      "Multiple BITs for complex queries",
      "Advanced applications (median finding, LIS, convex hull)"
    ],
    implementationGuidelines: [
      {
        title: "Basic Binary Indexed Tree Template",
        code: `
class BinaryIndexedTree:
    def __init__(self, n):
        self.n = n
        self.tree = [0] * (n + 1)
    
    def update(self, i, delta):
        while i <= self.n:
            self.tree[i] += delta
            i += i & (-i)
    
    def query(self, i):
        sum = 0
        while i > 0:
            sum += self.tree[i]
            i -= i & (-i)
        return sum
    
    def range_query(self, left, right):
        return self.query(right) - self.query(left - 1)
        `
      },
      {
        title: "2D Binary Indexed Tree Template",
        code: `
class BinaryIndexedTree2D:
    def __init__(self, n, m):
        self.n = n
        self.m = m
        self.tree = [[0] * (m + 1) for _ in range(n + 1)]
    
    def update(self, x, y, delta):
        i = x
        while i <= self.n:
            j = y
            while j <= self.m:
                self.tree[i][j] += delta
                j += j & (-j)
            i += i & (-i)
    
    def query(self, x, y):
        sum = 0
        i = x
        while i > 0:
            j = y
            while j > 0:
                sum += self.tree[i][j]
                j -= j & (-j)
            i -= i & (-i)
        return sum
    
    def range_query(self, x1, y1, x2, y2):
        return (self.query(x2, y2) - self.query(x1-1, y2) - 
                self.query(x2, y1-1) + self.query(x1-1, y1-1))
        `
      }
    ],
    testingStrategy: [
      "Test with various array sizes and query types",
      "Include edge cases (single element, all same elements)",
      "Verify correctness of range updates and queries",
      "Test with large number of updates and queries",
      "Benchmark performance with different BIT implementations"
    ],
    commonPitfalls: [
      "Using 0-based indexing instead of 1-based indexing",
      "Forgetting to update all affected positions in multi-dimensional BITs",
      "Integer overflow in cumulative frequency calculations",
      "Incorrect range calculations in query operations",
      "Not handling edge cases for empty ranges or out-of-bounds queries"
    ]
  }
}

