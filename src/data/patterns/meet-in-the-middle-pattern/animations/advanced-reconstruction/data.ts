import { Animation } from '@/types';
import { Cpu } from 'lucide-react';

export const patterns = {
  minimizeXOR: {
    num1: 3,
    num2: 5,
    icon: 'cpu',
    title: "Minimize XOR",
    desc: "Bit manipulation",
    color: "#4F46E5"
  },
  maximumGeneticDifferenceQuery: {
    nodes: [2,3,4,5],
    parents: [1,1,2,2],
    queries: [[1,3],[2,3],[3,2]],
    icon: 'cpu',
    title: "Maximum Genetic Difference Query",
    desc: "Tree traversal",
    color: "#7C3AED"
  },
  findXORSumOfAllPairsBitwiseAND: {
    arr1: [1,2,3],
    arr2: [6,5],
    icon: 'cpu',
    title: "Find XOR Sum of All Pairs Bitwise AND",
    desc: "Pair operations",
    color: "#2563EB"
  },
  maximumANDSumOfArray: {
    nums: [1,2,3,4,5,6],
    numSlots: 3,
    icon: 'cpu',
    title: "Maximum AND Sum of Array",
    desc: "AND optimization",
    color: "#DB2777"
  }
};

export const advancedReconstructionAnimation: Animation = {
  id: "advanced-reconstruction",
  title: "Advanced Reconstruction",
  description: "Understand different variations of advanced reconstruction problems",
  steps: [
    {
      title: "Minimize XOR",
      description: "Find a number that minimizes XOR with given number",
      num1: patterns.minimizeXOR.num1,
      num2: patterns.minimizeXOR.num2,
      phases: [
        { description: "Convert to binary", bin1: "011", bin2: "101" },
        { description: "Compare bits", comparison: ["0", "1", "1"] },
        { description: "Minimize XOR", result: "001" },
        { description: "Convert back to decimal", finalResult: 1 }
      ]
    }
  ]
};


