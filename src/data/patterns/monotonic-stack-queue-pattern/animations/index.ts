// src/data/patterns/monotonic-queue/animations/index.ts
import { nextGreaterAnimation } from './next-greater-problems-foundation-/data';
import NextGreaterVisualizer from './next-greater-problems-foundation-/visualizer';

export const visualizers = {
  'next-greater': NextGreaterVisualizer
};

export const monotonicQueueAnimations = {
  "next-greater": nextGreaterAnimation
};

// Placeholder animation for any unimplemented visualizations
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

// Use placeholder for any unimplemented animations
Object.keys(visualizers).forEach(key => {
  if (!monotonicQueueAnimations[key]) {
    monotonicQueueAnimations[key] = placeholderAnimation;
  }
});
