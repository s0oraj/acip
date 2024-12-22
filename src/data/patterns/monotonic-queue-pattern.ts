import { Pattern } from '../types';

export const monotonicQueuePattern: Pattern = {
  id: 2,
  title: "Monotonic Queue Pattern",
  description: "Master the monotonic queue pattern for efficient sliding window operations and range queries.",
  questions: [
    {
      id: 1,
      title: "Sliding Window Maximum",
      difficulty: "hard",
      link: "https://leetcode.com/problems/sliding-window-maximum/",
      description: "Base Pattern: Basic monotonic queue. Key Operation: while deque and nums[deque[-1]] < nums[i]: deque.pop()",
      details: {
        keyDifference: "Base Pattern: Basic monotonic queue",
        commonError: "Not removing out-of-window elements",
        optimization: "Single pass through array"
      }
    },
    {
      id: 2,
      title: "Maximum Window Average",
      difficulty: "easy",
      link: "https://leetcode.com/problems/maximum-average-subarray-i/",
      description: "Builds on #1: Changes to average calculation. Key Difference: Running sum maintenance",
      details: {
        keyDifference: "Running sum maintenance",
        commonError: "Float precision issues",
        optimization: "Avoid redundant calculations"
      }
    },
    {
      id: 3,
      title: "Window Maximum Product",
      difficulty: "easy",
      link: "https://leetcode.com/problems/maximum-product-of-three-numbers/",
      description: "Builds on #2: Handle negative numbers",
      details: {
        keyDifference: "Track both max and min deques",
        commonError: "Missing negative number cases",
        optimization: "Two-ended tracking"
      }
    },
    {
      id: 4,
      title: "Window Maximum GCD",
      difficulty: "medium",
      link: "https://practice.geeksforgeeks.org/problems/maximum-gcd-of-siblings-of-a-binary-tree/1",
      description: "Builds on #3: GCD property maintenance",
      details: {
        keyDifference: "GCD calculation in window",
        commonError: "Unnecessary GCD recalculations",
        optimization: "GCD property optimization"
      }
    },
    {
      id: 5,
      title: "K-Length Window Maximum Sum",
      difficulty: "medium",
      link: "https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/",
      description: "Builds on #4: Adds uniqueness constraint",
      details: {
        keyDifference: "Hash set for uniqueness",
        commonError: "Not maintaining unique set",
        optimization: "Sliding window with set"
      }
    },
    {
      id: 6,
      title: "Longest Continuous Subarray with Absolute Diff ≤ Limit",
      difficulty: "hard",
      link: "https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/",
      description: "Base window constraint pattern",
      details: {
        keyDifference: "Dual queue for min/max",
        commonError: "Wrong queue updates",
        optimization: "Early constraint check"
      }
    },
    {
      id: 7,
      title: "Maximum Subarray Length with Max-Min ≤ K",
      difficulty: "hard",
      link: "https://practice.geeksforgeeks.org/problems/maximum-subarray-size-with-difference/1",
      description: "Builds on #6: Different constraint type",
      details: {
        keyDifference: "Modified difference calculation",
        commonError: "Incorrect bound checking",
        optimization: "Binary search on answer"
      }
    },
    {
      id: 8,
      title: "Longest Nice Subarray with Range K",
      difficulty: "medium",
      link: "https://leetcode.com/problems/longest-nice-subarray/",
      description: "Builds on #7: Bitwise constraints",
      details: {
        keyDifference: "AND operation checking",
        commonError: "Missing bit positions",
        optimization: "Bit manipulation tricks"
      }
    },
    {
      id: 9,
      title: "Find Subarrays with Equal Elements",
      difficulty: "medium",
      link: "https://leetcode.com/problems/number-of-subarrays-having-even-product/",
      description: "Builds on #8: Equality constraints",
      details: {
        keyDifference: "Product property check",
        commonError: "Overflow in product",
        optimization: "Use parity instead of product"
      }
    },
    {
      id: 10,
      title: "Maximum Window Size with Single Unique Element",
      difficulty: "medium",
      link: "https://practice.geeksforgeeks.org/problems/length-of-the-longest-substring-with-distinct-characters/1",
      description: "Builds on #9: Uniqueness constraint",
      details: {
        keyDifference: "Set-based checking",
        commonError: "Set update timing",
        optimization: "Two-pointer technique"
      }
    },
    {
      id: 11,
      title: "Minimum Number of Coins for Fruits",
      difficulty: "hard",
      link: "https://leetcode.com/problems/minimum-number-of-coins-for-fruits/",
      description: "Base optimization pattern",
      details: {
        keyDifference: "Decreasing queue maintenance",
        commonError: "Wrong coin calculation",
        optimization: "Dynamic programming with queue"
      }
    },
    {
      id: 12,
      title: "Minimum Cost to Buy Sequential Items",
      difficulty: "medium",
      link: "https://practice.geeksforgeeks.org/problems/minimum-cost-of-buying-candies-with-discount/1",
      description: "Builds on #11: Sequential purchase",
      details: {
        keyDifference: "Discount rules",
        commonError: "Wrong order selection",
        optimization: "Greedy approach"
      }
    },
    {
      id: 13,
      title: "Optimal Purchase with Free Items",
      difficulty: "medium",
      link: "https://www.hackerrank.com/challenges/minimum-cost",
      description: "Builds on #12: Free item rules",
      details: {
        keyDifference: "Complex reward structure",
        commonError: "Missing free item combinations",
        optimization: "State compression"
      }
    },
    {
      id: 14,
      title: "Minimum Cost with Alternative Choices",
      difficulty: "hard",
      link: "https://practice.geeksforgeeks.org/problems/minimum-cost-path/1",
      description: "Builds on #13: Path choices",
      details: {
        keyDifference: "Multiple path options",
        commonError: "Suboptimal path selection",
        optimization: "Priority queue approach"
      }
    },
    {
      id: 15,
      title: "Sequential Purchase Optimization",
      difficulty: "hard",
      link: "https://www.hackerearth.com/practice/algorithms/greedy/basics-of-greedy-algorithms/practice-problems/algorithm/shopping-time-problem/",
      description: "Builds on #14: Complex rewards",
      details: {
        keyDifference: "Time constraints",
        commonError: "Invalid sequence selection",
        optimization: "State machine approach"
      }
    },
    {
      id: 16,
      title: "Maximum Rectangle in Histogram",
      difficulty: "hard",
      link: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
      description: "Base histogram pattern",
      details: {
        keyDifference: "Stack-based approach",
        commonError: "Missing edge rectangles",
        optimization: "Sentinel values"
      }
    },
    {
      id: 17,
      title: "Largest Rectangle with Height Limit",
      difficulty: "hard",
      link: "https://practice.geeksforgeeks.org/problems/maximum-rectangular-area-in-a-histogram-1587115620/1",
      description: "Builds on #16: Height constraints",
      details: {
        keyDifference: "Limited height expansion",
        commonError: "Constraint violations",
        optimization: "Early pruning"
      }
    },
    {
      id: 18,
      title: "Maximum Area Rectangle with Condition",
      difficulty: "hard",
      link: "https://www.hackerrank.com/challenges/largest-rectangle",
      description: "Builds on #17: Area conditions",
      details: {
        keyDifference: "Additional constraints",
        commonError: "Missing valid areas",
        optimization: "Two-ended scan"
      }
    },
    {
      id: 19,
      title: "Optimal Rectangle Selection",
      difficulty: "hard",
      link: "https://practice.geeksforgeeks.org/problems/maximum-size-rectangle/1",
      description: "Builds on #18: 2D extension",
      details: {
        keyDifference: "Matrix handling",
        commonError: "Row processing order",
        optimization: "Row-by-row histogram"
      }
    },
    {
      id: 20,
      title: "Maximum Volume Container",
      difficulty: "medium",
      link: "https://leetcode.com/problems/container-with-most-water/",
      description: "Builds on #19: Volume calculation",
      details: {
        keyDifference: "Two-pointer technique",
        commonError: "Wrong pointer movement",
        optimization: "Skip similar heights"
      }
    }
  ],
  summary: {
    progressionElements: [
      "Basic window operations → Window constraints",
      "Single element tracking → Multiple element tracking",
      "Fixed window size → Variable window size",
      "Simple constraints → Complex optimization problems"
    ],
    coreTechniques: [
      "Monotonic queue maintenance",
      "Two-pointer sliding window",
      "Deque for efficient operations",
      "Constraint checking and optimization",
      "Dynamic programming with queue"
    ],
    implementationGuidelines: [
      {
        title: "Basic Monotonic Queue Template",
        code: `
from collections import deque

class MonotonicQueue:
    def __init__(self):
        self.queue = deque()
    
    def push(self, x):
        while self.queue and self.queue[-1] < x:
            self.queue.pop()
        self.queue.append(x)
    
    def pop(self, x):
        if self.queue and self.queue[0] == x:
            self.queue.popleft()
    
    def max(self):
        return self.queue[0] if self.queue else None
        `
      },
      {
        title: "Sliding Window Maximum Template",
        code: `
from collections import deque

def maxSlidingWindow(nums, k):
    result = []
    window = deque()
    
    for i, num in enumerate(nums):
        while window and nums[window[-1]] < num:
            window.pop()
        window.append(i)
        
        if window[0] == i - k:
            window.popleft()
        
        if i >= k - 1:
            result.append(nums[window[0]])
    
    return result
        `
      }
    ],
    testingStrategy: [
      "Test edge cases (empty input, single element)",
      "Test various window sizes",
      "Test with different constraints and optimization criteria",
      "Test performance with large inputs",
      "Test for correctness of monotonicity property"
    ]
  }
};

