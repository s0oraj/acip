import { Pattern } from '@/types';
import { basicWindowOperations } from './basic-window-operations';
import { windowConstraints } from './window-constraints';
import { optimizationProblems } from './optimization-problems';
import { advancedApplications } from './advanced-applications';

export const monotonicQueuePattern: Pattern = {
  id: 2,
  title: "Monotonic Queue Pattern",
  description: "Master the monotonic queue pattern for efficient sliding window operations and range queries.",
  subpatterns: [
    basicWindowOperations,
    windowConstraints,
    optimizationProblems,
    advancedApplications
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

