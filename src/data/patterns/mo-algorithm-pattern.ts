import { Pattern } from '../types';

export const moAlgorithmPattern: Pattern = {
  id: 6,
  title: "MO's Algorithm Pattern",
  description: "Master MO's algorithm for efficient offline query processing and range-based problems.",
  questions: [
    {
      id: 1,
      title: "Range Sum Query - Mutable",
      difficulty: "medium",
      link: "https://leetcode.com/problems/range-sum-query-mutable/",
      description: "Base Pattern: Square root decomposition. Key Operation: blocks[block_id] += diff",
      details: {
        keyDifference: "Square root decomposition",
        commonError: "Block size calculation",
        optimization: "Lazy propagation"
      }
    },
    {
      id: 2,
      title: "XOR Queries of a Subarray",
      difficulty: "medium",
      link: "https://leetcode.com/problems/xor-queries-of-a-subarray/",
      description: "Builds on #1: XOR property usage. Key Difference: XOR instead of sum",
      details: {
        keyDifference: "XOR instead of sum",
        commonError: "Prefix XOR handling",
        optimization: "Pre-compute prefix XORs"
      }
    },
    {
      id: 3,
      title: "Range GCD Queries",
      difficulty: "hard",
      link: "https://practice.geeksforgeeks.org/problems/range-gcd-queries/1",
      description: "Builds on #2: GCD property",
      details: {
        keyDifference: "Segment merging logic",
        commonError: "Empty range GCD",
        optimization: "Sparse table possible"
      }
    },
    {
      id: 4,
      title: "Range LCM Queries",
      difficulty: "hard",
      link: "https://practice.geeksforgeeks.org/problems/range-lcm-queries/1",
      description: "Builds on #3: LCM computation",
      details: {
        keyDifference: "Overflow handling",
        commonError: "GCD-LCM relationship",
        optimization: "Prime factorization"
      }
    },
    {
      id: 5,
      title: "Number of Distinct Elements",
      difficulty: "medium",
      link: "https://leetcode.com/problems/count-number-of-distinct-integers-after-reverse-operations/",
      description: "Base Pattern: Window distinct counting",
      details: {
        keyDifference: "Window distinct counting",
        commonError: "Add/remove window updates",
        optimization: "Rolling hash"
      }
    },
    {
      id: 6,
      title: "Range Mode Query",
      difficulty: "medium",
      link: "https://practice.geeksforgeeks.org/problems/mode-in-range/1",
      description: "Builds on #5: Frequency tracking",
      details: {
        keyDifference: "Maximum frequency maintenance",
        commonError: "Multiple modes",
        optimization: "Frequency table reuse"
      }
    },
    {
      id: 7,
      title: "K-Frequent Elements Query",
      difficulty: "medium",
      link: "https://leetcode.com/problems/top-k-frequent-elements/",
      description: "Builds on #6: K-elements extension",
      details: {
        keyDifference: "Priority queue usage",
        commonError: "Frequency collisions",
        optimization: "Bucket sort approach"
      }
    },
    {
      id: 8,
      title: "Range Distinct Pairs",
      difficulty: "hard",
      link: "https://practice.geeksforgeeks.org/problems/count-distinct-pairs/1",
      description: "Builds on #7: Pair counting",
      details: {
        keyDifference: "Two-element combinations",
        commonError: "Double counting",
        optimization: "Hash table for pairs"
      }
    },
    {
      id: 9,
      title: "Range Product Updates",
      difficulty: "medium",
      link: "https://practice.geeksforgeeks.org/problems/product-array-puzzle4525/1",
      description: "Base Pattern: Range multiplication",
      details: {
        keyDifference: "Range multiplication",
        commonError: "Overflow in products",
        optimization: "Logarithmic space"
      }
    },
    {
      id: 10,
      title: "Range XOR Updates",
      difficulty: "medium",
      link: "https://practice.geeksforgeeks.org/problems/xor-operation/1",
      description: "Builds on #9: XOR update rules",
      details: {
        keyDifference: "XOR properties",
        commonError: "Multiple XOR applications",
        optimization: "Bit manipulation"
      }
    },
    {
      id: 11,
      title: "Range AND Updates",
      difficulty: "hard",
      link: "https://www.hackerearth.com/practice/data-structures/advanced-data-structures/segment-trees/practice-problems/algorithm/and-queries-3/",
      description: "Builds on #10: AND operation rules",
      details: {
        keyDifference: "Bit masking",
        commonError: "Lazy propagation",
        optimization: "Bit-level updates"
      }
    },
    {
      id: 12,
      title: "Range OR Updates",
      difficulty: "hard",
      link: "https://www.hackerearth.com/practice/data-structures/advanced-data-structures/segment-trees/practice-problems/algorithm/or-queries/",
      description: "Builds on #11: OR operation rules",
      details: {
        keyDifference: "Bit merging",
        commonError: "Update order",
        optimization: "Segment merging"
      }
    },
    {
      id: 13,
      title: "Count of Range Sum",
      difficulty: "hard",
      link: "https://leetcode.com/problems/count-of-range-sum/",
      description: "Base Pattern: Prefix sum ranges",
      details: {
        keyDifference: "Prefix sum ranges",
        commonError: "Overflow in sums",
        optimization: "Merge sort approach"
      }
    },
    {
      id: 14,
      title: "Range Sum Frequency",
      difficulty: "easy",
      link: "https://practice.geeksforgeeks.org/problems/frequency-of-array-elements-1587115620/1",
      description: "Builds on #13: Frequency counting",
      details: {
        keyDifference: "Range-based frequency",
        commonError: "Index mapping",
        optimization: "Block compression"
      }
    },
    {
      id: 15,
      title: "Range Product Count",
      difficulty: "hard",
      link: "https://www.hackerearth.com/practice/data-structures/advanced-data-structures/segment-trees/practice-problems/algorithm/product-in-range-7/",
      description: "Builds on #14: Product tracking",
      details: {
        keyDifference: "Modular arithmetic",
        commonError: "Zero handling",
        optimization: "Prime factorization"
      }
    },
    {
      id: 16,
      title: "Range GCD Count",
      difficulty: "hard",
      link: "https://practice.geeksforgeeks.org/problems/gcd-in-range/1",
      description: "Builds on #15: GCD frequency",
      details: {
        keyDifference: "Factor counting",
        commonError: "Prime factorization",
        optimization: "Sieve preprocessing"
      }
    },
    {
      id: 17,
      title: "Range Median Query",
      difficulty: "medium",
      link: "https://practice.geeksforgeeks.org/problems/find-the-median0527/1",
      description: "Base Pattern: Order statistics",
      details: {
        keyDifference: "Order statistics",
        commonError: "Partition strategy",
        optimization: "Weighted medians"
      }
    },
    {
      id: 18,
      title: "Range OR Queries",
      difficulty: "medium",
      link: "https://practice.geeksforgeeks.org/problems/range-or-queries/1",
      description: "Builds on #17: Bitwise operations",
      details: {
        keyDifference: "OR optimizations",
        commonError: "Bit propagation",
        optimization: "Bit parallelism"
      }
    },
    {
      id: 19,
      title: "Range AND Queries",
      difficulty: "medium",
      link: "https://practice.geeksforgeeks.org/problems/range-and-queries/1",
      description: "Builds on #18: AND properties",
      details: {
        keyDifference: "AND optimizations",
        commonError: "Neutral elements",
        optimization: "Sparse table"
      }
    },
    {
      id: 20,
      title: "Range LCM Count",
      difficulty: "hard",
      link: "https://practice.geeksforgeeks.org/problems/lcm-in-range/1",
      description: "Builds on #19: LCM properties",
      details: {
        keyDifference: "Prime power counting",
        commonError: "GCD relationship",
        optimization: "Factor memoization"
      }
    },
  ],
  summary: {
    progressionElements: [
      "Basic range queries → Complex range operations",
      "Single operation queries → Multi-operation updates",
      "Numeric operations → Bitwise manipulations",
      "Static arrays → Dynamic updates"
    ],
    coreTechniques: [
      "Square root decomposition",
      "Offline query processing",
      "Block-based updates",
      "Lazy propagation",
      "Bit manipulation for range operations"
    ],
    implementationGuidelines: [
      {
        title: "Basic MO's Algorithm Template",
        code: `
class MOQuery:
    def __init__(self, left, right, index):
        self.left = left
        self.right = right
        self.index = index

class MOSolver:
    def __init__(self, arr):
        self.arr = arr
        self.n = len(arr)
        self.block_size = int(math.sqrt(self.n))
        
    def compare_queries(self, q1, q2):
        if q1.left // self.block_size != q2.left // self.block_size:
            return q1.left // self.block_size - q2.left // self.block_size
        return q1.right - q2.right
        
    def process_queries(self, queries):
        # Sort queries by block and right endpoint
        queries.sort(key=functools.cmp_to_key(self.compare_queries))
        
        results = [0] * len(queries)
        curr_l, curr_r = 0, -1
        curr_answer = 0
        
        for q in queries:
            # Add/remove elements to match current query range
            while curr_l > q.left:
                curr_l -= 1
                self.add(curr_l)
            while curr_r < q.right:
                curr_r += 1
                self.add(curr_r)
            while curr_l < q.left:
                self.remove(curr_l)
                curr_l += 1
            while curr_r > q.right:
                self.remove(curr_r)
                curr_r -= 1
                
            results[q.index] = self.get_answer()
        
        return results
        `
      }
    ],
    testingStrategy: [
      "Test with various array sizes and query distributions",
      "Check edge cases (empty array, single element, all queries on same range)",
      "Verify correctness for different types of range operations",
      "Test performance with large inputs and many queries",
      "Validate handling of updates in dynamic scenarios"
    ]
  }
};

