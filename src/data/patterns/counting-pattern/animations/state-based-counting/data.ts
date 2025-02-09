import { Animation } from '@/types';

export const patterns = {
  stateTransition: {
    data: ['a', 'b', 'c', 'a', 'b', 'c'],
    icon: 'transition',
    title: "State Transition Counter",
    desc: "Track state transitions and count occurrences",
    color: "#4F46E5"
  },
  multipleState: {
    data: ['c', 'r', 'o', 'a', 'k', 'c', 'r', 'o', 'a', 'k'],
    icon: 'cycle',
    title: "Multiple State Counter",
    desc: "Track cyclic state transitions",
    color: "#7C3AED"
  },
  patternState: {
    data: ['x', 'y', 'z', 'x', 'y', 'z'],
    icon: 'pattern',
    title: "Pattern State Counter",
    desc: "Validate patterns using state transitions",
    color: "#2563EB"
  }
};

export const stateBasedCountingAnimation: Animation = {
  id: "state-based-counting",
  title: "State-Based Counting",
  description: "Track and count state transitions in sequences",
  steps: [
    {
      title: "State Transition Counter",
      description: "Count state transitions in a sequence",
      array: patterns.stateTransition.data,
      phases: patterns.stateTransition.data.map((val, index) => ({
        description: index === 0 
          ? "Initialize state counter" 
          : `Process '${val}' and update state`,
        activeIndex: index,
        highlightIndices: [index],
        counter: patterns.stateTransition.data
          .slice(0, index + 1)
          .reduce((acc, curr) => {
            acc[curr] = (acc[curr] || 0) + 1;
            return acc;
          }, {}),
        code: index === 0 
          ? "const stateCounter = {};" 
          : `stateCounter['${val}']++;`
      }))
    },
    {
      title: "Multiple State Counter",
      description: "Track cyclic state transitions",
      array: patterns.multipleState.data,
      phases: patterns.multipleState.data.map((val, index) => ({
        description: index === 0 
          ? "Initialize cyclic state counter" 
          : `Process '${val}' and update cyclic state`,
        activeIndex: index,
        highlightIndices: [index],
        counter: patterns.multipleState.data
          .slice(0, index + 1)
          .reduce((acc, curr) => {
            acc[curr] = (acc[curr] || 0) + 1;
            return acc;
          }, {}),
        code: index === 0 
          ? "const cyclicStateCounter = {};" 
          : `cyclicStateCounter['${val}']++;`
      }))
    },
    {
      title: "Pattern State Counter",
      description: "Validate patterns using state transitions",
      array: patterns.patternState.data,
      phases: patterns.patternState.data.map((val, index) => ({
        description: index === 0 
          ? "Initialize pattern state counter" 
          : `Process '${val}' and validate pattern`,
        activeIndex: index,
        highlightIndices: [index],
        counter: patterns.patternState.data
          .slice(0, index + 1)
          .reduce((acc, curr) => {
            acc[curr] = (acc[curr] || 0) + 1;
            return acc;
          }, {}),
        code: index === 0 
          ? "const patternStateCounter = {};" 
          : `patternStateCounter['${val}']++;`
      }))
    }
  ],
  counters: []
};
