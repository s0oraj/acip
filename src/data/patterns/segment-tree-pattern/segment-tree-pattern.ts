import { Pattern } from '../types'

export const segmentTreePattern: Pattern = {
  id: 10,
  title: "Segment Tree Pattern",
  description: "Master techniques for efficient range queries and updates across multiple complexity levels",
  subpatterns: [
    {
      title: "Basic Range Queries",
      questions: [
        {
          id: 1,
          title: "Range Sum Query - Mutable",
          difficulty: "medium",
          link: "https://leetcode.com/problems/range-sum-query-mutable/",
          description: "Base Pattern: Basic segment tree",
          details: {
            keyDifference: "build_tree() - Foundation for segment tree",
            commonError: "Index handling",
            optimization: "Node caching"
          }
        },
        {
          id: 2,
          title: "Range Maximum Query",
          difficulty: "medium",
          link: "https://leetcode.com/problems/maximum-binary-tree/",
          description: "Builds on #1: Maximum instead of sum",
          details: {
            keyDifference: "construct() - Comparison logic for maximum",
            commonError: "Recursive boundaries",
            optimization: "Stack-based approach"
          }
        },
        {
          id: 3,
          title: "Range Minimum Query",
          difficulty: "hard",
          link: "https://leetcode.com/problems/delivering-boxes-from-storage-to-ports/",
          description: "Builds on #2: Minimum adaptation",
          details: {
            keyDifference: "min_query() - Comparison inversion for minimum",
            commonError: "Trip calculation",
            optimization: "Dynamic programming"
          }
        },
        {
          id: 4,
          title: "Range XOR Query",
          difficulty: "medium",
          link: "https://leetcode.com/problems/xor-queries-of-a-subarray/",
          description: "Builds on #1: XOR operation",
          details: {
            keyDifference: "xor_query() - Bitwise handling for XOR",
            commonError: "XOR properties",
            optimization: "Bit manipulation"
          }
        }
      ]
    },
    {
      title: "Lazy Propagation",
      questions: [
        {
          id: 5,
          title: "Range Update Operation",
          difficulty: "medium",
          link: "https://leetcode.com/problems/range-addition/",
          description: "Base Pattern: Lazy propagation",
          details: {
            keyDifference: "lazy_update() - Deferred updates",
            commonError: "Propagation timing",
            optimization: "Batch updates"
          }
        },
        {
          id: 6,
          title: "Range Addition Query",
          difficulty: "medium",
          link: "https://leetcode.com/problems/my-calendar-ii/",
          description: "Builds on #5: Booking system",
          details: {
            keyDifference: "add_range() - Overlap handling",
            commonError: "Boundary cases",
            optimization: "Interval merging"
          }
        },
        {
          id: 7,
          title: "Range Multiplication Query",
          difficulty: "hard",
          link: "https://codeforces.com/problemset/problem/380/C",
          description: "Builds on #6: Multiplicative updates",
          details: {
            keyDifference: "multiply_range() - Product handling",
            commonError: "Overflow handling",
            optimization: "Modulo arithmetic"
          }
        },
        {
          id: 8,
          title: "Range Set Query",
          difficulty: "hard",
          link: "https://leetcode.com/problems/my-calendar-iii/",
          description: "Builds on #7: K-booking",
          details: {
            keyDifference: "set_range() - K-overlap handling",
            commonError: "Count maintenance",
            optimization: "Event compression"
          }
        }
      ]
    },
    {
      title: "Advanced Range Operations",
      questions: [
        {
          id: 9,
          title: "Range GCD Query",
          difficulty: "hard",
          link: "https://leetcode.com/problems/count-of-range-sum/",
          description: "Base Pattern: GCD segment tree",
          details: {
            keyDifference: "countRangeSum() - GCD to range sum conversion",
            commonError: "Prefix sum handling",
            optimization: "Merge sort approach"
          }
        },
        {
          id: 10,
          title: "Range Frequency Query",
          difficulty: "medium",
          link: "https://leetcode.com/problems/range-frequency-queries/",
          description: "Builds on #9: Frequency counting",
          details: {
            keyDifference: "freq_query() - Count tracking",
            commonError: "Update propagation",
            optimization: "Compressed storage"
          }
        },
        {
          id: 11,
          title: "Range Mode Query",
          difficulty: "hard",
          link: "https://codeforces.com/problemset/problem/220/B",
          description: "Builds on #10: Mode finding",
          details: {
            keyDifference: "mode_query() - Majority element tracking",
            commonError: "Frequency updates",
            optimization: "Candidate tracking"
          }
        },
        {
          id: 12,
          title: "Range Median Query",
          difficulty: "hard",
          link: "https://leetcode.com/problems/sliding-window-median/",
          description: "Builds on #11: Order statistics",
          details: {
            keyDifference: "median_query() - Order maintenance",
            commonError: "Window updates",
            optimization: "Dual heap"
          }
        }
      ]
    },
    {
      title: "2D Operations",
      questions: [
        {
          id: 13,
          title: "2D Range Sum Query",
          difficulty: "medium",
          link: "https://leetcode.com/problems/range-sum-query-2d-immutable/",
          description: "Base Pattern: 2D segment tree",
          details: {
            keyDifference: "sum_region() - Rectangle handling",
            commonError: "Boundary indices",
            optimization: "Prefix sums"
          }
        },
        {
          id: 14,
          title: "2D Range Update Query",
          difficulty: "hard",
          link: "https://leetcode.com/problems/range-sum-query-2d-mutable/",
          description: "Builds on #13: 2D updates",
          details: {
            keyDifference: "update_region() - Area updates",
            commonError: "Propagation order",
            optimization: "Quadtree hybrid"
          }
        },
        {
          id: 15,
          title: "2D Range Maximum Query",
          difficulty: "hard",
          link: "https://codeforces.com/problemset/problem/1157/G",
          description: "Builds on #14: 2D maximum",
          details: {
            keyDifference: "max_region() - Matrix max handling",
            commonError: "Update conflicts",
            optimization: "Block decomposition"
          }
        },
        {
          id: 16,
          title: "2D Range GCD Query",
          difficulty: "hard",
          link: "https://www.spoj.com/problems/MATRIX2/",
          description: "Builds on #15: 2D GCD",
          details: {
            keyDifference: "gcd_region() - Matrix GCD handling",
            commonError: "Zero regions",
            optimization: "Sparse regions"
          }
        }
      ]
    },
    {
      title: "Persistent Operations",
      questions: [
        {
          id: 17,
          title: "Persistent Range Sum",
          difficulty: "hard",
          link: "https://codeforces.com/problemset/problem/786/B",
          description: "Base Pattern: Version control",
          details: {
            keyDifference: "persist_sum() - History tracking",
            commonError: "Version links",
            optimization: "Path copying"
          }
        },
        {
          id: 18,
          title: "Persistent Range Maximum",
          difficulty: "hard",
          link: "https://leetcode.com/problems/falling-squares/",
          description: "Builds on #17: Persistent maximum",
          details: {
            keyDifference: "fallingSquares() - Height tracking",
            commonError: "Overlap handling",
            optimization: "Coordinate compression"
          }
        },
        {
          id: 19,
          title: "Persistent Range Updates",
          difficulty: "hard",
          link: "https://leetcode.com/problems/longest-substring-of-one-repeating-character/",
          description: "Builds on #18: Update versions",
          details: {
            keyDifference: "persist_update() - Update history",
            commonError: "Version conflicts",
            optimization: "Change sets"
          }
        },
        {
          id: 20,
          title: "Persistent Multiple Operations",
          difficulty: "hard",
          link: "https://codeforces.com/problemset/problem/813/E",
          description: "Builds on #19: Multiple versioning",
          details: {
            keyDifference: "persist_multi() - Operation history",
            commonError: "Operation order",
            optimization: "Operation batching"
          }
        }
      ]
    }
  ],
  summary: {
    progressionElements: [
      "Basic range queries → Persistent multi-operation queries",
      "1D operations → 2D and higher-dimensional operations",
      "Single update types → Multiple update types and versioning",
      "Static structures → Dynamic and persistent structures"
    ],
    coreTechniques: [
      "Segment tree construction and querying",
      "Lazy propagation",
      "Persistent data structures",
      "2D segment trees",
      "Advanced range operations (GCD, frequency, mode, median)"
    ],
    implementationGuidelines: [
      {
        title: "Basic Segment Tree Template",
        code: `
class SegmentTree:
    def __init__(self, arr):
        self.n = len(arr)
        self.tree = [0] * (4 * self.n)
        self.build(arr, 0, 0, self.n - 1)
    
    def build(self, arr, node, start, end):
        if start == end:
            self.tree[node] = arr[start]
            return
        mid = (start + end) // 2
        self.build(arr, 2*node+1, start, mid)
        self.build(arr, 2*node+2, mid+1, end)
        self.tree[node] = self.tree[2*node+1] + self.tree[2*node+2]
    
    def update(self, node, start, end, index, value):
        if start == end:
            self.tree[node] = value
            return
        mid = (start + end) // 2
        if index <= mid:
            self.update(2*node+1, start, mid, index, value)
        else:
            self.update(2*node+2, mid+1, end, index, value)
        self.tree[node] = self.tree[2*node+1] + self.tree[2*node+2]
    
    def query(self, node, start, end, l, r):
        if r < start or end < l:
            return 0
        if l <= start and end <= r:
            return self.tree[node]
        mid = (start + end) // 2
        left_sum = self.query(2*node+1, start, mid, l, r)
        right_sum = self.query(2*node+2, mid+1, end, l, r)
        return left_sum + right_sum
        `
      },
      {
        title: "Lazy Propagation Template",
        code: `
class LazySegmentTree:
    def __init__(self, arr):
        self.n = len(arr)
        self.tree = [0] * (4 * self.n)
        self.lazy = [0] * (4 * self.n)
        self.build(arr, 0, 0, self.n - 1)
    
    def build(self, arr, node, start, end):
        if start == end:
            self.tree[node] = arr[start]
            return
        mid = (start + end) // 2
        self.build(arr, 2*node+1, start, mid)
        self.build(arr, 2*node+2, mid+1, end)
        self.tree[node] = self.tree[2*node+1] + self.tree[2*node+2]
    
    def propagate(self, node, start, end):
        if self.lazy[node] != 0:
            self.tree[node] += (end - start + 1) * self.lazy[node]
            if start != end:
                self.lazy[2*node+1] += self.lazy[node]
                self.lazy[2*node+2] += self.lazy[node]
            self.lazy[node] = 0
    
    def update_range(self, node, start, end, l, r, value):
        self.propagate(node, start, end)
        if r < start or end < l:
            return
        if l <= start and end <= r:
            self.lazy[node] += value
            self.propagate(node, start, end)
            return
        mid = (start + end) // 2
        self.update_range(2*node+1, start, mid, l, r, value)
        self.update_range(2*node+2, mid+1, end, l, r, value)
        self.tree[node] = self.tree[2*node+1] + self.tree[2*node+2]
    
    def query_range(self, node, start, end, l, r):
        self.propagate(node, start, end)
        if r < start or end < l:
            return 0
        if l <= start and end <= r:
            return self.tree[node]
        mid = (start + end) // 2
        left_sum = self.query_range(2*node+1, start, mid, l, r)
        right_sum = self.query_range(2*node+2, mid+1, end, l, r)
        return left_sum + right_sum
        `
      }
    ],
    testingStrategy: [
      "Test with various array sizes and query types",
      "Include edge cases (single element, all same elements)",
      "Verify correctness of lazy propagation",
      "Test with large number of updates and queries",
      "Benchmark performance with different tree implementations"
    ],
    commonPitfalls: [
      "Off-by-one errors in range calculations",
      "Forgetting to propagate lazy values",
      "Integer overflow in large sum calculations",
      "Incorrect merging of node values for non-commutative operations",
      "Inefficient recursion leading to stack overflow for deep trees"
    ]
  }
}

