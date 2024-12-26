import { Animation } from '@/types';
import { Hash } from 'lucide-react';

export const patterns = {
  mostFrequentElementInRange: {
    data: [1, 2, 1, 3, 2, 1, 3, 1],
    icon: 'hash',
    title: "Most Frequent Element in Range",
    desc: "Frequency tracking with Mo's",
    color: "#4F46E5"
  },
  kMostFrequentInRange: {
    data: [1, 1, 2, 2, 3, 3, 4, 5],
    icon: 'hash',
    title: "K-Most Frequent in Range",
    desc: "Track top-K elements",
    color: "#7C3AED"
  },
  countPairsWithSumInRange: {
    data: [1, 3, 5, 7, 9],
    icon: 'hash',
    title: "Count Pairs with Sum in Range",
    desc: "Two-pointer with frequency",
    color: "#2563EB"
  },
  rangeModeQueryWithUpdates: {
    data: [1, 2, 2, 3, 3, 3],
    icon: 'hash',
    title: "Range Mode Query with Updates",
    desc: "Handle updates between queries",
    color: "#DB2777"
  }
};

export const frequencyBasedQueriesAnimation: Animation = {
  id: "frequency-based-queries",
  title: "Frequency-Based Queries",
  description: "Queries involving element frequencies using Mo's Algorithm",
  steps: [
    {
      title: "Most Frequent Element in Range",
      description: "Find the most frequent element in a given range",
      array: patterns.mostFrequentElementInRange.data,
      blockSize: 3,
      phases: [
        { description: "Initialize", blocks: [[1, 2, 1], [3, 2, 1], [3, 1]] },
        { description: "Query: [0, 4]", mostFrequent: 1, frequency: 2 },
        { description: "Query: [2, 7]", mostFrequent: 1, frequency: 3 },
        { description: "Query: [5, 7]", mostFrequent: 1, frequency: 2 }
      ]
    }
  ]
};

