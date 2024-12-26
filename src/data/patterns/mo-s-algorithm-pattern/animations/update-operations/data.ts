import { Animation } from '@/types';
import { RefreshCw } from 'lucide-react';

export const patterns = {
  rangeSumQuery2DMutable: {
    data: [[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]],
    icon: 'refresh-cw',
    title: "Range Sum Query 2D - Mutable",
    desc: "Mo's with updates",
    color: "#4F46E5"
  },
  numberOfSubmatricesThatSumToTarget: {
    data: [[0, 1, 0], [1, 1, 1], [0, 1, 0]],
    target: 2,
    icon: 'refresh-cw',
    title: "Number of Submatrices That Sum to Target",
    desc: "Value updates",
    color: "#7C3AED"
  },
  rangeXORQueries: {
    data: [1, 3, 4, 8],
    icon: 'refresh-cw',
    title: "Range XOR Queries",
    desc: "XOR updates",
    color: "#2563EB"
  },
  countDistinctElementsInRange: {
    data: [1, 2, 1, 3, 2, 3],
    icon: 'refresh-cw',
    title: "Count Distinct Elements in Range",
    desc: "Frequency updates",
    color: "#DB2777"
  }
};

export const updateOperationsAnimation: Animation = {
  id: "update-operations",
  title: "Update Operations",
  description: "Mo's Algorithm with update operations",
  steps: [
    {
      title: "Range Sum Query 2D - Mutable",
      description: "Calculate sum of elements in a 2D range with updates",
      matrix: patterns.rangeSumQuery2DMutable.data,
      blockSize: 2,
      phases: [
        { description: "Initialize", blocks: [[[3, 0], [1, 4]], [[5, 6], [3, 2]]] },
        { description: "Query: (0, 0) to (1, 1)", sum: 14 },
        { description: "Update: (1, 1) to 10", updatedMatrix: [[3, 0, 1, 4, 2], [5, 10, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]] },
        { description: "Query: (0, 0) to (1, 1)", sum: 18 }
      ]
    }
  ]
};

