import { Pattern } from '@/types';
import { basicBinaryIndexedTree } from './basic-binary-indexed-tree';
import { rangeUpdateQueries } from './range-update-queries';
import { twoDimensionalBIT } from './two-dimensional-bit';
import { inversionsAndRankQueries } from './inversions-and-rank-queries';
import { advancedApplications } from './advanced-applications';

export const binaryIndexedTreePattern: Pattern = {
  id: 11,
  title: "Binary Indexed Tree (Fenwick Tree) Pattern",
  description: "Master the Binary Indexed Tree data structure for efficient prefix sum calculations and range queries.",
  subpatterns: [
    basicBinaryIndexedTree,
    rangeUpdateQueries,
    twoDimensionalBIT,
    inversionsAndRankQueries,
    advancedApplications
  ],
  questions: [], // All questions are now in subpatterns
  summary: {
    progressionElements: [
      "Basic prefix sums → Range update operations",
      "1D BITs → 2D BITs",
      "Point updates → Range updates",
      "Sum queries → Min/Max queries"
    ],
    coreTechniques: [
      "Lowbit operation for tree traversal",
      "Difference array technique for range updates",
      "Coordinate compression for large ranges",
      "BIT with binary lifting for range minimum queries"
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

