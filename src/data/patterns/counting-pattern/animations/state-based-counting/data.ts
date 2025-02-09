// data.ts
import { Animation } from '@/types';
import { GitBranch, Boxes, GitMerge } from 'lucide-react';

export const patterns = {
  transition: {
    data: 'pattern',
    icon: 'git-branch',
    title: "State Transition",
    desc: "Track single state changes",
    color: "#2563EB",
    states: { p: 0, a: 0, t: 0, r: 0, n: 0 }
  },
  multiple: {
    data: 'croak',
    icon: 'boxes',
    title: "Multiple States",
    desc: "Track multiple state changes",
    color: "#7C3AED",
    states: { c: 0, r: 0, o: 0, a: 0, k: 0 }
  },
  pattern: {
    data: 'abbacc',
    icon: 'git-merge',
    title: "Pattern States",
    desc: "Track pattern formations",
    color: "#059669",
    states: { balanced: 0, unbalanced: 0 }
  }
};

const updateStates = (pattern: string, char: string, states: Record<string, number>) => {
  const newStates = { ...states };
  
  switch (pattern) {
    case 'transition':
      newStates[char] = (newStates[char] || 0) + 1;
      break;
      
    case 'multiple':
      const order = 'croak';
      const prevCharIdx = (order.indexOf(char) - 1 + 5) % 5;
      const prevChar = order[prevCharIdx];
      
      if (order.includes(char)) {
        if (char === 'c' || newStates[prevChar] > 0) {
          newStates[char]++;
          if (prevChar !== 'k') newStates[prevChar]--;
        }
      }
      break;
      
    case 'pattern':
      const chars = Object.keys(newStates).filter(k => k !== 'balanced' && k !== 'unbalanced');
      const isBalanced = chars.every(c => 
        chars.filter(x => x === c).length % 2 === 0
      );
      newStates.balanced = isBalanced ? 1 : 0;
      newStates.unbalanced = isBalanced ? 0 : 1;
      break;
  }
  
  return newStates;
};

export const stateCountingAnimation: Animation = {
  id: "state-counting",
  title: "State-Based Counting Operations",
  description: "Exploring state transitions and pattern matching",
  steps: [
    {
      title: "State Transition Counter",
      description: "Track state changes in sequence",
      array: patterns.transition.data.split(''),
      phases: patterns.transition.data.split('').map((char, index) => ({
        description: index === 0 
          ? "Initialize state counter" 
          : `Process state for '${char}'`,
        activeIndex: index,
        highlightIndices: [index],
        states: patterns.transition.data
          .slice(0, index + 1)
          .split('')
          .reduce((acc, curr) => updateStates('transition', curr, acc), 
            { ...patterns.transition.states }),
        code: index === 0 
          ? "const states = {};" 
          : `states['${char}']++;`
      }))
    },
    {
      title: "Multiple State Counter",
      description: "Track multiple concurrent states",
      array: patterns.multiple.data.split(''),
      phases: patterns.multiple.data.split('').map((char, index) => ({
        description: index === 0 
          ? "Initialize multiple state tracking" 
          : `Update state for '${char}'`,
        activeIndex: index,
        highlightIndices: [index],
        states: patterns.multiple.data
          .slice(0, index + 1)
          .split('')
          .reduce((acc, curr) => updateStates('multiple', curr, acc), 
            { ...patterns.multiple.states }),
        code: index === 0 
          ? "const states = { c: 0, r: 0, o: 0, a: 0, k: 0 };" 
          : `processState('${char}');`
      }))
    }
  ]
};

