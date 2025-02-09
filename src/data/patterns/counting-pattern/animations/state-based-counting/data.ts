import type { Animation } from "@/types"

export const patterns = {
  stateTransition: {
    data: "abcabc",
    target: "abc",
    icon: "git-branch",
    title: "State Transition",
    desc: "Track character state transitions",
    color: "#2563EB",
    leetcode: "2207",
  },
  multiState: {
    data: "croak",
    states: ["c", "r", "o", "a", "k"],
    icon: "git-merge",
    title: "Multiple States",
    desc: "Track frog croaking states",
    color: "#7C3AED",
    leetcode: "1419",
  },
  patternState: {
    data: [1, 2, 4, 8, 16],
    icon: "hash",
    title: "Pattern States",
    desc: "Pattern formation states",
    color: "#059669",
    codeforces: "1722G",
  },
}

const getStateCount = (str: string, char: string, upTo: number): number => {
  return str
    .slice(0, upTo + 1)
    .split("")
    .filter((c) => c === char).length
}

export const stateCountingAnimation: Animation = {
  id: "state-counting",
  title: "State-Based Counting",
  description: "Understanding state transitions and pattern formation",
  steps: [
    {
      title: "State Transition Counter",
      description: "LeetCode 2207: Maximize Number of Subsequences",
      array: Array.from(patterns.stateTransition.data),
      phases: Array.from(patterns.stateTransition.data).map((char, index) => ({
        description: `Processing '${char}'`,
        activeIndex: index,
        highlightIndices: [index],
        counter: {
          states: Array.from(patterns.stateTransition.target).reduce(
            (acc, c) => ({
              ...acc,
              [c]: getStateCount(patterns.stateTransition.data, c, index),
            }),
            {},
          ),
        },
        code: `states['${char}'] += 1;`,
      })),
    },
    {
      title: "Multiple State Counter",
      description: "LeetCode 1419: Minimum Number of Frogs Croaking",
      array: Array.from(patterns.multiState.data),
      phases: Array.from(patterns.multiState.data).map((char, index) => ({
        description: `Processing '${char}' in sequence`,
        activeIndex: index,
        highlightIndices: [index],
        counter: {
          states: patterns.multiState.states.reduce(
            (acc, state) => ({
              ...acc,
              [state]: getStateCount(patterns.multiState.data, state, index),
            }),
            {},
          ),
        },
        code: `states['${char}'] += 1;
if (isValidTransition('${char}')) {
  activeFrogs += 1;
}`,
      })),
    },
  ],
}

