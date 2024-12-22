import { Pattern } from '../types';

export const binaryIndexedTreePattern: Pattern = {
  id: 11,
  title: "Binary Indexed Tree (Fenwick Tree) Pattern",
  description: "Master the Binary Indexed Tree (Fenwick Tree) data structure for efficient prefix sum calculations, range queries, and updates in various problem scenarios.",
  questions: [
    {
      id: 1,
      title: "Range Sum Query - Mutable",
      difficulty: "medium",
      link: "https://leetcode.com/problems/range-sum-query-mutable/",
      description: "Implement efficient range sum queries with point updates using a Binary Indexed Tree",
      details: {
        keyDifference: "Efficient prefix sum structure",
        commonError: "Using 0-based indexing instead of 1-based",
        optimization: "Use delta encoding for range updates"
      }
    },
    {
      id: 2,
      title: "Number of Longest Increasing Subsequence",
      difficulty: "medium",
      link: "https://leetcode.com/problems/number-of-longest-increasing-subsequence/",
      description: "Count the number of longest increasing subsequences using BIT",
      details: {
        keyDifference: "Applying BIT to sequence problems",
        commonError: "Incorrect handling of equal-length LIS",
        optimization: "Combine with dynamic programming"
      }
    },
    {
      id: 3,
      title: "Count Inversions in an Array",
      difficulty: "hard",
      link: "https://www.geeksforgeeks.org/counting-inversions/",
      description: "Efficiently count the number of inversions in an array using BIT",
      details: {
        keyDifference: "Applying BIT to element ordering problems",
        commonError: "Incorrect order of updates and queries",
        optimization: "Use coordinate compression for large values"
      }
    },
    {
      id: 4,
      title: "Count of Smaller Numbers After Self",
      difficulty: "hard",
      link: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/",
      description: "Count smaller elements after each element in an array using BIT",
      details: {
        keyDifference: "Combining sorting with range counting",
        commonError: "Incorrect processing order",
        optimization: "Use value compression for large ranges"
      }
    },
    {
      id: 5,
      title: "Create Sorted Array through Instructions",
      difficulty: "hard",
      link: "https://leetcode.com/problems/create-sorted-array-through-instructions/",
      description: "Construct a sorted array efficiently using BIT",
      details: {
        keyDifference: "Efficiently maintaining sorted order during insertions",
        commonError: "Incorrect handling of duplicate elements",
        optimization: "Use coordinate compression for large value ranges"
      }
    },
    {
      id: 6,
      title: "Maximum Profitable Triplets",
      difficulty: "hard",
      link: "https://example.com/max-profitable-triplets",
      description: "Find maximum profitable triplets using BIT for range queries",
      details: {
        keyDifference: "Applying BIT to multi-element relationship problems",
        commonError: "Overlooking the order of element processing",
        optimization: "Use three separate BITs for efficient querying"
      }
    },
    {
      id: 7,
      title: "Count Good Triplets",
      difficulty: "easy",
      link: "https://leetcode.com/problems/count-good-triplets/",
      description: "Optimize triplet counting using BIT",
      details: {
        keyDifference: "Applying BIT to optimize brute force approaches",
        commonError: "Inefficient range checking",
        optimization: "Use multiple BITs for different conditions"
      }
    },
    {
      id: 8,
      title: "Range Frequency Queries",
      difficulty: "medium",
      link: "https://leetcode.com/problems/range-frequency-queries/",
      description: "Perform range frequency queries efficiently using BIT",
      details: {
        keyDifference: "Combining frequency counting with range queries",
        commonError: "Inefficient handling of multiple elements",
        optimization: "Use separate BITs for each unique element"
      }
    },
    {
      id: 9,
      title: "Range Sum Query 2D - Mutable",
      difficulty: "hard",
      link: "https://leetcode.com/problems/range-sum-query-2d-mutable/",
      description: "Implement 2D range sum queries with updates using BIT",
      details: {
        keyDifference: "Extending 1D BIT concept to 2D",
        commonError: "Incorrect update propagation in 2D",
        optimization: "Use row-wise BITs for better cache performance"
      }
    },
    {
      id: 10,
      title: "Rectangle Area Sum",
      difficulty: "hard",
      link: "https://example.com/rectangle-area-sum",
      description: "Calculate the sum of rectangular areas efficiently using 2D BIT",
      details: {
        keyDifference: "Efficient 2D range sum calculations",
        commonError: "Incorrect handling of overlapping areas",
        optimization: "Use difference array technique in 2D"
      }
    },
    {
      id: 11,
      title: "Count Number of Rectangles Containing Each Point",
      difficulty: "medium",
      link: "https://leetcode.com/problems/count-number-of-rectangles-containing-each-point/",
      description: "Count points in rectangles using 2D BIT",
      details: {
        keyDifference: "Applying 2D BIT to geometric problems",
        commonError: "Inefficient handling of multiple rectangles",
        optimization: "Use coordinate compression for large coordinate ranges"
      }
    },
    {
      id: 12,
      title: "Maximum Points in Rectangle",
      difficulty: "hard",
      link: "https://example.com/max-points-rectangle",
      description: "Find the maximum number of points in a rectangle using 2D BIT",
      details: {
        keyDifference: "Combining maximum queries with 2D BIT",
        commonError: "Incorrect update order for maximum maintenance",
        optimization: "Use a segment tree within each BIT node for range maximum"
      }
    },
    {
      id: 13,
      title: "Range Update Point Query using BIT",
      difficulty: "hard",
      link: "https://www.geeksforgeeks.org/range-update-point-query-using-bit/",
      description: "Implement range updates and point queries using BIT",
      details: {
        keyDifference: "Adapting BIT for range updates",
        commonError: "Incorrect handling of cumulative effects",
        optimization: "Use difference array technique with BIT"
      }
    },
    {
      id: 14,
      title: "Range Sum Query - Mutable (Revisited)",
      difficulty: "medium",
      link: "https://leetcode.com/problems/range-sum-query-mutable/",
      description: "Optimize point updates and range queries using BIT",
      details: {
        keyDifference: "Balancing update and query efficiency",
        commonError: "Inefficient handling of frequent updates",
        optimization: "Use lazy propagation techniques with BIT"
      }
    },
    {
      id: 15,
      title: "Range Update Range Query using BIT",
      difficulty: "hard",
      link: "https://www.geeksforgeeks.org/range-update-range-query-using-bit/",
      description: "Implement both range updates and range queries using BIT",
      details: {
        keyDifference: "Extending BIT for both range updates and queries",
        commonError: "Incorrect handling of nested updates",
        optimization: "Use two BITs for efficient range operations"
      }
    },
    {
      id: 16,
      title: "Dynamic Range Minimum Query",
      difficulty: "hard",
      link: "https://example.com/dynamic-range-min-query",
      description: "Perform dynamic range minimum queries using modified BIT",
      details: {
        keyDifference: "Adapting BIT for non-sum range problems",
        commonError: "Incorrect minimum propagation",
        optimization: "Combine BIT with sparse table for RMQ"
      }
    },
    {
      id: 17,
      title: "Sliding Window Median",
      difficulty: "hard",
      link: "https://leetcode.com/problems/sliding-window-median/",
      description: "Find median in sliding windows efficiently using BIT",
      details: {
        keyDifference: "Applying BIT to sliding window problems",
        commonError: "Inefficient window updates",
        optimization: "Use two BITs for lower and upper halves"
      }
    },
    {
      id: 18,
      title: "Count of Range Sum",
      difficulty: "hard",
      link: "https://leetcode.com/problems/count-of-range-sum/",
      description: "Count range sums using BIT and prefix sums",
      details: {
        keyDifference: "Combining prefix sums with BIT for complex counting",
        commonError: "Incorrect handling of cumulative sums",
        optimization: "Use coordinate compression for large sum ranges"
      }
    },
    {
      id: 19,
      title: "Maximum Sum Queries",
      difficulty: "hard",
      link: "https://leetcode.com/problems/maximum-sum-queries/",
      description: "Handle maximum sum queries efficiently using BIT",
      details: {
        keyDifference: "Adapting BIT for maximum sum problems",
        commonError: "Incorrect update order for maximum maintenance",
        optimization: "Combine BIT with segment tree for range maximum"
      }
    },
    {
      id: 20,
      title: "Optimal Range Modification",
      difficulty: "hard",
      link: "https://example.com/optimal-range-mod",
      description: "Find optimal modifications to satisfy range conditions using BIT",
      details: {
        keyDifference: "Applying BIT to optimization problems",
        commonError: "Incorrect handling of conflicting range conditions",
        optimization: "Use dynamic programming with BIT"
      }
    },
  ],
  summary: {
    progressionElements: [
      "Basic range sum queries → Complex range operations",
      "1D BITs → 2D BITs",
      "Point updates → Range updates",
      "Sum queries → Min/Max queries"
    ],
    coreTechniques: [
      "Lowbit operation for tree traversal",
      "Prefix sum calculations",
      "Difference array technique for range updates",
      "Coordinate compression for large ranges"
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
      }
    ],
    testingStrategy: [
      "Test with various array sizes and query types",
      "Check edge cases (empty array, single element, all same elements)",
      "Verify correct handling of updates and subsequent queries",
      "Test performance with large inputs and frequent updates",
      "Validate 2D BIT implementations"
    ]
  }
};

