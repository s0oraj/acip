import { Pattern } from '@/types';
import { basicRangeQueryOperations } from './basic-range-query-operations';
import { frequencyBasedQueries } from './frequency-based-queries';
import { updateOperations } from './update-operations';
import { advancedRangeOperations } from './advanced-range-operations';
import { specialRangeOperations } from './special-range-operations';

export const mosAlgorithmPattern: Pattern = {
  id: 6,
  title: "MO's Algorithm Pattern",
  description: "Master offline query processing and range operations",
  subpatterns: [
    basicRangeQueryOperations,
    frequencyBasedQueries,
    updateOperations,
    advancedRangeOperations,
    specialRangeOperations
  ],
  summary: {
    progressionElements: [
      "Basic queries → Complex updates",
      "Single operation → Multiple operations",
      "Static arrays → Dynamic modifications",
      "Simple ranges → Advanced range operations"
    ],
    coreTechniques: [
      "Square root decomposition",
      "Query ordering",
      "Block updates",
      "Lazy propagation",
      "Range compression"
    ],
    implementationGuidelines: [
      {
        title: "Basic MO's Algorithm Template",
        code: `class MOQuery:
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
        return q1.right - q2.right`
      },
      {
        title: "Range Update Template",
        code: `class RangeUpdateSolver:
    def __init__(self, arr):
        self.arr = arr
        self.n = len(arr)
        self.block_size = int(math.sqrt(self.n))
        self.blocks = [0] * ((self.n + self.block_size - 1) // self.block_size)
        self.lazy = [0] * len(self.blocks)
        
    def update_range(self, left, right, val):
        left_block = left // self.block_size
        right_block = right // self.block_size
        
        if left_block == right_block:
            self.update_single_block(left, right, val)
        else:
            self.update_single_block(left, (left_block + 1) * self.block_size - 1, val)
            self.update_single_block(right_block * self.block_size, right, val)
            
            for block in range(left_block + 1, right_block):
                self.lazy[block] += val`
      }
    ],
    testingStrategy: [
      "Test query ordering",
      "Verify block size calculations",
      "Check update propagation",
      "Test range boundaries",
      "Validate query results"
    ]
  }
};

