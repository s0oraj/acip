// src/data/patterns/counting-pattern/animations/frequency-distribution/data.ts
import { Animation } from '@/types';

const conceptData = {
  'basic-freq': {
    data: [1, 2, 2, 3, 3, 3],
    title: "Frequency Map",
    description: "Basic frequency counting using hashmap"
  },
  'freq-of-freq': {
    data: [1, 1, 2, 2, 3, 3, 3],
    title: "Meta Frequency",
    description: "Tracking frequency of frequencies"
  },
  'group-freq': {
    data: [1, 1, 2, 2, 2, 3, 3],
    title: "Group Frequency",
    description: "Grouping elements by frequency"
  }
};

export const frequencyDistributionAnimation: Animation = {
  id: "frequency-distribution",
  title: "Frequency Distribution Patterns",
  description: "Understanding different types of frequency counting patterns",
  steps: Object.entries(conceptData).map(([key, pattern]) => ({
    title: pattern.title,
    description: pattern.description,
    array: pattern.data,
    phases: pattern.data.map((val, index) => ({
      description: index === 0 
        ? "Initialize empty frequency map" 
        : `Process element (${val})`,
      activeIndex: index,
      highlightIndices: [index],
      counter: pattern.data
        .slice(0, index + 1)
        .reduce((acc, curr) => {
          acc[curr] = (acc[curr] || 0) + 1;
          return acc;
        }, {}),
      code: index === 0 
        ? "const freq = {};" 
        : `freq[${val}] = (freq[${val}] || 0) + 1;`
    }))
  })),
  counters: []
};
