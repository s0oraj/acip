// data.ts
import { Animation } from '@/types';

export const patterns = {
  stateTransition: {
    data: "croak",
    target: "croak",
    title: "State Transition Counter",
    desc: "Track state transitions and count occurrences",
    leetcode: "2207",
    color: "#4F46E5"
  },
  multipleState: {
    data: "croakcroak",
    target: "croak",
    title: "Multiple State Counter",
    desc: "Track cyclic state transitions",
    leetcode: "1419",
    color: "#7C3AED"
  },
  patternState: {
    data: "xyzxyz",
    target: "xyz",
    title: "Pattern State Counter",
    desc: "Validate patterns using state transitions",
    codeforces: "1722G",
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
      phases: Array.from(patterns.stateTransition.data).map((val, index) => ({
        description: index === 0 
          ? "Initialize state counter" 
          : `Process '${val}' and update state`,
        activeIndex: index,
        highlightIndices: [index],
        counter: Array.from(patterns.stateTransition.data)
          .slice(0, index + 1)
          .reduce((acc, curr) => {
            acc[curr] = (acc[curr] || 0) + 1;
            return acc;
          }, {} as Record<string, number>),
        code: index === 0 
          ? "const stateCounter = {};" 
          : `stateCounter['${val}']++;`
      }))
    }
  ]
};
