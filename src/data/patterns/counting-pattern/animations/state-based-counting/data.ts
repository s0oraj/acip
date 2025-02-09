// data.ts
import { Animation } from '@/types';
import { ArrowUpCircle, Activity, GitMerge } from 'lucide-react';

export const patterns = {
  stateTransition: {
    data: "abcabc",
    target: "abc",
    icon: 'arrow-up-circle',
    title: "State Transition",
    desc: "Track single state changes",
    color: "#2563EB",
    leetcode: "2207"
  },
  multiState: {
    data: "croak",
    states: ['c', 'r', 'o', 'a', 'k'],
    icon: 'activity',
    title: "Multi-State",
    desc: "Track multiple state changes",
    color: "#7C3AED",
    leetcode: "1419"
  },
  patternState: {
    data: "abbcca",
    pattern: "abc",
    icon: 'git-merge',
    title: "Pattern State",
    desc: "Match complex patterns",
    color: "#059669",
    codeforces: "1722G"
  }
};

export const stateCounterAnimation: Animation = {
  id: "state-counter",
  title: "State-Based Counting Patterns",
  description: "Understanding state transitions and pattern matching",
  steps: [
    {
      title: "State Transition Counter",
      description: "Track character state changes",
      content: patterns.stateTransition.data,
      phases: Array.from(patterns.stateTransition.data).map((char, idx) => ({
        description: `Processing character: ${char}`,
        activeChar: char,
        position: idx,
        states: (() => {
          const states: Record<string, number> = {};
          patterns.stateTransition.data.slice(0, idx + 1).forEach(c => {
            states[c] = (states[c] || 0) + 1;
          });
          return states;
        })(),
        target: patterns.stateTransition.target
      }))
    },
    {
      title: "Multiple State Counter",
      description: "Track multiple state transitions",
      content: patterns.multiState.data,
      phases: Array.from(patterns.multiState.data).map((char, idx) => ({
        description: `Transitioning state: ${char}`,
        activeChar: char,
        position: idx,
        states: (() => {
          const states: Record<string, number> = {};
          patterns.multiState.states.forEach(s => states[s] = 0);
          patterns.multiState.data.slice(0, idx + 1).forEach(c => {
            states[c] = (states[c] || 0) + 1;
          });
          return states;
        })()
      }))
    }
  ]
};
