// src/data/patterns/monotonic-stack-queue-pattern/animations/index.ts
import { nextGreaterAnimation } from './next-greater-problems-foundation-/data';
import { NextGreaterVisualizer } from './next-greater-problems-foundation-/visualizer';

export const visualizers = {
  'next-greater-problems-foundation': NextGreaterVisualizer // Remove trailing dash
};

export const monotonicQueueAnimations = {
  'next-greater-problems-foundation': nextGreaterAnimation // Remove trailing dash
};

const placeholderAnimation = {
  id: "placeholder",
  title: "Coming Soon",
  description: "This animation is under development",
  steps: [{
    title: "Under Development",
    description: "Animation coming soon",
    array: [],
    phases: [{
      description: "Animation under development",
      activeIndex: -1,
      highlightIndices: [],
      counter: {},
      code: "// TODO: Implementation coming soon"
    }]
  }],
  counters: []
};

Object.keys(visualizers).forEach(key => {
  if (!monotonicQueueAnimations[key]) {
    monotonicQueueAnimations[key] = placeholderAnimation;
  }
});
