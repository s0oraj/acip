import { Pattern } from '../types'

export const monotonicQueuePattern: Pattern = {
  id: 2,
  title: "Monotonic Stack/Queue Pattern",
  description: "Master monotonic stack and queue techniques for efficient next greater element, sliding window, and advanced applications across multiple complexity levels",
  subpatterns: [
    {
      title: "Next Greater Problems (Foundation)",
      questions: [
        {
          id: 1,
          title: "Next Greater Element",
          difficulty: "easy",
          link: "https://leetcode.com/problems/next-greater-element-i/",
          description: "Base Pattern: Monotonic decreasing stack",
          details: {
            keyDifference: "while stack and stack[-1] < num: res[stack.pop()] = num - Basic next greater",
            commonError: "Missing elements handling",
            optimization: "Map for O(1) lookups"
          }
        },
        {
          id: 2,
          title: "Next Greater in Circular Array",
          difficulty: "medium",
          link: "https://leetcode.com/problems/next-greater-element-ii/",
          description: "Builds on #1: Basic next greater",
          details: {
            keyDifference: "i % n - Added circular array handling",
            commonError: "Double traversal missing",
            optimization: "Virtual array doubling"
          }
        },
        {
          id: 3,
          title: "Next Greater with Distance",
          difficulty: "medium",
          link: "https://leetcode.com/problems/daily-temperatures/",
          description: "Builds on #2: Circular handling",
          details: {
            keyDifference: "res[stack.pop()] = i - stack[-1] - Added distance tracking",
            commonError: "Distance calculation",
            optimization: "In-place modification"
          }
        },
        {
          id: 4,
          title: "Previous Greater Element",
          difficulty: "medium",
          link: "https://codeforces.com/problemset/problem/1766/C",
          description: "Builds on #3: Distance tracking",
          details: {
            keyDifference: "while stack and stack[-1] <= num - Changed direction",
            commonError: "Equal element handling",
            optimization: "Direction abstraction"
          }
        },
        {
          id: 5,
          title: "Next Greater with Constraints",
          difficulty: "medium",
          link: "https://leetcode.com/problems/next-greater-element-iii/",
          description: "Builds on #4: Directional search",
          details: {
            keyDifference: "if not valid(next): continue - Added constraint check",
            commonError: "Constraint validation",
            optimization: "Early termination"
          }
        }
      ]
    },
    {
      title: "Monotonic Window Operations",
      questions: [
        {
          id: 6,
          title: "Sliding Window Maximum",
          difficulty: "hard",
          link: "https://leetcode.com/problems/sliding-window-maximum/",
          description: "Base Pattern: Monotonic decreasing deque",
          details: {
            keyDifference: "while deque and nums[deque[-1]] < nums[i]: deque.pop() - Window max",
            commonError: "Window bounds",
            optimization: "Single pass"
          }
        },
        {
          id: 7,
          title: "Sliding Window Minimum",
          difficulty: "medium",
          link: "https://codeforces.com/problemset/problem/1428/C",
          description: "Builds on #6: Window maximum",
          details: {
            keyDifference: "while deque and nums[deque[-1]] > nums[i]: deque.pop() - Min tracking",
            commonError: "Sign flip issues",
            optimization: "Direction abstraction"
          }
        },
        {
          id: 8,
          title: "Fixed Window Average",
          difficulty: "easy",
          link: "https://leetcode.com/problems/moving-average-from-data-stream/",
          description: "Builds on #7: Window tracking",
          details: {
            keyDifference: "sum += num - (deque[0] if len(deque) == k else 0) - Added average",
            commonError: "Partial windows",
            optimization: "Running sum"
          }
        },
        {
          id: 9,
          title: "Window Difference Limit",
          difficulty: "medium",
          link: "https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/",
          description: "Builds on #8: Window stats",
          details: {
            keyDifference: "while max_d[0] - min_d[0] > limit - Added limit check",
            commonError: "Two deque sync",
            optimization: "Early bounds check"
          }
        },
        {
          id: 10,
          title: "Dynamic Window Sum",
          difficulty: "hard",
          link: "https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/",
          description: "Builds on #9: Window constraints",
          details: {
            keyDifference: "while sum[i] - sum[deque[0]] >= K - Added sum condition",
            commonError: "Negative sums",
            optimization: "Two-ended pruning"
          }
        }
      ]
    },
    {
      title: "Competition Stack Problems",
      questions: [
        {
          id: 11,
          title: "Most Competitive Subsequence",
          difficulty: "medium",
          link: "https://leetcode.com/problems/find-the-most-competitive-subsequence/",
          description: "Base Pattern: Monotonic with competition",
          details: {
            keyDifference: "while stack and len(stack) + rem > k and stack[-1] > num - Basic competition",
            commonError: "Remaining elements",
            optimization: "Early termination"
          }
        },
        {
          id: 12,
          title: "Remove K Digits",
          difficulty: "medium",
          link: "https://leetcode.com/problems/remove-k-digits/",
          description: "Builds on #11: Competition stack",
          details: {
            keyDifference: "while k > 0 and stack and stack[-1] > num - Added K limit",
            commonError: "Leading zeros",
            optimization: "Digit counting"
          }
        },
        {
          id: 13,
          title: "Maximum Width Ramp",
          difficulty: "medium",
          link: "https://leetcode.com/problems/maximum-width-ramp/",
          description: "Builds on #12: K-limited stack",
          details: {
            keyDifference: "while stack and nums[stack[-1]] <= nums[i] - Added width tracking",
            commonError: "Width calculation",
            optimization: "Binary search"
          }
        },
        {
          id: 14,
          title: "Minimum Cost Tree",
          difficulty: "medium",
          link: "https://codeforces.com/problemset/problem/1313/C",
          description: "Builds on #13: Width tracking",
          details: {
            keyDifference: "cost = min(stack[-1], nums[i]) - Added cost calculation",
            commonError: "Cost propagation",
            optimization: "DP combination"
          }
        },
        {
          id: 15,
          title: "Stock Span Problem",
          difficulty: "medium",
          link: "https://leetcode.com/problems/online-stock-span/",
          description: "Builds on #14: Cost tracking",
          details: {
            keyDifference: "span = i - prev_greater[i] - Added span calculation",
            commonError: "Consecutive counting",
            optimization: "Price-span pairs"
          }
        }
      ]
    },
    {
      title: "Advanced Applications",
      questions: [
        {
          id: 16,
          title: "Rectangle Histogram",
          difficulty: "hard",
          link: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
          description: "Base Pattern: Area calculation",
          details: {
            keyDifference: "area = height * (right - left - 1) - Basic area",
            commonError: "Boundary handling",
            optimization: "Sentinel values"
          }
        },
        {
          id: 17,
          title: "Maximum Binary Tree",
          difficulty: "medium",
          link: "https://leetcode.com/problems/maximum-binary-tree/",
          description: "Builds on #16: Area tracking",
          details: {
            keyDifference: "node.left = construct(left); node.right = construct(right) - Added tree build",
            commonError: "Range splitting",
            optimization: "Stack construction"
          }
        },
        {
          id: 18,
          title: "Sum of Subarray Minimums",
          difficulty: "medium",
          link: "https://leetcode.com/problems/sum-of-subarray-minimums/",
          description: "Builds on #17: Tree ranges",
          details: {
            keyDifference: "sum += val * left * right - Added contribution calc",
            commonError: "Contribution range",
            optimization: "MOD handling"
          }
        },
        {
          id: 19,
          title: "Maximum Score Good Array",
          difficulty: "hard",
          link: "https://leetcode.com/problems/maximum-score-of-a-good-array/",
          description: "Builds on #18: Range contribution",
          details: {
            keyDifference: "score = min(nums[left], nums[right]) * (right - left) - Added scoring",
            commonError: "Score boundaries",
            optimization: "Two pointer sweep"
          }
        },
        {
          id: 20,
          title: "Maximal Rectangle",
          difficulty: "hard",
          link: "https://leetcode.com/problems/maximal-rectangle/",
          description: "Builds on #19: Linear scoring",
          details: {
            keyDifference: "heights[j] = (heights[j] + 1 if matrix[i][j] == '1' else 0) - Added 2D handling",
            commonError: "Height reset",
            optimization: "Height caching"
          }
        }
      ]
    }
  ],
  summary: {
    progressionElements: [
      "Basic next greater → Complex window operations",
      "Single element tracking → Multiple element constraints",
      "Fixed window → Dynamic window with conditions",
      "1D problems → 2D extensions"
    ],
    coreTechniques: [
      "Monotonic stack/queue maintenance",
      "Two-pointer techniques",
      "Sliding window optimizations",
      "Dynamic programming with stack",
      "Area/volume calculations with stack"
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
      }
    ],
    testingStrategy: [
      "Test edge cases (empty input, single element)",
      "Test circular array scenarios",
      "Test with various window sizes and constraints",
      "Test performance with large inputs",
      "Test for correctness of monotonicity property"
    ],
    commonPitfalls: [
      "Forgetting to handle circular array cases",
      "Incorrect window bound management",
      "Mishandling of equal elements",
      "Inefficient implementations leading to TLE",
      "Overlooking edge cases in advanced applications"
    ]
  }
}

