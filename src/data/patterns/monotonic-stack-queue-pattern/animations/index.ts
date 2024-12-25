// src/data/patterns/monotonic-stack-queue-pattern/animations/index.ts
import NextGreaterVisualizer from './next-greater-problems-foundation-/visualizer';
import MonotonicWindowVisualizer from './monotonic-window-operations/visualizer';
import { nextGreaterAnimation } from './next-greater-problems-foundation-/data';
import { windowOperationsAnimation } from './monotonic-window-operations/data';

export const visualizers = {
  'next-greater-problems-foundation-': NextGreaterVisualizer,
  'monotonic-window-operations': MonotonicWindowVisualizer
};

export const monotonicQueueAnimations = {
  'next-greater-problems-foundation-': nextGreaterAnimation,
  'monotonic-window-operations': windowOperationsAnimation
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
