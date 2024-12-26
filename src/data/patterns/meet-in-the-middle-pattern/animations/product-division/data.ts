import { Animation } from '@/types';
import { Divide } from 'lucide-react';

export const patterns = {
  numbersWithRepeatedDigits: {
    number: 1000,
    icon: 'divide',
    title: "Numbers With Repeated Digits",
    desc: "Digit state splitting",
    color: "#4F46E5"
  },
  findTheKSumOfAnArray: {
    data: [1, 2, 3, 4, 5],
    k: 3,
    icon: 'divide',
    title: "Find the K-Sum of an Array",
    desc: "K-selection tracking",
    color: "#7C3AED"
  },
  countArrayPairsDivisibleByK: {
    data: [1, 2, 3, 4, 5],
    k: 2,
    icon: 'divide',
    title: "Count Array Pairs Divisible by K",
    desc: "GCD properties",
    color: "#2563EB"
  },
  maximumXORWithAnElementFromArray: {
    data: [3, 10, 5, 25, 2, 8],
    queries: [[3, 17], [2, 6], [5, 20]],
    icon: 'divide',
    title: "Maximum XOR With an Element From Array",
    desc: "XOR optimization",
    color: "#DB2777"
  }
};

export const productDivisionAnimation: Animation = {
  id: "product-division",
  title: "Product Division",
  description: "Understand different variations of product division problems",
  steps: [
    {
      title: "Numbers With Repeated Digits",
      description: "Count numbers with repeated digits up to N",
      number: patterns.numbersWithRepeatedDigits.number,
      phases: [
        { description: "Initialize", count: 0 },
        { description: "Count numbers without repeated digits", nonRepeated: 738 },
        { description: "Calculate total numbers", total: 1000 },
        { description: "Find numbers with repeated digits", result: 262 }
      ]
    }
  ]
};


