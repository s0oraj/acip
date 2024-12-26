import { Animation } from '@/types';
import { Cpu } from 'lucide-react';

export const patterns = {
  rangeMedianQuery: {
    data: [1, 3, 5, 2, 4, 6],
    icon: 'cpu',
    title: "Range Median Query",
    desc: "Order statistics with Mo's",
    color: "#4F46E5"
  },
  rangeModeWithDuplicates: {
    data: [1, 2, 2, 3, 3, 3, 4, 4],
    icon: 'cpu',
    title: "Range Mode with Duplicates",
    desc: "Frequency of frequencies",
    color: "#7C3AED"
  },
  rangeANDQuery: {
    data: [5, 2, 7, 3, 1, 6],
    icon: 'cpu',
    title: "Range AND Query",
    desc: "Bitwise AND",
    color: "#2563EB"
  },
  rangeORQuery: {
    data: [1, 3, 5, 7, 9, 11],
    icon: 'cpu',
    title: "Range OR Query",
    desc: "Bitwise OR",
    color: "#DB2777"
  }
};

export const specialRangeOperationsAnimation: Animation = {
  id: "special-range-operations",
  title: "Special Range Operations",
  description: "Unique range-based algorithms using Mo's Algorithm",
  steps: [
    {
      title: "Range Median Query",
      description: "Find the median of elements in a given range",
      array: patterns.rangeMedianQuery.data,
      blockSize: 2,
      phases: [
        { description: "Initialize", blocks: [[1, 3], [5, 2], [4, 6]] },
        { description: "Query: [0, 3]", median: 2 },
        { description: "Query: [1, 4]", median: 3 },
        { description: "Query: [2, 5]", median: 4 }
      ]
    }
  ]
};

