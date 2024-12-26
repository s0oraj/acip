import { Animation } from '@/types';
import { Sigma } from 'lucide-react';

export const patterns = {
  numberOfDifferentIntegersInString: {
    data: "a123bc34d8ef34",
    icon: 'sigma',
    title: "Number of Different Integers in a String",
    desc: "Distinct counting with Mo's",
    color: "#4F46E5"
  },
  gcdOfArray: {
    data: [2, 4, 6, 8, 10],
    icon: 'sigma',
    title: "GCD of an Array",
    desc: "GCD computation",
    color: "#7C3AED"
  },
  productOfArrayExceptSelf: {
    data: [1, 2, 3, 4],
    icon: 'sigma',
    title: "Product of Array Except Self",
    desc: "Product with division handling",
    color: "#2563EB"
  },
  countNumberOfNiceSubarrays: {
    data: [1, 1, 2, 1, 1],
    icon: 'sigma',
    title: "Count Number of Nice Subarrays",
    desc: "Count tracking",
    color: "#DB2777"
  }
};

export const advancedRangeOperationsAnimation: Animation = {
  id: "advanced-range-operations",
  title: "Advanced Range Operations",
  description: "Complex range-based computations using Mo's Algorithm",
  steps: [
    {
      title: "GCD of an Array",
      description: "Calculate the GCD of elements in a given range",
      array: patterns.gcdOfArray.data,
      blockSize: 2,
      phases: [
        { description: "Initialize", blocks: [[2, 4], [6, 8], [10]] },
        { description: "Query: [0, 2]", gcd: 2 },
        { description: "Query: [1, 4]", gcd: 2 },
        { description: "Query: [2, 4]", gcd: 2 }
      ]
    }
  ]
};

