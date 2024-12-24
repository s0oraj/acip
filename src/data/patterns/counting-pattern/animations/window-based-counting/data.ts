// src/data/patterns/counting-pattern/animations/window-based-counting/data.ts
import { Animation } from '@/types';

const windowPatterns = {
  'fixed': {
    title: "Fixed Window",
    data: [4, 2, 1, 7, 8, 3, 6, 5],
    windowSize: 3,
    threshold: 5,
    description: "Track sum in fixed-size window",
    getResult: (window: number[]) => window.reduce((a, b) => a + b, 0) / window.length
  },
  'distinct': {
    title: "Distinct Elements",
    data: [1, 2, 1, 3, 2, 3, 1, 2],
    windowSize: 3,
    description: "Count distinct elements in window",
    getResult: (window: number[]) => new Set(window).size
  },
  'divisible': {
    title: "K-Beauty",
    data: [2, 4, 0, 8, 6, 4],
    windowSize: 2,
    number: 240864,
    description: "Check divisibility in window",
    getResult: (window: number[]) => {
      const num = parseInt(window.join(''));
      return num > 0 && 240864 % num === 0 ? 1 : 0;
    }
  }
};

export const windowBasedCountingAnimation: Animation = {
  id: "window-based-counting",
  title: "Window-Based Counting Patterns",
  description: "Understanding different window-based counting techniques",
  steps: Object.entries(windowPatterns).map(([key, pattern]) => ({
    title: pattern.title,
    description: pattern.description,
    array: pattern.data,
    phases: Array.from({ length: pattern.data.length - pattern.windowSize + 1 }, (_, i) => {
      const window = pattern.data.slice(i, i + pattern.windowSize);
      return {
        description: `Window at position ${i}`,
        activeIndex: i,
        highlightIndices: Array.from({ length: pattern.windowSize }, (_, j) => i + j),
        result: pattern.getResult(window),
        window,
        code: `window = array.slice(${i}, ${i + pattern.windowSize})`
      };
    })
  })),
  counters: []
};
