// src/data/patterns/counting-pattern/animations/basic-counter/data.ts
import { Animation } from '@/types';
import { Hash, Filter, Layers } from 'lucide-react';

export const patterns = {
  basic: {
    data: [4, 2, 4, 1, 4, 3],
    icon: 'hash',
    title: "Basic Counter",
    desc: "Element Frequency",
    color: "#4F46E5"
  },
  conditional: {
    data: [2, 3, 2, 4, 5, 2, 4, 6],
    icon: 'filter',
    title: "Even Counter",
    desc: "Filtered Frequency",
    color: "#7C3AED"
  },
  multi: {
    data: ['AB', 'BC', 'AB', 'CD', 'AB'],
    icon: 'layers',
    title: "Multi-Value",
    desc: "Pattern Frequency",
    color: "#2563EB"
  }
};

export const basicCounterAnimation: Animation = {
  id: "basic-counter",
  title: "Basic Counter Operations",
  description: "Understanding different types of counting operations",
  steps: [
    {
      title: "Single Value Counter",
      description: "Count occurrences of each element in an array",
      array: patterns.basic.data,
      phases: patterns.basic.data.map((val, index) => ({
        description: index === 0 
          ? "Initialize empty counter" 
          : `Process element (${val})`,
        activeIndex: index,
        highlightIndices: [index],
        counter: patterns.basic.data
          .slice(0, index + 1)
          .reduce((acc, curr) => {
            acc[curr] = (acc[curr] || 0) + 1;
            return acc;
          }, {}),
        code: index === 0 
          ? "const counter = {};" 
          : `counter[${val}] = (counter[${val}] || 0) + 1;`
      }))
    }
  ],
  counters: []
};
