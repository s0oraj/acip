import { Pattern } from '@/types';
import { basicSegmentTree } from './basic-segment-tree';
import { lazyPropagation } from './lazy-propagation';
import { twoDimensionalSegmentTree } from './two-dimensional-segment-tree';
import { persistentSegmentTree } from './persistent-segment-tree';
import { advancedApplications } from './advanced-applications';

export const segmentTreePattern: Pattern = {
  id: 10,
  title: "Segment Tree Pattern",
  description: "Master the segment tree data structure for efficient range queries and updates in arrays.",
  subpatterns: [
    basicSegmentTree,
    lazyPropagation,
    twoDimensionalSegmentTree,
    persistentSegmentTree,
    advancedApplications
  ],
  questions: [], // All questions are now in subpatterns
  summary: {
    progressionElements: [
      "Basic range queries → Complex range operations",
      "Point updates → Range updates",
      "1D segment trees → 2D segment trees",
      "Static segment trees → Persistent segment trees"
    ],
    coreTechniques: [
      "Divide and conquer for tree construction",
      "Lazy propagation for efficient updates",
      "Space-time tradeoffs in tree representations",
      "Merge functions for different query types"
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

