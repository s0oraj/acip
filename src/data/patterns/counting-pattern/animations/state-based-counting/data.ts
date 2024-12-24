// src/data/patterns/counting-pattern/animations/state-based-counting/data.ts
import { Animation } from '@/types';

const statePatterns = {
  'basic': {
    title: "State Transition",
    input: "babab",
    target: "ab",
    description: "Count subsequence occurrences",
    states: ['a', 'b'],
    getNextState: (char: string, currentState: string) => {
      if (currentState === 'a' && char === 'b') return 'b';
      if (currentState === '' && char === 'a') return 'a';
      return currentState;
    }
  },
  'multi': {
    title: "Multi-State",
    input: "croak",
    states: ['c', 'r', 'o', 'a', 'k'],
    description: "Track frog croaking states",
    getNextState: (char: string, currentState: string) => {
      const stateOrder = "croak";
      const currIdx = stateOrder.indexOf(currentState);
      return char === stateOrder[(currIdx + 1) % 5] ? char : currentState;
    }
  },
  'pattern': {
    title: "Pattern States",
    input: "ABAABA",
    states: ['A', 'B'],
    pattern: "AB",
    description: "Match state patterns",
    getNextState: (char: string, currentState: string) => {
      if (currentState === 'A' && char === 'B') return 'B';
      if (char === 'A') return 'A';
      return '';
    }
  }
};

export const stateBasedCountingAnimation: Animation = {
  id: "state-based-counting",
  title: "State-Based Counting Patterns",
  description: "Understanding state transition counting techniques",
  steps: Object.entries(statePatterns).map(([key, pattern]) => ({
    title: pattern.title,
    description: pattern.description,
    array: pattern.input.split(''),
    phases: pattern.input.split('').map((char, idx) => {
      const state = pattern.states.reduce((acc, s) => ({
        ...acc,
        [s]: pattern.input.slice(0, idx + 1).filter(c => c === s).length
      }), {});
      return {
        description: `Processing '${char}'`,
        activeIndex: idx,
        highlightIndices: [idx],
        state,
        character: char
      };
    })
  })),
  counters: []
};
