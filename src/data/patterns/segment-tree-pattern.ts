import { Pattern } from '../types';

export const segmentTreePattern: Pattern = {
  id: 10,
  title: "Segment Tree Pattern",
  description: "Master the segment tree data structure for efficient range queries and updates in arrays, essential for competitive programming and advanced algorithmic problems.",
  questions: [
    {
      id: 1,
      title: "Range Minimum Query",
      difficulty: "hard",
      link: "https://leetcode.com/problems/online-majority-element-in-subarray/",
      description: "Basic segment tree implementation for finding minimum in a range",
      details: {
        keyDifference: "Efficient range-based querying",
        commonError: "Incorrect range calculations",
        optimization: "Use lazy propagation for range updates"
      }
    },
    {
      id: 2,
      title: "Range Maximum Query",
      difficulty: "medium",
      link: "https://www.geeksforgeeks.org/segment-tree-set-1-range-minimum-query/",
      description: "Implement a segment tree for range maximum queries",
      details: {
        keyDifference: "Adapting minimum query logic to maximum",
        commonError: "Forgetting to update parent nodes",
        optimization: "Use a single array for tree representation"
      }
    },
    {
      id: 3,
      title: "Range Sum Query - Mutable",
      difficulty: "medium",
      link: "https://leetcode.com/problems/range-sum-query-mutable/",
      description: "Implement a data structure for efficient range sum queries with updates",
      details: {
        keyDifference: "Handling mutable array elements",
        commonError: "Inefficient update propagation",
        optimization: "Use lazy propagation for range updates"
      }
    },
    {
      id: 4,
      title: "Range Product Query",
      difficulty: "medium",
      link: "https://example.com/range-product-query",
      description: "Implement a segment tree for range product queries",
      details: {
        keyDifference: "Handling potential overflow issues",
        commonError: "Not considering modulo operations",
        optimization: "Use logarithms for large products"
      }
    },
    {
      id: 5,
      title: "Lazy Propagation in Segment Tree",
      difficulty: "hard",
      link: "https://www.geeksforgeeks.org/lazy-propagation-in-segment-tree/",
      description: "Implement lazy propagation in a segment tree for efficient range updates",
      details: {
        keyDifference: "Delayed update propagation",
        commonError: "Incorrect lazy value propagation",
        optimization: "Combine multiple lazy updates"
      }
    },
    {
      id: 6,
      title: "Range Addition",
      difficulty: "medium",
      link: "https://leetcode.com/problems/range-addition/",
      description: "Perform multiple range addition operations efficiently",
      details: {
        keyDifference: "Efficient handling of multiple updates",
        commonError: "Overlooking cumulative effects",
        optimization: "Use difference array technique"
      }
    },
    {
      id: 7,
      title: "Range Multiplication Query",
      difficulty: "hard",
      link: "https://example.com/range-multiplication-query",
      description: "Implement a segment tree for range multiplication queries with updates",
      details: {
        keyDifference: "Handling multiplicative updates",
        commonError: "Forgetting to reset lazy values",
        optimization: "Use logarithms for large multiplications"
      }
    },
    {
      id: 8,
      title: "XOR Queries of a Subarray",
      difficulty: "medium",
      link: "https://leetcode.com/problems/xor-queries-of-a-subarray/",
      description: "Perform XOR queries on subarrays efficiently",
      details: {
        keyDifference: "Applying XOR properties in segment tree",
        commonError: "Misunderstanding XOR associativity",
        optimization: "Use prefix XOR array for faster queries"
      }
    },
    {
      id: 9,
      title: "Count of Range Sum",
      difficulty: "hard",
      link: "https://leetcode.com/problems/count-of-range-sum/",
      description: "Count the number of range sums that lie in a given range",
      details: {
        keyDifference: "Combining counting with range queries",
        commonError: "Incorrect handling of prefix sums",
        optimization: "Use merge sort with segment tree"
      }
    },
    {
      id: 10,
      title: "Bitwise AND of Numbers Range",
      difficulty: "medium",
      link: "https://leetcode.com/problems/bitwise-and-of-numbers-range/",
      description: "Calculate the bitwise AND of all numbers in a range",
      details: {
        keyDifference: "Applying bitwise operations to ranges",
        commonError: "Not considering bit patterns",
        optimization: "Use bit manipulation techniques"
      }
    },
    {
      id: 11,
      title: "Range Frequency Queries",
      difficulty: "medium",
      link: "https://leetcode.com/problems/range-frequency-queries/",
      description: "Perform frequency queries on ranges of an array",
      details: {
        keyDifference: "Combining frequency counting with range queries",
        commonError: "Inefficient frequency tracking",
        optimization: "Use compressed segment tree"
      }
    },
    {
      id: 12,
      title: "Range Mode Query",
      difficulty: "hard",
      link: "https://example.com/range-mode-query",
      description: "Find the mode (most frequent element) in a given range",
      details: {
        keyDifference: "Efficient mode calculation in ranges",
        commonError: "Overlooking tie-breaking scenarios",
        optimization: "Use fractional cascading"
      }
    },
    {
      id: 13,
      title: "Range Sum Query 2D - Immutable",
      difficulty: "medium",
      link: "https://leetcode.com/problems/range-sum-query-2d-immutable/",
      description: "Perform 2D range sum queries efficiently",
      details: {
        keyDifference: "Extending 1D concept to 2D",
        commonError: "Incorrect 2D prefix sum calculation",
        optimization: "Use 2D prefix sum array"
      }
    },
    {
      id: 14,
      title: "2D Range Minimum Query",
      difficulty: "hard",
      link: "https://www.geeksforgeeks.org/two-dimensional-segment-tree-sub-matrix-sum/",
      description: "Implement a 2D segment tree for range minimum queries",
      details: {
        keyDifference: "Handling 2D range queries",
        commonError: "Complex update propagation in 2D",
        optimization: "Use sparse table for static 2D RMQ"
      }
    },
    {
      id: 15,
      title: "Matrix Block Sum",
      difficulty: "medium",
      link: "https://leetcode.com/problems/matrix-block-sum/",
      description: "Calculate block sums in a 2D matrix efficiently",
      details: {
        keyDifference: "Optimizing for fixed-size blocks",
        commonError: "Boundary condition handling",
        optimization: "Use 2D prefix sum array"
      }
    },
    {
      id: 16,
      title: "Rectangle Area Sum",
      difficulty: "hard",
      link: "https://example.com/rectangle-area-sum",
      description: "Calculate the sum of rectangular areas in a 2D grid efficiently",
      details: {
        keyDifference: "Efficient 2D range sum calculation",
        commonError: "Overlooking overlapping areas",
        optimization: "Use 2D Binary Indexed Tree"
      }
    },
    {
      id: 17,
      title: "Sliding Window Maximum",
      difficulty: "hard",
      link: "https://leetcode.com/problems/sliding-window-maximum/",
      description: "Find the maximum element in each sliding window of size k",
      details: {
        keyDifference: "Combining sliding window with range maximum",
        commonError: "Inefficient window updates",
        optimization: "Use deque with segment tree"
      }
    },
    {
      id: 18,
      title: "Count of Smaller Numbers After Self",
      difficulty: "hard",
      link: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/",
      description: "Count the number of smaller elements to the right of each element",
      details: {
        keyDifference: "Combining sorting with range counting",
        commonError: "Incorrect order of processing",
        optimization: "Use merge sort with segment tree"
      }
    },
    {
      id: 19,
      title: "Range Sum Query - Mutable (Revisited)",
      difficulty: "medium",
      link: "https://leetcode.com/problems/range-sum-query-mutable/",
      description: "Implement a data structure for range sum queries with element updates",
      details: {
        keyDifference: "Balancing update and query efficiency",
        commonError: "Inefficient update propagation",
        optimization: "Use square root decomposition"
      }
    },
    {
      id: 20,
      title: "Range Query with Multiple Operations",
      difficulty: "hard",
      link: "https://example.com/multi-op-range-query",
      description: "Perform multiple types of range operations efficiently using a single data structure",
      details: {
        keyDifference: "Handling diverse query types",
        commonError: "Inefficient operation combination",
        optimization: "Use persistent segment tree"
      }
    },
  ],
  summary: {
    progressionElements: [
      "Basic range queries → Complex range operations",
      "Static arrays → Dynamic updates",
      "1D segment trees → 2D segment trees",
      "Single operation trees → Multi-operation trees"
    ],
    coreTechniques: [
      "Divide and conquer for tree construction",
      "Lazy propagation for efficient updates",
      "Merge functions for different query types",
      "Space-time tradeoffs in tree representations"
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
      }
    ],
    testingStrategy: [
      "Test with various array sizes and query types",
      "Check edge cases (empty array, single element, all same elements)",
      "Verify correct handling of updates and subsequent queries",
      "Test performance with large inputs and frequent updates",
      "Validate lazy propagation implementation"
    ]
  }
};

