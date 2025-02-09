import { Animation } from '@/types';
import { GitBranch, GitMerge, Network } from 'lucide-react';

export const patterns = {
  stateTransition: {
    data: "abcabc",
    target: "abc",
    icon: 'git-branch',
    title: "State Transition",
    desc: "Track character state transitions",
    color: "#2563EB",
    leetcode: "2207"
  },
  multiState: {
    data: "croak",
    states: ['c', 'r', 'o', 'a', 'k'],
    icon: 'git-merge',
    title: "Multiple States",
    desc: "Track frog croaking states",
    color: "#7C3AED",
    leetcode: "1419"
  },
  patternState: {
    data: [1, 2, 4, 8, 16],
    icon: 'network',
    title: "Pattern States",
    desc: "Pattern formation states",
    color: "#059669",
    codeforces: "1722G"
  }
};

export const stateCountingAnimation: Animation = {
  id: "state-counting",
  title: "State-Based Counting Patterns",
  description: "Understanding state transitions and pattern formation",
  steps: [
    {
      title: "State Transition Counter",
      description: "Track character state transitions in a string",
      data: patterns.stateTransition.data,
      phases: Array.from(patterns.stateTransition.data).map((char, index) => ({
        description: `Processing character '${char}'`,
        activeIndex: index,
        highlightIndices: [index],
        states: {
          [char]: (patterns.stateTransition.data.slice(0, index + 1).match(new RegExp(char, 'g')) || []).length
        },
        code: `states['${char}'] += 1;`
      }))
    },
    {
      title: "Multiple State Counter",
      description: "Track multiple frog croaking states",
      data: patterns.multiState.data,
      phases: Array.from(patterns.multiState.data).map((char, index) => ({
        description: `Processing '${char}' in croaking sequence`,
        activeIndex: index,
        highlightIndices: [index],
        states: patterns.multiState.states.reduce((acc, state, i) => {
          acc[state] = patterns.multiState.data.slice(0, index + 1)
            .split('')
            .filter(c => c === state).length;
          return acc;
        }, {} as Record<string, number>),
        code: `states['${char}'] += 1;
if (isValidTransition('${char}')) {
  activeFrogs += 1;
}`
      }))
    }
  ]
};
